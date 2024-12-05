# `dataSafeAuditPolicyManagement` Submodule <a name="`dataSafeAuditPolicyManagement` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeAuditPolicyManagement <a name="DataSafeAuditPolicyManagement" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management oci_data_safe_audit_policy_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeAuditPolicyManagement(Construct Scope, string Id, DataSafeAuditPolicyManagementConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig">DataSafeAuditPolicyManagementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig">DataSafeAuditPolicyManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.putAuditConditions">PutAuditConditions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetAuditConditions">ResetAuditConditions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetIsDataSafeServiceAccountExcluded">ResetIsDataSafeServiceAccountExcluded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetProvisionTrigger">ResetProvisionTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetRetrieveFromTargetTrigger">ResetRetrieveFromTargetTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetTargetId">ResetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuditConditions` <a name="PutAuditConditions" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.putAuditConditions"></a>

```csharp
private void PutAuditConditions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.putAuditConditions.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.putTimeouts"></a>

```csharp
private void PutTimeouts(DataSafeAuditPolicyManagementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeouts">DataSafeAuditPolicyManagementTimeouts</a>

---

##### `ResetAuditConditions` <a name="ResetAuditConditions" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetAuditConditions"></a>

```csharp
private void ResetAuditConditions()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsDataSafeServiceAccountExcluded` <a name="ResetIsDataSafeServiceAccountExcluded" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetIsDataSafeServiceAccountExcluded"></a>

```csharp
private void ResetIsDataSafeServiceAccountExcluded()
```

##### `ResetProvisionTrigger` <a name="ResetProvisionTrigger" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetProvisionTrigger"></a>

```csharp
private void ResetProvisionTrigger()
```

##### `ResetRetrieveFromTargetTrigger` <a name="ResetRetrieveFromTargetTrigger" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetRetrieveFromTargetTrigger"></a>

```csharp
private void ResetRetrieveFromTargetTrigger()
```

##### `ResetTargetId` <a name="ResetTargetId" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetTargetId"></a>

```csharp
private void ResetTargetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeAuditPolicyManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeAuditPolicyManagement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeAuditPolicyManagement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeAuditPolicyManagement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeAuditPolicyManagement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataSafeAuditPolicyManagement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSafeAuditPolicyManagement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSafeAuditPolicyManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeAuditPolicyManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.auditConditions">AuditConditions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList">DataSafeAuditPolicyManagementAuditConditionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.auditSpecifications">AuditSpecifications</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList">DataSafeAuditPolicyManagementAuditSpecificationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.timeLastProvisioned">TimeLastProvisioned</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.timeLastRetrieved">TimeLastRetrieved</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference">DataSafeAuditPolicyManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.auditConditionsInput">AuditConditionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.isDataSafeServiceAccountExcludedInput">IsDataSafeServiceAccountExcludedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.provisionTriggerInput">ProvisionTriggerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.retrieveFromTargetTriggerInput">RetrieveFromTargetTriggerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.targetIdInput">TargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.isDataSafeServiceAccountExcluded">IsDataSafeServiceAccountExcluded</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.provisionTrigger">ProvisionTrigger</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.retrieveFromTargetTrigger">RetrieveFromTargetTrigger</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AuditConditions`<sup>Required</sup> <a name="AuditConditions" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.auditConditions"></a>

```csharp
public DataSafeAuditPolicyManagementAuditConditionsList AuditConditions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList">DataSafeAuditPolicyManagementAuditConditionsList</a>

---

##### `AuditSpecifications`<sup>Required</sup> <a name="AuditSpecifications" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.auditSpecifications"></a>

```csharp
public DataSafeAuditPolicyManagementAuditSpecificationsList AuditSpecifications { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList">DataSafeAuditPolicyManagementAuditSpecificationsList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeLastProvisioned`<sup>Required</sup> <a name="TimeLastProvisioned" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.timeLastProvisioned"></a>

```csharp
public string TimeLastProvisioned { get; }
```

- *Type:* string

---

##### `TimeLastRetrieved`<sup>Required</sup> <a name="TimeLastRetrieved" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.timeLastRetrieved"></a>

```csharp
public string TimeLastRetrieved { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.timeouts"></a>

```csharp
public DataSafeAuditPolicyManagementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference">DataSafeAuditPolicyManagementTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `AuditConditionsInput`<sup>Optional</sup> <a name="AuditConditionsInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.auditConditionsInput"></a>

```csharp
public object AuditConditionsInput { get; }
```

- *Type:* object

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsDataSafeServiceAccountExcludedInput`<sup>Optional</sup> <a name="IsDataSafeServiceAccountExcludedInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.isDataSafeServiceAccountExcludedInput"></a>

```csharp
public object IsDataSafeServiceAccountExcludedInput { get; }
```

- *Type:* object

---

##### `ProvisionTriggerInput`<sup>Optional</sup> <a name="ProvisionTriggerInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.provisionTriggerInput"></a>

```csharp
public object ProvisionTriggerInput { get; }
```

- *Type:* object

---

##### `RetrieveFromTargetTriggerInput`<sup>Optional</sup> <a name="RetrieveFromTargetTriggerInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.retrieveFromTargetTriggerInput"></a>

```csharp
public object RetrieveFromTargetTriggerInput { get; }
```

- *Type:* object

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.targetIdInput"></a>

```csharp
public string TargetIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsDataSafeServiceAccountExcluded`<sup>Required</sup> <a name="IsDataSafeServiceAccountExcluded" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.isDataSafeServiceAccountExcluded"></a>

```csharp
public object IsDataSafeServiceAccountExcluded { get; }
```

- *Type:* object

---

##### `ProvisionTrigger`<sup>Required</sup> <a name="ProvisionTrigger" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.provisionTrigger"></a>

```csharp
public object ProvisionTrigger { get; }
```

- *Type:* object

---

##### `RetrieveFromTargetTrigger`<sup>Required</sup> <a name="RetrieveFromTargetTrigger" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.retrieveFromTargetTrigger"></a>

```csharp
public object RetrieveFromTargetTrigger { get; }
```

- *Type:* object

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeAuditPolicyManagementAuditConditions <a name="DataSafeAuditPolicyManagementAuditConditions" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeAuditPolicyManagementAuditConditions {
    string AuditPolicyName = null,
    object EnableConditions = null,
    object IsDataSafeServiceAccountAudited = null,
    object IsEnabled = null,
    object IsPrivUsersManagedByDataSafe = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditions.property.auditPolicyName">AuditPolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#audit_policy_name DataSafeAuditPolicyManagement#audit_policy_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditions.property.enableConditions">EnableConditions</a></code> | <code>object</code> | enable_conditions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditions.property.isDataSafeServiceAccountAudited">IsDataSafeServiceAccountAudited</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#is_data_safe_service_account_audited DataSafeAuditPolicyManagement#is_data_safe_service_account_audited}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditions.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#is_enabled DataSafeAuditPolicyManagement#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditions.property.isPrivUsersManagedByDataSafe">IsPrivUsersManagedByDataSafe</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#is_priv_users_managed_by_data_safe DataSafeAuditPolicyManagement#is_priv_users_managed_by_data_safe}. |

---

##### `AuditPolicyName`<sup>Optional</sup> <a name="AuditPolicyName" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditions.property.auditPolicyName"></a>

```csharp
public string AuditPolicyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#audit_policy_name DataSafeAuditPolicyManagement#audit_policy_name}.

---

##### `EnableConditions`<sup>Optional</sup> <a name="EnableConditions" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditions.property.enableConditions"></a>

```csharp
public object EnableConditions { get; set; }
```

- *Type:* object

enable_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#enable_conditions DataSafeAuditPolicyManagement#enable_conditions}

---

##### `IsDataSafeServiceAccountAudited`<sup>Optional</sup> <a name="IsDataSafeServiceAccountAudited" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditions.property.isDataSafeServiceAccountAudited"></a>

```csharp
public object IsDataSafeServiceAccountAudited { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#is_data_safe_service_account_audited DataSafeAuditPolicyManagement#is_data_safe_service_account_audited}.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditions.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#is_enabled DataSafeAuditPolicyManagement#is_enabled}.

---

##### `IsPrivUsersManagedByDataSafe`<sup>Optional</sup> <a name="IsPrivUsersManagedByDataSafe" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditions.property.isPrivUsersManagedByDataSafe"></a>

```csharp
public object IsPrivUsersManagedByDataSafe { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#is_priv_users_managed_by_data_safe DataSafeAuditPolicyManagement#is_priv_users_managed_by_data_safe}.

---

### DataSafeAuditPolicyManagementAuditConditionsEnableConditions <a name="DataSafeAuditPolicyManagementAuditConditionsEnableConditions" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeAuditPolicyManagementAuditConditionsEnableConditions {
    string[] EntityNames = null,
    string EntitySelection = null,
    string EntityType = null,
    string OperationStatus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditions.property.entityNames">EntityNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#entity_names DataSafeAuditPolicyManagement#entity_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditions.property.entitySelection">EntitySelection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#entity_selection DataSafeAuditPolicyManagement#entity_selection}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditions.property.entityType">EntityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#entity_type DataSafeAuditPolicyManagement#entity_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditions.property.operationStatus">OperationStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#operation_status DataSafeAuditPolicyManagement#operation_status}. |

---

##### `EntityNames`<sup>Optional</sup> <a name="EntityNames" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditions.property.entityNames"></a>

```csharp
public string[] EntityNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#entity_names DataSafeAuditPolicyManagement#entity_names}.

---

##### `EntitySelection`<sup>Optional</sup> <a name="EntitySelection" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditions.property.entitySelection"></a>

```csharp
public string EntitySelection { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#entity_selection DataSafeAuditPolicyManagement#entity_selection}.

---

##### `EntityType`<sup>Optional</sup> <a name="EntityType" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditions.property.entityType"></a>

```csharp
public string EntityType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#entity_type DataSafeAuditPolicyManagement#entity_type}.

---

##### `OperationStatus`<sup>Optional</sup> <a name="OperationStatus" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditions.property.operationStatus"></a>

```csharp
public string OperationStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#operation_status DataSafeAuditPolicyManagement#operation_status}.

---

### DataSafeAuditPolicyManagementAuditSpecifications <a name="DataSafeAuditPolicyManagementAuditSpecifications" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecifications"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecifications.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeAuditPolicyManagementAuditSpecifications {

};
```


### DataSafeAuditPolicyManagementConfig <a name="DataSafeAuditPolicyManagementConfig" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeAuditPolicyManagementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object AuditConditions = null,
    string CompartmentId = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    object IsDataSafeServiceAccountExcluded = null,
    object ProvisionTrigger = null,
    object RetrieveFromTargetTrigger = null,
    string TargetId = null,
    DataSafeAuditPolicyManagementTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.auditConditions">AuditConditions</a></code> | <code>object</code> | audit_conditions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#compartment_id DataSafeAuditPolicyManagement#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#defined_tags DataSafeAuditPolicyManagement#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#description DataSafeAuditPolicyManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#display_name DataSafeAuditPolicyManagement#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#freeform_tags DataSafeAuditPolicyManagement#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#id DataSafeAuditPolicyManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.isDataSafeServiceAccountExcluded">IsDataSafeServiceAccountExcluded</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#is_data_safe_service_account_excluded DataSafeAuditPolicyManagement#is_data_safe_service_account_excluded}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.provisionTrigger">ProvisionTrigger</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#provision_trigger DataSafeAuditPolicyManagement#provision_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.retrieveFromTargetTrigger">RetrieveFromTargetTrigger</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#retrieve_from_target_trigger DataSafeAuditPolicyManagement#retrieve_from_target_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.targetId">TargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#target_id DataSafeAuditPolicyManagement#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeouts">DataSafeAuditPolicyManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AuditConditions`<sup>Optional</sup> <a name="AuditConditions" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.auditConditions"></a>

```csharp
public object AuditConditions { get; set; }
```

- *Type:* object

audit_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#audit_conditions DataSafeAuditPolicyManagement#audit_conditions}

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#compartment_id DataSafeAuditPolicyManagement#compartment_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#defined_tags DataSafeAuditPolicyManagement#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#description DataSafeAuditPolicyManagement#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#display_name DataSafeAuditPolicyManagement#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#freeform_tags DataSafeAuditPolicyManagement#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#id DataSafeAuditPolicyManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsDataSafeServiceAccountExcluded`<sup>Optional</sup> <a name="IsDataSafeServiceAccountExcluded" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.isDataSafeServiceAccountExcluded"></a>

```csharp
public object IsDataSafeServiceAccountExcluded { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#is_data_safe_service_account_excluded DataSafeAuditPolicyManagement#is_data_safe_service_account_excluded}.

---

##### `ProvisionTrigger`<sup>Optional</sup> <a name="ProvisionTrigger" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.provisionTrigger"></a>

```csharp
public object ProvisionTrigger { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#provision_trigger DataSafeAuditPolicyManagement#provision_trigger}.

---

##### `RetrieveFromTargetTrigger`<sup>Optional</sup> <a name="RetrieveFromTargetTrigger" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.retrieveFromTargetTrigger"></a>

```csharp
public object RetrieveFromTargetTrigger { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#retrieve_from_target_trigger DataSafeAuditPolicyManagement#retrieve_from_target_trigger}.

---

##### `TargetId`<sup>Optional</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.targetId"></a>

```csharp
public string TargetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#target_id DataSafeAuditPolicyManagement#target_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.timeouts"></a>

```csharp
public DataSafeAuditPolicyManagementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeouts">DataSafeAuditPolicyManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#timeouts DataSafeAuditPolicyManagement#timeouts}

---

### DataSafeAuditPolicyManagementTimeouts <a name="DataSafeAuditPolicyManagementTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeAuditPolicyManagementTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#create DataSafeAuditPolicyManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#delete DataSafeAuditPolicyManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#update DataSafeAuditPolicyManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#create DataSafeAuditPolicyManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#delete DataSafeAuditPolicyManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#update DataSafeAuditPolicyManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList <a name="DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.get"></a>

```csharp
private DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference <a name="DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.resetEntityNames">ResetEntityNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.resetEntitySelection">ResetEntitySelection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.resetEntityType">ResetEntityType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.resetOperationStatus">ResetOperationStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEntityNames` <a name="ResetEntityNames" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.resetEntityNames"></a>

```csharp
private void ResetEntityNames()
```

##### `ResetEntitySelection` <a name="ResetEntitySelection" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.resetEntitySelection"></a>

```csharp
private void ResetEntitySelection()
```

##### `ResetEntityType` <a name="ResetEntityType" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.resetEntityType"></a>

```csharp
private void ResetEntityType()
```

##### `ResetOperationStatus` <a name="ResetOperationStatus" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.resetOperationStatus"></a>

```csharp
private void ResetOperationStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.entityNamesInput">EntityNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.entitySelectionInput">EntitySelectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.entityTypeInput">EntityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.operationStatusInput">OperationStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.entityNames">EntityNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.entitySelection">EntitySelection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.entityType">EntityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.operationStatus">OperationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EntityNamesInput`<sup>Optional</sup> <a name="EntityNamesInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.entityNamesInput"></a>

```csharp
public string[] EntityNamesInput { get; }
```

- *Type:* string[]

---

##### `EntitySelectionInput`<sup>Optional</sup> <a name="EntitySelectionInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.entitySelectionInput"></a>

```csharp
public string EntitySelectionInput { get; }
```

- *Type:* string

---

##### `EntityTypeInput`<sup>Optional</sup> <a name="EntityTypeInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.entityTypeInput"></a>

```csharp
public string EntityTypeInput { get; }
```

- *Type:* string

---

##### `OperationStatusInput`<sup>Optional</sup> <a name="OperationStatusInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.operationStatusInput"></a>

```csharp
public string OperationStatusInput { get; }
```

- *Type:* string

---

##### `EntityNames`<sup>Required</sup> <a name="EntityNames" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.entityNames"></a>

```csharp
public string[] EntityNames { get; }
```

- *Type:* string[]

---

##### `EntitySelection`<sup>Required</sup> <a name="EntitySelection" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.entitySelection"></a>

```csharp
public string EntitySelection { get; }
```

- *Type:* string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.entityType"></a>

```csharp
public string EntityType { get; }
```

- *Type:* string

---

##### `OperationStatus`<sup>Required</sup> <a name="OperationStatus" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.operationStatus"></a>

```csharp
public string OperationStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataSafeAuditPolicyManagementAuditConditionsList <a name="DataSafeAuditPolicyManagementAuditConditionsList" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeAuditPolicyManagementAuditConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.get"></a>

```csharp
private DataSafeAuditPolicyManagementAuditConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataSafeAuditPolicyManagementAuditConditionsOutputReference <a name="DataSafeAuditPolicyManagementAuditConditionsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeAuditPolicyManagementAuditConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.putEnableConditions">PutEnableConditions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.resetAuditPolicyName">ResetAuditPolicyName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.resetEnableConditions">ResetEnableConditions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.resetIsDataSafeServiceAccountAudited">ResetIsDataSafeServiceAccountAudited</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.resetIsPrivUsersManagedByDataSafe">ResetIsPrivUsersManagedByDataSafe</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnableConditions` <a name="PutEnableConditions" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.putEnableConditions"></a>

```csharp
private void PutEnableConditions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.putEnableConditions.parameter.value"></a>

- *Type:* object

---

##### `ResetAuditPolicyName` <a name="ResetAuditPolicyName" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.resetAuditPolicyName"></a>

```csharp
private void ResetAuditPolicyName()
```

##### `ResetEnableConditions` <a name="ResetEnableConditions" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.resetEnableConditions"></a>

```csharp
private void ResetEnableConditions()
```

##### `ResetIsDataSafeServiceAccountAudited` <a name="ResetIsDataSafeServiceAccountAudited" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.resetIsDataSafeServiceAccountAudited"></a>

```csharp
private void ResetIsDataSafeServiceAccountAudited()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```

##### `ResetIsPrivUsersManagedByDataSafe` <a name="ResetIsPrivUsersManagedByDataSafe" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.resetIsPrivUsersManagedByDataSafe"></a>

```csharp
private void ResetIsPrivUsersManagedByDataSafe()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.enableConditions">EnableConditions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList">DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.auditPolicyNameInput">AuditPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.enableConditionsInput">EnableConditionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.isDataSafeServiceAccountAuditedInput">IsDataSafeServiceAccountAuditedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.isPrivUsersManagedByDataSafeInput">IsPrivUsersManagedByDataSafeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.auditPolicyName">AuditPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.isDataSafeServiceAccountAudited">IsDataSafeServiceAccountAudited</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.isPrivUsersManagedByDataSafe">IsPrivUsersManagedByDataSafe</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableConditions`<sup>Required</sup> <a name="EnableConditions" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.enableConditions"></a>

```csharp
public DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList EnableConditions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList">DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList</a>

---

##### `AuditPolicyNameInput`<sup>Optional</sup> <a name="AuditPolicyNameInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.auditPolicyNameInput"></a>

```csharp
public string AuditPolicyNameInput { get; }
```

- *Type:* string

---

##### `EnableConditionsInput`<sup>Optional</sup> <a name="EnableConditionsInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.enableConditionsInput"></a>

```csharp
public object EnableConditionsInput { get; }
```

- *Type:* object

---

##### `IsDataSafeServiceAccountAuditedInput`<sup>Optional</sup> <a name="IsDataSafeServiceAccountAuditedInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.isDataSafeServiceAccountAuditedInput"></a>

```csharp
public object IsDataSafeServiceAccountAuditedInput { get; }
```

- *Type:* object

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `IsPrivUsersManagedByDataSafeInput`<sup>Optional</sup> <a name="IsPrivUsersManagedByDataSafeInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.isPrivUsersManagedByDataSafeInput"></a>

```csharp
public object IsPrivUsersManagedByDataSafeInput { get; }
```

- *Type:* object

---

##### `AuditPolicyName`<sup>Required</sup> <a name="AuditPolicyName" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.auditPolicyName"></a>

```csharp
public string AuditPolicyName { get; }
```

- *Type:* string

---

##### `IsDataSafeServiceAccountAudited`<sup>Required</sup> <a name="IsDataSafeServiceAccountAudited" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.isDataSafeServiceAccountAudited"></a>

```csharp
public object IsDataSafeServiceAccountAudited { get; }
```

- *Type:* object

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `IsPrivUsersManagedByDataSafe`<sup>Required</sup> <a name="IsPrivUsersManagedByDataSafe" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.isPrivUsersManagedByDataSafe"></a>

```csharp
public object IsPrivUsersManagedByDataSafe { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataSafeAuditPolicyManagementAuditSpecificationsList <a name="DataSafeAuditPolicyManagementAuditSpecificationsList" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeAuditPolicyManagementAuditSpecificationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.get"></a>

```csharp
private DataSafeAuditPolicyManagementAuditSpecificationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSafeAuditPolicyManagementAuditSpecificationsOutputReference <a name="DataSafeAuditPolicyManagementAuditSpecificationsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeAuditPolicyManagementAuditSpecificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.auditPolicyCategory">AuditPolicyCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.auditPolicyName">AuditPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.databasePolicyNames">DatabasePolicyNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.enabledEntities">EnabledEntities</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.enableStatus">EnableStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.isCreated">IsCreated</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.isEnabledForAllUsers">IsEnabledForAllUsers</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.isSeededInDataSafe">IsSeededInDataSafe</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.isSeededInTarget">IsSeededInTarget</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.isViewOnly">IsViewOnly</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.partiallyEnabledMsg">PartiallyEnabledMsg</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecifications">DataSafeAuditPolicyManagementAuditSpecifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuditPolicyCategory`<sup>Required</sup> <a name="AuditPolicyCategory" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.auditPolicyCategory"></a>

```csharp
public string AuditPolicyCategory { get; }
```

- *Type:* string

---

##### `AuditPolicyName`<sup>Required</sup> <a name="AuditPolicyName" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.auditPolicyName"></a>

```csharp
public string AuditPolicyName { get; }
```

- *Type:* string

---

##### `DatabasePolicyNames`<sup>Required</sup> <a name="DatabasePolicyNames" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.databasePolicyNames"></a>

```csharp
public string[] DatabasePolicyNames { get; }
```

- *Type:* string[]

---

##### `EnabledEntities`<sup>Required</sup> <a name="EnabledEntities" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.enabledEntities"></a>

```csharp
public string EnabledEntities { get; }
```

- *Type:* string

---

##### `EnableStatus`<sup>Required</sup> <a name="EnableStatus" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.enableStatus"></a>

```csharp
public string EnableStatus { get; }
```

- *Type:* string

---

##### `IsCreated`<sup>Required</sup> <a name="IsCreated" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.isCreated"></a>

```csharp
public IResolvable IsCreated { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsEnabledForAllUsers`<sup>Required</sup> <a name="IsEnabledForAllUsers" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.isEnabledForAllUsers"></a>

```csharp
public IResolvable IsEnabledForAllUsers { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsSeededInDataSafe`<sup>Required</sup> <a name="IsSeededInDataSafe" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.isSeededInDataSafe"></a>

```csharp
public IResolvable IsSeededInDataSafe { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsSeededInTarget`<sup>Required</sup> <a name="IsSeededInTarget" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.isSeededInTarget"></a>

```csharp
public IResolvable IsSeededInTarget { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsViewOnly`<sup>Required</sup> <a name="IsViewOnly" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.isViewOnly"></a>

```csharp
public IResolvable IsViewOnly { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `PartiallyEnabledMsg`<sup>Required</sup> <a name="PartiallyEnabledMsg" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.partiallyEnabledMsg"></a>

```csharp
public string PartiallyEnabledMsg { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.internalValue"></a>

```csharp
public DataSafeAuditPolicyManagementAuditSpecifications InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecifications">DataSafeAuditPolicyManagementAuditSpecifications</a>

---


### DataSafeAuditPolicyManagementTimeoutsOutputReference <a name="DataSafeAuditPolicyManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeAuditPolicyManagementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



