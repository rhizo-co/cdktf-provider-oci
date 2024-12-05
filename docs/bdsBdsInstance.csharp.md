# `bdsBdsInstance` Submodule <a name="`bdsBdsInstance` Submodule" id="rhizo-co-terraform-provider-oci.bdsBdsInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BdsBdsInstance <a name="BdsBdsInstance" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance oci_bds_bds_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstance(Construct Scope, string Id, BdsBdsInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig">BdsBdsInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig">BdsBdsInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putCloudSqlDetails">PutCloudSqlDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putComputeOnlyWorkerNode">PutComputeOnlyWorkerNode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putEdgeNode">PutEdgeNode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putKafkaBrokerNode">PutKafkaBrokerNode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putMasterNode">PutMasterNode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putNetworkConfig">PutNetworkConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putUtilNode">PutUtilNode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putWorkerNode">PutWorkerNode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetBootstrapScriptUrl">ResetBootstrapScriptUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetCloudSqlDetails">ResetCloudSqlDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetClusterProfile">ResetClusterProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetComputeOnlyWorkerNode">ResetComputeOnlyWorkerNode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetEdgeNode">ResetEdgeNode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetIgnoreExistingNodesShape">ResetIgnoreExistingNodesShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetIsCloudSqlConfigured">ResetIsCloudSqlConfigured</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetIsForceStopJobs">ResetIsForceStopJobs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetIsKafkaConfigured">ResetIsKafkaConfigured</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetKafkaBrokerNode">ResetKafkaBrokerNode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetKerberosRealmName">ResetKerberosRealmName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetNetworkConfig">ResetNetworkConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetOsPatchVersion">ResetOsPatchVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCloudSqlDetails` <a name="PutCloudSqlDetails" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putCloudSqlDetails"></a>

