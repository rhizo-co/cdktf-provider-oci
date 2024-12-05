# `operatorAccessControlOperatorControlAssignment` Submodule <a name="`operatorAccessControlOperatorControlAssignment` Submodule" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OperatorAccessControlOperatorControlAssignment <a name="OperatorAccessControlOperatorControlAssignment" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment oci_operator_access_control_operator_control_assignment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OperatorAccessControlOperatorControlAssignment(Construct Scope, string Id, OperatorAccessControlOperatorControlAssignmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig">OperatorAccessControlOperatorControlAssignmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig">OperatorAccessControlOperatorControlAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetIsAutoApproveDuringMaintenance">ResetIsAutoApproveDuringMaintenance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetIsHypervisorLogForwarded">ResetIsHypervisorLogForwarded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetIsLogForwarded">ResetIsLogForwarded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetRemoteSyslogServerAddress">ResetRemoteSyslogServerAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetRemoteSyslogServerCaCert">ResetRemoteSyslogServerCaCert</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetRemoteSyslogServerPort">ResetRemoteSyslogServerPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetTimeAssignmentFrom">ResetTimeAssignmentFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetTimeAssignmentTo">ResetTimeAssignmentTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetValidateAssignmentTrigger">ResetValidateAssignmentTrigger</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.putTimeouts"></a>

```csharp
private void PutTimeouts(OperatorAccessControlOperatorControlAssignmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts">OperatorAccessControlOperatorControlAssignmentTimeouts</a>

---

##### `ResetComment` <a name="ResetComment" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsAutoApproveDuringMaintenance` <a name="ResetIsAutoApproveDuringMaintenance" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetIsAutoApproveDuringMaintenance"></a>

```csharp
private void ResetIsAutoApproveDuringMaintenance()
```

##### `ResetIsHypervisorLogForwarded` <a name="ResetIsHypervisorLogForwarded" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetIsHypervisorLogForwarded"></a>

```csharp
private void ResetIsHypervisorLogForwarded()
```

##### `ResetIsLogForwarded` <a name="ResetIsLogForwarded" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetIsLogForwarded"></a>

```csharp
private void ResetIsLogForwarded()
```

##### `ResetRemoteSyslogServerAddress` <a name="ResetRemoteSyslogServerAddress" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetRemoteSyslogServerAddress"></a>

```csharp
private void ResetRemoteSyslogServerAddress()
```

##### `ResetRemoteSyslogServerCaCert` <a name="ResetRemoteSyslogServerCaCert" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetRemoteSyslogServerCaCert"></a>

```csharp
private void ResetRemoteSyslogServerCaCert()
```

##### `ResetRemoteSyslogServerPort` <a name="ResetRemoteSyslogServerPort" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetRemoteSyslogServerPort"></a>

```csharp
private void ResetRemoteSyslogServerPort()
```

##### `ResetTimeAssignmentFrom` <a name="ResetTimeAssignmentFrom" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetTimeAssignmentFrom"></a>

```csharp
private void ResetTimeAssignmentFrom()
```

##### `ResetTimeAssignmentTo` <a name="ResetTimeAssignmentTo" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetTimeAssignmentTo"></a>

```csharp
private void ResetTimeAssignmentTo()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetValidateAssignmentTrigger` <a name="ResetValidateAssignmentTrigger" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetValidateAssignmentTrigger"></a>

