# `disasterRecoveryDrProtectionGroup` Submodule <a name="`disasterRecoveryDrProtectionGroup` Submodule" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DisasterRecoveryDrProtectionGroup <a name="DisasterRecoveryDrProtectionGroup" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group oci_disaster_recovery_dr_protection_group}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrProtectionGroup(Construct Scope, string Id, DisasterRecoveryDrProtectionGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig">DisasterRecoveryDrProtectionGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig">DisasterRecoveryDrProtectionGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.putAssociation">PutAssociation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.putLogLocation">PutLogLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.putMembers">PutMembers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.resetAssociation">ResetAssociation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.resetDisassociateTrigger">ResetDisassociateTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.resetMembers">ResetMembers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAssociation` <a name="PutAssociation" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.putAssociation"></a>

```csharp
private void PutAssociation(DisasterRecoveryDrProtectionGroupAssociation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.putAssociation.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociation">DisasterRecoveryDrProtectionGroupAssociation</a>

---

##### `PutLogLocation` <a name="PutLogLocation" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.putLogLocation"></a>

```csharp
private void PutLogLocation(DisasterRecoveryDrProtectionGroupLogLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.putLogLocation.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocation">DisasterRecoveryDrProtectionGroupLogLocation</a>

---

##### `PutMembers` <a name="PutMembers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.putMembers"></a>

```csharp
private void PutMembers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.putMembers.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(DisasterRecoveryDrProtectionGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeouts">DisasterRecoveryDrProtectionGroupTimeouts</a>

---

##### `ResetAssociation` <a name="ResetAssociation" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.resetAssociation"></a>

```csharp
private void ResetAssociation()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDisassociateTrigger` <a name="ResetDisassociateTrigger" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.resetDisassociateTrigger"></a>

```csharp
private void ResetDisassociateTrigger()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMembers` <a name="ResetMembers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.resetMembers"></a>

```csharp
private void ResetMembers()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DisasterRecoveryDrProtectionGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DisasterRecoveryDrProtectionGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DisasterRecoveryDrProtectionGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DisasterRecoveryDrProtectionGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DisasterRecoveryDrProtectionGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DisasterRecoveryDrProtectionGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DisasterRecoveryDrProtectionGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DisasterRecoveryDrProtectionGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DisasterRecoveryDrProtectionGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.association">Association</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference">DisasterRecoveryDrProtectionGroupAssociationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.lifeCycleDetails">LifeCycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.lifecycleSubState">LifecycleSubState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.logLocation">LogLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference">DisasterRecoveryDrProtectionGroupLogLocationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.members">Members</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList">DisasterRecoveryDrProtectionGroupMembersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.peerId">PeerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.peerRegion">PeerRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference">DisasterRecoveryDrProtectionGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.associationInput">AssociationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociation">DisasterRecoveryDrProtectionGroupAssociation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.disassociateTriggerInput">DisassociateTriggerInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.logLocationInput">LogLocationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocation">DisasterRecoveryDrProtectionGroupLogLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.membersInput">MembersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.disassociateTrigger">DisassociateTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Association`<sup>Required</sup> <a name="Association" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.association"></a>

```csharp
public DisasterRecoveryDrProtectionGroupAssociationOutputReference Association { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference">DisasterRecoveryDrProtectionGroupAssociationOutputReference</a>

---

##### `LifeCycleDetails`<sup>Required</sup> <a name="LifeCycleDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.lifeCycleDetails"></a>

```csharp
public string LifeCycleDetails { get; }
```

- *Type:* string

---

##### `LifecycleSubState`<sup>Required</sup> <a name="LifecycleSubState" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.lifecycleSubState"></a>

```csharp
public string LifecycleSubState { get; }
```

- *Type:* string

---

##### `LogLocation`<sup>Required</sup> <a name="LogLocation" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.logLocation"></a>

```csharp
public DisasterRecoveryDrProtectionGroupLogLocationOutputReference LogLocation { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference">DisasterRecoveryDrProtectionGroupLogLocationOutputReference</a>

---

##### `Members`<sup>Required</sup> <a name="Members" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.members"></a>

```csharp
public DisasterRecoveryDrProtectionGroupMembersList Members { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList">DisasterRecoveryDrProtectionGroupMembersList</a>

---

##### `PeerId`<sup>Required</sup> <a name="PeerId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.peerId"></a>

```csharp
public string PeerId { get; }
```

- *Type:* string

---

##### `PeerRegion`<sup>Required</sup> <a name="PeerRegion" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.peerRegion"></a>

```csharp
public string PeerRegion { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.timeouts"></a>

```csharp
public DisasterRecoveryDrProtectionGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference">DisasterRecoveryDrProtectionGroupTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `AssociationInput`<sup>Optional</sup> <a name="AssociationInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.associationInput"></a>

```csharp
public DisasterRecoveryDrProtectionGroupAssociation AssociationInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociation">DisasterRecoveryDrProtectionGroupAssociation</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisassociateTriggerInput`<sup>Optional</sup> <a name="DisassociateTriggerInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.disassociateTriggerInput"></a>

```csharp
public double DisassociateTriggerInput { get; }
```

- *Type:* double

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogLocationInput`<sup>Optional</sup> <a name="LogLocationInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.logLocationInput"></a>

```csharp
public DisasterRecoveryDrProtectionGroupLogLocation LogLocationInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocation">DisasterRecoveryDrProtectionGroupLogLocation</a>

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.membersInput"></a>

```csharp
public object MembersInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisassociateTrigger`<sup>Required</sup> <a name="DisassociateTrigger" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.disassociateTrigger"></a>

```csharp
public double DisassociateTrigger { get; }
```

- *Type:* double

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DisasterRecoveryDrProtectionGroupAssociation <a name="DisasterRecoveryDrProtectionGroupAssociation" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrProtectionGroupAssociation {
    string Role,
    string PeerId = null,
    string PeerRegion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociation.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#role DisasterRecoveryDrProtectionGroup#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociation.property.peerId">PeerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#peer_id DisasterRecoveryDrProtectionGroup#peer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociation.property.peerRegion">PeerRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#peer_region DisasterRecoveryDrProtectionGroup#peer_region}. |

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociation.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#role DisasterRecoveryDrProtectionGroup#role}.

---

##### `PeerId`<sup>Optional</sup> <a name="PeerId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociation.property.peerId"></a>

```csharp
public string PeerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#peer_id DisasterRecoveryDrProtectionGroup#peer_id}.

---

##### `PeerRegion`<sup>Optional</sup> <a name="PeerRegion" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociation.property.peerRegion"></a>

```csharp
public string PeerRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#peer_region DisasterRecoveryDrProtectionGroup#peer_region}.

---

### DisasterRecoveryDrProtectionGroupConfig <a name="DisasterRecoveryDrProtectionGroupConfig" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrProtectionGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DisplayName,
    DisasterRecoveryDrProtectionGroupLogLocation LogLocation,
    DisasterRecoveryDrProtectionGroupAssociation Association = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    double DisassociateTrigger = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    object Members = null,
    DisasterRecoveryDrProtectionGroupTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#compartment_id DisasterRecoveryDrProtectionGroup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#display_name DisasterRecoveryDrProtectionGroup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.logLocation">LogLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocation">DisasterRecoveryDrProtectionGroupLogLocation</a></code> | log_location block. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.association">Association</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociation">DisasterRecoveryDrProtectionGroupAssociation</a></code> | association block. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#defined_tags DisasterRecoveryDrProtectionGroup#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.disassociateTrigger">DisassociateTrigger</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#disassociate_trigger DisasterRecoveryDrProtectionGroup#disassociate_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#freeform_tags DisasterRecoveryDrProtectionGroup#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#id DisasterRecoveryDrProtectionGroup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.members">Members</a></code> | <code>object</code> | members block. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeouts">DisasterRecoveryDrProtectionGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#compartment_id DisasterRecoveryDrProtectionGroup#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#display_name DisasterRecoveryDrProtectionGroup#display_name}.

---

##### `LogLocation`<sup>Required</sup> <a name="LogLocation" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.logLocation"></a>

```csharp
public DisasterRecoveryDrProtectionGroupLogLocation LogLocation { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocation">DisasterRecoveryDrProtectionGroupLogLocation</a>

log_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#log_location DisasterRecoveryDrProtectionGroup#log_location}

---

##### `Association`<sup>Optional</sup> <a name="Association" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.association"></a>

```csharp
public DisasterRecoveryDrProtectionGroupAssociation Association { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociation">DisasterRecoveryDrProtectionGroupAssociation</a>

association block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#association DisasterRecoveryDrProtectionGroup#association}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#defined_tags DisasterRecoveryDrProtectionGroup#defined_tags}.

---

##### `DisassociateTrigger`<sup>Optional</sup> <a name="DisassociateTrigger" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.disassociateTrigger"></a>

```csharp
public double DisassociateTrigger { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#disassociate_trigger DisasterRecoveryDrProtectionGroup#disassociate_trigger}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#freeform_tags DisasterRecoveryDrProtectionGroup#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#id DisasterRecoveryDrProtectionGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Members`<sup>Optional</sup> <a name="Members" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.members"></a>

```csharp
public object Members { get; set; }
```

- *Type:* object

members block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#members DisasterRecoveryDrProtectionGroup#members}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.timeouts"></a>

```csharp
public DisasterRecoveryDrProtectionGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeouts">DisasterRecoveryDrProtectionGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#timeouts DisasterRecoveryDrProtectionGroup#timeouts}

---

### DisasterRecoveryDrProtectionGroupLogLocation <a name="DisasterRecoveryDrProtectionGroupLogLocation" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrProtectionGroupLogLocation {
    string Bucket,
    string Namespace
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocation.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#bucket DisasterRecoveryDrProtectionGroup#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocation.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#namespace DisasterRecoveryDrProtectionGroup#namespace}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocation.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#bucket DisasterRecoveryDrProtectionGroup#bucket}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocation.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#namespace DisasterRecoveryDrProtectionGroup#namespace}.

---

### DisasterRecoveryDrProtectionGroupMembers <a name="DisasterRecoveryDrProtectionGroupMembers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrProtectionGroupMembers {
    string MemberId,
    string MemberType,
    string AutonomousDatabaseStandbyTypeForDrDrills = null,
    object BackendSetMappings = null,
    object BlockVolumeOperations = null,
    string Bucket = null,
    string ConnectionStringType = null,
    string DestinationAvailabilityDomain = null,
    string DestinationCapacityReservationId = null,
    string DestinationCompartmentId = null,
    string DestinationDedicatedVmHostId = null,
    string DestinationLoadBalancerId = null,
    string DestinationNetworkLoadBalancerId = null,
    object ExportMappings = null,
    object FileSystemOperations = null,
    object IsMovable = null,
    object IsRetainFaultDomain = null,
    object IsStartStopEnabled = null,
    string Namespace = null,
    string PasswordVaultSecretId = null,
    object VnicMapping = null,
    object VnicMappings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.memberId">MemberId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#member_id DisasterRecoveryDrProtectionGroup#member_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.memberType">MemberType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#member_type DisasterRecoveryDrProtectionGroup#member_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.autonomousDatabaseStandbyTypeForDrDrills">AutonomousDatabaseStandbyTypeForDrDrills</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#autonomous_database_standby_type_for_dr_drills DisasterRecoveryDrProtectionGroup#autonomous_database_standby_type_for_dr_drills}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.backendSetMappings">BackendSetMappings</a></code> | <code>object</code> | backend_set_mappings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.blockVolumeOperations">BlockVolumeOperations</a></code> | <code>object</code> | block_volume_operations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#bucket DisasterRecoveryDrProtectionGroup#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.connectionStringType">ConnectionStringType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#connection_string_type DisasterRecoveryDrProtectionGroup#connection_string_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.destinationAvailabilityDomain">DestinationAvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_availability_domain DisasterRecoveryDrProtectionGroup#destination_availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.destinationCapacityReservationId">DestinationCapacityReservationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_capacity_reservation_id DisasterRecoveryDrProtectionGroup#destination_capacity_reservation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.destinationCompartmentId">DestinationCompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_compartment_id DisasterRecoveryDrProtectionGroup#destination_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.destinationDedicatedVmHostId">DestinationDedicatedVmHostId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_dedicated_vm_host_id DisasterRecoveryDrProtectionGroup#destination_dedicated_vm_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.destinationLoadBalancerId">DestinationLoadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_load_balancer_id DisasterRecoveryDrProtectionGroup#destination_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.destinationNetworkLoadBalancerId">DestinationNetworkLoadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_network_load_balancer_id DisasterRecoveryDrProtectionGroup#destination_network_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.exportMappings">ExportMappings</a></code> | <code>object</code> | export_mappings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.fileSystemOperations">FileSystemOperations</a></code> | <code>object</code> | file_system_operations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.isMovable">IsMovable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#is_movable DisasterRecoveryDrProtectionGroup#is_movable}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.isRetainFaultDomain">IsRetainFaultDomain</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#is_retain_fault_domain DisasterRecoveryDrProtectionGroup#is_retain_fault_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.isStartStopEnabled">IsStartStopEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#is_start_stop_enabled DisasterRecoveryDrProtectionGroup#is_start_stop_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#namespace DisasterRecoveryDrProtectionGroup#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.passwordVaultSecretId">PasswordVaultSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#password_vault_secret_id DisasterRecoveryDrProtectionGroup#password_vault_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.vnicMapping">VnicMapping</a></code> | <code>object</code> | vnic_mapping block. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.vnicMappings">VnicMappings</a></code> | <code>object</code> | vnic_mappings block. |

---

##### `MemberId`<sup>Required</sup> <a name="MemberId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.memberId"></a>

```csharp
public string MemberId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#member_id DisasterRecoveryDrProtectionGroup#member_id}.

---

##### `MemberType`<sup>Required</sup> <a name="MemberType" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.memberType"></a>

```csharp
public string MemberType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#member_type DisasterRecoveryDrProtectionGroup#member_type}.

---

##### `AutonomousDatabaseStandbyTypeForDrDrills`<sup>Optional</sup> <a name="AutonomousDatabaseStandbyTypeForDrDrills" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.autonomousDatabaseStandbyTypeForDrDrills"></a>

```csharp
public string AutonomousDatabaseStandbyTypeForDrDrills { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#autonomous_database_standby_type_for_dr_drills DisasterRecoveryDrProtectionGroup#autonomous_database_standby_type_for_dr_drills}.

---

##### `BackendSetMappings`<sup>Optional</sup> <a name="BackendSetMappings" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.backendSetMappings"></a>

```csharp
public object BackendSetMappings { get; set; }
```

- *Type:* object

backend_set_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#backend_set_mappings DisasterRecoveryDrProtectionGroup#backend_set_mappings}

---

##### `BlockVolumeOperations`<sup>Optional</sup> <a name="BlockVolumeOperations" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.blockVolumeOperations"></a>

```csharp
public object BlockVolumeOperations { get; set; }
```

- *Type:* object

block_volume_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#block_volume_operations DisasterRecoveryDrProtectionGroup#block_volume_operations}

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#bucket DisasterRecoveryDrProtectionGroup#bucket}.

---

##### `ConnectionStringType`<sup>Optional</sup> <a name="ConnectionStringType" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.connectionStringType"></a>

```csharp
public string ConnectionStringType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#connection_string_type DisasterRecoveryDrProtectionGroup#connection_string_type}.

---

##### `DestinationAvailabilityDomain`<sup>Optional</sup> <a name="DestinationAvailabilityDomain" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.destinationAvailabilityDomain"></a>

```csharp
public string DestinationAvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_availability_domain DisasterRecoveryDrProtectionGroup#destination_availability_domain}.

---

##### `DestinationCapacityReservationId`<sup>Optional</sup> <a name="DestinationCapacityReservationId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.destinationCapacityReservationId"></a>

```csharp
public string DestinationCapacityReservationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_capacity_reservation_id DisasterRecoveryDrProtectionGroup#destination_capacity_reservation_id}.

---

##### `DestinationCompartmentId`<sup>Optional</sup> <a name="DestinationCompartmentId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.destinationCompartmentId"></a>

```csharp
public string DestinationCompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_compartment_id DisasterRecoveryDrProtectionGroup#destination_compartment_id}.

---

##### `DestinationDedicatedVmHostId`<sup>Optional</sup> <a name="DestinationDedicatedVmHostId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.destinationDedicatedVmHostId"></a>

```csharp
public string DestinationDedicatedVmHostId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_dedicated_vm_host_id DisasterRecoveryDrProtectionGroup#destination_dedicated_vm_host_id}.

---

##### `DestinationLoadBalancerId`<sup>Optional</sup> <a name="DestinationLoadBalancerId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.destinationLoadBalancerId"></a>

```csharp
public string DestinationLoadBalancerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_load_balancer_id DisasterRecoveryDrProtectionGroup#destination_load_balancer_id}.

---

##### `DestinationNetworkLoadBalancerId`<sup>Optional</sup> <a name="DestinationNetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.destinationNetworkLoadBalancerId"></a>

```csharp
public string DestinationNetworkLoadBalancerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_network_load_balancer_id DisasterRecoveryDrProtectionGroup#destination_network_load_balancer_id}.

---

##### `ExportMappings`<sup>Optional</sup> <a name="ExportMappings" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.exportMappings"></a>

```csharp
public object ExportMappings { get; set; }
```

- *Type:* object

export_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#export_mappings DisasterRecoveryDrProtectionGroup#export_mappings}

---

##### `FileSystemOperations`<sup>Optional</sup> <a name="FileSystemOperations" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.fileSystemOperations"></a>

```csharp
public object FileSystemOperations { get; set; }
```

- *Type:* object

file_system_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#file_system_operations DisasterRecoveryDrProtectionGroup#file_system_operations}

---

##### `IsMovable`<sup>Optional</sup> <a name="IsMovable" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.isMovable"></a>

```csharp
public object IsMovable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#is_movable DisasterRecoveryDrProtectionGroup#is_movable}.

---

##### `IsRetainFaultDomain`<sup>Optional</sup> <a name="IsRetainFaultDomain" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.isRetainFaultDomain"></a>

```csharp
public object IsRetainFaultDomain { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#is_retain_fault_domain DisasterRecoveryDrProtectionGroup#is_retain_fault_domain}.

---

##### `IsStartStopEnabled`<sup>Optional</sup> <a name="IsStartStopEnabled" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.isStartStopEnabled"></a>

```csharp
public object IsStartStopEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#is_start_stop_enabled DisasterRecoveryDrProtectionGroup#is_start_stop_enabled}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#namespace DisasterRecoveryDrProtectionGroup#namespace}.

---

##### `PasswordVaultSecretId`<sup>Optional</sup> <a name="PasswordVaultSecretId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.passwordVaultSecretId"></a>

```csharp
public string PasswordVaultSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#password_vault_secret_id DisasterRecoveryDrProtectionGroup#password_vault_secret_id}.

---

##### `VnicMapping`<sup>Optional</sup> <a name="VnicMapping" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.vnicMapping"></a>

```csharp
public object VnicMapping { get; set; }
```

- *Type:* object

vnic_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#vnic_mapping DisasterRecoveryDrProtectionGroup#vnic_mapping}

---

##### `VnicMappings`<sup>Optional</sup> <a name="VnicMappings" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.vnicMappings"></a>

```csharp
public object VnicMappings { get; set; }
```

- *Type:* object

vnic_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#vnic_mappings DisasterRecoveryDrProtectionGroup#vnic_mappings}

---

### DisasterRecoveryDrProtectionGroupMembersBackendSetMappings <a name="DisasterRecoveryDrProtectionGroupMembersBackendSetMappings" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrProtectionGroupMembersBackendSetMappings {
    string DestinationBackendSetName = null,
    object IsBackendSetForNonMovable = null,
    string SourceBackendSetName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappings.property.destinationBackendSetName">DestinationBackendSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_backend_set_name DisasterRecoveryDrProtectionGroup#destination_backend_set_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappings.property.isBackendSetForNonMovable">IsBackendSetForNonMovable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#is_backend_set_for_non_movable DisasterRecoveryDrProtectionGroup#is_backend_set_for_non_movable}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappings.property.sourceBackendSetName">SourceBackendSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#source_backend_set_name DisasterRecoveryDrProtectionGroup#source_backend_set_name}. |

---

##### `DestinationBackendSetName`<sup>Optional</sup> <a name="DestinationBackendSetName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappings.property.destinationBackendSetName"></a>

```csharp
public string DestinationBackendSetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_backend_set_name DisasterRecoveryDrProtectionGroup#destination_backend_set_name}.

---

##### `IsBackendSetForNonMovable`<sup>Optional</sup> <a name="IsBackendSetForNonMovable" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappings.property.isBackendSetForNonMovable"></a>

```csharp
public object IsBackendSetForNonMovable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#is_backend_set_for_non_movable DisasterRecoveryDrProtectionGroup#is_backend_set_for_non_movable}.

---

##### `SourceBackendSetName`<sup>Optional</sup> <a name="SourceBackendSetName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappings.property.sourceBackendSetName"></a>

```csharp
public string SourceBackendSetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#source_backend_set_name DisasterRecoveryDrProtectionGroup#source_backend_set_name}.

---

### DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations <a name="DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations {
    DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails AttachmentDetails = null,
    string BlockVolumeId = null,
    DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails MountDetails = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations.property.attachmentDetails">AttachmentDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails</a></code> | attachment_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations.property.blockVolumeId">BlockVolumeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#block_volume_id DisasterRecoveryDrProtectionGroup#block_volume_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations.property.mountDetails">MountDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails</a></code> | mount_details block. |

---

##### `AttachmentDetails`<sup>Optional</sup> <a name="AttachmentDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations.property.attachmentDetails"></a>

```csharp
public DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails AttachmentDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails</a>

attachment_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#attachment_details DisasterRecoveryDrProtectionGroup#attachment_details}

---

##### `BlockVolumeId`<sup>Optional</sup> <a name="BlockVolumeId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations.property.blockVolumeId"></a>

```csharp
public string BlockVolumeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#block_volume_id DisasterRecoveryDrProtectionGroup#block_volume_id}.

---

##### `MountDetails`<sup>Optional</sup> <a name="MountDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations.property.mountDetails"></a>

```csharp
public DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails MountDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails</a>

mount_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#mount_details DisasterRecoveryDrProtectionGroup#mount_details}

---

### DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails <a name="DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails {
    string VolumeAttachmentReferenceInstanceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails.property.volumeAttachmentReferenceInstanceId">VolumeAttachmentReferenceInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#volume_attachment_reference_instance_id DisasterRecoveryDrProtectionGroup#volume_attachment_reference_instance_id}. |

---

##### `VolumeAttachmentReferenceInstanceId`<sup>Optional</sup> <a name="VolumeAttachmentReferenceInstanceId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails.property.volumeAttachmentReferenceInstanceId"></a>

```csharp
public string VolumeAttachmentReferenceInstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#volume_attachment_reference_instance_id DisasterRecoveryDrProtectionGroup#volume_attachment_reference_instance_id}.

---

### DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails <a name="DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails {
    string MountPoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails.property.mountPoint">MountPoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#mount_point DisasterRecoveryDrProtectionGroup#mount_point}. |

---

##### `MountPoint`<sup>Optional</sup> <a name="MountPoint" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails.property.mountPoint"></a>

```csharp
public string MountPoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#mount_point DisasterRecoveryDrProtectionGroup#mount_point}.

---

### DisasterRecoveryDrProtectionGroupMembersExportMappings <a name="DisasterRecoveryDrProtectionGroupMembersExportMappings" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrProtectionGroupMembersExportMappings {
    string DestinationMountTargetId = null,
    string ExportId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappings.property.destinationMountTargetId">DestinationMountTargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_mount_target_id DisasterRecoveryDrProtectionGroup#destination_mount_target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappings.property.exportId">ExportId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#export_id DisasterRecoveryDrProtectionGroup#export_id}. |

---

##### `DestinationMountTargetId`<sup>Optional</sup> <a name="DestinationMountTargetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappings.property.destinationMountTargetId"></a>

```csharp
public string DestinationMountTargetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_mount_target_id DisasterRecoveryDrProtectionGroup#destination_mount_target_id}.

---

##### `ExportId`<sup>Optional</sup> <a name="ExportId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappings.property.exportId"></a>

```csharp
public string ExportId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#export_id DisasterRecoveryDrProtectionGroup#export_id}.

---

### DisasterRecoveryDrProtectionGroupMembersFileSystemOperations <a name="DisasterRecoveryDrProtectionGroupMembersFileSystemOperations" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrProtectionGroupMembersFileSystemOperations {
    string ExportPath = null,
    DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails MountDetails = null,
    string MountPoint = null,
    string MountTargetId = null,
    DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails UnmountDetails = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperations.property.exportPath">ExportPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#export_path DisasterRecoveryDrProtectionGroup#export_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperations.property.mountDetails">MountDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails</a></code> | mount_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperations.property.mountPoint">MountPoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#mount_point DisasterRecoveryDrProtectionGroup#mount_point}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperations.property.mountTargetId">MountTargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#mount_target_id DisasterRecoveryDrProtectionGroup#mount_target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperations.property.unmountDetails">UnmountDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails</a></code> | unmount_details block. |

---

##### `ExportPath`<sup>Optional</sup> <a name="ExportPath" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperations.property.exportPath"></a>

```csharp
public string ExportPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#export_path DisasterRecoveryDrProtectionGroup#export_path}.

---

##### `MountDetails`<sup>Optional</sup> <a name="MountDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperations.property.mountDetails"></a>

```csharp
public DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails MountDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails</a>

mount_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#mount_details DisasterRecoveryDrProtectionGroup#mount_details}

---

##### `MountPoint`<sup>Optional</sup> <a name="MountPoint" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperations.property.mountPoint"></a>

```csharp
public string MountPoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#mount_point DisasterRecoveryDrProtectionGroup#mount_point}.

---

##### `MountTargetId`<sup>Optional</sup> <a name="MountTargetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperations.property.mountTargetId"></a>

```csharp
public string MountTargetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#mount_target_id DisasterRecoveryDrProtectionGroup#mount_target_id}.

---

##### `UnmountDetails`<sup>Optional</sup> <a name="UnmountDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperations.property.unmountDetails"></a>

```csharp
public DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails UnmountDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails</a>

unmount_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#unmount_details DisasterRecoveryDrProtectionGroup#unmount_details}

---

### DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails <a name="DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails {
    string MountTargetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails.property.mountTargetId">MountTargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#mount_target_id DisasterRecoveryDrProtectionGroup#mount_target_id}. |

---

##### `MountTargetId`<sup>Optional</sup> <a name="MountTargetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails.property.mountTargetId"></a>

```csharp
public string MountTargetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#mount_target_id DisasterRecoveryDrProtectionGroup#mount_target_id}.

---

### DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails <a name="DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails {
    string MountTargetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails.property.mountTargetId">MountTargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#mount_target_id DisasterRecoveryDrProtectionGroup#mount_target_id}. |

---

##### `MountTargetId`<sup>Optional</sup> <a name="MountTargetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails.property.mountTargetId"></a>

```csharp
public string MountTargetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#mount_target_id DisasterRecoveryDrProtectionGroup#mount_target_id}.

---

### DisasterRecoveryDrProtectionGroupMembersVnicMapping <a name="DisasterRecoveryDrProtectionGroupMembersVnicMapping" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMapping"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMapping.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrProtectionGroupMembersVnicMapping {
    string[] DestinationNsgIdList = null,
    string DestinationSubnetId = null,
    string SourceVnicId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMapping.property.destinationNsgIdList">DestinationNsgIdList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_nsg_id_list DisasterRecoveryDrProtectionGroup#destination_nsg_id_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMapping.property.destinationSubnetId">DestinationSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_subnet_id DisasterRecoveryDrProtectionGroup#destination_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMapping.property.sourceVnicId">SourceVnicId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#source_vnic_id DisasterRecoveryDrProtectionGroup#source_vnic_id}. |

---

##### `DestinationNsgIdList`<sup>Optional</sup> <a name="DestinationNsgIdList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMapping.property.destinationNsgIdList"></a>

```csharp
public string[] DestinationNsgIdList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_nsg_id_list DisasterRecoveryDrProtectionGroup#destination_nsg_id_list}.

---

##### `DestinationSubnetId`<sup>Optional</sup> <a name="DestinationSubnetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMapping.property.destinationSubnetId"></a>

```csharp
public string DestinationSubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_subnet_id DisasterRecoveryDrProtectionGroup#destination_subnet_id}.

---

##### `SourceVnicId`<sup>Optional</sup> <a name="SourceVnicId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMapping.property.sourceVnicId"></a>

```csharp
public string SourceVnicId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#source_vnic_id DisasterRecoveryDrProtectionGroup#source_vnic_id}.

---

### DisasterRecoveryDrProtectionGroupMembersVnicMappings <a name="DisasterRecoveryDrProtectionGroupMembersVnicMappings" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrProtectionGroupMembersVnicMappings {
    string[] DestinationNsgIdList = null,
    string DestinationPrimaryPrivateIpAddress = null,
    string DestinationPrimaryPrivateIpHostnameLabel = null,
    string DestinationSubnetId = null,
    string SourceVnicId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappings.property.destinationNsgIdList">DestinationNsgIdList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_nsg_id_list DisasterRecoveryDrProtectionGroup#destination_nsg_id_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappings.property.destinationPrimaryPrivateIpAddress">DestinationPrimaryPrivateIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_primary_private_ip_address DisasterRecoveryDrProtectionGroup#destination_primary_private_ip_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappings.property.destinationPrimaryPrivateIpHostnameLabel">DestinationPrimaryPrivateIpHostnameLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_primary_private_ip_hostname_label DisasterRecoveryDrProtectionGroup#destination_primary_private_ip_hostname_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappings.property.destinationSubnetId">DestinationSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_subnet_id DisasterRecoveryDrProtectionGroup#destination_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappings.property.sourceVnicId">SourceVnicId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#source_vnic_id DisasterRecoveryDrProtectionGroup#source_vnic_id}. |

---

##### `DestinationNsgIdList`<sup>Optional</sup> <a name="DestinationNsgIdList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappings.property.destinationNsgIdList"></a>

```csharp
public string[] DestinationNsgIdList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_nsg_id_list DisasterRecoveryDrProtectionGroup#destination_nsg_id_list}.

---

##### `DestinationPrimaryPrivateIpAddress`<sup>Optional</sup> <a name="DestinationPrimaryPrivateIpAddress" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappings.property.destinationPrimaryPrivateIpAddress"></a>

```csharp
public string DestinationPrimaryPrivateIpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_primary_private_ip_address DisasterRecoveryDrProtectionGroup#destination_primary_private_ip_address}.

---

##### `DestinationPrimaryPrivateIpHostnameLabel`<sup>Optional</sup> <a name="DestinationPrimaryPrivateIpHostnameLabel" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappings.property.destinationPrimaryPrivateIpHostnameLabel"></a>

```csharp
public string DestinationPrimaryPrivateIpHostnameLabel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_primary_private_ip_hostname_label DisasterRecoveryDrProtectionGroup#destination_primary_private_ip_hostname_label}.

---

##### `DestinationSubnetId`<sup>Optional</sup> <a name="DestinationSubnetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappings.property.destinationSubnetId"></a>

```csharp
public string DestinationSubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_subnet_id DisasterRecoveryDrProtectionGroup#destination_subnet_id}.

---

##### `SourceVnicId`<sup>Optional</sup> <a name="SourceVnicId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappings.property.sourceVnicId"></a>

```csharp
public string SourceVnicId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#source_vnic_id DisasterRecoveryDrProtectionGroup#source_vnic_id}.

---

### DisasterRecoveryDrProtectionGroupTimeouts <a name="DisasterRecoveryDrProtectionGroupTimeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrProtectionGroupTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#create DisasterRecoveryDrProtectionGroup#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#delete DisasterRecoveryDrProtectionGroup#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#update DisasterRecoveryDrProtectionGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#create DisasterRecoveryDrProtectionGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#delete DisasterRecoveryDrProtectionGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#update DisasterRecoveryDrProtectionGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DisasterRecoveryDrProtectionGroupAssociationOutputReference <a name="DisasterRecoveryDrProtectionGroupAssociationOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrProtectionGroupAssociationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.resetPeerId">ResetPeerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.resetPeerRegion">ResetPeerRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPeerId` <a name="ResetPeerId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.resetPeerId"></a>

```csharp
private void ResetPeerId()
```

##### `ResetPeerRegion` <a name="ResetPeerRegion" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.resetPeerRegion"></a>

```csharp
private void ResetPeerRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.property.peerIdInput">PeerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.property.peerRegionInput">PeerRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.property.peerId">PeerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.property.peerRegion">PeerRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociation">DisasterRecoveryDrProtectionGroupAssociation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PeerIdInput`<sup>Optional</sup> <a name="PeerIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.property.peerIdInput"></a>

```csharp
public string PeerIdInput { get; }
```

- *Type:* string

---

##### `PeerRegionInput`<sup>Optional</sup> <a name="PeerRegionInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.property.peerRegionInput"></a>

```csharp
public string PeerRegionInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `PeerId`<sup>Required</sup> <a name="PeerId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.property.peerId"></a>

```csharp
public string PeerId { get; }
```

- *Type:* string

---

##### `PeerRegion`<sup>Required</sup> <a name="PeerRegion" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.property.peerRegion"></a>

```csharp
public string PeerRegion { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.property.internalValue"></a>

```csharp
public DisasterRecoveryDrProtectionGroupAssociation InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociation">DisasterRecoveryDrProtectionGroupAssociation</a>

---


### DisasterRecoveryDrProtectionGroupLogLocationOutputReference <a name="DisasterRecoveryDrProtectionGroupLogLocationOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrProtectionGroupLogLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocation">DisasterRecoveryDrProtectionGroupLogLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.internalValue"></a>

```csharp
public DisasterRecoveryDrProtectionGroupLogLocation InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocation">DisasterRecoveryDrProtectionGroupLogLocation</a>

---


### DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList <a name="DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.get"></a>

```csharp
private DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference <a name="DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.resetDestinationBackendSetName">ResetDestinationBackendSetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.resetIsBackendSetForNonMovable">ResetIsBackendSetForNonMovable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.resetSourceBackendSetName">ResetSourceBackendSetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationBackendSetName` <a name="ResetDestinationBackendSetName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.resetDestinationBackendSetName"></a>

```csharp
private void ResetDestinationBackendSetName()
```

##### `ResetIsBackendSetForNonMovable` <a name="ResetIsBackendSetForNonMovable" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.resetIsBackendSetForNonMovable"></a>

```csharp
private void ResetIsBackendSetForNonMovable()
```

##### `ResetSourceBackendSetName` <a name="ResetSourceBackendSetName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.resetSourceBackendSetName"></a>

```csharp
private void ResetSourceBackendSetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.destinationBackendSetNameInput">DestinationBackendSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.isBackendSetForNonMovableInput">IsBackendSetForNonMovableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.sourceBackendSetNameInput">SourceBackendSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.destinationBackendSetName">DestinationBackendSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.isBackendSetForNonMovable">IsBackendSetForNonMovable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.sourceBackendSetName">SourceBackendSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationBackendSetNameInput`<sup>Optional</sup> <a name="DestinationBackendSetNameInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.destinationBackendSetNameInput"></a>

```csharp
public string DestinationBackendSetNameInput { get; }
```

- *Type:* string

---

##### `IsBackendSetForNonMovableInput`<sup>Optional</sup> <a name="IsBackendSetForNonMovableInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.isBackendSetForNonMovableInput"></a>

```csharp
public object IsBackendSetForNonMovableInput { get; }
```

- *Type:* object

---

##### `SourceBackendSetNameInput`<sup>Optional</sup> <a name="SourceBackendSetNameInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.sourceBackendSetNameInput"></a>

```csharp
public string SourceBackendSetNameInput { get; }
```

- *Type:* string

---

##### `DestinationBackendSetName`<sup>Required</sup> <a name="DestinationBackendSetName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.destinationBackendSetName"></a>

```csharp
public string DestinationBackendSetName { get; }
```

- *Type:* string

---

##### `IsBackendSetForNonMovable`<sup>Required</sup> <a name="IsBackendSetForNonMovable" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.isBackendSetForNonMovable"></a>

```csharp
public object IsBackendSetForNonMovable { get; }
```

- *Type:* object

---

##### `SourceBackendSetName`<sup>Required</sup> <a name="SourceBackendSetName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.sourceBackendSetName"></a>

```csharp
public string SourceBackendSetName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference <a name="DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.resetVolumeAttachmentReferenceInstanceId">ResetVolumeAttachmentReferenceInstanceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVolumeAttachmentReferenceInstanceId` <a name="ResetVolumeAttachmentReferenceInstanceId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.resetVolumeAttachmentReferenceInstanceId"></a>

```csharp
private void ResetVolumeAttachmentReferenceInstanceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.volumeAttachmentReferenceInstanceIdInput">VolumeAttachmentReferenceInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.volumeAttachmentReferenceInstanceId">VolumeAttachmentReferenceInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VolumeAttachmentReferenceInstanceIdInput`<sup>Optional</sup> <a name="VolumeAttachmentReferenceInstanceIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.volumeAttachmentReferenceInstanceIdInput"></a>

```csharp
public string VolumeAttachmentReferenceInstanceIdInput { get; }
```

- *Type:* string

---

##### `VolumeAttachmentReferenceInstanceId`<sup>Required</sup> <a name="VolumeAttachmentReferenceInstanceId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.volumeAttachmentReferenceInstanceId"></a>

```csharp
public string VolumeAttachmentReferenceInstanceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.internalValue"></a>

```csharp
public DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails</a>

---


### DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList <a name="DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.get"></a>

```csharp
private DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference <a name="DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.resetMountPoint">ResetMountPoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMountPoint` <a name="ResetMountPoint" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.resetMountPoint"></a>

```csharp
private void ResetMountPoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.property.mountPointInput">MountPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.property.mountPoint">MountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MountPointInput`<sup>Optional</sup> <a name="MountPointInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.property.mountPointInput"></a>

```csharp
public string MountPointInput { get; }
```

- *Type:* string

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.property.mountPoint"></a>

```csharp
public string MountPoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.property.internalValue"></a>

```csharp
public DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails</a>

---


### DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference <a name="DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.putAttachmentDetails">PutAttachmentDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.putMountDetails">PutMountDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.resetAttachmentDetails">ResetAttachmentDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.resetBlockVolumeId">ResetBlockVolumeId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.resetMountDetails">ResetMountDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAttachmentDetails` <a name="PutAttachmentDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.putAttachmentDetails"></a>

```csharp
private void PutAttachmentDetails(DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.putAttachmentDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails</a>

---

##### `PutMountDetails` <a name="PutMountDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.putMountDetails"></a>

```csharp
private void PutMountDetails(DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.putMountDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails</a>

---

##### `ResetAttachmentDetails` <a name="ResetAttachmentDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.resetAttachmentDetails"></a>

```csharp
private void ResetAttachmentDetails()
```

##### `ResetBlockVolumeId` <a name="ResetBlockVolumeId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.resetBlockVolumeId"></a>

```csharp
private void ResetBlockVolumeId()
```

##### `ResetMountDetails` <a name="ResetMountDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.resetMountDetails"></a>

```csharp
private void ResetMountDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.attachmentDetails">AttachmentDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.mountDetails">MountDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.attachmentDetailsInput">AttachmentDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.blockVolumeIdInput">BlockVolumeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.mountDetailsInput">MountDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.blockVolumeId">BlockVolumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttachmentDetails`<sup>Required</sup> <a name="AttachmentDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.attachmentDetails"></a>

```csharp
public DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference AttachmentDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference</a>

---

##### `MountDetails`<sup>Required</sup> <a name="MountDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.mountDetails"></a>

```csharp
public DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference MountDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference</a>

---

##### `AttachmentDetailsInput`<sup>Optional</sup> <a name="AttachmentDetailsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.attachmentDetailsInput"></a>

```csharp
public DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails AttachmentDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails</a>

---

##### `BlockVolumeIdInput`<sup>Optional</sup> <a name="BlockVolumeIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.blockVolumeIdInput"></a>

```csharp
public string BlockVolumeIdInput { get; }
```

- *Type:* string

---

##### `MountDetailsInput`<sup>Optional</sup> <a name="MountDetailsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.mountDetailsInput"></a>

```csharp
public DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails MountDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails</a>

---

##### `BlockVolumeId`<sup>Required</sup> <a name="BlockVolumeId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.blockVolumeId"></a>

```csharp
public string BlockVolumeId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DisasterRecoveryDrProtectionGroupMembersExportMappingsList <a name="DisasterRecoveryDrProtectionGroupMembersExportMappingsList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrProtectionGroupMembersExportMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.get"></a>

```csharp
private DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference <a name="DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.resetDestinationMountTargetId">ResetDestinationMountTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.resetExportId">ResetExportId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationMountTargetId` <a name="ResetDestinationMountTargetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.resetDestinationMountTargetId"></a>

```csharp
private void ResetDestinationMountTargetId()
```

##### `ResetExportId` <a name="ResetExportId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.resetExportId"></a>

```csharp
private void ResetExportId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.destinationMountTargetIdInput">DestinationMountTargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.exportIdInput">ExportIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.destinationMountTargetId">DestinationMountTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.exportId">ExportId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationMountTargetIdInput`<sup>Optional</sup> <a name="DestinationMountTargetIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.destinationMountTargetIdInput"></a>

```csharp
public string DestinationMountTargetIdInput { get; }
```

- *Type:* string

---

##### `ExportIdInput`<sup>Optional</sup> <a name="ExportIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.exportIdInput"></a>

```csharp
public string ExportIdInput { get; }
```

- *Type:* string

---

##### `DestinationMountTargetId`<sup>Required</sup> <a name="DestinationMountTargetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.destinationMountTargetId"></a>

```csharp
public string DestinationMountTargetId { get; }
```

- *Type:* string

---

##### `ExportId`<sup>Required</sup> <a name="ExportId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.exportId"></a>

```csharp
public string ExportId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList <a name="DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.get"></a>

```csharp
private DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference <a name="DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.resetMountTargetId">ResetMountTargetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMountTargetId` <a name="ResetMountTargetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.resetMountTargetId"></a>

```csharp
private void ResetMountTargetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.property.mountTargetIdInput">MountTargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.property.mountTargetId">MountTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MountTargetIdInput`<sup>Optional</sup> <a name="MountTargetIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.property.mountTargetIdInput"></a>

```csharp
public string MountTargetIdInput { get; }
```

- *Type:* string

---

##### `MountTargetId`<sup>Required</sup> <a name="MountTargetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.property.mountTargetId"></a>

```csharp
public string MountTargetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.property.internalValue"></a>

```csharp
public DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails</a>

---


### DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference <a name="DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.putMountDetails">PutMountDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.putUnmountDetails">PutUnmountDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.resetExportPath">ResetExportPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.resetMountDetails">ResetMountDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.resetMountPoint">ResetMountPoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.resetMountTargetId">ResetMountTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.resetUnmountDetails">ResetUnmountDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMountDetails` <a name="PutMountDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.putMountDetails"></a>

```csharp
private void PutMountDetails(DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.putMountDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails</a>

---

##### `PutUnmountDetails` <a name="PutUnmountDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.putUnmountDetails"></a>

```csharp
private void PutUnmountDetails(DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.putUnmountDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails</a>

---

##### `ResetExportPath` <a name="ResetExportPath" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.resetExportPath"></a>

```csharp
private void ResetExportPath()
```

##### `ResetMountDetails` <a name="ResetMountDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.resetMountDetails"></a>

```csharp
private void ResetMountDetails()
```

##### `ResetMountPoint` <a name="ResetMountPoint" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.resetMountPoint"></a>

```csharp
private void ResetMountPoint()
```

##### `ResetMountTargetId` <a name="ResetMountTargetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.resetMountTargetId"></a>

```csharp
private void ResetMountTargetId()
```

##### `ResetUnmountDetails` <a name="ResetUnmountDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.resetUnmountDetails"></a>

```csharp
private void ResetUnmountDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.mountDetails">MountDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.unmountDetails">UnmountDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.exportPathInput">ExportPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.mountDetailsInput">MountDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.mountPointInput">MountPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.mountTargetIdInput">MountTargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.unmountDetailsInput">UnmountDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.exportPath">ExportPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.mountPoint">MountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.mountTargetId">MountTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MountDetails`<sup>Required</sup> <a name="MountDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.mountDetails"></a>

```csharp
public DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference MountDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference</a>

---

##### `UnmountDetails`<sup>Required</sup> <a name="UnmountDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.unmountDetails"></a>

```csharp
public DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference UnmountDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference</a>

---

##### `ExportPathInput`<sup>Optional</sup> <a name="ExportPathInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.exportPathInput"></a>

```csharp
public string ExportPathInput { get; }
```

- *Type:* string

---

##### `MountDetailsInput`<sup>Optional</sup> <a name="MountDetailsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.mountDetailsInput"></a>

```csharp
public DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails MountDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails</a>

---

##### `MountPointInput`<sup>Optional</sup> <a name="MountPointInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.mountPointInput"></a>

```csharp
public string MountPointInput { get; }
```

- *Type:* string

---

##### `MountTargetIdInput`<sup>Optional</sup> <a name="MountTargetIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.mountTargetIdInput"></a>

```csharp
public string MountTargetIdInput { get; }
```

- *Type:* string

---

##### `UnmountDetailsInput`<sup>Optional</sup> <a name="UnmountDetailsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.unmountDetailsInput"></a>

```csharp
public DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails UnmountDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails</a>

---

##### `ExportPath`<sup>Required</sup> <a name="ExportPath" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.exportPath"></a>

```csharp
public string ExportPath { get; }
```

- *Type:* string

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.mountPoint"></a>

```csharp
public string MountPoint { get; }
```

- *Type:* string

---

##### `MountTargetId`<sup>Required</sup> <a name="MountTargetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.mountTargetId"></a>

```csharp
public string MountTargetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference <a name="DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.resetMountTargetId">ResetMountTargetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMountTargetId` <a name="ResetMountTargetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.resetMountTargetId"></a>

```csharp
private void ResetMountTargetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.property.mountTargetIdInput">MountTargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.property.mountTargetId">MountTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MountTargetIdInput`<sup>Optional</sup> <a name="MountTargetIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.property.mountTargetIdInput"></a>

```csharp
public string MountTargetIdInput { get; }
```

- *Type:* string

---

##### `MountTargetId`<sup>Required</sup> <a name="MountTargetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.property.mountTargetId"></a>

```csharp
public string MountTargetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.property.internalValue"></a>

```csharp
public DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails</a>

---


### DisasterRecoveryDrProtectionGroupMembersList <a name="DisasterRecoveryDrProtectionGroupMembersList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrProtectionGroupMembersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.get"></a>

```csharp
private DisasterRecoveryDrProtectionGroupMembersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DisasterRecoveryDrProtectionGroupMembersOutputReference <a name="DisasterRecoveryDrProtectionGroupMembersOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrProtectionGroupMembersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.putBackendSetMappings">PutBackendSetMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.putBlockVolumeOperations">PutBlockVolumeOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.putExportMappings">PutExportMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.putFileSystemOperations">PutFileSystemOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.putVnicMapping">PutVnicMapping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.putVnicMappings">PutVnicMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetAutonomousDatabaseStandbyTypeForDrDrills">ResetAutonomousDatabaseStandbyTypeForDrDrills</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetBackendSetMappings">ResetBackendSetMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetBlockVolumeOperations">ResetBlockVolumeOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetConnectionStringType">ResetConnectionStringType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetDestinationAvailabilityDomain">ResetDestinationAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetDestinationCapacityReservationId">ResetDestinationCapacityReservationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetDestinationCompartmentId">ResetDestinationCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetDestinationDedicatedVmHostId">ResetDestinationDedicatedVmHostId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetDestinationLoadBalancerId">ResetDestinationLoadBalancerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetDestinationNetworkLoadBalancerId">ResetDestinationNetworkLoadBalancerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetExportMappings">ResetExportMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetFileSystemOperations">ResetFileSystemOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetIsMovable">ResetIsMovable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetIsRetainFaultDomain">ResetIsRetainFaultDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetIsStartStopEnabled">ResetIsStartStopEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetPasswordVaultSecretId">ResetPasswordVaultSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetVnicMapping">ResetVnicMapping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetVnicMappings">ResetVnicMappings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBackendSetMappings` <a name="PutBackendSetMappings" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.putBackendSetMappings"></a>

```csharp
private void PutBackendSetMappings(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.putBackendSetMappings.parameter.value"></a>

- *Type:* object

---

##### `PutBlockVolumeOperations` <a name="PutBlockVolumeOperations" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.putBlockVolumeOperations"></a>

```csharp
private void PutBlockVolumeOperations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.putBlockVolumeOperations.parameter.value"></a>

- *Type:* object

---

##### `PutExportMappings` <a name="PutExportMappings" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.putExportMappings"></a>

```csharp
private void PutExportMappings(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.putExportMappings.parameter.value"></a>

- *Type:* object

---

##### `PutFileSystemOperations` <a name="PutFileSystemOperations" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.putFileSystemOperations"></a>

```csharp
private void PutFileSystemOperations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.putFileSystemOperations.parameter.value"></a>

- *Type:* object

---

##### `PutVnicMapping` <a name="PutVnicMapping" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.putVnicMapping"></a>

```csharp
private void PutVnicMapping(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.putVnicMapping.parameter.value"></a>

- *Type:* object

---

##### `PutVnicMappings` <a name="PutVnicMappings" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.putVnicMappings"></a>

```csharp
private void PutVnicMappings(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.putVnicMappings.parameter.value"></a>

- *Type:* object

---

##### `ResetAutonomousDatabaseStandbyTypeForDrDrills` <a name="ResetAutonomousDatabaseStandbyTypeForDrDrills" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetAutonomousDatabaseStandbyTypeForDrDrills"></a>

```csharp
private void ResetAutonomousDatabaseStandbyTypeForDrDrills()
```

##### `ResetBackendSetMappings` <a name="ResetBackendSetMappings" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetBackendSetMappings"></a>

```csharp
private void ResetBackendSetMappings()
```

##### `ResetBlockVolumeOperations` <a name="ResetBlockVolumeOperations" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetBlockVolumeOperations"></a>

```csharp
private void ResetBlockVolumeOperations()
```

##### `ResetBucket` <a name="ResetBucket" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetConnectionStringType` <a name="ResetConnectionStringType" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetConnectionStringType"></a>

```csharp
private void ResetConnectionStringType()
```

##### `ResetDestinationAvailabilityDomain` <a name="ResetDestinationAvailabilityDomain" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetDestinationAvailabilityDomain"></a>

```csharp
private void ResetDestinationAvailabilityDomain()
```

##### `ResetDestinationCapacityReservationId` <a name="ResetDestinationCapacityReservationId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetDestinationCapacityReservationId"></a>

```csharp
private void ResetDestinationCapacityReservationId()
```

##### `ResetDestinationCompartmentId` <a name="ResetDestinationCompartmentId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetDestinationCompartmentId"></a>

```csharp
private void ResetDestinationCompartmentId()
```

##### `ResetDestinationDedicatedVmHostId` <a name="ResetDestinationDedicatedVmHostId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetDestinationDedicatedVmHostId"></a>

```csharp
private void ResetDestinationDedicatedVmHostId()
```

##### `ResetDestinationLoadBalancerId` <a name="ResetDestinationLoadBalancerId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetDestinationLoadBalancerId"></a>

```csharp
private void ResetDestinationLoadBalancerId()
```

##### `ResetDestinationNetworkLoadBalancerId` <a name="ResetDestinationNetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetDestinationNetworkLoadBalancerId"></a>

```csharp
private void ResetDestinationNetworkLoadBalancerId()
```

##### `ResetExportMappings` <a name="ResetExportMappings" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetExportMappings"></a>

```csharp
private void ResetExportMappings()
```

##### `ResetFileSystemOperations` <a name="ResetFileSystemOperations" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetFileSystemOperations"></a>

```csharp
private void ResetFileSystemOperations()
```

##### `ResetIsMovable` <a name="ResetIsMovable" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetIsMovable"></a>

```csharp
private void ResetIsMovable()
```

##### `ResetIsRetainFaultDomain` <a name="ResetIsRetainFaultDomain" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetIsRetainFaultDomain"></a>

```csharp
private void ResetIsRetainFaultDomain()
```

##### `ResetIsStartStopEnabled` <a name="ResetIsStartStopEnabled" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetIsStartStopEnabled"></a>

```csharp
private void ResetIsStartStopEnabled()
```

##### `ResetNamespace` <a name="ResetNamespace" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPasswordVaultSecretId` <a name="ResetPasswordVaultSecretId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetPasswordVaultSecretId"></a>

```csharp
private void ResetPasswordVaultSecretId()
```

##### `ResetVnicMapping` <a name="ResetVnicMapping" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetVnicMapping"></a>

```csharp
private void ResetVnicMapping()
```

##### `ResetVnicMappings` <a name="ResetVnicMappings" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetVnicMappings"></a>

```csharp
private void ResetVnicMappings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.backendSetMappings">BackendSetMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList">DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.blockVolumeOperations">BlockVolumeOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.exportMappings">ExportMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList">DisasterRecoveryDrProtectionGroupMembersExportMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.fileSystemOperations">FileSystemOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.vnicMapping">VnicMapping</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList">DisasterRecoveryDrProtectionGroupMembersVnicMappingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.vnicMappings">VnicMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList">DisasterRecoveryDrProtectionGroupMembersVnicMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.autonomousDatabaseStandbyTypeForDrDrillsInput">AutonomousDatabaseStandbyTypeForDrDrillsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.backendSetMappingsInput">BackendSetMappingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.blockVolumeOperationsInput">BlockVolumeOperationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.connectionStringTypeInput">ConnectionStringTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationAvailabilityDomainInput">DestinationAvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationCapacityReservationIdInput">DestinationCapacityReservationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationCompartmentIdInput">DestinationCompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationDedicatedVmHostIdInput">DestinationDedicatedVmHostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationLoadBalancerIdInput">DestinationLoadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationNetworkLoadBalancerIdInput">DestinationNetworkLoadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.exportMappingsInput">ExportMappingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.fileSystemOperationsInput">FileSystemOperationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.isMovableInput">IsMovableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.isRetainFaultDomainInput">IsRetainFaultDomainInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.isStartStopEnabledInput">IsStartStopEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.memberIdInput">MemberIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.memberTypeInput">MemberTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.passwordVaultSecretIdInput">PasswordVaultSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.vnicMappingInput">VnicMappingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.vnicMappingsInput">VnicMappingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.autonomousDatabaseStandbyTypeForDrDrills">AutonomousDatabaseStandbyTypeForDrDrills</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.connectionStringType">ConnectionStringType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationAvailabilityDomain">DestinationAvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationCapacityReservationId">DestinationCapacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationCompartmentId">DestinationCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationDedicatedVmHostId">DestinationDedicatedVmHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationLoadBalancerId">DestinationLoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationNetworkLoadBalancerId">DestinationNetworkLoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.isMovable">IsMovable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.isRetainFaultDomain">IsRetainFaultDomain</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.isStartStopEnabled">IsStartStopEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.memberId">MemberId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.memberType">MemberType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.passwordVaultSecretId">PasswordVaultSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackendSetMappings`<sup>Required</sup> <a name="BackendSetMappings" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.backendSetMappings"></a>

```csharp
public DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList BackendSetMappings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList">DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList</a>

---

##### `BlockVolumeOperations`<sup>Required</sup> <a name="BlockVolumeOperations" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.blockVolumeOperations"></a>

```csharp
public DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList BlockVolumeOperations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList</a>

---

##### `ExportMappings`<sup>Required</sup> <a name="ExportMappings" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.exportMappings"></a>

```csharp
public DisasterRecoveryDrProtectionGroupMembersExportMappingsList ExportMappings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList">DisasterRecoveryDrProtectionGroupMembersExportMappingsList</a>

---

##### `FileSystemOperations`<sup>Required</sup> <a name="FileSystemOperations" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.fileSystemOperations"></a>

```csharp
public DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList FileSystemOperations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList</a>

---

##### `VnicMapping`<sup>Required</sup> <a name="VnicMapping" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.vnicMapping"></a>

```csharp
public DisasterRecoveryDrProtectionGroupMembersVnicMappingList VnicMapping { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList">DisasterRecoveryDrProtectionGroupMembersVnicMappingList</a>

---

##### `VnicMappings`<sup>Required</sup> <a name="VnicMappings" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.vnicMappings"></a>

```csharp
public DisasterRecoveryDrProtectionGroupMembersVnicMappingsList VnicMappings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList">DisasterRecoveryDrProtectionGroupMembersVnicMappingsList</a>

---

##### `AutonomousDatabaseStandbyTypeForDrDrillsInput`<sup>Optional</sup> <a name="AutonomousDatabaseStandbyTypeForDrDrillsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.autonomousDatabaseStandbyTypeForDrDrillsInput"></a>

```csharp
public string AutonomousDatabaseStandbyTypeForDrDrillsInput { get; }
```

- *Type:* string

---

##### `BackendSetMappingsInput`<sup>Optional</sup> <a name="BackendSetMappingsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.backendSetMappingsInput"></a>

```csharp
public object BackendSetMappingsInput { get; }
```

- *Type:* object

---

##### `BlockVolumeOperationsInput`<sup>Optional</sup> <a name="BlockVolumeOperationsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.blockVolumeOperationsInput"></a>

```csharp
public object BlockVolumeOperationsInput { get; }
```

- *Type:* object

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `ConnectionStringTypeInput`<sup>Optional</sup> <a name="ConnectionStringTypeInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.connectionStringTypeInput"></a>

```csharp
public string ConnectionStringTypeInput { get; }
```

- *Type:* string

---

##### `DestinationAvailabilityDomainInput`<sup>Optional</sup> <a name="DestinationAvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationAvailabilityDomainInput"></a>

```csharp
public string DestinationAvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `DestinationCapacityReservationIdInput`<sup>Optional</sup> <a name="DestinationCapacityReservationIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationCapacityReservationIdInput"></a>

```csharp
public string DestinationCapacityReservationIdInput { get; }
```

- *Type:* string

---

##### `DestinationCompartmentIdInput`<sup>Optional</sup> <a name="DestinationCompartmentIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationCompartmentIdInput"></a>

```csharp
public string DestinationCompartmentIdInput { get; }
```

- *Type:* string

---

##### `DestinationDedicatedVmHostIdInput`<sup>Optional</sup> <a name="DestinationDedicatedVmHostIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationDedicatedVmHostIdInput"></a>

```csharp
public string DestinationDedicatedVmHostIdInput { get; }
```

- *Type:* string

---

##### `DestinationLoadBalancerIdInput`<sup>Optional</sup> <a name="DestinationLoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationLoadBalancerIdInput"></a>

```csharp
public string DestinationLoadBalancerIdInput { get; }
```

- *Type:* string

---

##### `DestinationNetworkLoadBalancerIdInput`<sup>Optional</sup> <a name="DestinationNetworkLoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationNetworkLoadBalancerIdInput"></a>

```csharp
public string DestinationNetworkLoadBalancerIdInput { get; }
```

- *Type:* string

---

##### `ExportMappingsInput`<sup>Optional</sup> <a name="ExportMappingsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.exportMappingsInput"></a>

```csharp
public object ExportMappingsInput { get; }
```

- *Type:* object

---

##### `FileSystemOperationsInput`<sup>Optional</sup> <a name="FileSystemOperationsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.fileSystemOperationsInput"></a>

```csharp
public object FileSystemOperationsInput { get; }
```

- *Type:* object

---

##### `IsMovableInput`<sup>Optional</sup> <a name="IsMovableInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.isMovableInput"></a>

```csharp
public object IsMovableInput { get; }
```

- *Type:* object

---

##### `IsRetainFaultDomainInput`<sup>Optional</sup> <a name="IsRetainFaultDomainInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.isRetainFaultDomainInput"></a>

```csharp
public object IsRetainFaultDomainInput { get; }
```

- *Type:* object

---

##### `IsStartStopEnabledInput`<sup>Optional</sup> <a name="IsStartStopEnabledInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.isStartStopEnabledInput"></a>

```csharp
public object IsStartStopEnabledInput { get; }
```

- *Type:* object

---

##### `MemberIdInput`<sup>Optional</sup> <a name="MemberIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.memberIdInput"></a>

```csharp
public string MemberIdInput { get; }
```

- *Type:* string

---

##### `MemberTypeInput`<sup>Optional</sup> <a name="MemberTypeInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.memberTypeInput"></a>

```csharp
public string MemberTypeInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PasswordVaultSecretIdInput`<sup>Optional</sup> <a name="PasswordVaultSecretIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.passwordVaultSecretIdInput"></a>

```csharp
public string PasswordVaultSecretIdInput { get; }
```

- *Type:* string

---

##### `VnicMappingInput`<sup>Optional</sup> <a name="VnicMappingInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.vnicMappingInput"></a>

```csharp
public object VnicMappingInput { get; }
```

- *Type:* object

---

##### `VnicMappingsInput`<sup>Optional</sup> <a name="VnicMappingsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.vnicMappingsInput"></a>

```csharp
public object VnicMappingsInput { get; }
```

- *Type:* object

---

##### `AutonomousDatabaseStandbyTypeForDrDrills`<sup>Required</sup> <a name="AutonomousDatabaseStandbyTypeForDrDrills" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.autonomousDatabaseStandbyTypeForDrDrills"></a>

```csharp
public string AutonomousDatabaseStandbyTypeForDrDrills { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `ConnectionStringType`<sup>Required</sup> <a name="ConnectionStringType" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.connectionStringType"></a>

```csharp
public string ConnectionStringType { get; }
```

- *Type:* string

---

##### `DestinationAvailabilityDomain`<sup>Required</sup> <a name="DestinationAvailabilityDomain" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationAvailabilityDomain"></a>

```csharp
public string DestinationAvailabilityDomain { get; }
```

- *Type:* string

---

##### `DestinationCapacityReservationId`<sup>Required</sup> <a name="DestinationCapacityReservationId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationCapacityReservationId"></a>

```csharp
public string DestinationCapacityReservationId { get; }
```

- *Type:* string

---

##### `DestinationCompartmentId`<sup>Required</sup> <a name="DestinationCompartmentId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationCompartmentId"></a>

```csharp
public string DestinationCompartmentId { get; }
```

- *Type:* string

---

##### `DestinationDedicatedVmHostId`<sup>Required</sup> <a name="DestinationDedicatedVmHostId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationDedicatedVmHostId"></a>

```csharp
public string DestinationDedicatedVmHostId { get; }
```

- *Type:* string

---

##### `DestinationLoadBalancerId`<sup>Required</sup> <a name="DestinationLoadBalancerId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationLoadBalancerId"></a>

```csharp
public string DestinationLoadBalancerId { get; }
```

- *Type:* string

---

##### `DestinationNetworkLoadBalancerId`<sup>Required</sup> <a name="DestinationNetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationNetworkLoadBalancerId"></a>

```csharp
public string DestinationNetworkLoadBalancerId { get; }
```

- *Type:* string

---

##### `IsMovable`<sup>Required</sup> <a name="IsMovable" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.isMovable"></a>

```csharp
public object IsMovable { get; }
```

- *Type:* object

---

##### `IsRetainFaultDomain`<sup>Required</sup> <a name="IsRetainFaultDomain" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.isRetainFaultDomain"></a>

```csharp
public object IsRetainFaultDomain { get; }
```

- *Type:* object

---

##### `IsStartStopEnabled`<sup>Required</sup> <a name="IsStartStopEnabled" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.isStartStopEnabled"></a>

```csharp
public object IsStartStopEnabled { get; }
```

- *Type:* object

---

##### `MemberId`<sup>Required</sup> <a name="MemberId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.memberId"></a>

```csharp
public string MemberId { get; }
```

- *Type:* string

---

##### `MemberType`<sup>Required</sup> <a name="MemberType" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.memberType"></a>

```csharp
public string MemberType { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `PasswordVaultSecretId`<sup>Required</sup> <a name="PasswordVaultSecretId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.passwordVaultSecretId"></a>

```csharp
public string PasswordVaultSecretId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DisasterRecoveryDrProtectionGroupMembersVnicMappingList <a name="DisasterRecoveryDrProtectionGroupMembersVnicMappingList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrProtectionGroupMembersVnicMappingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.get"></a>

```csharp
private DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference <a name="DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.resetDestinationNsgIdList">ResetDestinationNsgIdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.resetDestinationSubnetId">ResetDestinationSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.resetSourceVnicId">ResetSourceVnicId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationNsgIdList` <a name="ResetDestinationNsgIdList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.resetDestinationNsgIdList"></a>

```csharp
private void ResetDestinationNsgIdList()
```

##### `ResetDestinationSubnetId` <a name="ResetDestinationSubnetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.resetDestinationSubnetId"></a>

```csharp
private void ResetDestinationSubnetId()
```

##### `ResetSourceVnicId` <a name="ResetSourceVnicId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.resetSourceVnicId"></a>

```csharp
private void ResetSourceVnicId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.destinationNsgIdListInput">DestinationNsgIdListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.destinationSubnetIdInput">DestinationSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.sourceVnicIdInput">SourceVnicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.destinationNsgIdList">DestinationNsgIdList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.destinationSubnetId">DestinationSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.sourceVnicId">SourceVnicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationNsgIdListInput`<sup>Optional</sup> <a name="DestinationNsgIdListInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.destinationNsgIdListInput"></a>

```csharp
public string[] DestinationNsgIdListInput { get; }
```

- *Type:* string[]

---

##### `DestinationSubnetIdInput`<sup>Optional</sup> <a name="DestinationSubnetIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.destinationSubnetIdInput"></a>

```csharp
public string DestinationSubnetIdInput { get; }
```

- *Type:* string

---

##### `SourceVnicIdInput`<sup>Optional</sup> <a name="SourceVnicIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.sourceVnicIdInput"></a>

```csharp
public string SourceVnicIdInput { get; }
```

- *Type:* string

---

##### `DestinationNsgIdList`<sup>Required</sup> <a name="DestinationNsgIdList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.destinationNsgIdList"></a>

```csharp
public string[] DestinationNsgIdList { get; }
```

- *Type:* string[]

---

##### `DestinationSubnetId`<sup>Required</sup> <a name="DestinationSubnetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.destinationSubnetId"></a>

```csharp
public string DestinationSubnetId { get; }
```

- *Type:* string

---

##### `SourceVnicId`<sup>Required</sup> <a name="SourceVnicId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.sourceVnicId"></a>

```csharp
public string SourceVnicId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DisasterRecoveryDrProtectionGroupMembersVnicMappingsList <a name="DisasterRecoveryDrProtectionGroupMembersVnicMappingsList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrProtectionGroupMembersVnicMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.get"></a>

```csharp
private DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference <a name="DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.resetDestinationNsgIdList">ResetDestinationNsgIdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.resetDestinationPrimaryPrivateIpAddress">ResetDestinationPrimaryPrivateIpAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.resetDestinationPrimaryPrivateIpHostnameLabel">ResetDestinationPrimaryPrivateIpHostnameLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.resetDestinationSubnetId">ResetDestinationSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.resetSourceVnicId">ResetSourceVnicId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationNsgIdList` <a name="ResetDestinationNsgIdList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.resetDestinationNsgIdList"></a>

```csharp
private void ResetDestinationNsgIdList()
```

##### `ResetDestinationPrimaryPrivateIpAddress` <a name="ResetDestinationPrimaryPrivateIpAddress" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.resetDestinationPrimaryPrivateIpAddress"></a>

```csharp
private void ResetDestinationPrimaryPrivateIpAddress()
```

##### `ResetDestinationPrimaryPrivateIpHostnameLabel` <a name="ResetDestinationPrimaryPrivateIpHostnameLabel" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.resetDestinationPrimaryPrivateIpHostnameLabel"></a>

```csharp
private void ResetDestinationPrimaryPrivateIpHostnameLabel()
```

##### `ResetDestinationSubnetId` <a name="ResetDestinationSubnetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.resetDestinationSubnetId"></a>

```csharp
private void ResetDestinationSubnetId()
```

##### `ResetSourceVnicId` <a name="ResetSourceVnicId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.resetSourceVnicId"></a>

```csharp
private void ResetSourceVnicId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationNsgIdListInput">DestinationNsgIdListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationPrimaryPrivateIpAddressInput">DestinationPrimaryPrivateIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationPrimaryPrivateIpHostnameLabelInput">DestinationPrimaryPrivateIpHostnameLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationSubnetIdInput">DestinationSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.sourceVnicIdInput">SourceVnicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationNsgIdList">DestinationNsgIdList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationPrimaryPrivateIpAddress">DestinationPrimaryPrivateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationPrimaryPrivateIpHostnameLabel">DestinationPrimaryPrivateIpHostnameLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationSubnetId">DestinationSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.sourceVnicId">SourceVnicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationNsgIdListInput`<sup>Optional</sup> <a name="DestinationNsgIdListInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationNsgIdListInput"></a>

```csharp
public string[] DestinationNsgIdListInput { get; }
```

- *Type:* string[]

---

##### `DestinationPrimaryPrivateIpAddressInput`<sup>Optional</sup> <a name="DestinationPrimaryPrivateIpAddressInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationPrimaryPrivateIpAddressInput"></a>

```csharp
public string DestinationPrimaryPrivateIpAddressInput { get; }
```

- *Type:* string

---

##### `DestinationPrimaryPrivateIpHostnameLabelInput`<sup>Optional</sup> <a name="DestinationPrimaryPrivateIpHostnameLabelInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationPrimaryPrivateIpHostnameLabelInput"></a>

```csharp
public string DestinationPrimaryPrivateIpHostnameLabelInput { get; }
```

- *Type:* string

---

##### `DestinationSubnetIdInput`<sup>Optional</sup> <a name="DestinationSubnetIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationSubnetIdInput"></a>

```csharp
public string DestinationSubnetIdInput { get; }
```

- *Type:* string

---

##### `SourceVnicIdInput`<sup>Optional</sup> <a name="SourceVnicIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.sourceVnicIdInput"></a>

```csharp
public string SourceVnicIdInput { get; }
```

- *Type:* string

---

##### `DestinationNsgIdList`<sup>Required</sup> <a name="DestinationNsgIdList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationNsgIdList"></a>

```csharp
public string[] DestinationNsgIdList { get; }
```

- *Type:* string[]

---

##### `DestinationPrimaryPrivateIpAddress`<sup>Required</sup> <a name="DestinationPrimaryPrivateIpAddress" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationPrimaryPrivateIpAddress"></a>

```csharp
public string DestinationPrimaryPrivateIpAddress { get; }
```

- *Type:* string

---

##### `DestinationPrimaryPrivateIpHostnameLabel`<sup>Required</sup> <a name="DestinationPrimaryPrivateIpHostnameLabel" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationPrimaryPrivateIpHostnameLabel"></a>

```csharp
public string DestinationPrimaryPrivateIpHostnameLabel { get; }
```

- *Type:* string

---

##### `DestinationSubnetId`<sup>Required</sup> <a name="DestinationSubnetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationSubnetId"></a>

```csharp
public string DestinationSubnetId { get; }
```

- *Type:* string

---

##### `SourceVnicId`<sup>Required</sup> <a name="SourceVnicId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.sourceVnicId"></a>

```csharp
public string SourceVnicId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DisasterRecoveryDrProtectionGroupTimeoutsOutputReference <a name="DisasterRecoveryDrProtectionGroupTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrProtectionGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



