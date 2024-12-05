# `dataSafeAuditProfileManagement` Submodule <a name="`dataSafeAuditProfileManagement` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeAuditProfileManagement <a name="DataSafeAuditProfileManagement" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management oci_data_safe_audit_profile_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeAuditProfileManagement(Construct Scope, string Id, DataSafeAuditProfileManagementConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig">DataSafeAuditProfileManagementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig">DataSafeAuditProfileManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetChangeRetentionTrigger">ResetChangeRetentionTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetIsOverrideGlobalRetentionSetting">ResetIsOverrideGlobalRetentionSetting</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetIsPaidUsageEnabled">ResetIsPaidUsageEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetOfflineMonths">ResetOfflineMonths</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetOnlineMonths">ResetOnlineMonths</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetTargetId">ResetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.putTimeouts"></a>

```csharp
private void PutTimeouts(DataSafeAuditProfileManagementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeouts">DataSafeAuditProfileManagementTimeouts</a>

---

##### `ResetChangeRetentionTrigger` <a name="ResetChangeRetentionTrigger" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetChangeRetentionTrigger"></a>

```csharp
private void ResetChangeRetentionTrigger()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsOverrideGlobalRetentionSetting` <a name="ResetIsOverrideGlobalRetentionSetting" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetIsOverrideGlobalRetentionSetting"></a>

```csharp
private void ResetIsOverrideGlobalRetentionSetting()
```

##### `ResetIsPaidUsageEnabled` <a name="ResetIsPaidUsageEnabled" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetIsPaidUsageEnabled"></a>

```csharp
private void ResetIsPaidUsageEnabled()
```

##### `ResetOfflineMonths` <a name="ResetOfflineMonths" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetOfflineMonths"></a>

```csharp
private void ResetOfflineMonths()
```

##### `ResetOnlineMonths` <a name="ResetOnlineMonths" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetOnlineMonths"></a>

```csharp
private void ResetOnlineMonths()
```

##### `ResetTargetId` <a name="ResetTargetId" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetTargetId"></a>

```csharp
private void ResetTargetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeAuditProfileManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeAuditProfileManagement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeAuditProfileManagement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeAuditProfileManagement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeAuditProfileManagement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataSafeAuditProfileManagement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSafeAuditProfileManagement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSafeAuditProfileManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeAuditProfileManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.auditCollectedVolume">AuditCollectedVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference">DataSafeAuditProfileManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.changeRetentionTriggerInput">ChangeRetentionTriggerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.isOverrideGlobalRetentionSettingInput">IsOverrideGlobalRetentionSettingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.isPaidUsageEnabledInput">IsPaidUsageEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.offlineMonthsInput">OfflineMonthsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.onlineMonthsInput">OnlineMonthsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.targetIdInput">TargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.changeRetentionTrigger">ChangeRetentionTrigger</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.isOverrideGlobalRetentionSetting">IsOverrideGlobalRetentionSetting</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.isPaidUsageEnabled">IsPaidUsageEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.offlineMonths">OfflineMonths</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.onlineMonths">OnlineMonths</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AuditCollectedVolume`<sup>Required</sup> <a name="AuditCollectedVolume" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.auditCollectedVolume"></a>

```csharp
public string AuditCollectedVolume { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.timeouts"></a>

```csharp
public DataSafeAuditProfileManagementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference">DataSafeAuditProfileManagementTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `ChangeRetentionTriggerInput`<sup>Optional</sup> <a name="ChangeRetentionTriggerInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.changeRetentionTriggerInput"></a>

```csharp
public object ChangeRetentionTriggerInput { get; }
```