```csharp
private void ResetValidateAssignmentTrigger()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OperatorAccessControlOperatorControlAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OperatorAccessControlOperatorControlAssignment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OperatorAccessControlOperatorControlAssignment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OperatorAccessControlOperatorControlAssignment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OperatorAccessControlOperatorControlAssignment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OperatorAccessControlOperatorControlAssignment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OperatorAccessControlOperatorControlAssignment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OperatorAccessControlOperatorControlAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OperatorAccessControlOperatorControlAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.assignerId">AssignerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.detachmentDescription">DetachmentDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.errorCode">ErrorCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isDefaultAssignment">IsDefaultAssignment</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.opControlName">OpControlName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeOfAssignment">TimeOfAssignment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeOfDeletion">TimeOfDeletion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference">OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.unassignerId">UnassignerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isAutoApproveDuringMaintenanceInput">IsAutoApproveDuringMaintenanceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isEnforcedAlwaysInput">IsEnforcedAlwaysInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isHypervisorLogForwardedInput">IsHypervisorLogForwardedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isLogForwardedInput">IsLogForwardedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.operatorControlIdInput">OperatorControlIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerAddressInput">RemoteSyslogServerAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerCaCertInput">RemoteSyslogServerCaCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerPortInput">RemoteSyslogServerPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceCompartmentIdInput">ResourceCompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceNameInput">ResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeAssignmentFromInput">TimeAssignmentFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeAssignmentToInput">TimeAssignmentToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.validateAssignmentTriggerInput">ValidateAssignmentTriggerInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isAutoApproveDuringMaintenance">IsAutoApproveDuringMaintenance</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isEnforcedAlways">IsEnforcedAlways</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isHypervisorLogForwarded">IsHypervisorLogForwarded</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isLogForwarded">IsLogForwarded</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.operatorControlId">OperatorControlId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerAddress">RemoteSyslogServerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerCaCert">RemoteSyslogServerCaCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerPort">RemoteSyslogServerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceCompartmentId">ResourceCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeAssignmentFrom">TimeAssignmentFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeAssignmentTo">TimeAssignmentTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.validateAssignmentTrigger">ValidateAssignmentTrigger</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AssignerId`<sup>Required</sup> <a name="AssignerId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.assignerId"></a>

```csharp
public string AssignerId { get; }
```

- *Type:* string

---

##### `DetachmentDescription`<sup>Required</sup> <a name="DetachmentDescription" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.detachmentDescription"></a>

```csharp
public string DetachmentDescription { get; }
```

- *Type:* string

---

##### `ErrorCode`<sup>Required</sup> <a name="ErrorCode" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.errorCode"></a>

```csharp
public double ErrorCode { get; }
```

- *Type:* double

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `IsDefaultAssignment`<sup>Required</sup> <a name="IsDefaultAssignment" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isDefaultAssignment"></a>

