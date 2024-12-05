# `capacityManagementOccCapacityRequest` Submodule <a name="`capacityManagementOccCapacityRequest` Submodule" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CapacityManagementOccCapacityRequest <a name="CapacityManagementOccCapacityRequest" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request oci_capacity_management_occ_capacity_request}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CapacityManagementOccCapacityRequest(Construct Scope, string Id, CapacityManagementOccCapacityRequestConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig">CapacityManagementOccCapacityRequestConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig">CapacityManagementOccCapacityRequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.putDetails">PutDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.putPatchOperations">PutPatchOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetLifecycleDetails">ResetLifecycleDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetPatchOperations">ResetPatchOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetRequestState">ResetRequestState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetRequestType">ResetRequestType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDetails` <a name="PutDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.putDetails"></a>

```csharp
private void PutDetails(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.putDetails.parameter.value"></a>

- *Type:* object

---

##### `PutPatchOperations` <a name="PutPatchOperations" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.putPatchOperations"></a>

```csharp
private void PutPatchOperations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.putPatchOperations.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.putTimeouts"></a>

```csharp
private void PutTimeouts(CapacityManagementOccCapacityRequestTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts">CapacityManagementOccCapacityRequestTimeouts</a>

---

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetAvailabilityDomain"></a>

```csharp
private void ResetAvailabilityDomain()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLifecycleDetails` <a name="ResetLifecycleDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetLifecycleDetails"></a>

```csharp
private void ResetLifecycleDetails()
```

##### `ResetPatchOperations` <a name="ResetPatchOperations" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetPatchOperations"></a>

```csharp
private void ResetPatchOperations()
```

##### `ResetRequestState` <a name="ResetRequestState" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetRequestState"></a>

```csharp
private void ResetRequestState()
```

##### `ResetRequestType` <a name="ResetRequestType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetRequestType"></a>

```csharp
private void ResetRequestType()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CapacityManagementOccCapacityRequest resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CapacityManagementOccCapacityRequest.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CapacityManagementOccCapacityRequest.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CapacityManagementOccCapacityRequest.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CapacityManagementOccCapacityRequest.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CapacityManagementOccCapacityRequest resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CapacityManagementOccCapacityRequest to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CapacityManagementOccCapacityRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CapacityManagementOccCapacityRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.details">Details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList">CapacityManagementOccCapacityRequestDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.occCustomerGroupId">OccCustomerGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.patchOperations">PatchOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList">CapacityManagementOccCapacityRequestPatchOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference">CapacityManagementOccCapacityRequestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.dateExpectedCapacityHandoverInput">DateExpectedCapacityHandoverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.detailsInput">DetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.lifecycleDetailsInput">LifecycleDetailsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.occAvailabilityCatalogIdInput">OccAvailabilityCatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.patchOperationsInput">PatchOperationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.requestStateInput">RequestStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.requestTypeInput">RequestTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.dateExpectedCapacityHandover">DateExpectedCapacityHandover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.occAvailabilityCatalogId">OccAvailabilityCatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.requestState">RequestState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.requestType">RequestType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.details"></a>

```csharp
public CapacityManagementOccCapacityRequestDetailsList Details { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList">CapacityManagementOccCapacityRequestDetailsList</a>

---

##### `OccCustomerGroupId`<sup>Required</sup> <a name="OccCustomerGroupId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.occCustomerGroupId"></a>

```csharp
public string OccCustomerGroupId { get; }
```

- *Type:* string

---

##### `PatchOperations`<sup>Required</sup> <a name="PatchOperations" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.patchOperations"></a>

```csharp
public CapacityManagementOccCapacityRequestPatchOperationsList PatchOperations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList">CapacityManagementOccCapacityRequestPatchOperationsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.timeouts"></a>

```csharp
public CapacityManagementOccCapacityRequestTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference">CapacityManagementOccCapacityRequestTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.availabilityDomainInput"></a>

```csharp
public string AvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DateExpectedCapacityHandoverInput`<sup>Optional</sup> <a name="DateExpectedCapacityHandoverInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.dateExpectedCapacityHandoverInput"></a>

```csharp
public string DateExpectedCapacityHandoverInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DetailsInput`<sup>Optional</sup> <a name="DetailsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.detailsInput"></a>

```csharp
public object DetailsInput { get; }
```

- *Type:* object

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LifecycleDetailsInput`<sup>Optional</sup> <a name="LifecycleDetailsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.lifecycleDetailsInput"></a>