- *Type:* object

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsOverrideGlobalRetentionSettingInput`<sup>Optional</sup> <a name="IsOverrideGlobalRetentionSettingInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.isOverrideGlobalRetentionSettingInput"></a>

```csharp
public object IsOverrideGlobalRetentionSettingInput { get; }
```

- *Type:* object

---

##### `IsPaidUsageEnabledInput`<sup>Optional</sup> <a name="IsPaidUsageEnabledInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.isPaidUsageEnabledInput"></a>

```csharp
public object IsPaidUsageEnabledInput { get; }
```

- *Type:* object

---

##### `OfflineMonthsInput`<sup>Optional</sup> <a name="OfflineMonthsInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.offlineMonthsInput"></a>

```csharp
public double OfflineMonthsInput { get; }
```

- *Type:* double

---

##### `OnlineMonthsInput`<sup>Optional</sup> <a name="OnlineMonthsInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.onlineMonthsInput"></a>

```csharp
public double OnlineMonthsInput { get; }
```

- *Type:* double

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.targetIdInput"></a>

```csharp
public string TargetIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ChangeRetentionTrigger`<sup>Required</sup> <a name="ChangeRetentionTrigger" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.changeRetentionTrigger"></a>

```csharp
public object ChangeRetentionTrigger { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsOverrideGlobalRetentionSetting`<sup>Required</sup> <a name="IsOverrideGlobalRetentionSetting" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.isOverrideGlobalRetentionSetting"></a>

```csharp
public object IsOverrideGlobalRetentionSetting { get; }
```

- *Type:* object

---

##### `IsPaidUsageEnabled`<sup>Required</sup> <a name="IsPaidUsageEnabled" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.isPaidUsageEnabled"></a>

```csharp
public object IsPaidUsageEnabled { get; }
```

- *Type:* object

---

##### `OfflineMonths`<sup>Required</sup> <a name="OfflineMonths" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.offlineMonths"></a>

```csharp
public double OfflineMonths { get; }
```

- *Type:* double

---

##### `OnlineMonths`<sup>Required</sup> <a name="OnlineMonths" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.onlineMonths"></a>

```csharp
public double OnlineMonths { get; }
```

- *Type:* double

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeAuditProfileManagementConfig <a name="DataSafeAuditProfileManagementConfig" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeAuditProfileManagementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object ChangeRetentionTrigger = null,
    string CompartmentId = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    object IsOverrideGlobalRetentionSetting = null,
    object IsPaidUsageEnabled = null,
    double OfflineMonths = null,
    double OnlineMonths = null,
    string TargetId = null,
    DataSafeAuditProfileManagementTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.changeRetentionTrigger">ChangeRetentionTrigger</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#change_retention_trigger DataSafeAuditProfileManagement#change_retention_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#compartment_id DataSafeAuditProfileManagement#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#defined_tags DataSafeAuditProfileManagement#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#description DataSafeAuditProfileManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#display_name DataSafeAuditProfileManagement#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#freeform_tags DataSafeAuditProfileManagement#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#id DataSafeAuditProfileManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.isOverrideGlobalRetentionSetting">IsOverrideGlobalRetentionSetting</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#is_override_global_retention_setting DataSafeAuditProfileManagement#is_override_global_retention_setting}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.isPaidUsageEnabled">IsPaidUsageEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#is_paid_usage_enabled DataSafeAuditProfileManagement#is_paid_usage_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.offlineMonths">OfflineMonths</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#offline_months DataSafeAuditProfileManagement#offline_months}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.onlineMonths">OnlineMonths</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#online_months DataSafeAuditProfileManagement#online_months}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.targetId">TargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#target_id DataSafeAuditProfileManagement#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeouts">DataSafeAuditProfileManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ChangeRetentionTrigger`<sup>Optional</sup> <a name="ChangeRetentionTrigger" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.changeRetentionTrigger"></a>

```csharp
public object ChangeRetentionTrigger { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#change_retention_trigger DataSafeAuditProfileManagement#change_retention_trigger}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#compartment_id DataSafeAuditProfileManagement#compartment_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#defined_tags DataSafeAuditProfileManagement#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#description DataSafeAuditProfileManagement#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#display_name DataSafeAuditProfileManagement#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#freeform_tags DataSafeAuditProfileManagement#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#id DataSafeAuditProfileManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsOverrideGlobalRetentionSetting`<sup>Optional</sup> <a name="IsOverrideGlobalRetentionSetting" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.isOverrideGlobalRetentionSetting"></a>

```csharp
public object IsOverrideGlobalRetentionSetting { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#is_override_global_retention_setting DataSafeAuditProfileManagement#is_override_global_retention_setting}.

---

##### `IsPaidUsageEnabled`<sup>Optional</sup> <a name="IsPaidUsageEnabled" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.isPaidUsageEnabled"></a>

```csharp
public object IsPaidUsageEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#is_paid_usage_enabled DataSafeAuditProfileManagement#is_paid_usage_enabled}.

---

##### `OfflineMonths`<sup>Optional</sup> <a name="OfflineMonths" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.offlineMonths"></a>

```csharp
public double OfflineMonths { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#offline_months DataSafeAuditProfileManagement#offline_months}.

---

##### `OnlineMonths`<sup>Optional</sup> <a name="OnlineMonths" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.onlineMonths"></a>

```csharp
public double OnlineMonths { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#online_months DataSafeAuditProfileManagement#online_months}.

---

##### `TargetId`<sup>Optional</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.targetId"></a>

```csharp
public string TargetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#target_id DataSafeAuditProfileManagement#target_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.timeouts"></a>

```csharp
public DataSafeAuditProfileManagementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeouts">DataSafeAuditProfileManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#timeouts DataSafeAuditProfileManagement#timeouts}

---

### DataSafeAuditProfileManagementTimeouts <a name="DataSafeAuditProfileManagementTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeAuditProfileManagementTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#create DataSafeAuditProfileManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#delete DataSafeAuditProfileManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#update DataSafeAuditProfileManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#create DataSafeAuditProfileManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#delete DataSafeAuditProfileManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#update DataSafeAuditProfileManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeAuditProfileManagementTimeoutsOutputReference <a name="DataSafeAuditProfileManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeAuditProfileManagementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