```csharp
public IResolvable IsDefaultAssignment { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `OpControlName`<sup>Required</sup> <a name="OpControlName" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.opControlName"></a>

```csharp
public string OpControlName { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeOfAssignment`<sup>Required</sup> <a name="TimeOfAssignment" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeOfAssignment"></a>

```csharp
public string TimeOfAssignment { get; }
```

- *Type:* string

---

##### `TimeOfDeletion`<sup>Required</sup> <a name="TimeOfDeletion" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeOfDeletion"></a>

```csharp
public string TimeOfDeletion { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeouts"></a>

```csharp
public OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference">OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference</a>

---

##### `UnassignerId`<sup>Required</sup> <a name="UnassignerId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.unassignerId"></a>

```csharp
public string UnassignerId { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsAutoApproveDuringMaintenanceInput`<sup>Optional</sup> <a name="IsAutoApproveDuringMaintenanceInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isAutoApproveDuringMaintenanceInput"></a>

```csharp
public object IsAutoApproveDuringMaintenanceInput { get; }
```

- *Type:* object

---

##### `IsEnforcedAlwaysInput`<sup>Optional</sup> <a name="IsEnforcedAlwaysInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isEnforcedAlwaysInput"></a>

```csharp
public object IsEnforcedAlwaysInput { get; }
```

- *Type:* object

---

##### `IsHypervisorLogForwardedInput`<sup>Optional</sup> <a name="IsHypervisorLogForwardedInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isHypervisorLogForwardedInput"></a>

```csharp
public object IsHypervisorLogForwardedInput { get; }
```

- *Type:* object

---

##### `IsLogForwardedInput`<sup>Optional</sup> <a name="IsLogForwardedInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isLogForwardedInput"></a>

```csharp
public object IsLogForwardedInput { get; }
```

- *Type:* object

---

##### `OperatorControlIdInput`<sup>Optional</sup> <a name="OperatorControlIdInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.operatorControlIdInput"></a>

```csharp
public string OperatorControlIdInput { get; }
```

- *Type:* string

---

##### `RemoteSyslogServerAddressInput`<sup>Optional</sup> <a name="RemoteSyslogServerAddressInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerAddressInput"></a>

```csharp
public string RemoteSyslogServerAddressInput { get; }
```

- *Type:* string

---

##### `RemoteSyslogServerCaCertInput`<sup>Optional</sup> <a name="RemoteSyslogServerCaCertInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerCaCertInput"></a>

```csharp
public string RemoteSyslogServerCaCertInput { get; }
```

- *Type:* string

---

##### `RemoteSyslogServerPortInput`<sup>Optional</sup> <a name="RemoteSyslogServerPortInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerPortInput"></a>

```csharp
public double RemoteSyslogServerPortInput { get; }
```

- *Type:* double

---

##### `ResourceCompartmentIdInput`<sup>Optional</sup> <a name="ResourceCompartmentIdInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceCompartmentIdInput"></a>

```csharp
public string ResourceCompartmentIdInput { get; }
```

- *Type:* string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `ResourceNameInput`<sup>Optional</sup> <a name="ResourceNameInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceNameInput"></a>

```csharp
public string ResourceNameInput { get; }
```

- *Type:* string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `TimeAssignmentFromInput`<sup>Optional</sup> <a name="TimeAssignmentFromInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeAssignmentFromInput"></a>

```csharp
public string TimeAssignmentFromInput { get; }
```

- *Type:* string

---

##### `TimeAssignmentToInput`<sup>Optional</sup> <a name="TimeAssignmentToInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeAssignmentToInput"></a>

```csharp
public string TimeAssignmentToInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ValidateAssignmentTriggerInput`<sup>Optional</sup> <a name="ValidateAssignmentTriggerInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.validateAssignmentTriggerInput"></a>

```csharp
public double ValidateAssignmentTriggerInput { get; }
```

- *Type:* double

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsAutoApproveDuringMaintenance`<sup>Required</sup> <a name="IsAutoApproveDuringMaintenance" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isAutoApproveDuringMaintenance"></a>

```csharp
public object IsAutoApproveDuringMaintenance { get; }
```

- *Type:* object

---

##### `IsEnforcedAlways`<sup>Required</sup> <a name="IsEnforcedAlways" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isEnforcedAlways"></a>

```csharp
public object IsEnforcedAlways { get; }
```

- *Type:* object

---

##### `IsHypervisorLogForwarded`<sup>Required</sup> <a name="IsHypervisorLogForwarded" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isHypervisorLogForwarded"></a>

```csharp
public object IsHypervisorLogForwarded { get; }
```

- *Type:* object

---

##### `IsLogForwarded`<sup>Required</sup> <a name="IsLogForwarded" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isLogForwarded"></a>

```csharp
public object IsLogForwarded { get; }
```

- *Type:* object

---

##### `OperatorControlId`<sup>Required</sup> <a name="OperatorControlId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.operatorControlId"></a>

```csharp
public string OperatorControlId { get; }
```

- *Type:* string

---

##### `RemoteSyslogServerAddress`<sup>Required</sup> <a name="RemoteSyslogServerAddress" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerAddress"></a>

```csharp
public string RemoteSyslogServerAddress { get; }
```

- *Type:* string

---

##### `RemoteSyslogServerCaCert`<sup>Required</sup> <a name="RemoteSyslogServerCaCert" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerCaCert"></a>

```csharp
public string RemoteSyslogServerCaCert { get; }
```

- *Type:* string

---

##### `RemoteSyslogServerPort`<sup>Required</sup> <a name="RemoteSyslogServerPort" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerPort"></a>

```csharp
public double RemoteSyslogServerPort { get; }
```

- *Type:* double

---

##### `ResourceCompartmentId`<sup>Required</sup> <a name="ResourceCompartmentId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceCompartmentId"></a>

```csharp
public string ResourceCompartmentId { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `TimeAssignmentFrom`<sup>Required</sup> <a name="TimeAssignmentFrom" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeAssignmentFrom"></a>

```csharp
public string TimeAssignmentFrom { get; }
```

- *Type:* string

---

##### `TimeAssignmentTo`<sup>Required</sup> <a name="TimeAssignmentTo" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeAssignmentTo"></a>

```csharp
public string TimeAssignmentTo { get; }
```

- *Type:* string

---

##### `ValidateAssignmentTrigger`<sup>Required</sup> <a name="ValidateAssignmentTrigger" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.validateAssignmentTrigger"></a>

```csharp
public double ValidateAssignmentTrigger { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OperatorAccessControlOperatorControlAssignmentConfig <a name="OperatorAccessControlOperatorControlAssignmentConfig" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OperatorAccessControlOperatorControlAssignmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    object IsEnforcedAlways,
    string OperatorControlId,
    string ResourceCompartmentId,
    string ResourceId,
    string ResourceName,
    string ResourceType,
    string Comment = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    object IsAutoApproveDuringMaintenance = null,
    object IsHypervisorLogForwarded = null,
    object IsLogForwarded = null,
    string RemoteSyslogServerAddress = null,
    string RemoteSyslogServerCaCert = null,
    double RemoteSyslogServerPort = null,
    string TimeAssignmentFrom = null,
    string TimeAssignmentTo = null,
    OperatorAccessControlOperatorControlAssignmentTimeouts Timeouts = null,
    double ValidateAssignmentTrigger = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#compartment_id OperatorAccessControlOperatorControlAssignment#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.isEnforcedAlways">IsEnforcedAlways</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_enforced_always OperatorAccessControlOperatorControlAssignment#is_enforced_always}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.operatorControlId">OperatorControlId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#operator_control_id OperatorAccessControlOperatorControlAssignment#operator_control_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.resourceCompartmentId">ResourceCompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_compartment_id OperatorAccessControlOperatorControlAssignment#resource_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.resourceId">ResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_id OperatorAccessControlOperatorControlAssignment#resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.resourceName">ResourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_name OperatorAccessControlOperatorControlAssignment#resource_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.resourceType">ResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_type OperatorAccessControlOperatorControlAssignment#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#comment OperatorAccessControlOperatorControlAssignment#comment}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#defined_tags OperatorAccessControlOperatorControlAssignment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#freeform_tags OperatorAccessControlOperatorControlAssignment#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#id OperatorAccessControlOperatorControlAssignment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.isAutoApproveDuringMaintenance">IsAutoApproveDuringMaintenance</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_auto_approve_during_maintenance OperatorAccessControlOperatorControlAssignment#is_auto_approve_during_maintenance}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.isHypervisorLogForwarded">IsHypervisorLogForwarded</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_hypervisor_log_forwarded OperatorAccessControlOperatorControlAssignment#is_hypervisor_log_forwarded}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.isLogForwarded">IsLogForwarded</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_log_forwarded OperatorAccessControlOperatorControlAssignment#is_log_forwarded}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.remoteSyslogServerAddress">RemoteSyslogServerAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#remote_syslog_server_address OperatorAccessControlOperatorControlAssignment#remote_syslog_server_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.remoteSyslogServerCaCert">RemoteSyslogServerCaCert</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#remote_syslog_server_ca_cert OperatorAccessControlOperatorControlAssignment#remote_syslog_server_ca_cert}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.remoteSyslogServerPort">RemoteSyslogServerPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#remote_syslog_server_port OperatorAccessControlOperatorControlAssignment#remote_syslog_server_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.timeAssignmentFrom">TimeAssignmentFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#time_assignment_from OperatorAccessControlOperatorControlAssignment#time_assignment_from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.timeAssignmentTo">TimeAssignmentTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#time_assignment_to OperatorAccessControlOperatorControlAssignment#time_assignment_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts">OperatorAccessControlOperatorControlAssignmentTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.validateAssignmentTrigger">ValidateAssignmentTrigger</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#validate_assignment_trigger OperatorAccessControlOperatorControlAssignment#validate_assignment_trigger}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#compartment_id OperatorAccessControlOperatorControlAssignment#compartment_id}.

---

##### `IsEnforcedAlways`<sup>Required</sup> <a name="IsEnforcedAlways" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.isEnforcedAlways"></a>

```csharp
public object IsEnforcedAlways { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_enforced_always OperatorAccessControlOperatorControlAssignment#is_enforced_always}.

---

##### `OperatorControlId`<sup>Required</sup> <a name="OperatorControlId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.operatorControlId"></a>

```csharp
public string OperatorControlId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#operator_control_id OperatorAccessControlOperatorControlAssignment#operator_control_id}.

---

##### `ResourceCompartmentId`<sup>Required</sup> <a name="ResourceCompartmentId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.resourceCompartmentId"></a>

```csharp
public string ResourceCompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_compartment_id OperatorAccessControlOperatorControlAssignment#resource_compartment_id}.

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_id OperatorAccessControlOperatorControlAssignment#resource_id}.

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.resourceName"></a>

```csharp
public string ResourceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_name OperatorAccessControlOperatorControlAssignment#resource_name}.

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_type OperatorAccessControlOperatorControlAssignment#resource_type}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#comment OperatorAccessControlOperatorControlAssignment#comment}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#defined_tags OperatorAccessControlOperatorControlAssignment#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#freeform_tags OperatorAccessControlOperatorControlAssignment#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#id OperatorAccessControlOperatorControlAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsAutoApproveDuringMaintenance`<sup>Optional</sup> <a name="IsAutoApproveDuringMaintenance" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.isAutoApproveDuringMaintenance"></a>

```csharp
public object IsAutoApproveDuringMaintenance { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_auto_approve_during_maintenance OperatorAccessControlOperatorControlAssignment#is_auto_approve_during_maintenance}.

---

##### `IsHypervisorLogForwarded`<sup>Optional</sup> <a name="IsHypervisorLogForwarded" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.isHypervisorLogForwarded"></a>

```csharp
public object IsHypervisorLogForwarded { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_hypervisor_log_forwarded OperatorAccessControlOperatorControlAssignment#is_hypervisor_log_forwarded}.

---

##### `IsLogForwarded`<sup>Optional</sup> <a name="IsLogForwarded" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.isLogForwarded"></a>

```csharp
public object IsLogForwarded { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_log_forwarded OperatorAccessControlOperatorControlAssignment#is_log_forwarded}.

---

##### `RemoteSyslogServerAddress`<sup>Optional</sup> <a name="RemoteSyslogServerAddress" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.remoteSyslogServerAddress"></a>

```csharp
public string RemoteSyslogServerAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#remote_syslog_server_address OperatorAccessControlOperatorControlAssignment#remote_syslog_server_address}.

---

##### `RemoteSyslogServerCaCert`<sup>Optional</sup> <a name="RemoteSyslogServerCaCert" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.remoteSyslogServerCaCert"></a>

```csharp
public string RemoteSyslogServerCaCert { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#remote_syslog_server_ca_cert OperatorAccessControlOperatorControlAssignment#remote_syslog_server_ca_cert}.

---

##### `RemoteSyslogServerPort`<sup>Optional</sup> <a name="RemoteSyslogServerPort" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.remoteSyslogServerPort"></a>

```csharp
public double RemoteSyslogServerPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#remote_syslog_server_port OperatorAccessControlOperatorControlAssignment#remote_syslog_server_port}.

---

##### `TimeAssignmentFrom`<sup>Optional</sup> <a name="TimeAssignmentFrom" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.timeAssignmentFrom"></a>

```csharp
public string TimeAssignmentFrom { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#time_assignment_from OperatorAccessControlOperatorControlAssignment#time_assignment_from}.

---

##### `TimeAssignmentTo`<sup>Optional</sup> <a name="TimeAssignmentTo" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.timeAssignmentTo"></a>

```csharp
public string TimeAssignmentTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#time_assignment_to OperatorAccessControlOperatorControlAssignment#time_assignment_to}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.timeouts"></a>

```csharp
public OperatorAccessControlOperatorControlAssignmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts">OperatorAccessControlOperatorControlAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#timeouts OperatorAccessControlOperatorControlAssignment#timeouts}

---

##### `ValidateAssignmentTrigger`<sup>Optional</sup> <a name="ValidateAssignmentTrigger" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.validateAssignmentTrigger"></a>

```csharp
public double ValidateAssignmentTrigger { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#validate_assignment_trigger OperatorAccessControlOperatorControlAssignment#validate_assignment_trigger}.

---

### OperatorAccessControlOperatorControlAssignmentTimeouts <a name="OperatorAccessControlOperatorControlAssignmentTimeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OperatorAccessControlOperatorControlAssignmentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#create OperatorAccessControlOperatorControlAssignment#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#delete OperatorAccessControlOperatorControlAssignment#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#update OperatorAccessControlOperatorControlAssignment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#create OperatorAccessControlOperatorControlAssignment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#delete OperatorAccessControlOperatorControlAssignment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#update OperatorAccessControlOperatorControlAssignment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference <a name="OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