```csharp
public string LifecycleDetailsInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OccAvailabilityCatalogIdInput`<sup>Optional</sup> <a name="OccAvailabilityCatalogIdInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.occAvailabilityCatalogIdInput"></a>

```csharp
public string OccAvailabilityCatalogIdInput { get; }
```

- *Type:* string

---

##### `PatchOperationsInput`<sup>Optional</sup> <a name="PatchOperationsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.patchOperationsInput"></a>

```csharp
public object PatchOperationsInput { get; }
```

- *Type:* object

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RequestStateInput`<sup>Optional</sup> <a name="RequestStateInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.requestStateInput"></a>

```csharp
public string RequestStateInput { get; }
```

- *Type:* string

---

##### `RequestTypeInput`<sup>Optional</sup> <a name="RequestTypeInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.requestTypeInput"></a>

```csharp
public string RequestTypeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DateExpectedCapacityHandover`<sup>Required</sup> <a name="DateExpectedCapacityHandover" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.dateExpectedCapacityHandover"></a>

```csharp
public string DateExpectedCapacityHandover { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `OccAvailabilityCatalogId`<sup>Required</sup> <a name="OccAvailabilityCatalogId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.occAvailabilityCatalogId"></a>

```csharp
public string OccAvailabilityCatalogId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RequestState`<sup>Required</sup> <a name="RequestState" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.requestState"></a>

```csharp
public string RequestState { get; }
```

- *Type:* string

---

##### `RequestType`<sup>Required</sup> <a name="RequestType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.requestType"></a>

```csharp
public string RequestType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CapacityManagementOccCapacityRequestConfig <a name="CapacityManagementOccCapacityRequestConfig" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CapacityManagementOccCapacityRequestConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DateExpectedCapacityHandover,
    object Details,
    string DisplayName,
    string Namespace,
    string OccAvailabilityCatalogId,
    string Region,
    string AvailabilityDomain = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    string LifecycleDetails = null,
    object PatchOperations = null,
    string RequestState = null,
    string RequestType = null,
    CapacityManagementOccCapacityRequestTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#compartment_id CapacityManagementOccCapacityRequest#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.dateExpectedCapacityHandover">DateExpectedCapacityHandover</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#date_expected_capacity_handover CapacityManagementOccCapacityRequest#date_expected_capacity_handover}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.details">Details</a></code> | <code>object</code> | details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#display_name CapacityManagementOccCapacityRequest#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#namespace CapacityManagementOccCapacityRequest#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.occAvailabilityCatalogId">OccAvailabilityCatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#occ_availability_catalog_id CapacityManagementOccCapacityRequest#occ_availability_catalog_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#region CapacityManagementOccCapacityRequest#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#availability_domain CapacityManagementOccCapacityRequest#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#defined_tags CapacityManagementOccCapacityRequest#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#description CapacityManagementOccCapacityRequest#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#freeform_tags CapacityManagementOccCapacityRequest#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#id CapacityManagementOccCapacityRequest#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#lifecycle_details CapacityManagementOccCapacityRequest#lifecycle_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.patchOperations">PatchOperations</a></code> | <code>object</code> | patch_operations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.requestState">RequestState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#request_state CapacityManagementOccCapacityRequest#request_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.requestType">RequestType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#request_type CapacityManagementOccCapacityRequest#request_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts">CapacityManagementOccCapacityRequestTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#compartment_id CapacityManagementOccCapacityRequest#compartment_id}.

---

##### `DateExpectedCapacityHandover`<sup>Required</sup> <a name="DateExpectedCapacityHandover" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.dateExpectedCapacityHandover"></a>

```csharp
public string DateExpectedCapacityHandover { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#date_expected_capacity_handover CapacityManagementOccCapacityRequest#date_expected_capacity_handover}.

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.details"></a>

```csharp
public object Details { get; set; }
```

- *Type:* object

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#details CapacityManagementOccCapacityRequest#details}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#display_name CapacityManagementOccCapacityRequest#display_name}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#namespace CapacityManagementOccCapacityRequest#namespace}.

---

##### `OccAvailabilityCatalogId`<sup>Required</sup> <a name="OccAvailabilityCatalogId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.occAvailabilityCatalogId"></a>

```csharp
public string OccAvailabilityCatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#occ_availability_catalog_id CapacityManagementOccCapacityRequest#occ_availability_catalog_id}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#region CapacityManagementOccCapacityRequest#region}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#availability_domain CapacityManagementOccCapacityRequest#availability_domain}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#defined_tags CapacityManagementOccCapacityRequest#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#description CapacityManagementOccCapacityRequest#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#freeform_tags CapacityManagementOccCapacityRequest#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#id CapacityManagementOccCapacityRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LifecycleDetails`<sup>Optional</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#lifecycle_details CapacityManagementOccCapacityRequest#lifecycle_details}.

---

##### `PatchOperations`<sup>Optional</sup> <a name="PatchOperations" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.patchOperations"></a>

```csharp
public object PatchOperations { get; set; }
```

- *Type:* object

patch_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#patch_operations CapacityManagementOccCapacityRequest#patch_operations}

---

##### `RequestState`<sup>Optional</sup> <a name="RequestState" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.requestState"></a>

```csharp
public string RequestState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#request_state CapacityManagementOccCapacityRequest#request_state}.

---

##### `RequestType`<sup>Optional</sup> <a name="RequestType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.requestType"></a>

```csharp
public string RequestType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#request_type CapacityManagementOccCapacityRequest#request_type}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.timeouts"></a>

```csharp
public CapacityManagementOccCapacityRequestTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts">CapacityManagementOccCapacityRequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#timeouts CapacityManagementOccCapacityRequest#timeouts}

---

### CapacityManagementOccCapacityRequestDetails <a name="CapacityManagementOccCapacityRequestDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CapacityManagementOccCapacityRequestDetails {
    string DemandQuantity,
    string ResourceName,
    string ResourceType,
    string WorkloadType,
    string ActualHandoverQuantity = null,
    object AssociatedOccHandoverResourceBlockList = null,
    string AvailabilityDomain = null,
    string DateActualHandover = null,
    string DateExpectedHandover = null,
    string ExpectedHandoverQuantity = null,
    string SourceWorkloadType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.demandQuantity">DemandQuantity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#demand_quantity CapacityManagementOccCapacityRequest#demand_quantity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.resourceName">ResourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#resource_name CapacityManagementOccCapacityRequest#resource_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.resourceType">ResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#resource_type CapacityManagementOccCapacityRequest#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.workloadType">WorkloadType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#workload_type CapacityManagementOccCapacityRequest#workload_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.actualHandoverQuantity">ActualHandoverQuantity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#actual_handover_quantity CapacityManagementOccCapacityRequest#actual_handover_quantity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.associatedOccHandoverResourceBlockList">AssociatedOccHandoverResourceBlockList</a></code> | <code>object</code> | associated_occ_handover_resource_block_list block. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#availability_domain CapacityManagementOccCapacityRequest#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.dateActualHandover">DateActualHandover</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#date_actual_handover CapacityManagementOccCapacityRequest#date_actual_handover}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.dateExpectedHandover">DateExpectedHandover</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#date_expected_handover CapacityManagementOccCapacityRequest#date_expected_handover}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.expectedHandoverQuantity">ExpectedHandoverQuantity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#expected_handover_quantity CapacityManagementOccCapacityRequest#expected_handover_quantity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.sourceWorkloadType">SourceWorkloadType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#source_workload_type CapacityManagementOccCapacityRequest#source_workload_type}. |

---

##### `DemandQuantity`<sup>Required</sup> <a name="DemandQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.demandQuantity"></a>

```csharp
public string DemandQuantity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#demand_quantity CapacityManagementOccCapacityRequest#demand_quantity}.

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.resourceName"></a>

```csharp
public string ResourceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#resource_name CapacityManagementOccCapacityRequest#resource_name}.

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#resource_type CapacityManagementOccCapacityRequest#resource_type}.

---

##### `WorkloadType`<sup>Required</sup> <a name="WorkloadType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.workloadType"></a>

```csharp
public string WorkloadType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#workload_type CapacityManagementOccCapacityRequest#workload_type}.

---

##### `ActualHandoverQuantity`<sup>Optional</sup> <a name="ActualHandoverQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.actualHandoverQuantity"></a>

```csharp
public string ActualHandoverQuantity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#actual_handover_quantity CapacityManagementOccCapacityRequest#actual_handover_quantity}.

---

##### `AssociatedOccHandoverResourceBlockList`<sup>Optional</sup> <a name="AssociatedOccHandoverResourceBlockList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.associatedOccHandoverResourceBlockList"></a>

```csharp
public object AssociatedOccHandoverResourceBlockList { get; set; }
```

- *Type:* object

associated_occ_handover_resource_block_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#associated_occ_handover_resource_block_list CapacityManagementOccCapacityRequest#associated_occ_handover_resource_block_list}

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#availability_domain CapacityManagementOccCapacityRequest#availability_domain}.

---

##### `DateActualHandover`<sup>Optional</sup> <a name="DateActualHandover" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.dateActualHandover"></a>

```csharp
public string DateActualHandover { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#date_actual_handover CapacityManagementOccCapacityRequest#date_actual_handover}.

---

##### `DateExpectedHandover`<sup>Optional</sup> <a name="DateExpectedHandover" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.dateExpectedHandover"></a>

```csharp
public string DateExpectedHandover { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#date_expected_handover CapacityManagementOccCapacityRequest#date_expected_handover}.

---

##### `ExpectedHandoverQuantity`<sup>Optional</sup> <a name="ExpectedHandoverQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.expectedHandoverQuantity"></a>

```csharp
public string ExpectedHandoverQuantity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#expected_handover_quantity CapacityManagementOccCapacityRequest#expected_handover_quantity}.

---

##### `SourceWorkloadType`<sup>Optional</sup> <a name="SourceWorkloadType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.sourceWorkloadType"></a>

```csharp
public string SourceWorkloadType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#source_workload_type CapacityManagementOccCapacityRequest#source_workload_type}.

---

### CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct <a name="CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct {
    string HandoverQuantity = null,
    string OccHandoverResourceBlockId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct.property.handoverQuantity">HandoverQuantity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#handover_quantity CapacityManagementOccCapacityRequest#handover_quantity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct.property.occHandoverResourceBlockId">OccHandoverResourceBlockId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#occ_handover_resource_block_id CapacityManagementOccCapacityRequest#occ_handover_resource_block_id}. |

---

##### `HandoverQuantity`<sup>Optional</sup> <a name="HandoverQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct.property.handoverQuantity"></a>

```csharp
public string HandoverQuantity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#handover_quantity CapacityManagementOccCapacityRequest#handover_quantity}.

---

##### `OccHandoverResourceBlockId`<sup>Optional</sup> <a name="OccHandoverResourceBlockId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct.property.occHandoverResourceBlockId"></a>

```csharp
public string OccHandoverResourceBlockId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#occ_handover_resource_block_id CapacityManagementOccCapacityRequest#occ_handover_resource_block_id}.

---

### CapacityManagementOccCapacityRequestPatchOperations <a name="CapacityManagementOccCapacityRequestPatchOperations" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CapacityManagementOccCapacityRequestPatchOperations {
    string From,
    string Operation,
    string Selection,
    System.Collections.Generic.IDictionary<string, string> Value,
    string Position = null,
    string SelectedItem = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.from">From</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#from CapacityManagementOccCapacityRequest#from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.operation">Operation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#operation CapacityManagementOccCapacityRequest#operation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.selection">Selection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#selection CapacityManagementOccCapacityRequest#selection}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.value">Value</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#value CapacityManagementOccCapacityRequest#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.position">Position</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#position CapacityManagementOccCapacityRequest#position}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.selectedItem">SelectedItem</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#selected_item CapacityManagementOccCapacityRequest#selected_item}. |

---

##### `From`<sup>Required</sup> <a name="From" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.from"></a>

```csharp
public string From { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#from CapacityManagementOccCapacityRequest#from}.

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.operation"></a>

```csharp
public string Operation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#operation CapacityManagementOccCapacityRequest#operation}.

---

##### `Selection`<sup>Required</sup> <a name="Selection" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.selection"></a>

```csharp
public string Selection { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#selection CapacityManagementOccCapacityRequest#selection}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.value"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Value { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#value CapacityManagementOccCapacityRequest#value}.

---

##### `Position`<sup>Optional</sup> <a name="Position" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.position"></a>

```csharp
public string Position { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#position CapacityManagementOccCapacityRequest#position}.

---

##### `SelectedItem`<sup>Optional</sup> <a name="SelectedItem" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.selectedItem"></a>

```csharp
public string SelectedItem { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#selected_item CapacityManagementOccCapacityRequest#selected_item}.

---

### CapacityManagementOccCapacityRequestTimeouts <a name="CapacityManagementOccCapacityRequestTimeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CapacityManagementOccCapacityRequestTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#create CapacityManagementOccCapacityRequest#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#delete CapacityManagementOccCapacityRequest#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#update CapacityManagementOccCapacityRequest#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#create CapacityManagementOccCapacityRequest#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#delete CapacityManagementOccCapacityRequest#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#update CapacityManagementOccCapacityRequest#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList <a name="CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.get"></a>

```csharp
private CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference <a name="CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resetHandoverQuantity">ResetHandoverQuantity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resetOccHandoverResourceBlockId">ResetOccHandoverResourceBlockId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHandoverQuantity` <a name="ResetHandoverQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resetHandoverQuantity"></a>

```csharp
private void ResetHandoverQuantity()
```

##### `ResetOccHandoverResourceBlockId` <a name="ResetOccHandoverResourceBlockId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resetOccHandoverResourceBlockId"></a>

```csharp
private void ResetOccHandoverResourceBlockId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.handoverQuantityInput">HandoverQuantityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.occHandoverResourceBlockIdInput">OccHandoverResourceBlockIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.handoverQuantity">HandoverQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.occHandoverResourceBlockId">OccHandoverResourceBlockId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HandoverQuantityInput`<sup>Optional</sup> <a name="HandoverQuantityInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.handoverQuantityInput"></a>

```csharp
public string HandoverQuantityInput { get; }
```

- *Type:* string

---

##### `OccHandoverResourceBlockIdInput`<sup>Optional</sup> <a name="OccHandoverResourceBlockIdInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.occHandoverResourceBlockIdInput"></a>

```csharp
public string OccHandoverResourceBlockIdInput { get; }
```

- *Type:* string

---

##### `HandoverQuantity`<sup>Required</sup> <a name="HandoverQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.handoverQuantity"></a>

```csharp
public string HandoverQuantity { get; }
```

- *Type:* string

---

##### `OccHandoverResourceBlockId`<sup>Required</sup> <a name="OccHandoverResourceBlockId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.occHandoverResourceBlockId"></a>

```csharp
public string OccHandoverResourceBlockId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CapacityManagementOccCapacityRequestDetailsList <a name="CapacityManagementOccCapacityRequestDetailsList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CapacityManagementOccCapacityRequestDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.get"></a>

```csharp
private CapacityManagementOccCapacityRequestDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CapacityManagementOccCapacityRequestDetailsOutputReference <a name="CapacityManagementOccCapacityRequestDetailsOutputReference" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CapacityManagementOccCapacityRequestDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.putAssociatedOccHandoverResourceBlockList">PutAssociatedOccHandoverResourceBlockList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetActualHandoverQuantity">ResetActualHandoverQuantity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetAssociatedOccHandoverResourceBlockList">ResetAssociatedOccHandoverResourceBlockList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetDateActualHandover">ResetDateActualHandover</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetDateExpectedHandover">ResetDateExpectedHandover</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetExpectedHandoverQuantity">ResetExpectedHandoverQuantity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetSourceWorkloadType">ResetSourceWorkloadType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAssociatedOccHandoverResourceBlockList` <a name="PutAssociatedOccHandoverResourceBlockList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.putAssociatedOccHandoverResourceBlockList"></a>

```csharp
private void PutAssociatedOccHandoverResourceBlockList(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.putAssociatedOccHandoverResourceBlockList.parameter.value"></a>

- *Type:* object

---

##### `ResetActualHandoverQuantity` <a name="ResetActualHandoverQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetActualHandoverQuantity"></a>

```csharp
private void ResetActualHandoverQuantity()
```

##### `ResetAssociatedOccHandoverResourceBlockList` <a name="ResetAssociatedOccHandoverResourceBlockList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetAssociatedOccHandoverResourceBlockList"></a>

```csharp
private void ResetAssociatedOccHandoverResourceBlockList()
```

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetAvailabilityDomain"></a>

```csharp
private void ResetAvailabilityDomain()
```

##### `ResetDateActualHandover` <a name="ResetDateActualHandover" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetDateActualHandover"></a>

```csharp
private void ResetDateActualHandover()
```

##### `ResetDateExpectedHandover` <a name="ResetDateExpectedHandover" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetDateExpectedHandover"></a>

```csharp
private void ResetDateExpectedHandover()
```

##### `ResetExpectedHandoverQuantity` <a name="ResetExpectedHandoverQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetExpectedHandoverQuantity"></a>

```csharp
private void ResetExpectedHandoverQuantity()
```

##### `ResetSourceWorkloadType` <a name="ResetSourceWorkloadType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetSourceWorkloadType"></a>

```csharp
private void ResetSourceWorkloadType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.associatedOccHandoverResourceBlockList">AssociatedOccHandoverResourceBlockList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList">CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.actualHandoverQuantityInput">ActualHandoverQuantityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.associatedOccHandoverResourceBlockListInput">AssociatedOccHandoverResourceBlockListInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.dateActualHandoverInput">DateActualHandoverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.dateExpectedHandoverInput">DateExpectedHandoverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.demandQuantityInput">DemandQuantityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.expectedHandoverQuantityInput">ExpectedHandoverQuantityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceNameInput">ResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.sourceWorkloadTypeInput">SourceWorkloadTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.workloadTypeInput">WorkloadTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.actualHandoverQuantity">ActualHandoverQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.dateActualHandover">DateActualHandover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.dateExpectedHandover">DateExpectedHandover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.demandQuantity">DemandQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.expectedHandoverQuantity">ExpectedHandoverQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.sourceWorkloadType">SourceWorkloadType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.workloadType">WorkloadType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AssociatedOccHandoverResourceBlockList`<sup>Required</sup> <a name="AssociatedOccHandoverResourceBlockList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.associatedOccHandoverResourceBlockList"></a>

```csharp
public CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList AssociatedOccHandoverResourceBlockList { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList">CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList</a>

---

##### `ActualHandoverQuantityInput`<sup>Optional</sup> <a name="ActualHandoverQuantityInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.actualHandoverQuantityInput"></a>

```csharp
public string ActualHandoverQuantityInput { get; }
```

- *Type:* string

---

##### `AssociatedOccHandoverResourceBlockListInput`<sup>Optional</sup> <a name="AssociatedOccHandoverResourceBlockListInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.associatedOccHandoverResourceBlockListInput"></a>

```csharp
public object AssociatedOccHandoverResourceBlockListInput { get; }
```

- *Type:* object

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.availabilityDomainInput"></a>

```csharp
public string AvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `DateActualHandoverInput`<sup>Optional</sup> <a name="DateActualHandoverInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.dateActualHandoverInput"></a>

```csharp
public string DateActualHandoverInput { get; }
```

- *Type:* string

---

##### `DateExpectedHandoverInput`<sup>Optional</sup> <a name="DateExpectedHandoverInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.dateExpectedHandoverInput"></a>

```csharp
public string DateExpectedHandoverInput { get; }
```

- *Type:* string

---

##### `DemandQuantityInput`<sup>Optional</sup> <a name="DemandQuantityInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.demandQuantityInput"></a>

```csharp
public string DemandQuantityInput { get; }
```

- *Type:* string

---

##### `ExpectedHandoverQuantityInput`<sup>Optional</sup> <a name="ExpectedHandoverQuantityInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.expectedHandoverQuantityInput"></a>

```csharp
public string ExpectedHandoverQuantityInput { get; }
```

- *Type:* string

---

##### `ResourceNameInput`<sup>Optional</sup> <a name="ResourceNameInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceNameInput"></a>

```csharp
public string ResourceNameInput { get; }
```

- *Type:* string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `SourceWorkloadTypeInput`<sup>Optional</sup> <a name="SourceWorkloadTypeInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.sourceWorkloadTypeInput"></a>

```csharp
public string SourceWorkloadTypeInput { get; }
```

- *Type:* string

---

##### `WorkloadTypeInput`<sup>Optional</sup> <a name="WorkloadTypeInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.workloadTypeInput"></a>

```csharp
public string WorkloadTypeInput { get; }
```

- *Type:* string

---

##### `ActualHandoverQuantity`<sup>Required</sup> <a name="ActualHandoverQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.actualHandoverQuantity"></a>

```csharp
public string ActualHandoverQuantity { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `DateActualHandover`<sup>Required</sup> <a name="DateActualHandover" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.dateActualHandover"></a>

```csharp
public string DateActualHandover { get; }
```

- *Type:* string

---

##### `DateExpectedHandover`<sup>Required</sup> <a name="DateExpectedHandover" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.dateExpectedHandover"></a>

```csharp
public string DateExpectedHandover { get; }
```

- *Type:* string

---

##### `DemandQuantity`<sup>Required</sup> <a name="DemandQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.demandQuantity"></a>

```csharp
public string DemandQuantity { get; }
```

- *Type:* string

---

##### `ExpectedHandoverQuantity`<sup>Required</sup> <a name="ExpectedHandoverQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.expectedHandoverQuantity"></a>

```csharp
public string ExpectedHandoverQuantity { get; }
```

- *Type:* string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `SourceWorkloadType`<sup>Required</sup> <a name="SourceWorkloadType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.sourceWorkloadType"></a>

```csharp
public string SourceWorkloadType { get; }
```

- *Type:* string

---

##### `WorkloadType`<sup>Required</sup> <a name="WorkloadType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.workloadType"></a>

```csharp
public string WorkloadType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CapacityManagementOccCapacityRequestPatchOperationsList <a name="CapacityManagementOccCapacityRequestPatchOperationsList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CapacityManagementOccCapacityRequestPatchOperationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.get"></a>

```csharp
private CapacityManagementOccCapacityRequestPatchOperationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CapacityManagementOccCapacityRequestPatchOperationsOutputReference <a name="CapacityManagementOccCapacityRequestPatchOperationsOutputReference" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CapacityManagementOccCapacityRequestPatchOperationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.resetPosition">ResetPosition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.resetSelectedItem">ResetSelectedItem</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPosition` <a name="ResetPosition" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.resetPosition"></a>

```csharp
private void ResetPosition()
```

##### `ResetSelectedItem` <a name="ResetSelectedItem" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.resetSelectedItem"></a>

```csharp
private void ResetSelectedItem()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.fromInput">FromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.operationInput">OperationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.positionInput">PositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selectedItemInput">SelectedItemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selectionInput">SelectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.valueInput">ValueInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.operation">Operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.position">Position</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selectedItem">SelectedItem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selection">Selection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.value">Value</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.fromInput"></a>

```csharp
public string FromInput { get; }
```

- *Type:* string

---

##### `OperationInput`<sup>Optional</sup> <a name="OperationInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.operationInput"></a>

```csharp
public string OperationInput { get; }
```

- *Type:* string

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.positionInput"></a>

```csharp
public string PositionInput { get; }
```

- *Type:* string

---

##### `SelectedItemInput`<sup>Optional</sup> <a name="SelectedItemInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selectedItemInput"></a>

```csharp
public string SelectedItemInput { get; }
```

- *Type:* string

---

##### `SelectionInput`<sup>Optional</sup> <a name="SelectionInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selectionInput"></a>

```csharp
public string SelectionInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.valueInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ValueInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `From`<sup>Required</sup> <a name="From" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.operation"></a>

```csharp
public string Operation { get; }
```

- *Type:* string

---

##### `Position`<sup>Required</sup> <a name="Position" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.position"></a>

```csharp
public string Position { get; }
```

- *Type:* string

---

##### `SelectedItem`<sup>Required</sup> <a name="SelectedItem" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selectedItem"></a>

```csharp
public string SelectedItem { get; }
```

- *Type:* string

---

##### `Selection`<sup>Required</sup> <a name="Selection" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selection"></a>

```csharp
public string Selection { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.value"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Value { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CapacityManagementOccCapacityRequestTimeoutsOutputReference <a name="CapacityManagementOccCapacityRequestTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CapacityManagementOccCapacityRequestTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



