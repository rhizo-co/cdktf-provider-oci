# `coreVolumeGroup` Submodule <a name="`coreVolumeGroup` Submodule" id="rhizo-co-terraform-provider-oci.coreVolumeGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreVolumeGroup <a name="CoreVolumeGroup" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group oci_core_volume_group}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreVolumeGroup(Construct Scope, string Id, CoreVolumeGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig">CoreVolumeGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig">CoreVolumeGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.putSourceDetails">PutSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.putVolumeGroupReplicas">PutVolumeGroupReplicas</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetBackupPolicyId">ResetBackupPolicyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetClusterPlacementGroupId">ResetClusterPlacementGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetPreserveVolumeReplica">ResetPreserveVolumeReplica</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetVolumeGroupReplicas">ResetVolumeGroupReplicas</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetVolumeGroupReplicasDeletion">ResetVolumeGroupReplicasDeletion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetVolumeIds">ResetVolumeIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetXrcKmsKeyId">ResetXrcKmsKeyId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSourceDetails` <a name="PutSourceDetails" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.putSourceDetails"></a>

```csharp
private void PutSourceDetails(CoreVolumeGroupSourceDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.putSourceDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails">CoreVolumeGroupSourceDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(CoreVolumeGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts">CoreVolumeGroupTimeouts</a>

---

##### `PutVolumeGroupReplicas` <a name="PutVolumeGroupReplicas" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.putVolumeGroupReplicas"></a>

```csharp
private void PutVolumeGroupReplicas(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.putVolumeGroupReplicas.parameter.value"></a>

- *Type:* object

---

##### `ResetBackupPolicyId` <a name="ResetBackupPolicyId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetBackupPolicyId"></a>

```csharp
private void ResetBackupPolicyId()
```

##### `ResetClusterPlacementGroupId` <a name="ResetClusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetClusterPlacementGroupId"></a>

```csharp
private void ResetClusterPlacementGroupId()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPreserveVolumeReplica` <a name="ResetPreserveVolumeReplica" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetPreserveVolumeReplica"></a>

```csharp
private void ResetPreserveVolumeReplica()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVolumeGroupReplicas` <a name="ResetVolumeGroupReplicas" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetVolumeGroupReplicas"></a>

```csharp
private void ResetVolumeGroupReplicas()
```

##### `ResetVolumeGroupReplicasDeletion` <a name="ResetVolumeGroupReplicasDeletion" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetVolumeGroupReplicasDeletion"></a>

```csharp
private void ResetVolumeGroupReplicasDeletion()
```

##### `ResetVolumeIds` <a name="ResetVolumeIds" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetVolumeIds"></a>

```csharp
private void ResetVolumeIds()
```

##### `ResetXrcKmsKeyId` <a name="ResetXrcKmsKeyId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetXrcKmsKeyId"></a>

```csharp
private void ResetXrcKmsKeyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CoreVolumeGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreVolumeGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreVolumeGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreVolumeGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreVolumeGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CoreVolumeGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CoreVolumeGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CoreVolumeGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CoreVolumeGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.isHydrated">IsHydrated</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.sizeInGbs">SizeInGbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.sizeInMbs">SizeInMbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.sourceDetails">SourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference">CoreVolumeGroupSourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference">CoreVolumeGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.volumeGroupReplicas">VolumeGroupReplicas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList">CoreVolumeGroupVolumeGroupReplicasList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.backupPolicyIdInput">BackupPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.clusterPlacementGroupIdInput">ClusterPlacementGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.preserveVolumeReplicaInput">PreserveVolumeReplicaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.sourceDetailsInput">SourceDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails">CoreVolumeGroupSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.volumeGroupReplicasDeletionInput">VolumeGroupReplicasDeletionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.volumeGroupReplicasInput">VolumeGroupReplicasInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.volumeIdsInput">VolumeIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.xrcKmsKeyIdInput">XrcKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.backupPolicyId">BackupPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.clusterPlacementGroupId">ClusterPlacementGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.preserveVolumeReplica">PreserveVolumeReplica</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.volumeGroupReplicasDeletion">VolumeGroupReplicasDeletion</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.volumeIds">VolumeIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.xrcKmsKeyId">XrcKmsKeyId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IsHydrated`<sup>Required</sup> <a name="IsHydrated" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.isHydrated"></a>

```csharp
public IResolvable IsHydrated { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SizeInGbs`<sup>Required</sup> <a name="SizeInGbs" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.sizeInGbs"></a>

```csharp
public string SizeInGbs { get; }
```

- *Type:* string

---

##### `SizeInMbs`<sup>Required</sup> <a name="SizeInMbs" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.sizeInMbs"></a>

```csharp
public string SizeInMbs { get; }
```

- *Type:* string

---

##### `SourceDetails`<sup>Required</sup> <a name="SourceDetails" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.sourceDetails"></a>

```csharp
public CoreVolumeGroupSourceDetailsOutputReference SourceDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference">CoreVolumeGroupSourceDetailsOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.timeouts"></a>

```csharp
public CoreVolumeGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference">CoreVolumeGroupTimeoutsOutputReference</a>

---

##### `VolumeGroupReplicas`<sup>Required</sup> <a name="VolumeGroupReplicas" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.volumeGroupReplicas"></a>

```csharp
public CoreVolumeGroupVolumeGroupReplicasList VolumeGroupReplicas { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList">CoreVolumeGroupVolumeGroupReplicasList</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.availabilityDomainInput"></a>

```csharp
public string AvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `BackupPolicyIdInput`<sup>Optional</sup> <a name="BackupPolicyIdInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.backupPolicyIdInput"></a>

```csharp
public string BackupPolicyIdInput { get; }
```

- *Type:* string

---

##### `ClusterPlacementGroupIdInput`<sup>Optional</sup> <a name="ClusterPlacementGroupIdInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.clusterPlacementGroupIdInput"></a>

```csharp
public string ClusterPlacementGroupIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PreserveVolumeReplicaInput`<sup>Optional</sup> <a name="PreserveVolumeReplicaInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.preserveVolumeReplicaInput"></a>

```csharp
public object PreserveVolumeReplicaInput { get; }
```

- *Type:* object

---

##### `SourceDetailsInput`<sup>Optional</sup> <a name="SourceDetailsInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.sourceDetailsInput"></a>

```csharp
public CoreVolumeGroupSourceDetails SourceDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails">CoreVolumeGroupSourceDetails</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VolumeGroupReplicasDeletionInput`<sup>Optional</sup> <a name="VolumeGroupReplicasDeletionInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.volumeGroupReplicasDeletionInput"></a>

```csharp
public object VolumeGroupReplicasDeletionInput { get; }
```

- *Type:* object

---

##### `VolumeGroupReplicasInput`<sup>Optional</sup> <a name="VolumeGroupReplicasInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.volumeGroupReplicasInput"></a>

```csharp
public object VolumeGroupReplicasInput { get; }
```

- *Type:* object

---

##### `VolumeIdsInput`<sup>Optional</sup> <a name="VolumeIdsInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.volumeIdsInput"></a>

```csharp
public string[] VolumeIdsInput { get; }
```

- *Type:* string[]

---

##### `XrcKmsKeyIdInput`<sup>Optional</sup> <a name="XrcKmsKeyIdInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.xrcKmsKeyIdInput"></a>

```csharp
public string XrcKmsKeyIdInput { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `BackupPolicyId`<sup>Required</sup> <a name="BackupPolicyId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.backupPolicyId"></a>

```csharp
public string BackupPolicyId { get; }
```

- *Type:* string

---

##### `ClusterPlacementGroupId`<sup>Required</sup> <a name="ClusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.clusterPlacementGroupId"></a>

```csharp
public string ClusterPlacementGroupId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PreserveVolumeReplica`<sup>Required</sup> <a name="PreserveVolumeReplica" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.preserveVolumeReplica"></a>

```csharp
public object PreserveVolumeReplica { get; }
```

- *Type:* object

---

##### `VolumeGroupReplicasDeletion`<sup>Required</sup> <a name="VolumeGroupReplicasDeletion" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.volumeGroupReplicasDeletion"></a>

```csharp
public object VolumeGroupReplicasDeletion { get; }
```

- *Type:* object

---

##### `VolumeIds`<sup>Required</sup> <a name="VolumeIds" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.volumeIds"></a>

```csharp
public string[] VolumeIds { get; }
```

- *Type:* string[]

---

##### `XrcKmsKeyId`<sup>Required</sup> <a name="XrcKmsKeyId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.xrcKmsKeyId"></a>

```csharp
public string XrcKmsKeyId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreVolumeGroupConfig <a name="CoreVolumeGroupConfig" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreVolumeGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AvailabilityDomain,
    string CompartmentId,
    CoreVolumeGroupSourceDetails SourceDetails,
    string BackupPolicyId = null,
    string ClusterPlacementGroupId = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    object PreserveVolumeReplica = null,
    CoreVolumeGroupTimeouts Timeouts = null,
    object VolumeGroupReplicas = null,
    object VolumeGroupReplicasDeletion = null,
    string[] VolumeIds = null,
    string XrcKmsKeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#availability_domain CoreVolumeGroup#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#compartment_id CoreVolumeGroup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.sourceDetails">SourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails">CoreVolumeGroupSourceDetails</a></code> | source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.backupPolicyId">BackupPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#backup_policy_id CoreVolumeGroup#backup_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.clusterPlacementGroupId">ClusterPlacementGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#cluster_placement_group_id CoreVolumeGroup#cluster_placement_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#defined_tags CoreVolumeGroup#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#display_name CoreVolumeGroup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#freeform_tags CoreVolumeGroup#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#id CoreVolumeGroup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.preserveVolumeReplica">PreserveVolumeReplica</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#preserve_volume_replica CoreVolumeGroup#preserve_volume_replica}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts">CoreVolumeGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.volumeGroupReplicas">VolumeGroupReplicas</a></code> | <code>object</code> | volume_group_replicas block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.volumeGroupReplicasDeletion">VolumeGroupReplicasDeletion</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_group_replicas_deletion CoreVolumeGroup#volume_group_replicas_deletion}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.volumeIds">VolumeIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_ids CoreVolumeGroup#volume_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.xrcKmsKeyId">XrcKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#xrc_kms_key_id CoreVolumeGroup#xrc_kms_key_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#availability_domain CoreVolumeGroup#availability_domain}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#compartment_id CoreVolumeGroup#compartment_id}.

---

##### `SourceDetails`<sup>Required</sup> <a name="SourceDetails" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.sourceDetails"></a>

```csharp
public CoreVolumeGroupSourceDetails SourceDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails">CoreVolumeGroupSourceDetails</a>

source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#source_details CoreVolumeGroup#source_details}

---

##### `BackupPolicyId`<sup>Optional</sup> <a name="BackupPolicyId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.backupPolicyId"></a>

```csharp
public string BackupPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#backup_policy_id CoreVolumeGroup#backup_policy_id}.

---

##### `ClusterPlacementGroupId`<sup>Optional</sup> <a name="ClusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.clusterPlacementGroupId"></a>

```csharp
public string ClusterPlacementGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#cluster_placement_group_id CoreVolumeGroup#cluster_placement_group_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#defined_tags CoreVolumeGroup#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#display_name CoreVolumeGroup#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#freeform_tags CoreVolumeGroup#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#id CoreVolumeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PreserveVolumeReplica`<sup>Optional</sup> <a name="PreserveVolumeReplica" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.preserveVolumeReplica"></a>

```csharp
public object PreserveVolumeReplica { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#preserve_volume_replica CoreVolumeGroup#preserve_volume_replica}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.timeouts"></a>

```csharp
public CoreVolumeGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts">CoreVolumeGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#timeouts CoreVolumeGroup#timeouts}

---

##### `VolumeGroupReplicas`<sup>Optional</sup> <a name="VolumeGroupReplicas" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.volumeGroupReplicas"></a>

```csharp
public object VolumeGroupReplicas { get; set; }
```

- *Type:* object

volume_group_replicas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_group_replicas CoreVolumeGroup#volume_group_replicas}

---

##### `VolumeGroupReplicasDeletion`<sup>Optional</sup> <a name="VolumeGroupReplicasDeletion" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.volumeGroupReplicasDeletion"></a>

```csharp
public object VolumeGroupReplicasDeletion { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_group_replicas_deletion CoreVolumeGroup#volume_group_replicas_deletion}.

---

##### `VolumeIds`<sup>Optional</sup> <a name="VolumeIds" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.volumeIds"></a>

```csharp
public string[] VolumeIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_ids CoreVolumeGroup#volume_ids}.

---

##### `XrcKmsKeyId`<sup>Optional</sup> <a name="XrcKmsKeyId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.xrcKmsKeyId"></a>

```csharp
public string XrcKmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#xrc_kms_key_id CoreVolumeGroup#xrc_kms_key_id}.

---

### CoreVolumeGroupSourceDetails <a name="CoreVolumeGroupSourceDetails" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreVolumeGroupSourceDetails {
    string Type,
    string VolumeGroupBackupId = null,
    string VolumeGroupId = null,
    string VolumeGroupReplicaId = null,
    string[] VolumeIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#type CoreVolumeGroup#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails.property.volumeGroupBackupId">VolumeGroupBackupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_group_backup_id CoreVolumeGroup#volume_group_backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails.property.volumeGroupId">VolumeGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_group_id CoreVolumeGroup#volume_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails.property.volumeGroupReplicaId">VolumeGroupReplicaId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_group_replica_id CoreVolumeGroup#volume_group_replica_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails.property.volumeIds">VolumeIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_ids CoreVolumeGroup#volume_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#type CoreVolumeGroup#type}.

---

##### `VolumeGroupBackupId`<sup>Optional</sup> <a name="VolumeGroupBackupId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails.property.volumeGroupBackupId"></a>

```csharp
public string VolumeGroupBackupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_group_backup_id CoreVolumeGroup#volume_group_backup_id}.

---

##### `VolumeGroupId`<sup>Optional</sup> <a name="VolumeGroupId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails.property.volumeGroupId"></a>

```csharp
public string VolumeGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_group_id CoreVolumeGroup#volume_group_id}.

---

##### `VolumeGroupReplicaId`<sup>Optional</sup> <a name="VolumeGroupReplicaId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails.property.volumeGroupReplicaId"></a>

```csharp
public string VolumeGroupReplicaId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_group_replica_id CoreVolumeGroup#volume_group_replica_id}.

---

##### `VolumeIds`<sup>Optional</sup> <a name="VolumeIds" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails.property.volumeIds"></a>

```csharp
public string[] VolumeIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_ids CoreVolumeGroup#volume_ids}.

---

### CoreVolumeGroupTimeouts <a name="CoreVolumeGroupTimeouts" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreVolumeGroupTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#create CoreVolumeGroup#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#delete CoreVolumeGroup#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#update CoreVolumeGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#create CoreVolumeGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#delete CoreVolumeGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#update CoreVolumeGroup#update}.

---

### CoreVolumeGroupVolumeGroupReplicas <a name="CoreVolumeGroupVolumeGroupReplicas" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreVolumeGroupVolumeGroupReplicas {
    string AvailabilityDomain,
    string DisplayName = null,
    string XrrKmsKeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#availability_domain CoreVolumeGroup#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#display_name CoreVolumeGroup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas.property.xrrKmsKeyId">XrrKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#xrr_kms_key_id CoreVolumeGroup#xrr_kms_key_id}. |

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#availability_domain CoreVolumeGroup#availability_domain}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#display_name CoreVolumeGroup#display_name}.

---

##### `XrrKmsKeyId`<sup>Optional</sup> <a name="XrrKmsKeyId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas.property.xrrKmsKeyId"></a>

```csharp
public string XrrKmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#xrr_kms_key_id CoreVolumeGroup#xrr_kms_key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreVolumeGroupSourceDetailsOutputReference <a name="CoreVolumeGroupSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreVolumeGroupSourceDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.resetVolumeGroupBackupId">ResetVolumeGroupBackupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.resetVolumeGroupId">ResetVolumeGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.resetVolumeGroupReplicaId">ResetVolumeGroupReplicaId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.resetVolumeIds">ResetVolumeIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVolumeGroupBackupId` <a name="ResetVolumeGroupBackupId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.resetVolumeGroupBackupId"></a>

```csharp
private void ResetVolumeGroupBackupId()
```

##### `ResetVolumeGroupId` <a name="ResetVolumeGroupId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.resetVolumeGroupId"></a>

```csharp
private void ResetVolumeGroupId()
```

##### `ResetVolumeGroupReplicaId` <a name="ResetVolumeGroupReplicaId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.resetVolumeGroupReplicaId"></a>

```csharp
private void ResetVolumeGroupReplicaId()
```

##### `ResetVolumeIds` <a name="ResetVolumeIds" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.resetVolumeIds"></a>

```csharp
private void ResetVolumeIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeGroupBackupIdInput">VolumeGroupBackupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeGroupIdInput">VolumeGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeGroupReplicaIdInput">VolumeGroupReplicaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeIdsInput">VolumeIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeGroupBackupId">VolumeGroupBackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeGroupId">VolumeGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeGroupReplicaId">VolumeGroupReplicaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeIds">VolumeIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails">CoreVolumeGroupSourceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VolumeGroupBackupIdInput`<sup>Optional</sup> <a name="VolumeGroupBackupIdInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeGroupBackupIdInput"></a>

```csharp
public string VolumeGroupBackupIdInput { get; }
```

- *Type:* string

---

##### `VolumeGroupIdInput`<sup>Optional</sup> <a name="VolumeGroupIdInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeGroupIdInput"></a>

```csharp
public string VolumeGroupIdInput { get; }
```

- *Type:* string

---

##### `VolumeGroupReplicaIdInput`<sup>Optional</sup> <a name="VolumeGroupReplicaIdInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeGroupReplicaIdInput"></a>

```csharp
public string VolumeGroupReplicaIdInput { get; }
```

- *Type:* string

---

##### `VolumeIdsInput`<sup>Optional</sup> <a name="VolumeIdsInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeIdsInput"></a>

```csharp
public string[] VolumeIdsInput { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `VolumeGroupBackupId`<sup>Required</sup> <a name="VolumeGroupBackupId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeGroupBackupId"></a>

```csharp
public string VolumeGroupBackupId { get; }
```

- *Type:* string

---

##### `VolumeGroupId`<sup>Required</sup> <a name="VolumeGroupId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeGroupId"></a>

```csharp
public string VolumeGroupId { get; }
```

- *Type:* string

---

##### `VolumeGroupReplicaId`<sup>Required</sup> <a name="VolumeGroupReplicaId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeGroupReplicaId"></a>

```csharp
public string VolumeGroupReplicaId { get; }
```

- *Type:* string

---

##### `VolumeIds`<sup>Required</sup> <a name="VolumeIds" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeIds"></a>

```csharp
public string[] VolumeIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.internalValue"></a>

```csharp
public CoreVolumeGroupSourceDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails">CoreVolumeGroupSourceDetails</a>

---


### CoreVolumeGroupTimeoutsOutputReference <a name="CoreVolumeGroupTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreVolumeGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CoreVolumeGroupVolumeGroupReplicasList <a name="CoreVolumeGroupVolumeGroupReplicasList" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreVolumeGroupVolumeGroupReplicasList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.get"></a>

```csharp
private CoreVolumeGroupVolumeGroupReplicasOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CoreVolumeGroupVolumeGroupReplicasOutputReference <a name="CoreVolumeGroupVolumeGroupReplicasOutputReference" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreVolumeGroupVolumeGroupReplicasOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.resetXrrKmsKeyId">ResetXrrKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetXrrKmsKeyId` <a name="ResetXrrKmsKeyId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.resetXrrKmsKeyId"></a>

```csharp
private void ResetXrrKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.volumeGroupReplicaId">VolumeGroupReplicaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.xrrKmsKeyIdInput">XrrKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.xrrKmsKeyId">XrrKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VolumeGroupReplicaId`<sup>Required</sup> <a name="VolumeGroupReplicaId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.volumeGroupReplicaId"></a>

```csharp
public string VolumeGroupReplicaId { get; }
```

- *Type:* string

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.availabilityDomainInput"></a>

```csharp
public string AvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `XrrKmsKeyIdInput`<sup>Optional</sup> <a name="XrrKmsKeyIdInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.xrrKmsKeyIdInput"></a>

```csharp
public string XrrKmsKeyIdInput { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `XrrKmsKeyId`<sup>Required</sup> <a name="XrrKmsKeyId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.xrrKmsKeyId"></a>

```csharp
public string XrrKmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