```csharp
private void PutCloudSqlDetails(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putCloudSqlDetails.parameter.value"></a>

- *Type:* object

---

##### `PutComputeOnlyWorkerNode` <a name="PutComputeOnlyWorkerNode" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putComputeOnlyWorkerNode"></a>

```csharp
private void PutComputeOnlyWorkerNode(BdsBdsInstanceComputeOnlyWorkerNode Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putComputeOnlyWorkerNode.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode">BdsBdsInstanceComputeOnlyWorkerNode</a>

---

##### `PutEdgeNode` <a name="PutEdgeNode" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putEdgeNode"></a>

```csharp
private void PutEdgeNode(BdsBdsInstanceEdgeNode Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putEdgeNode.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode">BdsBdsInstanceEdgeNode</a>

---

##### `PutKafkaBrokerNode` <a name="PutKafkaBrokerNode" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putKafkaBrokerNode"></a>

```csharp
private void PutKafkaBrokerNode(BdsBdsInstanceKafkaBrokerNode Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putKafkaBrokerNode.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode">BdsBdsInstanceKafkaBrokerNode</a>

---

##### `PutMasterNode` <a name="PutMasterNode" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putMasterNode"></a>

```csharp
private void PutMasterNode(BdsBdsInstanceMasterNode Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putMasterNode.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode">BdsBdsInstanceMasterNode</a>

---

##### `PutNetworkConfig` <a name="PutNetworkConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putNetworkConfig"></a>

```csharp
private void PutNetworkConfig(BdsBdsInstanceNetworkConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfig">BdsBdsInstanceNetworkConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putTimeouts"></a>

```csharp
private void PutTimeouts(BdsBdsInstanceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeouts">BdsBdsInstanceTimeouts</a>

---

##### `PutUtilNode` <a name="PutUtilNode" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putUtilNode"></a>

```csharp
private void PutUtilNode(BdsBdsInstanceUtilNode Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putUtilNode.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode">BdsBdsInstanceUtilNode</a>

---

##### `PutWorkerNode` <a name="PutWorkerNode" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putWorkerNode"></a>

```csharp
private void PutWorkerNode(BdsBdsInstanceWorkerNode Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putWorkerNode.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode">BdsBdsInstanceWorkerNode</a>

---

##### `ResetBootstrapScriptUrl` <a name="ResetBootstrapScriptUrl" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetBootstrapScriptUrl"></a>

```csharp
private void ResetBootstrapScriptUrl()
```

##### `ResetCloudSqlDetails` <a name="ResetCloudSqlDetails" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetCloudSqlDetails"></a>

```csharp
private void ResetCloudSqlDetails()
```

##### `ResetClusterProfile` <a name="ResetClusterProfile" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetClusterProfile"></a>

```csharp
private void ResetClusterProfile()
```

##### `ResetComputeOnlyWorkerNode` <a name="ResetComputeOnlyWorkerNode" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetComputeOnlyWorkerNode"></a>

```csharp
private void ResetComputeOnlyWorkerNode()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetEdgeNode` <a name="ResetEdgeNode" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetEdgeNode"></a>

```csharp
private void ResetEdgeNode()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIgnoreExistingNodesShape` <a name="ResetIgnoreExistingNodesShape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetIgnoreExistingNodesShape"></a>

```csharp
private void ResetIgnoreExistingNodesShape()
```

##### `ResetIsCloudSqlConfigured` <a name="ResetIsCloudSqlConfigured" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetIsCloudSqlConfigured"></a>

```csharp
private void ResetIsCloudSqlConfigured()
```

##### `ResetIsForceStopJobs` <a name="ResetIsForceStopJobs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetIsForceStopJobs"></a>

```csharp
private void ResetIsForceStopJobs()
```

##### `ResetIsKafkaConfigured` <a name="ResetIsKafkaConfigured" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetIsKafkaConfigured"></a>

```csharp
private void ResetIsKafkaConfigured()
```

##### `ResetKafkaBrokerNode` <a name="ResetKafkaBrokerNode" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetKafkaBrokerNode"></a>

```csharp
private void ResetKafkaBrokerNode()
```

##### `ResetKerberosRealmName` <a name="ResetKerberosRealmName" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetKerberosRealmName"></a>

```csharp
private void ResetKerberosRealmName()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetNetworkConfig` <a name="ResetNetworkConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetNetworkConfig"></a>

```csharp
private void ResetNetworkConfig()
```

##### `ResetOsPatchVersion` <a name="ResetOsPatchVersion" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetOsPatchVersion"></a>

```csharp
private void ResetOsPatchVersion()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BdsBdsInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

BdsBdsInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

BdsBdsInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

BdsBdsInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

BdsBdsInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BdsBdsInstance resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BdsBdsInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BdsBdsInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BdsBdsInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.cloudSqlDetails">CloudSqlDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList">BdsBdsInstanceCloudSqlDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.clusterDetails">ClusterDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList">BdsBdsInstanceClusterDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.computeOnlyWorkerNode">ComputeOnlyWorkerNode</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference">BdsBdsInstanceComputeOnlyWorkerNodeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.edgeNode">EdgeNode</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference">BdsBdsInstanceEdgeNodeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.kafkaBrokerNode">KafkaBrokerNode</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference">BdsBdsInstanceKafkaBrokerNodeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.masterNode">MasterNode</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference">BdsBdsInstanceMasterNodeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.networkConfig">NetworkConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference">BdsBdsInstanceNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.nodes">Nodes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList">BdsBdsInstanceNodesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.numberOfNodes">NumberOfNodes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.numberOfNodesRequiringMaintenanceReboot">NumberOfNodesRequiringMaintenanceReboot</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference">BdsBdsInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.utilNode">UtilNode</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference">BdsBdsInstanceUtilNodeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.workerNode">WorkerNode</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference">BdsBdsInstanceWorkerNodeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.bootstrapScriptUrlInput">BootstrapScriptUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.cloudSqlDetailsInput">CloudSqlDetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.clusterAdminPasswordInput">ClusterAdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.clusterProfileInput">ClusterProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.clusterPublicKeyInput">ClusterPublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.clusterVersionInput">ClusterVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.computeOnlyWorkerNodeInput">ComputeOnlyWorkerNodeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode">BdsBdsInstanceComputeOnlyWorkerNode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.edgeNodeInput">EdgeNodeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode">BdsBdsInstanceEdgeNode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.ignoreExistingNodesShapeInput">IgnoreExistingNodesShapeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isCloudSqlConfiguredInput">IsCloudSqlConfiguredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isForceStopJobsInput">IsForceStopJobsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isHighAvailabilityInput">IsHighAvailabilityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isKafkaConfiguredInput">IsKafkaConfiguredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isSecureInput">IsSecureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.kafkaBrokerNodeInput">KafkaBrokerNodeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode">BdsBdsInstanceKafkaBrokerNode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.kerberosRealmNameInput">KerberosRealmNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.masterNodeInput">MasterNodeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode">BdsBdsInstanceMasterNode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.networkConfigInput">NetworkConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfig">BdsBdsInstanceNetworkConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.osPatchVersionInput">OsPatchVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.utilNodeInput">UtilNodeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode">BdsBdsInstanceUtilNode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.workerNodeInput">WorkerNodeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode">BdsBdsInstanceWorkerNode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.bootstrapScriptUrl">BootstrapScriptUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.clusterAdminPassword">ClusterAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.clusterProfile">ClusterProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.clusterPublicKey">ClusterPublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.clusterVersion">ClusterVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.ignoreExistingNodesShape">IgnoreExistingNodesShape</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isCloudSqlConfigured">IsCloudSqlConfigured</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isForceStopJobs">IsForceStopJobs</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isHighAvailability">IsHighAvailability</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isKafkaConfigured">IsKafkaConfigured</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isSecure">IsSecure</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.kerberosRealmName">KerberosRealmName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.osPatchVersion">OsPatchVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CloudSqlDetails`<sup>Required</sup> <a name="CloudSqlDetails" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.cloudSqlDetails"></a>

```csharp
public BdsBdsInstanceCloudSqlDetailsList CloudSqlDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList">BdsBdsInstanceCloudSqlDetailsList</a>

---

##### `ClusterDetails`<sup>Required</sup> <a name="ClusterDetails" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.clusterDetails"></a>

```csharp
public BdsBdsInstanceClusterDetailsList ClusterDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList">BdsBdsInstanceClusterDetailsList</a>

---

##### `ComputeOnlyWorkerNode`<sup>Required</sup> <a name="ComputeOnlyWorkerNode" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.computeOnlyWorkerNode"></a>

```csharp
public BdsBdsInstanceComputeOnlyWorkerNodeOutputReference ComputeOnlyWorkerNode { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference">BdsBdsInstanceComputeOnlyWorkerNodeOutputReference</a>

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `EdgeNode`<sup>Required</sup> <a name="EdgeNode" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.edgeNode"></a>

```csharp
public BdsBdsInstanceEdgeNodeOutputReference EdgeNode { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference">BdsBdsInstanceEdgeNodeOutputReference</a>

---

##### `KafkaBrokerNode`<sup>Required</sup> <a name="KafkaBrokerNode" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.kafkaBrokerNode"></a>

```csharp
public BdsBdsInstanceKafkaBrokerNodeOutputReference KafkaBrokerNode { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference">BdsBdsInstanceKafkaBrokerNodeOutputReference</a>

---

##### `MasterNode`<sup>Required</sup> <a name="MasterNode" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.masterNode"></a>

```csharp
public BdsBdsInstanceMasterNodeOutputReference MasterNode { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference">BdsBdsInstanceMasterNodeOutputReference</a>

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.networkConfig"></a>

```csharp
public BdsBdsInstanceNetworkConfigOutputReference NetworkConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference">BdsBdsInstanceNetworkConfigOutputReference</a>

---

##### `Nodes`<sup>Required</sup> <a name="Nodes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.nodes"></a>

```csharp
public BdsBdsInstanceNodesList Nodes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList">BdsBdsInstanceNodesList</a>

---

##### `NumberOfNodes`<sup>Required</sup> <a name="NumberOfNodes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.numberOfNodes"></a>

```csharp
public double NumberOfNodes { get; }
```

- *Type:* double

---

##### `NumberOfNodesRequiringMaintenanceReboot`<sup>Required</sup> <a name="NumberOfNodesRequiringMaintenanceReboot" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.numberOfNodesRequiringMaintenanceReboot"></a>

```csharp
public double NumberOfNodesRequiringMaintenanceReboot { get; }
```

- *Type:* double

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.timeouts"></a>

```csharp
public BdsBdsInstanceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference">BdsBdsInstanceTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `UtilNode`<sup>Required</sup> <a name="UtilNode" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.utilNode"></a>

```csharp
public BdsBdsInstanceUtilNodeOutputReference UtilNode { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference">BdsBdsInstanceUtilNodeOutputReference</a>

---

##### `WorkerNode`<sup>Required</sup> <a name="WorkerNode" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.workerNode"></a>

```csharp
public BdsBdsInstanceWorkerNodeOutputReference WorkerNode { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference">BdsBdsInstanceWorkerNodeOutputReference</a>

---

##### `BootstrapScriptUrlInput`<sup>Optional</sup> <a name="BootstrapScriptUrlInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.bootstrapScriptUrlInput"></a>

```csharp
public string BootstrapScriptUrlInput { get; }
```

- *Type:* string

---

##### `CloudSqlDetailsInput`<sup>Optional</sup> <a name="CloudSqlDetailsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.cloudSqlDetailsInput"></a>

```csharp
public object CloudSqlDetailsInput { get; }
```

- *Type:* object

---

##### `ClusterAdminPasswordInput`<sup>Optional</sup> <a name="ClusterAdminPasswordInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.clusterAdminPasswordInput"></a>

```csharp
public string ClusterAdminPasswordInput { get; }
```

- *Type:* string

---

##### `ClusterProfileInput`<sup>Optional</sup> <a name="ClusterProfileInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.clusterProfileInput"></a>

```csharp
public string ClusterProfileInput { get; }
```

- *Type:* string

---

##### `ClusterPublicKeyInput`<sup>Optional</sup> <a name="ClusterPublicKeyInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.clusterPublicKeyInput"></a>

```csharp
public string ClusterPublicKeyInput { get; }
```

- *Type:* string

---

##### `ClusterVersionInput`<sup>Optional</sup> <a name="ClusterVersionInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.clusterVersionInput"></a>

```csharp
public string ClusterVersionInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `ComputeOnlyWorkerNodeInput`<sup>Optional</sup> <a name="ComputeOnlyWorkerNodeInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.computeOnlyWorkerNodeInput"></a>

```csharp
public BdsBdsInstanceComputeOnlyWorkerNode ComputeOnlyWorkerNodeInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode">BdsBdsInstanceComputeOnlyWorkerNode</a>

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EdgeNodeInput`<sup>Optional</sup> <a name="EdgeNodeInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.edgeNodeInput"></a>

```csharp
public BdsBdsInstanceEdgeNode EdgeNodeInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode">BdsBdsInstanceEdgeNode</a>

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IgnoreExistingNodesShapeInput`<sup>Optional</sup> <a name="IgnoreExistingNodesShapeInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.ignoreExistingNodesShapeInput"></a>

```csharp
public string[] IgnoreExistingNodesShapeInput { get; }
```

- *Type:* string[]

---

##### `IsCloudSqlConfiguredInput`<sup>Optional</sup> <a name="IsCloudSqlConfiguredInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isCloudSqlConfiguredInput"></a>

```csharp
public object IsCloudSqlConfiguredInput { get; }
```

- *Type:* object

---

##### `IsForceStopJobsInput`<sup>Optional</sup> <a name="IsForceStopJobsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isForceStopJobsInput"></a>

```csharp
public object IsForceStopJobsInput { get; }
```

- *Type:* object

---

##### `IsHighAvailabilityInput`<sup>Optional</sup> <a name="IsHighAvailabilityInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isHighAvailabilityInput"></a>

```csharp
public object IsHighAvailabilityInput { get; }
```

- *Type:* object

---

##### `IsKafkaConfiguredInput`<sup>Optional</sup> <a name="IsKafkaConfiguredInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isKafkaConfiguredInput"></a>

```csharp
public object IsKafkaConfiguredInput { get; }
```

- *Type:* object

---

##### `IsSecureInput`<sup>Optional</sup> <a name="IsSecureInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isSecureInput"></a>

```csharp
public object IsSecureInput { get; }
```

- *Type:* object

---

##### `KafkaBrokerNodeInput`<sup>Optional</sup> <a name="KafkaBrokerNodeInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.kafkaBrokerNodeInput"></a>

```csharp
public BdsBdsInstanceKafkaBrokerNode KafkaBrokerNodeInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode">BdsBdsInstanceKafkaBrokerNode</a>

---

##### `KerberosRealmNameInput`<sup>Optional</sup> <a name="KerberosRealmNameInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.kerberosRealmNameInput"></a>

```csharp
public string KerberosRealmNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `MasterNodeInput`<sup>Optional</sup> <a name="MasterNodeInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.masterNodeInput"></a>

```csharp
public BdsBdsInstanceMasterNode MasterNodeInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode">BdsBdsInstanceMasterNode</a>

---

##### `NetworkConfigInput`<sup>Optional</sup> <a name="NetworkConfigInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.networkConfigInput"></a>

```csharp
public BdsBdsInstanceNetworkConfig NetworkConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfig">BdsBdsInstanceNetworkConfig</a>

---

##### `OsPatchVersionInput`<sup>Optional</sup> <a name="OsPatchVersionInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.osPatchVersionInput"></a>

```csharp
public string OsPatchVersionInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UtilNodeInput`<sup>Optional</sup> <a name="UtilNodeInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.utilNodeInput"></a>

```csharp
public BdsBdsInstanceUtilNode UtilNodeInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode">BdsBdsInstanceUtilNode</a>

---

##### `WorkerNodeInput`<sup>Optional</sup> <a name="WorkerNodeInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.workerNodeInput"></a>

```csharp
public BdsBdsInstanceWorkerNode WorkerNodeInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode">BdsBdsInstanceWorkerNode</a>

---

##### `BootstrapScriptUrl`<sup>Required</sup> <a name="BootstrapScriptUrl" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.bootstrapScriptUrl"></a>

```csharp
public string BootstrapScriptUrl { get; }
```

- *Type:* string

---

##### `ClusterAdminPassword`<sup>Required</sup> <a name="ClusterAdminPassword" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.clusterAdminPassword"></a>

```csharp
public string ClusterAdminPassword { get; }
```

- *Type:* string

---

##### `ClusterProfile`<sup>Required</sup> <a name="ClusterProfile" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.clusterProfile"></a>

```csharp
public string ClusterProfile { get; }
```

- *Type:* string

---

##### `ClusterPublicKey`<sup>Required</sup> <a name="ClusterPublicKey" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.clusterPublicKey"></a>

```csharp
public string ClusterPublicKey { get; }
```

- *Type:* string

---

##### `ClusterVersion`<sup>Required</sup> <a name="ClusterVersion" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.clusterVersion"></a>

```csharp
public string ClusterVersion { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IgnoreExistingNodesShape`<sup>Required</sup> <a name="IgnoreExistingNodesShape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.ignoreExistingNodesShape"></a>

```csharp
public string[] IgnoreExistingNodesShape { get; }
```

- *Type:* string[]

---

##### `IsCloudSqlConfigured`<sup>Required</sup> <a name="IsCloudSqlConfigured" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isCloudSqlConfigured"></a>

```csharp
public object IsCloudSqlConfigured { get; }
```

- *Type:* object

---

##### `IsForceStopJobs`<sup>Required</sup> <a name="IsForceStopJobs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isForceStopJobs"></a>

```csharp
public object IsForceStopJobs { get; }
```

- *Type:* object

---

##### `IsHighAvailability`<sup>Required</sup> <a name="IsHighAvailability" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isHighAvailability"></a>

```csharp
public object IsHighAvailability { get; }
```

- *Type:* object

---

##### `IsKafkaConfigured`<sup>Required</sup> <a name="IsKafkaConfigured" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isKafkaConfigured"></a>

```csharp
public object IsKafkaConfigured { get; }
```

- *Type:* object

---

##### `IsSecure`<sup>Required</sup> <a name="IsSecure" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isSecure"></a>

```csharp
public object IsSecure { get; }
```

- *Type:* object

---

##### `KerberosRealmName`<sup>Required</sup> <a name="KerberosRealmName" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.kerberosRealmName"></a>

```csharp
public string KerberosRealmName { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `OsPatchVersion`<sup>Required</sup> <a name="OsPatchVersion" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.osPatchVersion"></a>

```csharp
public string OsPatchVersion { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BdsBdsInstanceCloudSqlDetails <a name="BdsBdsInstanceCloudSqlDetails" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceCloudSqlDetails {
    string Shape
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetails.property.shape">Shape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}. |

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetails.property.shape"></a>

```csharp
public string Shape { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}.

---

### BdsBdsInstanceCloudSqlDetailsKerberosDetails <a name="BdsBdsInstanceCloudSqlDetailsKerberosDetails" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceCloudSqlDetailsKerberosDetails {

};
```


### BdsBdsInstanceClusterDetails <a name="BdsBdsInstanceClusterDetails" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceClusterDetails {

};
```


### BdsBdsInstanceComputeOnlyWorkerNode <a name="BdsBdsInstanceComputeOnlyWorkerNode" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceComputeOnlyWorkerNode {
    double NumberOfNodes,
    string Shape,
    string SubnetId,
    string BlockVolumeSizeInGbs = null,
    BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig ShapeConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode.property.numberOfNodes">NumberOfNodes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#number_of_nodes BdsBdsInstance#number_of_nodes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode.property.shape">Shape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#subnet_id BdsBdsInstance#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode.property.blockVolumeSizeInGbs">BlockVolumeSizeInGbs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#block_volume_size_in_gbs BdsBdsInstance#block_volume_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig">BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig</a></code> | shape_config block. |

---

##### `NumberOfNodes`<sup>Required</sup> <a name="NumberOfNodes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode.property.numberOfNodes"></a>

```csharp
public double NumberOfNodes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#number_of_nodes BdsBdsInstance#number_of_nodes}.

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode.property.shape"></a>

```csharp
public string Shape { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#subnet_id BdsBdsInstance#subnet_id}.

---

##### `BlockVolumeSizeInGbs`<sup>Optional</sup> <a name="BlockVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode.property.blockVolumeSizeInGbs"></a>

```csharp
public string BlockVolumeSizeInGbs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#block_volume_size_in_gbs BdsBdsInstance#block_volume_size_in_gbs}.

---

##### `ShapeConfig`<sup>Optional</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode.property.shapeConfig"></a>

```csharp
public BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig ShapeConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig">BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape_config BdsBdsInstance#shape_config}

---

### BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig <a name="BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig {
    double MemoryInGbs = null,
    double Nvmes = null,
    double Ocpus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#memory_in_gbs BdsBdsInstance#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig.property.nvmes">Nvmes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#nvmes BdsBdsInstance#nvmes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig.property.ocpus">Ocpus</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#ocpus BdsBdsInstance#ocpus}. |

---

##### `MemoryInGbs`<sup>Optional</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#memory_in_gbs BdsBdsInstance#memory_in_gbs}.

---

##### `Nvmes`<sup>Optional</sup> <a name="Nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig.property.nvmes"></a>

```csharp
public double Nvmes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#nvmes BdsBdsInstance#nvmes}.

---

##### `Ocpus`<sup>Optional</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig.property.ocpus"></a>

```csharp
public double Ocpus { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#ocpus BdsBdsInstance#ocpus}.

---

### BdsBdsInstanceConfig <a name="BdsBdsInstanceConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterAdminPassword,
    string ClusterPublicKey,
    string ClusterVersion,
    string CompartmentId,
    string DisplayName,
    object IsHighAvailability,
    object IsSecure,
    BdsBdsInstanceMasterNode MasterNode,
    BdsBdsInstanceUtilNode UtilNode,
    BdsBdsInstanceWorkerNode WorkerNode,
    string BootstrapScriptUrl = null,
    object CloudSqlDetails = null,
    string ClusterProfile = null,
    BdsBdsInstanceComputeOnlyWorkerNode ComputeOnlyWorkerNode = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    BdsBdsInstanceEdgeNode EdgeNode = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    string[] IgnoreExistingNodesShape = null,
    object IsCloudSqlConfigured = null,
    object IsForceStopJobs = null,
    object IsKafkaConfigured = null,
    BdsBdsInstanceKafkaBrokerNode KafkaBrokerNode = null,
    string KerberosRealmName = null,
    string KmsKeyId = null,
    BdsBdsInstanceNetworkConfig NetworkConfig = null,
    string OsPatchVersion = null,
    string State = null,
    BdsBdsInstanceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.clusterAdminPassword">ClusterAdminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#cluster_admin_password BdsBdsInstance#cluster_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.clusterPublicKey">ClusterPublicKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#cluster_public_key BdsBdsInstance#cluster_public_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.clusterVersion">ClusterVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#cluster_version BdsBdsInstance#cluster_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#compartment_id BdsBdsInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#display_name BdsBdsInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.isHighAvailability">IsHighAvailability</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#is_high_availability BdsBdsInstance#is_high_availability}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.isSecure">IsSecure</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#is_secure BdsBdsInstance#is_secure}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.masterNode">MasterNode</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode">BdsBdsInstanceMasterNode</a></code> | master_node block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.utilNode">UtilNode</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode">BdsBdsInstanceUtilNode</a></code> | util_node block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.workerNode">WorkerNode</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode">BdsBdsInstanceWorkerNode</a></code> | worker_node block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.bootstrapScriptUrl">BootstrapScriptUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#bootstrap_script_url BdsBdsInstance#bootstrap_script_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.cloudSqlDetails">CloudSqlDetails</a></code> | <code>object</code> | cloud_sql_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.clusterProfile">ClusterProfile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#cluster_profile BdsBdsInstance#cluster_profile}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.computeOnlyWorkerNode">ComputeOnlyWorkerNode</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode">BdsBdsInstanceComputeOnlyWorkerNode</a></code> | compute_only_worker_node block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#defined_tags BdsBdsInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.edgeNode">EdgeNode</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode">BdsBdsInstanceEdgeNode</a></code> | edge_node block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#freeform_tags BdsBdsInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#id BdsBdsInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.ignoreExistingNodesShape">IgnoreExistingNodesShape</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#ignore_existing_nodes_shape BdsBdsInstance#ignore_existing_nodes_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.isCloudSqlConfigured">IsCloudSqlConfigured</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#is_cloud_sql_configured BdsBdsInstance#is_cloud_sql_configured}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.isForceStopJobs">IsForceStopJobs</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#is_force_stop_jobs BdsBdsInstance#is_force_stop_jobs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.isKafkaConfigured">IsKafkaConfigured</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#is_kafka_configured BdsBdsInstance#is_kafka_configured}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.kafkaBrokerNode">KafkaBrokerNode</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode">BdsBdsInstanceKafkaBrokerNode</a></code> | kafka_broker_node block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.kerberosRealmName">KerberosRealmName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#kerberos_realm_name BdsBdsInstance#kerberos_realm_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#kms_key_id BdsBdsInstance#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.networkConfig">NetworkConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfig">BdsBdsInstanceNetworkConfig</a></code> | network_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.osPatchVersion">OsPatchVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#os_patch_version BdsBdsInstance#os_patch_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#state BdsBdsInstance#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeouts">BdsBdsInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterAdminPassword`<sup>Required</sup> <a name="ClusterAdminPassword" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.clusterAdminPassword"></a>

```csharp
public string ClusterAdminPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#cluster_admin_password BdsBdsInstance#cluster_admin_password}.

---

##### `ClusterPublicKey`<sup>Required</sup> <a name="ClusterPublicKey" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.clusterPublicKey"></a>

```csharp
public string ClusterPublicKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#cluster_public_key BdsBdsInstance#cluster_public_key}.

---

##### `ClusterVersion`<sup>Required</sup> <a name="ClusterVersion" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.clusterVersion"></a>

```csharp
public string ClusterVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#cluster_version BdsBdsInstance#cluster_version}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#compartment_id BdsBdsInstance#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#display_name BdsBdsInstance#display_name}.

---

##### `IsHighAvailability`<sup>Required</sup> <a name="IsHighAvailability" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.isHighAvailability"></a>

```csharp
public object IsHighAvailability { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#is_high_availability BdsBdsInstance#is_high_availability}.

---

##### `IsSecure`<sup>Required</sup> <a name="IsSecure" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.isSecure"></a>

```csharp
public object IsSecure { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#is_secure BdsBdsInstance#is_secure}.

---

##### `MasterNode`<sup>Required</sup> <a name="MasterNode" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.masterNode"></a>

```csharp
public BdsBdsInstanceMasterNode MasterNode { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode">BdsBdsInstanceMasterNode</a>

master_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#master_node BdsBdsInstance#master_node}

---

##### `UtilNode`<sup>Required</sup> <a name="UtilNode" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.utilNode"></a>

```csharp
public BdsBdsInstanceUtilNode UtilNode { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode">BdsBdsInstanceUtilNode</a>

util_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#util_node BdsBdsInstance#util_node}

---

##### `WorkerNode`<sup>Required</sup> <a name="WorkerNode" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.workerNode"></a>

```csharp
public BdsBdsInstanceWorkerNode WorkerNode { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode">BdsBdsInstanceWorkerNode</a>

worker_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#worker_node BdsBdsInstance#worker_node}

---

##### `BootstrapScriptUrl`<sup>Optional</sup> <a name="BootstrapScriptUrl" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.bootstrapScriptUrl"></a>

```csharp
public string BootstrapScriptUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#bootstrap_script_url BdsBdsInstance#bootstrap_script_url}.

---

##### `CloudSqlDetails`<sup>Optional</sup> <a name="CloudSqlDetails" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.cloudSqlDetails"></a>

```csharp
public object CloudSqlDetails { get; set; }
```

- *Type:* object

cloud_sql_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#cloud_sql_details BdsBdsInstance#cloud_sql_details}

---

##### `ClusterProfile`<sup>Optional</sup> <a name="ClusterProfile" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.clusterProfile"></a>

```csharp
public string ClusterProfile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#cluster_profile BdsBdsInstance#cluster_profile}.

---

##### `ComputeOnlyWorkerNode`<sup>Optional</sup> <a name="ComputeOnlyWorkerNode" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.computeOnlyWorkerNode"></a>

```csharp
public BdsBdsInstanceComputeOnlyWorkerNode ComputeOnlyWorkerNode { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode">BdsBdsInstanceComputeOnlyWorkerNode</a>

compute_only_worker_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#compute_only_worker_node BdsBdsInstance#compute_only_worker_node}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#defined_tags BdsBdsInstance#defined_tags}.

---

##### `EdgeNode`<sup>Optional</sup> <a name="EdgeNode" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.edgeNode"></a>

```csharp
public BdsBdsInstanceEdgeNode EdgeNode { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode">BdsBdsInstanceEdgeNode</a>

edge_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#edge_node BdsBdsInstance#edge_node}

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#freeform_tags BdsBdsInstance#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#id BdsBdsInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreExistingNodesShape`<sup>Optional</sup> <a name="IgnoreExistingNodesShape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.ignoreExistingNodesShape"></a>

```csharp
public string[] IgnoreExistingNodesShape { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#ignore_existing_nodes_shape BdsBdsInstance#ignore_existing_nodes_shape}.

---

##### `IsCloudSqlConfigured`<sup>Optional</sup> <a name="IsCloudSqlConfigured" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.isCloudSqlConfigured"></a>

```csharp
public object IsCloudSqlConfigured { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#is_cloud_sql_configured BdsBdsInstance#is_cloud_sql_configured}.

---

##### `IsForceStopJobs`<sup>Optional</sup> <a name="IsForceStopJobs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.isForceStopJobs"></a>

```csharp
public object IsForceStopJobs { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#is_force_stop_jobs BdsBdsInstance#is_force_stop_jobs}.

---

##### `IsKafkaConfigured`<sup>Optional</sup> <a name="IsKafkaConfigured" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.isKafkaConfigured"></a>

```csharp
public object IsKafkaConfigured { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#is_kafka_configured BdsBdsInstance#is_kafka_configured}.

---

##### `KafkaBrokerNode`<sup>Optional</sup> <a name="KafkaBrokerNode" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.kafkaBrokerNode"></a>

```csharp
public BdsBdsInstanceKafkaBrokerNode KafkaBrokerNode { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode">BdsBdsInstanceKafkaBrokerNode</a>

kafka_broker_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#kafka_broker_node BdsBdsInstance#kafka_broker_node}

---

##### `KerberosRealmName`<sup>Optional</sup> <a name="KerberosRealmName" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.kerberosRealmName"></a>

```csharp
public string KerberosRealmName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#kerberos_realm_name BdsBdsInstance#kerberos_realm_name}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#kms_key_id BdsBdsInstance#kms_key_id}.

---

##### `NetworkConfig`<sup>Optional</sup> <a name="NetworkConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.networkConfig"></a>

```csharp
public BdsBdsInstanceNetworkConfig NetworkConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfig">BdsBdsInstanceNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#network_config BdsBdsInstance#network_config}

---

##### `OsPatchVersion`<sup>Optional</sup> <a name="OsPatchVersion" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.osPatchVersion"></a>

```csharp
public string OsPatchVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#os_patch_version BdsBdsInstance#os_patch_version}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#state BdsBdsInstance#state}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.timeouts"></a>

```csharp
public BdsBdsInstanceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeouts">BdsBdsInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#timeouts BdsBdsInstance#timeouts}

---

### BdsBdsInstanceEdgeNode <a name="BdsBdsInstanceEdgeNode" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceEdgeNode {
    double NumberOfNodes,
    string Shape,
    string SubnetId,
    string BlockVolumeSizeInGbs = null,
    BdsBdsInstanceEdgeNodeShapeConfig ShapeConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode.property.numberOfNodes">NumberOfNodes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#number_of_nodes BdsBdsInstance#number_of_nodes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode.property.shape">Shape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#subnet_id BdsBdsInstance#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode.property.blockVolumeSizeInGbs">BlockVolumeSizeInGbs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#block_volume_size_in_gbs BdsBdsInstance#block_volume_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfig">BdsBdsInstanceEdgeNodeShapeConfig</a></code> | shape_config block. |

---

##### `NumberOfNodes`<sup>Required</sup> <a name="NumberOfNodes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode.property.numberOfNodes"></a>

```csharp
public double NumberOfNodes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#number_of_nodes BdsBdsInstance#number_of_nodes}.

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode.property.shape"></a>

```csharp
public string Shape { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#subnet_id BdsBdsInstance#subnet_id}.

---

##### `BlockVolumeSizeInGbs`<sup>Optional</sup> <a name="BlockVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode.property.blockVolumeSizeInGbs"></a>

```csharp
public string BlockVolumeSizeInGbs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#block_volume_size_in_gbs BdsBdsInstance#block_volume_size_in_gbs}.

---

##### `ShapeConfig`<sup>Optional</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode.property.shapeConfig"></a>

```csharp
public BdsBdsInstanceEdgeNodeShapeConfig ShapeConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfig">BdsBdsInstanceEdgeNodeShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape_config BdsBdsInstance#shape_config}

---

### BdsBdsInstanceEdgeNodeShapeConfig <a name="BdsBdsInstanceEdgeNodeShapeConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceEdgeNodeShapeConfig {
    double MemoryInGbs = null,
    double Nvmes = null,
    double Ocpus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfig.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#memory_in_gbs BdsBdsInstance#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfig.property.nvmes">Nvmes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#nvmes BdsBdsInstance#nvmes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfig.property.ocpus">Ocpus</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#ocpus BdsBdsInstance#ocpus}. |

---

##### `MemoryInGbs`<sup>Optional</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfig.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#memory_in_gbs BdsBdsInstance#memory_in_gbs}.

---

##### `Nvmes`<sup>Optional</sup> <a name="Nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfig.property.nvmes"></a>

```csharp
public double Nvmes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#nvmes BdsBdsInstance#nvmes}.

---

##### `Ocpus`<sup>Optional</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfig.property.ocpus"></a>

```csharp
public double Ocpus { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#ocpus BdsBdsInstance#ocpus}.

---

### BdsBdsInstanceKafkaBrokerNode <a name="BdsBdsInstanceKafkaBrokerNode" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceKafkaBrokerNode {
    double NumberOfKafkaNodes,
    string Shape,
    string SubnetId,
    string BlockVolumeSizeInGbs = null,
    BdsBdsInstanceKafkaBrokerNodeShapeConfig ShapeConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode.property.numberOfKafkaNodes">NumberOfKafkaNodes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#number_of_kafka_nodes BdsBdsInstance#number_of_kafka_nodes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode.property.shape">Shape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#subnet_id BdsBdsInstance#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode.property.blockVolumeSizeInGbs">BlockVolumeSizeInGbs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#block_volume_size_in_gbs BdsBdsInstance#block_volume_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfig">BdsBdsInstanceKafkaBrokerNodeShapeConfig</a></code> | shape_config block. |

---

##### `NumberOfKafkaNodes`<sup>Required</sup> <a name="NumberOfKafkaNodes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode.property.numberOfKafkaNodes"></a>

```csharp
public double NumberOfKafkaNodes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#number_of_kafka_nodes BdsBdsInstance#number_of_kafka_nodes}.

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode.property.shape"></a>

```csharp
public string Shape { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#subnet_id BdsBdsInstance#subnet_id}.

---

##### `BlockVolumeSizeInGbs`<sup>Optional</sup> <a name="BlockVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode.property.blockVolumeSizeInGbs"></a>

```csharp
public string BlockVolumeSizeInGbs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#block_volume_size_in_gbs BdsBdsInstance#block_volume_size_in_gbs}.

---

##### `ShapeConfig`<sup>Optional</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode.property.shapeConfig"></a>

```csharp
public BdsBdsInstanceKafkaBrokerNodeShapeConfig ShapeConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfig">BdsBdsInstanceKafkaBrokerNodeShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape_config BdsBdsInstance#shape_config}

---

### BdsBdsInstanceKafkaBrokerNodeShapeConfig <a name="BdsBdsInstanceKafkaBrokerNodeShapeConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceKafkaBrokerNodeShapeConfig {
    double MemoryInGbs = null,
    double Nvmes = null,
    double Ocpus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfig.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#memory_in_gbs BdsBdsInstance#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfig.property.nvmes">Nvmes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#nvmes BdsBdsInstance#nvmes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfig.property.ocpus">Ocpus</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#ocpus BdsBdsInstance#ocpus}. |

---

##### `MemoryInGbs`<sup>Optional</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfig.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#memory_in_gbs BdsBdsInstance#memory_in_gbs}.

---

##### `Nvmes`<sup>Optional</sup> <a name="Nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfig.property.nvmes"></a>

```csharp
public double Nvmes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#nvmes BdsBdsInstance#nvmes}.

---

##### `Ocpus`<sup>Optional</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfig.property.ocpus"></a>

```csharp
public double Ocpus { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#ocpus BdsBdsInstance#ocpus}.

---

### BdsBdsInstanceMasterNode <a name="BdsBdsInstanceMasterNode" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceMasterNode {
    double NumberOfNodes,
    string Shape,
    string SubnetId,
    string BlockVolumeSizeInGbs = null,
    BdsBdsInstanceMasterNodeShapeConfig ShapeConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode.property.numberOfNodes">NumberOfNodes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#number_of_nodes BdsBdsInstance#number_of_nodes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode.property.shape">Shape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#subnet_id BdsBdsInstance#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode.property.blockVolumeSizeInGbs">BlockVolumeSizeInGbs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#block_volume_size_in_gbs BdsBdsInstance#block_volume_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfig">BdsBdsInstanceMasterNodeShapeConfig</a></code> | shape_config block. |

---

##### `NumberOfNodes`<sup>Required</sup> <a name="NumberOfNodes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode.property.numberOfNodes"></a>

```csharp
public double NumberOfNodes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#number_of_nodes BdsBdsInstance#number_of_nodes}.

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode.property.shape"></a>

```csharp
public string Shape { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#subnet_id BdsBdsInstance#subnet_id}.

---

##### `BlockVolumeSizeInGbs`<sup>Optional</sup> <a name="BlockVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode.property.blockVolumeSizeInGbs"></a>

```csharp
public string BlockVolumeSizeInGbs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#block_volume_size_in_gbs BdsBdsInstance#block_volume_size_in_gbs}.

---

##### `ShapeConfig`<sup>Optional</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode.property.shapeConfig"></a>

```csharp
public BdsBdsInstanceMasterNodeShapeConfig ShapeConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfig">BdsBdsInstanceMasterNodeShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape_config BdsBdsInstance#shape_config}

---

### BdsBdsInstanceMasterNodeShapeConfig <a name="BdsBdsInstanceMasterNodeShapeConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceMasterNodeShapeConfig {
    double MemoryInGbs = null,
    double Nvmes = null,
    double Ocpus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfig.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#memory_in_gbs BdsBdsInstance#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfig.property.nvmes">Nvmes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#nvmes BdsBdsInstance#nvmes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfig.property.ocpus">Ocpus</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#ocpus BdsBdsInstance#ocpus}. |

---

##### `MemoryInGbs`<sup>Optional</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfig.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#memory_in_gbs BdsBdsInstance#memory_in_gbs}.

---

##### `Nvmes`<sup>Optional</sup> <a name="Nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfig.property.nvmes"></a>

```csharp
public double Nvmes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#nvmes BdsBdsInstance#nvmes}.

---

##### `Ocpus`<sup>Optional</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfig.property.ocpus"></a>

```csharp
public double Ocpus { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#ocpus BdsBdsInstance#ocpus}.

---

### BdsBdsInstanceNetworkConfig <a name="BdsBdsInstanceNetworkConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceNetworkConfig {
    string CidrBlock = null,
    object IsNatGatewayRequired = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfig.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#cidr_block BdsBdsInstance#cidr_block}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfig.property.isNatGatewayRequired">IsNatGatewayRequired</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#is_nat_gateway_required BdsBdsInstance#is_nat_gateway_required}. |

---

##### `CidrBlock`<sup>Optional</sup> <a name="CidrBlock" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfig.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#cidr_block BdsBdsInstance#cidr_block}.

---

##### `IsNatGatewayRequired`<sup>Optional</sup> <a name="IsNatGatewayRequired" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfig.property.isNatGatewayRequired"></a>

```csharp
public object IsNatGatewayRequired { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#is_nat_gateway_required BdsBdsInstance#is_nat_gateway_required}.

---

### BdsBdsInstanceNodes <a name="BdsBdsInstanceNodes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceNodes {

};
```


### BdsBdsInstanceNodesAttachedBlockVolumes <a name="BdsBdsInstanceNodesAttachedBlockVolumes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceNodesAttachedBlockVolumes {

};
```


### BdsBdsInstanceTimeouts <a name="BdsBdsInstanceTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#create BdsBdsInstance#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#delete BdsBdsInstance#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#update BdsBdsInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#create BdsBdsInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#delete BdsBdsInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#update BdsBdsInstance#update}.

---

### BdsBdsInstanceUtilNode <a name="BdsBdsInstanceUtilNode" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceUtilNode {
    double NumberOfNodes,
    string Shape,
    string SubnetId,
    string BlockVolumeSizeInGbs = null,
    BdsBdsInstanceUtilNodeShapeConfig ShapeConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode.property.numberOfNodes">NumberOfNodes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#number_of_nodes BdsBdsInstance#number_of_nodes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode.property.shape">Shape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#subnet_id BdsBdsInstance#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode.property.blockVolumeSizeInGbs">BlockVolumeSizeInGbs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#block_volume_size_in_gbs BdsBdsInstance#block_volume_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfig">BdsBdsInstanceUtilNodeShapeConfig</a></code> | shape_config block. |

---

##### `NumberOfNodes`<sup>Required</sup> <a name="NumberOfNodes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode.property.numberOfNodes"></a>

```csharp
public double NumberOfNodes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#number_of_nodes BdsBdsInstance#number_of_nodes}.

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode.property.shape"></a>

```csharp
public string Shape { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#subnet_id BdsBdsInstance#subnet_id}.

---

##### `BlockVolumeSizeInGbs`<sup>Optional</sup> <a name="BlockVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode.property.blockVolumeSizeInGbs"></a>

```csharp
public string BlockVolumeSizeInGbs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#block_volume_size_in_gbs BdsBdsInstance#block_volume_size_in_gbs}.

---

##### `ShapeConfig`<sup>Optional</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode.property.shapeConfig"></a>

```csharp
public BdsBdsInstanceUtilNodeShapeConfig ShapeConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfig">BdsBdsInstanceUtilNodeShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape_config BdsBdsInstance#shape_config}

---

### BdsBdsInstanceUtilNodeShapeConfig <a name="BdsBdsInstanceUtilNodeShapeConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceUtilNodeShapeConfig {
    double MemoryInGbs = null,
    double Nvmes = null,
    double Ocpus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfig.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#memory_in_gbs BdsBdsInstance#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfig.property.nvmes">Nvmes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#nvmes BdsBdsInstance#nvmes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfig.property.ocpus">Ocpus</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#ocpus BdsBdsInstance#ocpus}. |

---

##### `MemoryInGbs`<sup>Optional</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfig.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#memory_in_gbs BdsBdsInstance#memory_in_gbs}.

---

##### `Nvmes`<sup>Optional</sup> <a name="Nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfig.property.nvmes"></a>

```csharp
public double Nvmes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#nvmes BdsBdsInstance#nvmes}.

---

##### `Ocpus`<sup>Optional</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfig.property.ocpus"></a>

```csharp
public double Ocpus { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#ocpus BdsBdsInstance#ocpus}.

---

### BdsBdsInstanceWorkerNode <a name="BdsBdsInstanceWorkerNode" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceWorkerNode {
    double NumberOfNodes,
    string Shape,
    string SubnetId,
    string BlockVolumeSizeInGbs = null,
    BdsBdsInstanceWorkerNodeShapeConfig ShapeConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode.property.numberOfNodes">NumberOfNodes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#number_of_nodes BdsBdsInstance#number_of_nodes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode.property.shape">Shape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#subnet_id BdsBdsInstance#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode.property.blockVolumeSizeInGbs">BlockVolumeSizeInGbs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#block_volume_size_in_gbs BdsBdsInstance#block_volume_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfig">BdsBdsInstanceWorkerNodeShapeConfig</a></code> | shape_config block. |

---

##### `NumberOfNodes`<sup>Required</sup> <a name="NumberOfNodes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode.property.numberOfNodes"></a>

```csharp
public double NumberOfNodes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#number_of_nodes BdsBdsInstance#number_of_nodes}.

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode.property.shape"></a>

```csharp
public string Shape { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#subnet_id BdsBdsInstance#subnet_id}.

---

##### `BlockVolumeSizeInGbs`<sup>Optional</sup> <a name="BlockVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode.property.blockVolumeSizeInGbs"></a>

```csharp
public string BlockVolumeSizeInGbs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#block_volume_size_in_gbs BdsBdsInstance#block_volume_size_in_gbs}.

---

##### `ShapeConfig`<sup>Optional</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode.property.shapeConfig"></a>

```csharp
public BdsBdsInstanceWorkerNodeShapeConfig ShapeConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfig">BdsBdsInstanceWorkerNodeShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape_config BdsBdsInstance#shape_config}

---

### BdsBdsInstanceWorkerNodeShapeConfig <a name="BdsBdsInstanceWorkerNodeShapeConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceWorkerNodeShapeConfig {
    double MemoryInGbs = null,
    double Nvmes = null,
    double Ocpus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfig.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#memory_in_gbs BdsBdsInstance#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfig.property.nvmes">Nvmes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#nvmes BdsBdsInstance#nvmes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfig.property.ocpus">Ocpus</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#ocpus BdsBdsInstance#ocpus}. |

---

##### `MemoryInGbs`<sup>Optional</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfig.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#memory_in_gbs BdsBdsInstance#memory_in_gbs}.

---

##### `Nvmes`<sup>Optional</sup> <a name="Nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfig.property.nvmes"></a>

```csharp
public double Nvmes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#nvmes BdsBdsInstance#nvmes}.

---

##### `Ocpus`<sup>Optional</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfig.property.ocpus"></a>

```csharp
public double Ocpus { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#ocpus BdsBdsInstance#ocpus}.

---

## Classes <a name="Classes" id="Classes"></a>

### BdsBdsInstanceCloudSqlDetailsKerberosDetailsList <a name="BdsBdsInstanceCloudSqlDetailsKerberosDetailsList" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceCloudSqlDetailsKerberosDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.get"></a>

```csharp
private BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference <a name="BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.property.keytabFile">KeytabFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.property.principalName">PrincipalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetails">BdsBdsInstanceCloudSqlDetailsKerberosDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeytabFile`<sup>Required</sup> <a name="KeytabFile" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.property.keytabFile"></a>

```csharp
public string KeytabFile { get; }
```

- *Type:* string

---

##### `PrincipalName`<sup>Required</sup> <a name="PrincipalName" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.property.principalName"></a>

```csharp
public string PrincipalName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.property.internalValue"></a>

```csharp
public BdsBdsInstanceCloudSqlDetailsKerberosDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetails">BdsBdsInstanceCloudSqlDetailsKerberosDetails</a>

---


### BdsBdsInstanceCloudSqlDetailsList <a name="BdsBdsInstanceCloudSqlDetailsList" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceCloudSqlDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.get"></a>

```csharp
private BdsBdsInstanceCloudSqlDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BdsBdsInstanceCloudSqlDetailsOutputReference <a name="BdsBdsInstanceCloudSqlDetailsOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceCloudSqlDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.blockVolumeSizeInGbs">BlockVolumeSizeInGbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.isKerberosMappedToDatabaseUsers">IsKerberosMappedToDatabaseUsers</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.kerberosDetails">KerberosDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList">BdsBdsInstanceCloudSqlDetailsKerberosDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.nvmes">Nvmes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.ocpus">Ocpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.shapeInput">ShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlockVolumeSizeInGbs`<sup>Required</sup> <a name="BlockVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.blockVolumeSizeInGbs"></a>

```csharp
public string BlockVolumeSizeInGbs { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `IsKerberosMappedToDatabaseUsers`<sup>Required</sup> <a name="IsKerberosMappedToDatabaseUsers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.isKerberosMappedToDatabaseUsers"></a>

```csharp
public IResolvable IsKerberosMappedToDatabaseUsers { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `KerberosDetails`<sup>Required</sup> <a name="KerberosDetails" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.kerberosDetails"></a>

```csharp
public BdsBdsInstanceCloudSqlDetailsKerberosDetailsList KerberosDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList">BdsBdsInstanceCloudSqlDetailsKerberosDetailsList</a>

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; }
```

- *Type:* double

---

##### `Nvmes`<sup>Required</sup> <a name="Nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.nvmes"></a>

```csharp
public double Nvmes { get; }
```

- *Type:* double

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.ocpus"></a>

```csharp
public double Ocpus { get; }
```

- *Type:* double

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.shapeInput"></a>

```csharp
public string ShapeInput { get; }
```

- *Type:* string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BdsBdsInstanceClusterDetailsList <a name="BdsBdsInstanceClusterDetailsList" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceClusterDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.get"></a>

```csharp
private BdsBdsInstanceClusterDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### BdsBdsInstanceClusterDetailsOutputReference <a name="BdsBdsInstanceClusterDetailsOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceClusterDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.ambariUrl">AmbariUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.bdaVersion">BdaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.bdCellVersion">BdCellVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.bdmVersion">BdmVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.bdsVersion">BdsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.bigDataManagerUrl">BigDataManagerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.clouderaManagerUrl">ClouderaManagerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.csqlCellVersion">CsqlCellVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.dbVersion">DbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.hueServerUrl">HueServerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.jupyterHubUrl">JupyterHubUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.odhVersion">OdhVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.osVersion">OsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.timeRefreshed">TimeRefreshed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetails">BdsBdsInstanceClusterDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AmbariUrl`<sup>Required</sup> <a name="AmbariUrl" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.ambariUrl"></a>

```csharp
public string AmbariUrl { get; }
```

- *Type:* string

---

##### `BdaVersion`<sup>Required</sup> <a name="BdaVersion" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.bdaVersion"></a>

```csharp
public string BdaVersion { get; }
```

- *Type:* string

---

##### `BdCellVersion`<sup>Required</sup> <a name="BdCellVersion" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.bdCellVersion"></a>

```csharp
public string BdCellVersion { get; }
```

- *Type:* string

---

##### `BdmVersion`<sup>Required</sup> <a name="BdmVersion" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.bdmVersion"></a>

```csharp
public string BdmVersion { get; }
```

- *Type:* string

---

##### `BdsVersion`<sup>Required</sup> <a name="BdsVersion" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.bdsVersion"></a>

```csharp
public string BdsVersion { get; }
```

- *Type:* string

---

##### `BigDataManagerUrl`<sup>Required</sup> <a name="BigDataManagerUrl" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.bigDataManagerUrl"></a>

```csharp
public string BigDataManagerUrl { get; }
```

- *Type:* string

---

##### `ClouderaManagerUrl`<sup>Required</sup> <a name="ClouderaManagerUrl" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.clouderaManagerUrl"></a>

```csharp
public string ClouderaManagerUrl { get; }
```

- *Type:* string

---

##### `CsqlCellVersion`<sup>Required</sup> <a name="CsqlCellVersion" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.csqlCellVersion"></a>

```csharp
public string CsqlCellVersion { get; }
```

- *Type:* string

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.dbVersion"></a>

```csharp
public string DbVersion { get; }
```

- *Type:* string

---

##### `HueServerUrl`<sup>Required</sup> <a name="HueServerUrl" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.hueServerUrl"></a>

```csharp
public string HueServerUrl { get; }
```

- *Type:* string

---

##### `JupyterHubUrl`<sup>Required</sup> <a name="JupyterHubUrl" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.jupyterHubUrl"></a>

```csharp
public string JupyterHubUrl { get; }
```

- *Type:* string

---

##### `OdhVersion`<sup>Required</sup> <a name="OdhVersion" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.odhVersion"></a>

```csharp
public string OdhVersion { get; }
```

- *Type:* string

---

##### `OsVersion`<sup>Required</sup> <a name="OsVersion" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.osVersion"></a>

```csharp
public string OsVersion { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeRefreshed`<sup>Required</sup> <a name="TimeRefreshed" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.timeRefreshed"></a>

```csharp
public string TimeRefreshed { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.internalValue"></a>

```csharp
public BdsBdsInstanceClusterDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetails">BdsBdsInstanceClusterDetails</a>

---


### BdsBdsInstanceComputeOnlyWorkerNodeOutputReference <a name="BdsBdsInstanceComputeOnlyWorkerNodeOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceComputeOnlyWorkerNodeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.putShapeConfig">PutShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.resetBlockVolumeSizeInGbs">ResetBlockVolumeSizeInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.resetShapeConfig">ResetShapeConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutShapeConfig` <a name="PutShapeConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.putShapeConfig"></a>

```csharp
private void PutShapeConfig(BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.putShapeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig">BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig</a>

---

##### `ResetBlockVolumeSizeInGbs` <a name="ResetBlockVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.resetBlockVolumeSizeInGbs"></a>

```csharp
private void ResetBlockVolumeSizeInGbs()
```

##### `ResetShapeConfig` <a name="ResetShapeConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.resetShapeConfig"></a>

```csharp
private void ResetShapeConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference">BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.blockVolumeSizeInGbsInput">BlockVolumeSizeInGbsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.numberOfNodesInput">NumberOfNodesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.shapeConfigInput">ShapeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig">BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.shapeInput">ShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.blockVolumeSizeInGbs">BlockVolumeSizeInGbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.numberOfNodes">NumberOfNodes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode">BdsBdsInstanceComputeOnlyWorkerNode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ShapeConfig`<sup>Required</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.shapeConfig"></a>

```csharp
public BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference ShapeConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference">BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference</a>

---

##### `BlockVolumeSizeInGbsInput`<sup>Optional</sup> <a name="BlockVolumeSizeInGbsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.blockVolumeSizeInGbsInput"></a>

```csharp
public string BlockVolumeSizeInGbsInput { get; }
```

- *Type:* string

---

##### `NumberOfNodesInput`<sup>Optional</sup> <a name="NumberOfNodesInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.numberOfNodesInput"></a>

```csharp
public double NumberOfNodesInput { get; }
```

- *Type:* double

---

##### `ShapeConfigInput`<sup>Optional</sup> <a name="ShapeConfigInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.shapeConfigInput"></a>

```csharp
public BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig ShapeConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig">BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig</a>

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.shapeInput"></a>

```csharp
public string ShapeInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `BlockVolumeSizeInGbs`<sup>Required</sup> <a name="BlockVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.blockVolumeSizeInGbs"></a>

```csharp
public string BlockVolumeSizeInGbs { get; }
```

- *Type:* string

---

##### `NumberOfNodes`<sup>Required</sup> <a name="NumberOfNodes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.numberOfNodes"></a>

```csharp
public double NumberOfNodes { get; }
```

- *Type:* double

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.internalValue"></a>

```csharp
public BdsBdsInstanceComputeOnlyWorkerNode InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode">BdsBdsInstanceComputeOnlyWorkerNode</a>

---


### BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference <a name="BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.resetMemoryInGbs">ResetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.resetNvmes">ResetNvmes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.resetOcpus">ResetOcpus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMemoryInGbs` <a name="ResetMemoryInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.resetMemoryInGbs"></a>

```csharp
private void ResetMemoryInGbs()
```

##### `ResetNvmes` <a name="ResetNvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.resetNvmes"></a>

```csharp
private void ResetNvmes()
```

##### `ResetOcpus` <a name="ResetOcpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.resetOcpus"></a>

```csharp
private void ResetOcpus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.memoryInGbsInput">MemoryInGbsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.nvmesInput">NvmesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.ocpusInput">OcpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.nvmes">Nvmes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig">BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MemoryInGbsInput`<sup>Optional</sup> <a name="MemoryInGbsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.memoryInGbsInput"></a>

```csharp
public double MemoryInGbsInput { get; }
```

- *Type:* double

---

##### `NvmesInput`<sup>Optional</sup> <a name="NvmesInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.nvmesInput"></a>

```csharp
public double NvmesInput { get; }
```

- *Type:* double

---

##### `OcpusInput`<sup>Optional</sup> <a name="OcpusInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.ocpusInput"></a>

```csharp
public double OcpusInput { get; }
```

- *Type:* double

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; }
```

- *Type:* double

---

##### `Nvmes`<sup>Required</sup> <a name="Nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.nvmes"></a>

```csharp
public double Nvmes { get; }
```

- *Type:* double

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.ocpus"></a>

```csharp
public double Ocpus { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.internalValue"></a>

```csharp
public BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig">BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig</a>

---


### BdsBdsInstanceEdgeNodeOutputReference <a name="BdsBdsInstanceEdgeNodeOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceEdgeNodeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.putShapeConfig">PutShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.resetBlockVolumeSizeInGbs">ResetBlockVolumeSizeInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.resetShapeConfig">ResetShapeConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutShapeConfig` <a name="PutShapeConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.putShapeConfig"></a>

```csharp
private void PutShapeConfig(BdsBdsInstanceEdgeNodeShapeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.putShapeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfig">BdsBdsInstanceEdgeNodeShapeConfig</a>

---

##### `ResetBlockVolumeSizeInGbs` <a name="ResetBlockVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.resetBlockVolumeSizeInGbs"></a>

```csharp
private void ResetBlockVolumeSizeInGbs()
```

##### `ResetShapeConfig` <a name="ResetShapeConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.resetShapeConfig"></a>

```csharp
private void ResetShapeConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference">BdsBdsInstanceEdgeNodeShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.blockVolumeSizeInGbsInput">BlockVolumeSizeInGbsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.numberOfNodesInput">NumberOfNodesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.shapeConfigInput">ShapeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfig">BdsBdsInstanceEdgeNodeShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.shapeInput">ShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.blockVolumeSizeInGbs">BlockVolumeSizeInGbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.numberOfNodes">NumberOfNodes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode">BdsBdsInstanceEdgeNode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ShapeConfig`<sup>Required</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.shapeConfig"></a>

```csharp
public BdsBdsInstanceEdgeNodeShapeConfigOutputReference ShapeConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference">BdsBdsInstanceEdgeNodeShapeConfigOutputReference</a>

---

##### `BlockVolumeSizeInGbsInput`<sup>Optional</sup> <a name="BlockVolumeSizeInGbsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.blockVolumeSizeInGbsInput"></a>

```csharp
public string BlockVolumeSizeInGbsInput { get; }
```

- *Type:* string

---

##### `NumberOfNodesInput`<sup>Optional</sup> <a name="NumberOfNodesInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.numberOfNodesInput"></a>

```csharp
public double NumberOfNodesInput { get; }
```

- *Type:* double

---

##### `ShapeConfigInput`<sup>Optional</sup> <a name="ShapeConfigInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.shapeConfigInput"></a>

```csharp
public BdsBdsInstanceEdgeNodeShapeConfig ShapeConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfig">BdsBdsInstanceEdgeNodeShapeConfig</a>

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.shapeInput"></a>

```csharp
public string ShapeInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `BlockVolumeSizeInGbs`<sup>Required</sup> <a name="BlockVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.blockVolumeSizeInGbs"></a>

```csharp
public string BlockVolumeSizeInGbs { get; }
```

- *Type:* string

---

##### `NumberOfNodes`<sup>Required</sup> <a name="NumberOfNodes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.numberOfNodes"></a>

```csharp
public double NumberOfNodes { get; }
```

- *Type:* double

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.internalValue"></a>

```csharp
public BdsBdsInstanceEdgeNode InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode">BdsBdsInstanceEdgeNode</a>

---


### BdsBdsInstanceEdgeNodeShapeConfigOutputReference <a name="BdsBdsInstanceEdgeNodeShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceEdgeNodeShapeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.resetMemoryInGbs">ResetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.resetNvmes">ResetNvmes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.resetOcpus">ResetOcpus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMemoryInGbs` <a name="ResetMemoryInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.resetMemoryInGbs"></a>

```csharp
private void ResetMemoryInGbs()
```

##### `ResetNvmes` <a name="ResetNvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.resetNvmes"></a>

```csharp
private void ResetNvmes()
```

##### `ResetOcpus` <a name="ResetOcpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.resetOcpus"></a>

```csharp
private void ResetOcpus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.memoryInGbsInput">MemoryInGbsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.nvmesInput">NvmesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.ocpusInput">OcpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.nvmes">Nvmes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfig">BdsBdsInstanceEdgeNodeShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MemoryInGbsInput`<sup>Optional</sup> <a name="MemoryInGbsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.memoryInGbsInput"></a>

```csharp
public double MemoryInGbsInput { get; }
```

- *Type:* double

---

##### `NvmesInput`<sup>Optional</sup> <a name="NvmesInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.nvmesInput"></a>

```csharp
public double NvmesInput { get; }
```

- *Type:* double

---

##### `OcpusInput`<sup>Optional</sup> <a name="OcpusInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.ocpusInput"></a>

```csharp
public double OcpusInput { get; }
```

- *Type:* double

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; }
```

- *Type:* double

---

##### `Nvmes`<sup>Required</sup> <a name="Nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.nvmes"></a>

```csharp
public double Nvmes { get; }
```

- *Type:* double

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.ocpus"></a>

```csharp
public double Ocpus { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.internalValue"></a>

```csharp
public BdsBdsInstanceEdgeNodeShapeConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfig">BdsBdsInstanceEdgeNodeShapeConfig</a>

---


### BdsBdsInstanceKafkaBrokerNodeOutputReference <a name="BdsBdsInstanceKafkaBrokerNodeOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceKafkaBrokerNodeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.putShapeConfig">PutShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.resetBlockVolumeSizeInGbs">ResetBlockVolumeSizeInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.resetShapeConfig">ResetShapeConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutShapeConfig` <a name="PutShapeConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.putShapeConfig"></a>

```csharp
private void PutShapeConfig(BdsBdsInstanceKafkaBrokerNodeShapeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.putShapeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfig">BdsBdsInstanceKafkaBrokerNodeShapeConfig</a>

---

##### `ResetBlockVolumeSizeInGbs` <a name="ResetBlockVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.resetBlockVolumeSizeInGbs"></a>

```csharp
private void ResetBlockVolumeSizeInGbs()
```

##### `ResetShapeConfig` <a name="ResetShapeConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.resetShapeConfig"></a>

```csharp
private void ResetShapeConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference">BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.blockVolumeSizeInGbsInput">BlockVolumeSizeInGbsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.numberOfKafkaNodesInput">NumberOfKafkaNodesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.shapeConfigInput">ShapeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfig">BdsBdsInstanceKafkaBrokerNodeShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.shapeInput">ShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.blockVolumeSizeInGbs">BlockVolumeSizeInGbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.numberOfKafkaNodes">NumberOfKafkaNodes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode">BdsBdsInstanceKafkaBrokerNode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ShapeConfig`<sup>Required</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.shapeConfig"></a>

```csharp
public BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference ShapeConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference">BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference</a>

---

##### `BlockVolumeSizeInGbsInput`<sup>Optional</sup> <a name="BlockVolumeSizeInGbsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.blockVolumeSizeInGbsInput"></a>

```csharp
public string BlockVolumeSizeInGbsInput { get; }
```

- *Type:* string

---

##### `NumberOfKafkaNodesInput`<sup>Optional</sup> <a name="NumberOfKafkaNodesInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.numberOfKafkaNodesInput"></a>

```csharp
public double NumberOfKafkaNodesInput { get; }
```

- *Type:* double

---

##### `ShapeConfigInput`<sup>Optional</sup> <a name="ShapeConfigInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.shapeConfigInput"></a>

```csharp
public BdsBdsInstanceKafkaBrokerNodeShapeConfig ShapeConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfig">BdsBdsInstanceKafkaBrokerNodeShapeConfig</a>

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.shapeInput"></a>

```csharp
public string ShapeInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `BlockVolumeSizeInGbs`<sup>Required</sup> <a name="BlockVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.blockVolumeSizeInGbs"></a>

```csharp
public string BlockVolumeSizeInGbs { get; }
```

- *Type:* string

---

##### `NumberOfKafkaNodes`<sup>Required</sup> <a name="NumberOfKafkaNodes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.numberOfKafkaNodes"></a>

```csharp
public double NumberOfKafkaNodes { get; }
```

- *Type:* double

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.internalValue"></a>

```csharp
public BdsBdsInstanceKafkaBrokerNode InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode">BdsBdsInstanceKafkaBrokerNode</a>

---


### BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference <a name="BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.resetMemoryInGbs">ResetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.resetNvmes">ResetNvmes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.resetOcpus">ResetOcpus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMemoryInGbs` <a name="ResetMemoryInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.resetMemoryInGbs"></a>

```csharp
private void ResetMemoryInGbs()
```

##### `ResetNvmes` <a name="ResetNvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.resetNvmes"></a>

```csharp
private void ResetNvmes()
```

##### `ResetOcpus` <a name="ResetOcpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.resetOcpus"></a>

```csharp
private void ResetOcpus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.memoryInGbsInput">MemoryInGbsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.nvmesInput">NvmesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.ocpusInput">OcpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.nvmes">Nvmes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfig">BdsBdsInstanceKafkaBrokerNodeShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MemoryInGbsInput`<sup>Optional</sup> <a name="MemoryInGbsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.memoryInGbsInput"></a>

```csharp
public double MemoryInGbsInput { get; }
```

- *Type:* double

---

##### `NvmesInput`<sup>Optional</sup> <a name="NvmesInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.nvmesInput"></a>

```csharp
public double NvmesInput { get; }
```

- *Type:* double

---

##### `OcpusInput`<sup>Optional</sup> <a name="OcpusInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.ocpusInput"></a>

```csharp
public double OcpusInput { get; }
```

- *Type:* double

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; }
```

- *Type:* double

---

##### `Nvmes`<sup>Required</sup> <a name="Nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.nvmes"></a>

```csharp
public double Nvmes { get; }
```

- *Type:* double

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.ocpus"></a>

```csharp
public double Ocpus { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.internalValue"></a>

```csharp
public BdsBdsInstanceKafkaBrokerNodeShapeConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfig">BdsBdsInstanceKafkaBrokerNodeShapeConfig</a>

---


### BdsBdsInstanceMasterNodeOutputReference <a name="BdsBdsInstanceMasterNodeOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceMasterNodeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.putShapeConfig">PutShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.resetBlockVolumeSizeInGbs">ResetBlockVolumeSizeInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.resetShapeConfig">ResetShapeConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutShapeConfig` <a name="PutShapeConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.putShapeConfig"></a>

```csharp
private void PutShapeConfig(BdsBdsInstanceMasterNodeShapeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.putShapeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfig">BdsBdsInstanceMasterNodeShapeConfig</a>

---

##### `ResetBlockVolumeSizeInGbs` <a name="ResetBlockVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.resetBlockVolumeSizeInGbs"></a>

```csharp
private void ResetBlockVolumeSizeInGbs()
```

##### `ResetShapeConfig` <a name="ResetShapeConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.resetShapeConfig"></a>

```csharp
private void ResetShapeConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference">BdsBdsInstanceMasterNodeShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.blockVolumeSizeInGbsInput">BlockVolumeSizeInGbsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.numberOfNodesInput">NumberOfNodesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.shapeConfigInput">ShapeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfig">BdsBdsInstanceMasterNodeShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.shapeInput">ShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.blockVolumeSizeInGbs">BlockVolumeSizeInGbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.numberOfNodes">NumberOfNodes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode">BdsBdsInstanceMasterNode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ShapeConfig`<sup>Required</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.shapeConfig"></a>

```csharp
public BdsBdsInstanceMasterNodeShapeConfigOutputReference ShapeConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference">BdsBdsInstanceMasterNodeShapeConfigOutputReference</a>

---

##### `BlockVolumeSizeInGbsInput`<sup>Optional</sup> <a name="BlockVolumeSizeInGbsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.blockVolumeSizeInGbsInput"></a>

```csharp
public string BlockVolumeSizeInGbsInput { get; }
```

- *Type:* string

---

##### `NumberOfNodesInput`<sup>Optional</sup> <a name="NumberOfNodesInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.numberOfNodesInput"></a>

```csharp
public double NumberOfNodesInput { get; }
```

- *Type:* double

---

##### `ShapeConfigInput`<sup>Optional</sup> <a name="ShapeConfigInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.shapeConfigInput"></a>

```csharp
public BdsBdsInstanceMasterNodeShapeConfig ShapeConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfig">BdsBdsInstanceMasterNodeShapeConfig</a>

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.shapeInput"></a>

```csharp
public string ShapeInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `BlockVolumeSizeInGbs`<sup>Required</sup> <a name="BlockVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.blockVolumeSizeInGbs"></a>

```csharp
public string BlockVolumeSizeInGbs { get; }
```

- *Type:* string

---

##### `NumberOfNodes`<sup>Required</sup> <a name="NumberOfNodes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.numberOfNodes"></a>

```csharp
public double NumberOfNodes { get; }
```

- *Type:* double

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.internalValue"></a>

```csharp
public BdsBdsInstanceMasterNode InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode">BdsBdsInstanceMasterNode</a>

---


### BdsBdsInstanceMasterNodeShapeConfigOutputReference <a name="BdsBdsInstanceMasterNodeShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceMasterNodeShapeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.resetMemoryInGbs">ResetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.resetNvmes">ResetNvmes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.resetOcpus">ResetOcpus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMemoryInGbs` <a name="ResetMemoryInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.resetMemoryInGbs"></a>

```csharp
private void ResetMemoryInGbs()
```

##### `ResetNvmes` <a name="ResetNvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.resetNvmes"></a>

```csharp
private void ResetNvmes()
```

##### `ResetOcpus` <a name="ResetOcpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.resetOcpus"></a>

```csharp
private void ResetOcpus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.property.memoryInGbsInput">MemoryInGbsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.property.nvmesInput">NvmesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.property.ocpusInput">OcpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.property.nvmes">Nvmes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfig">BdsBdsInstanceMasterNodeShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MemoryInGbsInput`<sup>Optional</sup> <a name="MemoryInGbsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.property.memoryInGbsInput"></a>

```csharp
public double MemoryInGbsInput { get; }
```

- *Type:* double

---

##### `NvmesInput`<sup>Optional</sup> <a name="NvmesInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.property.nvmesInput"></a>

```csharp
public double NvmesInput { get; }
```

- *Type:* double

---

##### `OcpusInput`<sup>Optional</sup> <a name="OcpusInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.property.ocpusInput"></a>

```csharp
public double OcpusInput { get; }
```

- *Type:* double

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; }
```

- *Type:* double

---

##### `Nvmes`<sup>Required</sup> <a name="Nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.property.nvmes"></a>

```csharp
public double Nvmes { get; }
```

- *Type:* double

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.property.ocpus"></a>

```csharp
public double Ocpus { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.property.internalValue"></a>

```csharp
public BdsBdsInstanceMasterNodeShapeConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfig">BdsBdsInstanceMasterNodeShapeConfig</a>

---


### BdsBdsInstanceNetworkConfigOutputReference <a name="BdsBdsInstanceNetworkConfigOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceNetworkConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.resetCidrBlock">ResetCidrBlock</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.resetIsNatGatewayRequired">ResetIsNatGatewayRequired</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidrBlock` <a name="ResetCidrBlock" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.resetCidrBlock"></a>

```csharp
private void ResetCidrBlock()
```

##### `ResetIsNatGatewayRequired` <a name="ResetIsNatGatewayRequired" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.resetIsNatGatewayRequired"></a>

```csharp
private void ResetIsNatGatewayRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.property.cidrBlockInput">CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.property.isNatGatewayRequiredInput">IsNatGatewayRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.property.isNatGatewayRequired">IsNatGatewayRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfig">BdsBdsInstanceNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrBlockInput`<sup>Optional</sup> <a name="CidrBlockInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.property.cidrBlockInput"></a>

```csharp
public string CidrBlockInput { get; }
```

- *Type:* string

---

##### `IsNatGatewayRequiredInput`<sup>Optional</sup> <a name="IsNatGatewayRequiredInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.property.isNatGatewayRequiredInput"></a>

```csharp
public object IsNatGatewayRequiredInput { get; }
```

- *Type:* object

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; }
```

- *Type:* string

---

##### `IsNatGatewayRequired`<sup>Required</sup> <a name="IsNatGatewayRequired" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.property.isNatGatewayRequired"></a>

```csharp
public object IsNatGatewayRequired { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.property.internalValue"></a>

```csharp
public BdsBdsInstanceNetworkConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfig">BdsBdsInstanceNetworkConfig</a>

---


### BdsBdsInstanceNodesAttachedBlockVolumesList <a name="BdsBdsInstanceNodesAttachedBlockVolumesList" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceNodesAttachedBlockVolumesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.get"></a>

```csharp
private BdsBdsInstanceNodesAttachedBlockVolumesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### BdsBdsInstanceNodesAttachedBlockVolumesOutputReference <a name="BdsBdsInstanceNodesAttachedBlockVolumesOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceNodesAttachedBlockVolumesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.property.volumeAttachmentId">VolumeAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.property.volumeSizeInGbs">VolumeSizeInGbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumes">BdsBdsInstanceNodesAttachedBlockVolumes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VolumeAttachmentId`<sup>Required</sup> <a name="VolumeAttachmentId" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.property.volumeAttachmentId"></a>

```csharp
public string VolumeAttachmentId { get; }
```

- *Type:* string

---

##### `VolumeSizeInGbs`<sup>Required</sup> <a name="VolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.property.volumeSizeInGbs"></a>

```csharp
public string VolumeSizeInGbs { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.property.internalValue"></a>

```csharp
public BdsBdsInstanceNodesAttachedBlockVolumes InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumes">BdsBdsInstanceNodesAttachedBlockVolumes</a>

---


### BdsBdsInstanceNodesList <a name="BdsBdsInstanceNodesList" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceNodesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.get"></a>

```csharp
private BdsBdsInstanceNodesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### BdsBdsInstanceNodesOutputReference <a name="BdsBdsInstanceNodesOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceNodesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.attachedBlockVolumes">AttachedBlockVolumes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList">BdsBdsInstanceNodesAttachedBlockVolumesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.faultDomain">FaultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.imageId">ImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.isRebootRequired">IsRebootRequired</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.localDisksTotalSizeInGbs">LocalDisksTotalSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.nodeType">NodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.nvmes">Nvmes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.ocpus">Ocpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.osVersion">OsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.sshFingerprint">SshFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.timeMaintenanceRebootDue">TimeMaintenanceRebootDue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodes">BdsBdsInstanceNodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttachedBlockVolumes`<sup>Required</sup> <a name="AttachedBlockVolumes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.attachedBlockVolumes"></a>

```csharp
public BdsBdsInstanceNodesAttachedBlockVolumesList AttachedBlockVolumes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList">BdsBdsInstanceNodesAttachedBlockVolumesList</a>

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.faultDomain"></a>

```csharp
public string FaultDomain { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.imageId"></a>

```csharp
public string ImageId { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `IsRebootRequired`<sup>Required</sup> <a name="IsRebootRequired" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.isRebootRequired"></a>

```csharp
public IResolvable IsRebootRequired { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LocalDisksTotalSizeInGbs`<sup>Required</sup> <a name="LocalDisksTotalSizeInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.localDisksTotalSizeInGbs"></a>

```csharp
public double LocalDisksTotalSizeInGbs { get; }
```

- *Type:* double

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; }
```

- *Type:* double

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.nodeType"></a>

```csharp
public string NodeType { get; }
```

- *Type:* string

---

##### `Nvmes`<sup>Required</sup> <a name="Nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.nvmes"></a>

```csharp
public double Nvmes { get; }
```

- *Type:* double

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.ocpus"></a>

```csharp
public double Ocpus { get; }
```

- *Type:* double

---

##### `OsVersion`<sup>Required</sup> <a name="OsVersion" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.osVersion"></a>

```csharp
public string OsVersion { get; }
```

- *Type:* string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `SshFingerprint`<sup>Required</sup> <a name="SshFingerprint" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.sshFingerprint"></a>

```csharp
public string SshFingerprint { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeMaintenanceRebootDue`<sup>Required</sup> <a name="TimeMaintenanceRebootDue" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.timeMaintenanceRebootDue"></a>

```csharp
public string TimeMaintenanceRebootDue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.internalValue"></a>

```csharp
public BdsBdsInstanceNodes InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodes">BdsBdsInstanceNodes</a>

---


### BdsBdsInstanceTimeoutsOutputReference <a name="BdsBdsInstanceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BdsBdsInstanceUtilNodeOutputReference <a name="BdsBdsInstanceUtilNodeOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceUtilNodeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.putShapeConfig">PutShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.resetBlockVolumeSizeInGbs">ResetBlockVolumeSizeInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.resetShapeConfig">ResetShapeConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutShapeConfig` <a name="PutShapeConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.putShapeConfig"></a>

```csharp
private void PutShapeConfig(BdsBdsInstanceUtilNodeShapeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.putShapeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfig">BdsBdsInstanceUtilNodeShapeConfig</a>

---

##### `ResetBlockVolumeSizeInGbs` <a name="ResetBlockVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.resetBlockVolumeSizeInGbs"></a>

```csharp
private void ResetBlockVolumeSizeInGbs()
```

##### `ResetShapeConfig` <a name="ResetShapeConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.resetShapeConfig"></a>

```csharp
private void ResetShapeConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference">BdsBdsInstanceUtilNodeShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.blockVolumeSizeInGbsInput">BlockVolumeSizeInGbsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.numberOfNodesInput">NumberOfNodesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.shapeConfigInput">ShapeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfig">BdsBdsInstanceUtilNodeShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.shapeInput">ShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.blockVolumeSizeInGbs">BlockVolumeSizeInGbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.numberOfNodes">NumberOfNodes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode">BdsBdsInstanceUtilNode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ShapeConfig`<sup>Required</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.shapeConfig"></a>

```csharp
public BdsBdsInstanceUtilNodeShapeConfigOutputReference ShapeConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference">BdsBdsInstanceUtilNodeShapeConfigOutputReference</a>

---

##### `BlockVolumeSizeInGbsInput`<sup>Optional</sup> <a name="BlockVolumeSizeInGbsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.blockVolumeSizeInGbsInput"></a>

```csharp
public string BlockVolumeSizeInGbsInput { get; }
```

- *Type:* string

---

##### `NumberOfNodesInput`<sup>Optional</sup> <a name="NumberOfNodesInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.numberOfNodesInput"></a>

```csharp
public double NumberOfNodesInput { get; }
```

- *Type:* double

---

##### `ShapeConfigInput`<sup>Optional</sup> <a name="ShapeConfigInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.shapeConfigInput"></a>

```csharp
public BdsBdsInstanceUtilNodeShapeConfig ShapeConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfig">BdsBdsInstanceUtilNodeShapeConfig</a>

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.shapeInput"></a>

```csharp
public string ShapeInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `BlockVolumeSizeInGbs`<sup>Required</sup> <a name="BlockVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.blockVolumeSizeInGbs"></a>

```csharp
public string BlockVolumeSizeInGbs { get; }
```

- *Type:* string

---

##### `NumberOfNodes`<sup>Required</sup> <a name="NumberOfNodes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.numberOfNodes"></a>

```csharp
public double NumberOfNodes { get; }
```

- *Type:* double

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.internalValue"></a>

```csharp
public BdsBdsInstanceUtilNode InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode">BdsBdsInstanceUtilNode</a>

---


### BdsBdsInstanceUtilNodeShapeConfigOutputReference <a name="BdsBdsInstanceUtilNodeShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceUtilNodeShapeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.resetMemoryInGbs">ResetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.resetNvmes">ResetNvmes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.resetOcpus">ResetOcpus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMemoryInGbs` <a name="ResetMemoryInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.resetMemoryInGbs"></a>

```csharp
private void ResetMemoryInGbs()
```

##### `ResetNvmes` <a name="ResetNvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.resetNvmes"></a>

```csharp
private void ResetNvmes()
```

##### `ResetOcpus` <a name="ResetOcpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.resetOcpus"></a>

```csharp
private void ResetOcpus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.property.memoryInGbsInput">MemoryInGbsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.property.nvmesInput">NvmesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.property.ocpusInput">OcpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.property.nvmes">Nvmes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfig">BdsBdsInstanceUtilNodeShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MemoryInGbsInput`<sup>Optional</sup> <a name="MemoryInGbsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.property.memoryInGbsInput"></a>

```csharp
public double MemoryInGbsInput { get; }
```

- *Type:* double

---

##### `NvmesInput`<sup>Optional</sup> <a name="NvmesInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.property.nvmesInput"></a>

```csharp
public double NvmesInput { get; }
```

- *Type:* double

---

##### `OcpusInput`<sup>Optional</sup> <a name="OcpusInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.property.ocpusInput"></a>

```csharp
public double OcpusInput { get; }
```

- *Type:* double

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; }
```

- *Type:* double

---

##### `Nvmes`<sup>Required</sup> <a name="Nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.property.nvmes"></a>

```csharp
public double Nvmes { get; }
```

- *Type:* double

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.property.ocpus"></a>

```csharp
public double Ocpus { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.property.internalValue"></a>

```csharp
public BdsBdsInstanceUtilNodeShapeConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfig">BdsBdsInstanceUtilNodeShapeConfig</a>

---


### BdsBdsInstanceWorkerNodeOutputReference <a name="BdsBdsInstanceWorkerNodeOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceWorkerNodeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.putShapeConfig">PutShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.resetBlockVolumeSizeInGbs">ResetBlockVolumeSizeInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.resetShapeConfig">ResetShapeConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutShapeConfig` <a name="PutShapeConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.putShapeConfig"></a>

```csharp
private void PutShapeConfig(BdsBdsInstanceWorkerNodeShapeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.putShapeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfig">BdsBdsInstanceWorkerNodeShapeConfig</a>

---

##### `ResetBlockVolumeSizeInGbs` <a name="ResetBlockVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.resetBlockVolumeSizeInGbs"></a>

```csharp
private void ResetBlockVolumeSizeInGbs()
```

##### `ResetShapeConfig` <a name="ResetShapeConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.resetShapeConfig"></a>

```csharp
private void ResetShapeConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference">BdsBdsInstanceWorkerNodeShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.blockVolumeSizeInGbsInput">BlockVolumeSizeInGbsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.numberOfNodesInput">NumberOfNodesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.shapeConfigInput">ShapeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfig">BdsBdsInstanceWorkerNodeShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.shapeInput">ShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.blockVolumeSizeInGbs">BlockVolumeSizeInGbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.numberOfNodes">NumberOfNodes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode">BdsBdsInstanceWorkerNode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ShapeConfig`<sup>Required</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.shapeConfig"></a>

```csharp
public BdsBdsInstanceWorkerNodeShapeConfigOutputReference ShapeConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference">BdsBdsInstanceWorkerNodeShapeConfigOutputReference</a>

---

##### `BlockVolumeSizeInGbsInput`<sup>Optional</sup> <a name="BlockVolumeSizeInGbsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.blockVolumeSizeInGbsInput"></a>

```csharp
public string BlockVolumeSizeInGbsInput { get; }
```

- *Type:* string

---

##### `NumberOfNodesInput`<sup>Optional</sup> <a name="NumberOfNodesInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.numberOfNodesInput"></a>

```csharp
public double NumberOfNodesInput { get; }
```

- *Type:* double

---

##### `ShapeConfigInput`<sup>Optional</sup> <a name="ShapeConfigInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.shapeConfigInput"></a>

```csharp
public BdsBdsInstanceWorkerNodeShapeConfig ShapeConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfig">BdsBdsInstanceWorkerNodeShapeConfig</a>

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.shapeInput"></a>

```csharp
public string ShapeInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `BlockVolumeSizeInGbs`<sup>Required</sup> <a name="BlockVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.blockVolumeSizeInGbs"></a>

```csharp
public string BlockVolumeSizeInGbs { get; }
```

- *Type:* string

---

##### `NumberOfNodes`<sup>Required</sup> <a name="NumberOfNodes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.numberOfNodes"></a>

```csharp
public double NumberOfNodes { get; }
```

- *Type:* double

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.internalValue"></a>

```csharp
public BdsBdsInstanceWorkerNode InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode">BdsBdsInstanceWorkerNode</a>

---


### BdsBdsInstanceWorkerNodeShapeConfigOutputReference <a name="BdsBdsInstanceWorkerNodeShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceWorkerNodeShapeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.resetMemoryInGbs">ResetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.resetNvmes">ResetNvmes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.resetOcpus">ResetOcpus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMemoryInGbs` <a name="ResetMemoryInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.resetMemoryInGbs"></a>

```csharp
private void ResetMemoryInGbs()
```

##### `ResetNvmes` <a name="ResetNvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.resetNvmes"></a>

```csharp
private void ResetNvmes()
```

##### `ResetOcpus` <a name="ResetOcpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.resetOcpus"></a>

```csharp
private void ResetOcpus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.memoryInGbsInput">MemoryInGbsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.nvmesInput">NvmesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.ocpusInput">OcpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.nvmes">Nvmes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfig">BdsBdsInstanceWorkerNodeShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MemoryInGbsInput`<sup>Optional</sup> <a name="MemoryInGbsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.memoryInGbsInput"></a>

```csharp
public double MemoryInGbsInput { get; }
```

- *Type:* double

---

##### `NvmesInput`<sup>Optional</sup> <a name="NvmesInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.nvmesInput"></a>

```csharp
public double NvmesInput { get; }
```

- *Type:* double

---

##### `OcpusInput`<sup>Optional</sup> <a name="OcpusInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.ocpusInput"></a>

```csharp
public double OcpusInput { get; }
```

- *Type:* double

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; }
```

- *Type:* double

---

##### `Nvmes`<sup>Required</sup> <a name="Nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.nvmes"></a>

```csharp
public double Nvmes { get; }
```

- *Type:* double

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.ocpus"></a>

```csharp
public double Ocpus { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.internalValue"></a>

```csharp
public BdsBdsInstanceWorkerNodeShapeConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfig">BdsBdsInstanceWorkerNodeShapeConfig</a>

---



