# `goldenGateDeployment` Submodule <a name="`goldenGateDeployment` Submodule" id="rhizo-co-terraform-provider-oci.goldenGateDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoldenGateDeployment <a name="GoldenGateDeployment" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment oci_golden_gate_deployment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateDeployment(Construct Scope, string Id, GoldenGateDeploymentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig">GoldenGateDeploymentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig">GoldenGateDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putLocks">PutLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putMaintenanceConfiguration">PutMaintenanceConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putMaintenanceWindow">PutMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putOggData">PutOggData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetDeploymentBackupId">ResetDeploymentBackupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetEnvironmentType">ResetEnvironmentType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetFqdn">ResetFqdn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetIsLockOverride">ResetIsLockOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetIsPublic">ResetIsPublic</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetLoadBalancerSubnetId">ResetLoadBalancerSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetLocks">ResetLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetMaintenanceConfiguration">ResetMaintenanceConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetNsgIds">ResetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetOggData">ResetOggData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLocks` <a name="PutLocks" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putLocks"></a>

```csharp
private void PutLocks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putLocks.parameter.value"></a>

- *Type:* object

---

##### `PutMaintenanceConfiguration` <a name="PutMaintenanceConfiguration" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putMaintenanceConfiguration"></a>

```csharp
private void PutMaintenanceConfiguration(GoldenGateDeploymentMaintenanceConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putMaintenanceConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration">GoldenGateDeploymentMaintenanceConfiguration</a>

---

##### `PutMaintenanceWindow` <a name="PutMaintenanceWindow" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putMaintenanceWindow"></a>

```csharp
private void PutMaintenanceWindow(GoldenGateDeploymentMaintenanceWindow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow">GoldenGateDeploymentMaintenanceWindow</a>

---

##### `PutOggData` <a name="PutOggData" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putOggData"></a>

```csharp
private void PutOggData(GoldenGateDeploymentOggData Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putOggData.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData">GoldenGateDeploymentOggData</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putTimeouts"></a>

```csharp
private void PutTimeouts(GoldenGateDeploymentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts">GoldenGateDeploymentTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDeploymentBackupId` <a name="ResetDeploymentBackupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetDeploymentBackupId"></a>

```csharp
private void ResetDeploymentBackupId()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnvironmentType` <a name="ResetEnvironmentType" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetEnvironmentType"></a>

```csharp
private void ResetEnvironmentType()
```

##### `ResetFqdn` <a name="ResetFqdn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetFqdn"></a>

```csharp
private void ResetFqdn()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsLockOverride` <a name="ResetIsLockOverride" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetIsLockOverride"></a>

```csharp
private void ResetIsLockOverride()
```

##### `ResetIsPublic` <a name="ResetIsPublic" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetIsPublic"></a>

```csharp
private void ResetIsPublic()
```

##### `ResetLoadBalancerSubnetId` <a name="ResetLoadBalancerSubnetId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetLoadBalancerSubnetId"></a>

```csharp
private void ResetLoadBalancerSubnetId()
```

##### `ResetLocks` <a name="ResetLocks" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetLocks"></a>

```csharp
private void ResetLocks()
```

##### `ResetMaintenanceConfiguration` <a name="ResetMaintenanceConfiguration" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetMaintenanceConfiguration"></a>

```csharp
private void ResetMaintenanceConfiguration()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetMaintenanceWindow"></a>

```csharp
private void ResetMaintenanceWindow()
```

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetNsgIds"></a>

```csharp
private void ResetNsgIds()
```

##### `ResetOggData` <a name="ResetOggData" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetOggData"></a>

```csharp
private void ResetOggData()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoldenGateDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

GoldenGateDeployment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

GoldenGateDeployment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

GoldenGateDeployment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

GoldenGateDeployment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoldenGateDeployment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoldenGateDeployment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoldenGateDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoldenGateDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentDiagnosticData">DeploymentDiagnosticData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList">GoldenGateDeploymentDeploymentDiagnosticDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentUrl">DeploymentUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.ingressIps">IngressIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList">GoldenGateDeploymentIngressIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isHealthy">IsHealthy</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isLatestVersion">IsLatestVersion</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isStorageUtilizationLimitExceeded">IsStorageUtilizationLimitExceeded</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.lifecycleSubState">LifecycleSubState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.loadBalancerId">LoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.locks">Locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList">GoldenGateDeploymentLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.maintenanceConfiguration">MaintenanceConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference">GoldenGateDeploymentMaintenanceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference">GoldenGateDeploymentMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.nextMaintenanceActionType">NextMaintenanceActionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.nextMaintenanceDescription">NextMaintenanceDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.oggData">OggData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference">GoldenGateDeploymentOggDataOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.privateIpAddress">PrivateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.publicIpAddress">PublicIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.storageUtilizationInBytes">StorageUtilizationInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeOfNextMaintenance">TimeOfNextMaintenance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeOggVersionSupportedUntil">TimeOggVersionSupportedUntil</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference">GoldenGateDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeUpgradeRequired">TimeUpgradeRequired</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.cpuCoreCountInput">CpuCoreCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentBackupIdInput">DeploymentBackupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentTypeInput">DeploymentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.environmentTypeInput">EnvironmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.fqdnInput">FqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isAutoScalingEnabledInput">IsAutoScalingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isLockOverrideInput">IsLockOverrideInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isPublicInput">IsPublicInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.licenseModelInput">LicenseModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.loadBalancerSubnetIdInput">LoadBalancerSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.locksInput">LocksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.maintenanceConfigurationInput">MaintenanceConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration">GoldenGateDeploymentMaintenanceConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow">GoldenGateDeploymentMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.nsgIdsInput">NsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.oggDataInput">OggDataInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData">GoldenGateDeploymentOggData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.cpuCoreCount">CpuCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentBackupId">DeploymentBackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentType">DeploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.environmentType">EnvironmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.fqdn">Fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isAutoScalingEnabled">IsAutoScalingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isLockOverride">IsLockOverride</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isPublic">IsPublic</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.loadBalancerSubnetId">LoadBalancerSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Category`<sup>Required</sup> <a name="Category" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `DeploymentDiagnosticData`<sup>Required</sup> <a name="DeploymentDiagnosticData" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentDiagnosticData"></a>

```csharp
public GoldenGateDeploymentDeploymentDiagnosticDataList DeploymentDiagnosticData { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList">GoldenGateDeploymentDeploymentDiagnosticDataList</a>

---

##### `DeploymentUrl`<sup>Required</sup> <a name="DeploymentUrl" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentUrl"></a>

```csharp
public string DeploymentUrl { get; }
```

- *Type:* string

---

##### `IngressIps`<sup>Required</sup> <a name="IngressIps" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.ingressIps"></a>

```csharp
public GoldenGateDeploymentIngressIpsList IngressIps { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList">GoldenGateDeploymentIngressIpsList</a>

---

##### `IsHealthy`<sup>Required</sup> <a name="IsHealthy" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isHealthy"></a>

```csharp
public IResolvable IsHealthy { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsLatestVersion`<sup>Required</sup> <a name="IsLatestVersion" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isLatestVersion"></a>

```csharp
public IResolvable IsLatestVersion { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsStorageUtilizationLimitExceeded`<sup>Required</sup> <a name="IsStorageUtilizationLimitExceeded" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isStorageUtilizationLimitExceeded"></a>

```csharp
public IResolvable IsStorageUtilizationLimitExceeded { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `LifecycleSubState`<sup>Required</sup> <a name="LifecycleSubState" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.lifecycleSubState"></a>

```csharp
public string LifecycleSubState { get; }
```

- *Type:* string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.loadBalancerId"></a>

```csharp
public string LoadBalancerId { get; }
```

- *Type:* string

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.locks"></a>

```csharp
public GoldenGateDeploymentLocksList Locks { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList">GoldenGateDeploymentLocksList</a>

---

##### `MaintenanceConfiguration`<sup>Required</sup> <a name="MaintenanceConfiguration" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.maintenanceConfiguration"></a>

```csharp
public GoldenGateDeploymentMaintenanceConfigurationOutputReference MaintenanceConfiguration { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference">GoldenGateDeploymentMaintenanceConfigurationOutputReference</a>

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.maintenanceWindow"></a>

```csharp
public GoldenGateDeploymentMaintenanceWindowOutputReference MaintenanceWindow { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference">GoldenGateDeploymentMaintenanceWindowOutputReference</a>

---

##### `NextMaintenanceActionType`<sup>Required</sup> <a name="NextMaintenanceActionType" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.nextMaintenanceActionType"></a>

```csharp
public string NextMaintenanceActionType { get; }
```

- *Type:* string

---

##### `NextMaintenanceDescription`<sup>Required</sup> <a name="NextMaintenanceDescription" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.nextMaintenanceDescription"></a>

```csharp
public string NextMaintenanceDescription { get; }
```

- *Type:* string

---

##### `OggData`<sup>Required</sup> <a name="OggData" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.oggData"></a>

```csharp
public GoldenGateDeploymentOggDataOutputReference OggData { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference">GoldenGateDeploymentOggDataOutputReference</a>

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.privateIpAddress"></a>

```csharp
public string PrivateIpAddress { get; }
```

- *Type:* string

---

##### `PublicIpAddress`<sup>Required</sup> <a name="PublicIpAddress" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.publicIpAddress"></a>

```csharp
public string PublicIpAddress { get; }
```

- *Type:* string

---

##### `StorageUtilizationInBytes`<sup>Required</sup> <a name="StorageUtilizationInBytes" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.storageUtilizationInBytes"></a>

```csharp
public string StorageUtilizationInBytes { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeOfNextMaintenance`<sup>Required</sup> <a name="TimeOfNextMaintenance" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeOfNextMaintenance"></a>

```csharp
public string TimeOfNextMaintenance { get; }
```

- *Type:* string

---

##### `TimeOggVersionSupportedUntil`<sup>Required</sup> <a name="TimeOggVersionSupportedUntil" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeOggVersionSupportedUntil"></a>

```csharp
public string TimeOggVersionSupportedUntil { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeouts"></a>

```csharp
public GoldenGateDeploymentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference">GoldenGateDeploymentTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `TimeUpgradeRequired`<sup>Required</sup> <a name="TimeUpgradeRequired" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeUpgradeRequired"></a>

```csharp
public string TimeUpgradeRequired { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `CpuCoreCountInput`<sup>Optional</sup> <a name="CpuCoreCountInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.cpuCoreCountInput"></a>

```csharp
public double CpuCoreCountInput { get; }
```

- *Type:* double

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeploymentBackupIdInput`<sup>Optional</sup> <a name="DeploymentBackupIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentBackupIdInput"></a>

```csharp
public string DeploymentBackupIdInput { get; }
```

- *Type:* string

---

##### `DeploymentTypeInput`<sup>Optional</sup> <a name="DeploymentTypeInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentTypeInput"></a>

```csharp
public string DeploymentTypeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnvironmentTypeInput`<sup>Optional</sup> <a name="EnvironmentTypeInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.environmentTypeInput"></a>

```csharp
public string EnvironmentTypeInput { get; }
```

- *Type:* string

---

##### `FqdnInput`<sup>Optional</sup> <a name="FqdnInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.fqdnInput"></a>

```csharp
public string FqdnInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsAutoScalingEnabledInput`<sup>Optional</sup> <a name="IsAutoScalingEnabledInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isAutoScalingEnabledInput"></a>

```csharp
public object IsAutoScalingEnabledInput { get; }
```

- *Type:* object

---

##### `IsLockOverrideInput`<sup>Optional</sup> <a name="IsLockOverrideInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isLockOverrideInput"></a>

```csharp
public object IsLockOverrideInput { get; }
```

- *Type:* object

---

##### `IsPublicInput`<sup>Optional</sup> <a name="IsPublicInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isPublicInput"></a>

```csharp
public object IsPublicInput { get; }
```

- *Type:* object

---

##### `LicenseModelInput`<sup>Optional</sup> <a name="LicenseModelInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.licenseModelInput"></a>

```csharp
public string LicenseModelInput { get; }
```

- *Type:* string

---

##### `LoadBalancerSubnetIdInput`<sup>Optional</sup> <a name="LoadBalancerSubnetIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.loadBalancerSubnetIdInput"></a>

```csharp
public string LoadBalancerSubnetIdInput { get; }
```

- *Type:* string

---

##### `LocksInput`<sup>Optional</sup> <a name="LocksInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.locksInput"></a>

```csharp
public object LocksInput { get; }
```

- *Type:* object

---

##### `MaintenanceConfigurationInput`<sup>Optional</sup> <a name="MaintenanceConfigurationInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.maintenanceConfigurationInput"></a>

```csharp
public GoldenGateDeploymentMaintenanceConfiguration MaintenanceConfigurationInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration">GoldenGateDeploymentMaintenanceConfiguration</a>

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.maintenanceWindowInput"></a>

```csharp
public GoldenGateDeploymentMaintenanceWindow MaintenanceWindowInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow">GoldenGateDeploymentMaintenanceWindow</a>

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.nsgIdsInput"></a>

```csharp
public string[] NsgIdsInput { get; }
```

- *Type:* string[]

---

##### `OggDataInput`<sup>Optional</sup> <a name="OggDataInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.oggDataInput"></a>

```csharp
public GoldenGateDeploymentOggData OggDataInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData">GoldenGateDeploymentOggData</a>

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.cpuCoreCount"></a>

```csharp
public double CpuCoreCount { get; }
```

- *Type:* double

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeploymentBackupId`<sup>Required</sup> <a name="DeploymentBackupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentBackupId"></a>

```csharp
public string DeploymentBackupId { get; }
```

- *Type:* string

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentType"></a>

```csharp
public string DeploymentType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EnvironmentType`<sup>Required</sup> <a name="EnvironmentType" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.environmentType"></a>

```csharp
public string EnvironmentType { get; }
```

- *Type:* string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.fqdn"></a>

```csharp
public string Fqdn { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsAutoScalingEnabled`<sup>Required</sup> <a name="IsAutoScalingEnabled" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isAutoScalingEnabled"></a>

```csharp
public object IsAutoScalingEnabled { get; }
```

- *Type:* object

---

##### `IsLockOverride`<sup>Required</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isLockOverride"></a>

```csharp
public object IsLockOverride { get; }
```

- *Type:* object

---

##### `IsPublic`<sup>Required</sup> <a name="IsPublic" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isPublic"></a>

```csharp
public object IsPublic { get; }
```

- *Type:* object

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `LoadBalancerSubnetId`<sup>Required</sup> <a name="LoadBalancerSubnetId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.loadBalancerSubnetId"></a>

```csharp
public string LoadBalancerSubnetId { get; }
```

- *Type:* string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoldenGateDeploymentConfig <a name="GoldenGateDeploymentConfig" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateDeploymentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    double CpuCoreCount,
    string DeploymentType,
    string DisplayName,
    object IsAutoScalingEnabled,
    string LicenseModel,
    string SubnetId,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DeploymentBackupId = null,
    string Description = null,
    string EnvironmentType = null,
    string Fqdn = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    object IsLockOverride = null,
    object IsPublic = null,
    string LoadBalancerSubnetId = null,
    object Locks = null,
    GoldenGateDeploymentMaintenanceConfiguration MaintenanceConfiguration = null,
    GoldenGateDeploymentMaintenanceWindow MaintenanceWindow = null,
    string[] NsgIds = null,
    GoldenGateDeploymentOggData OggData = null,
    string State = null,
    GoldenGateDeploymentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#compartment_id GoldenGateDeployment#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.cpuCoreCount">CpuCoreCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#cpu_core_count GoldenGateDeployment#cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.deploymentType">DeploymentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#deployment_type GoldenGateDeployment#deployment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#display_name GoldenGateDeployment#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.isAutoScalingEnabled">IsAutoScalingEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_auto_scaling_enabled GoldenGateDeployment#is_auto_scaling_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.licenseModel">LicenseModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#license_model GoldenGateDeployment#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#subnet_id GoldenGateDeployment#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#defined_tags GoldenGateDeployment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.deploymentBackupId">DeploymentBackupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#deployment_backup_id GoldenGateDeployment#deployment_backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#description GoldenGateDeployment#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.environmentType">EnvironmentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#environment_type GoldenGateDeployment#environment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.fqdn">Fqdn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#fqdn GoldenGateDeployment#fqdn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#freeform_tags GoldenGateDeployment#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#id GoldenGateDeployment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.isLockOverride">IsLockOverride</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_lock_override GoldenGateDeployment#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.isPublic">IsPublic</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_public GoldenGateDeployment#is_public}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.loadBalancerSubnetId">LoadBalancerSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#load_balancer_subnet_id GoldenGateDeployment#load_balancer_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.locks">Locks</a></code> | <code>object</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.maintenanceConfiguration">MaintenanceConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration">GoldenGateDeploymentMaintenanceConfiguration</a></code> | maintenance_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow">GoldenGateDeploymentMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#nsg_ids GoldenGateDeployment#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.oggData">OggData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData">GoldenGateDeploymentOggData</a></code> | ogg_data block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#state GoldenGateDeployment#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts">GoldenGateDeploymentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#compartment_id GoldenGateDeployment#compartment_id}.

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.cpuCoreCount"></a>

```csharp
public double CpuCoreCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#cpu_core_count GoldenGateDeployment#cpu_core_count}.

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.deploymentType"></a>

```csharp
public string DeploymentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#deployment_type GoldenGateDeployment#deployment_type}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#display_name GoldenGateDeployment#display_name}.

---

##### `IsAutoScalingEnabled`<sup>Required</sup> <a name="IsAutoScalingEnabled" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.isAutoScalingEnabled"></a>

```csharp
public object IsAutoScalingEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_auto_scaling_enabled GoldenGateDeployment#is_auto_scaling_enabled}.

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.licenseModel"></a>

```csharp
public string LicenseModel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#license_model GoldenGateDeployment#license_model}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#subnet_id GoldenGateDeployment#subnet_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#defined_tags GoldenGateDeployment#defined_tags}.

---

##### `DeploymentBackupId`<sup>Optional</sup> <a name="DeploymentBackupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.deploymentBackupId"></a>

```csharp
public string DeploymentBackupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#deployment_backup_id GoldenGateDeployment#deployment_backup_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#description GoldenGateDeployment#description}.

---

##### `EnvironmentType`<sup>Optional</sup> <a name="EnvironmentType" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.environmentType"></a>

```csharp
public string EnvironmentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#environment_type GoldenGateDeployment#environment_type}.

---

##### `Fqdn`<sup>Optional</sup> <a name="Fqdn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.fqdn"></a>

```csharp
public string Fqdn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#fqdn GoldenGateDeployment#fqdn}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#freeform_tags GoldenGateDeployment#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#id GoldenGateDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsLockOverride`<sup>Optional</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.isLockOverride"></a>

```csharp
public object IsLockOverride { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_lock_override GoldenGateDeployment#is_lock_override}.

---

##### `IsPublic`<sup>Optional</sup> <a name="IsPublic" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.isPublic"></a>

```csharp
public object IsPublic { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_public GoldenGateDeployment#is_public}.

---

##### `LoadBalancerSubnetId`<sup>Optional</sup> <a name="LoadBalancerSubnetId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.loadBalancerSubnetId"></a>

```csharp
public string LoadBalancerSubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#load_balancer_subnet_id GoldenGateDeployment#load_balancer_subnet_id}.

---

##### `Locks`<sup>Optional</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.locks"></a>

```csharp
public object Locks { get; set; }
```

- *Type:* object

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#locks GoldenGateDeployment#locks}

---

##### `MaintenanceConfiguration`<sup>Optional</sup> <a name="MaintenanceConfiguration" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.maintenanceConfiguration"></a>

```csharp
public GoldenGateDeploymentMaintenanceConfiguration MaintenanceConfiguration { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration">GoldenGateDeploymentMaintenanceConfiguration</a>

maintenance_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#maintenance_configuration GoldenGateDeployment#maintenance_configuration}

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.maintenanceWindow"></a>

```csharp
public GoldenGateDeploymentMaintenanceWindow MaintenanceWindow { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow">GoldenGateDeploymentMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#maintenance_window GoldenGateDeployment#maintenance_window}

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#nsg_ids GoldenGateDeployment#nsg_ids}.

---

##### `OggData`<sup>Optional</sup> <a name="OggData" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.oggData"></a>

```csharp
public GoldenGateDeploymentOggData OggData { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData">GoldenGateDeploymentOggData</a>

ogg_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#ogg_data GoldenGateDeployment#ogg_data}

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#state GoldenGateDeployment#state}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.timeouts"></a>

```csharp
public GoldenGateDeploymentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts">GoldenGateDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#timeouts GoldenGateDeployment#timeouts}

---

### GoldenGateDeploymentDeploymentDiagnosticData <a name="GoldenGateDeploymentDeploymentDiagnosticData" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticData.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateDeploymentDeploymentDiagnosticData {

};
```


### GoldenGateDeploymentIngressIps <a name="GoldenGateDeploymentIngressIps" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateDeploymentIngressIps {

};
```


### GoldenGateDeploymentLocks <a name="GoldenGateDeploymentLocks" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateDeploymentLocks {
    string Type,
    string Message = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#type GoldenGateDeployment#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks.property.message">Message</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#message GoldenGateDeployment#message}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#type GoldenGateDeployment#type}.

---

##### `Message`<sup>Optional</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks.property.message"></a>

```csharp
public string Message { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#message GoldenGateDeployment#message}.

---

### GoldenGateDeploymentMaintenanceConfiguration <a name="GoldenGateDeploymentMaintenanceConfiguration" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateDeploymentMaintenanceConfiguration {
    double BundleReleaseUpgradePeriodInDays = null,
    double InterimReleaseUpgradePeriodInDays = null,
    object IsInterimReleaseAutoUpgradeEnabled = null,
    double MajorReleaseUpgradePeriodInDays = null,
    double SecurityPatchUpgradePeriodInDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.bundleReleaseUpgradePeriodInDays">BundleReleaseUpgradePeriodInDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#bundle_release_upgrade_period_in_days GoldenGateDeployment#bundle_release_upgrade_period_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.interimReleaseUpgradePeriodInDays">InterimReleaseUpgradePeriodInDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#interim_release_upgrade_period_in_days GoldenGateDeployment#interim_release_upgrade_period_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.isInterimReleaseAutoUpgradeEnabled">IsInterimReleaseAutoUpgradeEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_interim_release_auto_upgrade_enabled GoldenGateDeployment#is_interim_release_auto_upgrade_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.majorReleaseUpgradePeriodInDays">MajorReleaseUpgradePeriodInDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#major_release_upgrade_period_in_days GoldenGateDeployment#major_release_upgrade_period_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.securityPatchUpgradePeriodInDays">SecurityPatchUpgradePeriodInDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#security_patch_upgrade_period_in_days GoldenGateDeployment#security_patch_upgrade_period_in_days}. |

---

##### `BundleReleaseUpgradePeriodInDays`<sup>Optional</sup> <a name="BundleReleaseUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.bundleReleaseUpgradePeriodInDays"></a>

```csharp
public double BundleReleaseUpgradePeriodInDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#bundle_release_upgrade_period_in_days GoldenGateDeployment#bundle_release_upgrade_period_in_days}.

---

##### `InterimReleaseUpgradePeriodInDays`<sup>Optional</sup> <a name="InterimReleaseUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.interimReleaseUpgradePeriodInDays"></a>

```csharp
public double InterimReleaseUpgradePeriodInDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#interim_release_upgrade_period_in_days GoldenGateDeployment#interim_release_upgrade_period_in_days}.

---

##### `IsInterimReleaseAutoUpgradeEnabled`<sup>Optional</sup> <a name="IsInterimReleaseAutoUpgradeEnabled" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.isInterimReleaseAutoUpgradeEnabled"></a>

```csharp
public object IsInterimReleaseAutoUpgradeEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_interim_release_auto_upgrade_enabled GoldenGateDeployment#is_interim_release_auto_upgrade_enabled}.

---

##### `MajorReleaseUpgradePeriodInDays`<sup>Optional</sup> <a name="MajorReleaseUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.majorReleaseUpgradePeriodInDays"></a>

```csharp
public double MajorReleaseUpgradePeriodInDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#major_release_upgrade_period_in_days GoldenGateDeployment#major_release_upgrade_period_in_days}.

---

##### `SecurityPatchUpgradePeriodInDays`<sup>Optional</sup> <a name="SecurityPatchUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.securityPatchUpgradePeriodInDays"></a>

```csharp
public double SecurityPatchUpgradePeriodInDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#security_patch_upgrade_period_in_days GoldenGateDeployment#security_patch_upgrade_period_in_days}.

---

### GoldenGateDeploymentMaintenanceWindow <a name="GoldenGateDeploymentMaintenanceWindow" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateDeploymentMaintenanceWindow {
    string Day,
    double StartHour
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow.property.day">Day</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#day GoldenGateDeployment#day}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow.property.startHour">StartHour</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#start_hour GoldenGateDeployment#start_hour}. |

---

##### `Day`<sup>Required</sup> <a name="Day" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow.property.day"></a>

```csharp
public string Day { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#day GoldenGateDeployment#day}.

---

##### `StartHour`<sup>Required</sup> <a name="StartHour" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow.property.startHour"></a>

```csharp
public double StartHour { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#start_hour GoldenGateDeployment#start_hour}.

---

### GoldenGateDeploymentOggData <a name="GoldenGateDeploymentOggData" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateDeploymentOggData {
    string DeploymentName,
    string AdminPassword = null,
    string AdminUsername = null,
    string Certificate = null,
    string CredentialStore = null,
    GoldenGateDeploymentOggDataGroupToRolesMapping GroupToRolesMapping = null,
    string IdentityDomainId = null,
    string Key = null,
    string OggVersion = null,
    string PasswordSecretId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.deploymentName">DeploymentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#deployment_name GoldenGateDeployment#deployment_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.adminPassword">AdminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#admin_password GoldenGateDeployment#admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.adminUsername">AdminUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#admin_username GoldenGateDeployment#admin_username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.certificate">Certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#certificate GoldenGateDeployment#certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.credentialStore">CredentialStore</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#credential_store GoldenGateDeployment#credential_store}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.groupToRolesMapping">GroupToRolesMapping</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping">GoldenGateDeploymentOggDataGroupToRolesMapping</a></code> | group_to_roles_mapping block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.identityDomainId">IdentityDomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#identity_domain_id GoldenGateDeployment#identity_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#key GoldenGateDeployment#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.oggVersion">OggVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#ogg_version GoldenGateDeployment#ogg_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.passwordSecretId">PasswordSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#password_secret_id GoldenGateDeployment#password_secret_id}. |

---

##### `DeploymentName`<sup>Required</sup> <a name="DeploymentName" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.deploymentName"></a>

```csharp
public string DeploymentName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#deployment_name GoldenGateDeployment#deployment_name}.

---

##### `AdminPassword`<sup>Optional</sup> <a name="AdminPassword" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.adminPassword"></a>

```csharp
public string AdminPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#admin_password GoldenGateDeployment#admin_password}.

---

##### `AdminUsername`<sup>Optional</sup> <a name="AdminUsername" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.adminUsername"></a>

```csharp
public string AdminUsername { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#admin_username GoldenGateDeployment#admin_username}.

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.certificate"></a>

```csharp
public string Certificate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#certificate GoldenGateDeployment#certificate}.

---

##### `CredentialStore`<sup>Optional</sup> <a name="CredentialStore" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.credentialStore"></a>

```csharp
public string CredentialStore { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#credential_store GoldenGateDeployment#credential_store}.

---

##### `GroupToRolesMapping`<sup>Optional</sup> <a name="GroupToRolesMapping" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.groupToRolesMapping"></a>

```csharp
public GoldenGateDeploymentOggDataGroupToRolesMapping GroupToRolesMapping { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping">GoldenGateDeploymentOggDataGroupToRolesMapping</a>

group_to_roles_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#group_to_roles_mapping GoldenGateDeployment#group_to_roles_mapping}

---

##### `IdentityDomainId`<sup>Optional</sup> <a name="IdentityDomainId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.identityDomainId"></a>

```csharp
public string IdentityDomainId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#identity_domain_id GoldenGateDeployment#identity_domain_id}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#key GoldenGateDeployment#key}.

---

##### `OggVersion`<sup>Optional</sup> <a name="OggVersion" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.oggVersion"></a>

```csharp
public string OggVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#ogg_version GoldenGateDeployment#ogg_version}.

---

##### `PasswordSecretId`<sup>Optional</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.passwordSecretId"></a>

```csharp
public string PasswordSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#password_secret_id GoldenGateDeployment#password_secret_id}.

---

### GoldenGateDeploymentOggDataGroupToRolesMapping <a name="GoldenGateDeploymentOggDataGroupToRolesMapping" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateDeploymentOggDataGroupToRolesMapping {
    string SecurityGroupId,
    string AdministratorGroupId = null,
    string OperatorGroupId = null,
    string UserGroupId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping.property.securityGroupId">SecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#security_group_id GoldenGateDeployment#security_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping.property.administratorGroupId">AdministratorGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#administrator_group_id GoldenGateDeployment#administrator_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping.property.operatorGroupId">OperatorGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#operator_group_id GoldenGateDeployment#operator_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping.property.userGroupId">UserGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#user_group_id GoldenGateDeployment#user_group_id}. |

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping.property.securityGroupId"></a>

```csharp
public string SecurityGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#security_group_id GoldenGateDeployment#security_group_id}.

---

##### `AdministratorGroupId`<sup>Optional</sup> <a name="AdministratorGroupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping.property.administratorGroupId"></a>

```csharp
public string AdministratorGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#administrator_group_id GoldenGateDeployment#administrator_group_id}.

---

##### `OperatorGroupId`<sup>Optional</sup> <a name="OperatorGroupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping.property.operatorGroupId"></a>

```csharp
public string OperatorGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#operator_group_id GoldenGateDeployment#operator_group_id}.

---

##### `UserGroupId`<sup>Optional</sup> <a name="UserGroupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping.property.userGroupId"></a>

```csharp
public string UserGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#user_group_id GoldenGateDeployment#user_group_id}.

---

### GoldenGateDeploymentTimeouts <a name="GoldenGateDeploymentTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateDeploymentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#create GoldenGateDeployment#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#delete GoldenGateDeployment#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#update GoldenGateDeployment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#create GoldenGateDeployment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#delete GoldenGateDeployment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#update GoldenGateDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoldenGateDeploymentDeploymentDiagnosticDataList <a name="GoldenGateDeploymentDeploymentDiagnosticDataList" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateDeploymentDeploymentDiagnosticDataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.get"></a>

```csharp
private GoldenGateDeploymentDeploymentDiagnosticDataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoldenGateDeploymentDeploymentDiagnosticDataOutputReference <a name="GoldenGateDeploymentDeploymentDiagnosticDataOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateDeploymentDeploymentDiagnosticDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.diagnosticState">DiagnosticState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.timeDiagnosticEnd">TimeDiagnosticEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.timeDiagnosticStart">TimeDiagnosticStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticData">GoldenGateDeploymentDeploymentDiagnosticData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `DiagnosticState`<sup>Required</sup> <a name="DiagnosticState" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.diagnosticState"></a>

```csharp
public string DiagnosticState { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `TimeDiagnosticEnd`<sup>Required</sup> <a name="TimeDiagnosticEnd" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.timeDiagnosticEnd"></a>

```csharp
public string TimeDiagnosticEnd { get; }
```

- *Type:* string

---

##### `TimeDiagnosticStart`<sup>Required</sup> <a name="TimeDiagnosticStart" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.timeDiagnosticStart"></a>

```csharp
public string TimeDiagnosticStart { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.internalValue"></a>

```csharp
public GoldenGateDeploymentDeploymentDiagnosticData InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticData">GoldenGateDeploymentDeploymentDiagnosticData</a>

---


### GoldenGateDeploymentIngressIpsList <a name="GoldenGateDeploymentIngressIpsList" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateDeploymentIngressIpsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.get"></a>

```csharp
private GoldenGateDeploymentIngressIpsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoldenGateDeploymentIngressIpsOutputReference <a name="GoldenGateDeploymentIngressIpsOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateDeploymentIngressIpsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.property.ingressIp">IngressIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIps">GoldenGateDeploymentIngressIps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IngressIp`<sup>Required</sup> <a name="IngressIp" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.property.ingressIp"></a>

```csharp
public string IngressIp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.property.internalValue"></a>

```csharp
public GoldenGateDeploymentIngressIps InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIps">GoldenGateDeploymentIngressIps</a>

---


### GoldenGateDeploymentLocksList <a name="GoldenGateDeploymentLocksList" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateDeploymentLocksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.get"></a>

```csharp
private GoldenGateDeploymentLocksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoldenGateDeploymentLocksOutputReference <a name="GoldenGateDeploymentLocksOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateDeploymentLocksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessage` <a name="ResetMessage" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.resetMessage"></a>

```csharp
private void ResetMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.relatedResourceId">RelatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.messageInput">MessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RelatedResourceId`<sup>Required</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.relatedResourceId"></a>

```csharp
public string RelatedResourceId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.messageInput"></a>

```csharp
public string MessageInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoldenGateDeploymentMaintenanceConfigurationOutputReference <a name="GoldenGateDeploymentMaintenanceConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateDeploymentMaintenanceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetBundleReleaseUpgradePeriodInDays">ResetBundleReleaseUpgradePeriodInDays</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetInterimReleaseUpgradePeriodInDays">ResetInterimReleaseUpgradePeriodInDays</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetIsInterimReleaseAutoUpgradeEnabled">ResetIsInterimReleaseAutoUpgradeEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetMajorReleaseUpgradePeriodInDays">ResetMajorReleaseUpgradePeriodInDays</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetSecurityPatchUpgradePeriodInDays">ResetSecurityPatchUpgradePeriodInDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBundleReleaseUpgradePeriodInDays` <a name="ResetBundleReleaseUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetBundleReleaseUpgradePeriodInDays"></a>

```csharp
private void ResetBundleReleaseUpgradePeriodInDays()
```

##### `ResetInterimReleaseUpgradePeriodInDays` <a name="ResetInterimReleaseUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetInterimReleaseUpgradePeriodInDays"></a>

```csharp
private void ResetInterimReleaseUpgradePeriodInDays()
```

##### `ResetIsInterimReleaseAutoUpgradeEnabled` <a name="ResetIsInterimReleaseAutoUpgradeEnabled" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetIsInterimReleaseAutoUpgradeEnabled"></a>

```csharp
private void ResetIsInterimReleaseAutoUpgradeEnabled()
```

##### `ResetMajorReleaseUpgradePeriodInDays` <a name="ResetMajorReleaseUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetMajorReleaseUpgradePeriodInDays"></a>

```csharp
private void ResetMajorReleaseUpgradePeriodInDays()
```

##### `ResetSecurityPatchUpgradePeriodInDays` <a name="ResetSecurityPatchUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetSecurityPatchUpgradePeriodInDays"></a>

```csharp
private void ResetSecurityPatchUpgradePeriodInDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.bundleReleaseUpgradePeriodInDaysInput">BundleReleaseUpgradePeriodInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.interimReleaseUpgradePeriodInDaysInput">InterimReleaseUpgradePeriodInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.isInterimReleaseAutoUpgradeEnabledInput">IsInterimReleaseAutoUpgradeEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.majorReleaseUpgradePeriodInDaysInput">MajorReleaseUpgradePeriodInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.securityPatchUpgradePeriodInDaysInput">SecurityPatchUpgradePeriodInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.bundleReleaseUpgradePeriodInDays">BundleReleaseUpgradePeriodInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.interimReleaseUpgradePeriodInDays">InterimReleaseUpgradePeriodInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.isInterimReleaseAutoUpgradeEnabled">IsInterimReleaseAutoUpgradeEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.majorReleaseUpgradePeriodInDays">MajorReleaseUpgradePeriodInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.securityPatchUpgradePeriodInDays">SecurityPatchUpgradePeriodInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration">GoldenGateDeploymentMaintenanceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BundleReleaseUpgradePeriodInDaysInput`<sup>Optional</sup> <a name="BundleReleaseUpgradePeriodInDaysInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.bundleReleaseUpgradePeriodInDaysInput"></a>

```csharp
public double BundleReleaseUpgradePeriodInDaysInput { get; }
```

- *Type:* double

---

##### `InterimReleaseUpgradePeriodInDaysInput`<sup>Optional</sup> <a name="InterimReleaseUpgradePeriodInDaysInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.interimReleaseUpgradePeriodInDaysInput"></a>

```csharp
public double InterimReleaseUpgradePeriodInDaysInput { get; }
```

- *Type:* double

---

##### `IsInterimReleaseAutoUpgradeEnabledInput`<sup>Optional</sup> <a name="IsInterimReleaseAutoUpgradeEnabledInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.isInterimReleaseAutoUpgradeEnabledInput"></a>

```csharp
public object IsInterimReleaseAutoUpgradeEnabledInput { get; }
```

- *Type:* object

---

##### `MajorReleaseUpgradePeriodInDaysInput`<sup>Optional</sup> <a name="MajorReleaseUpgradePeriodInDaysInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.majorReleaseUpgradePeriodInDaysInput"></a>

```csharp
public double MajorReleaseUpgradePeriodInDaysInput { get; }
```

- *Type:* double

---

##### `SecurityPatchUpgradePeriodInDaysInput`<sup>Optional</sup> <a name="SecurityPatchUpgradePeriodInDaysInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.securityPatchUpgradePeriodInDaysInput"></a>

```csharp
public double SecurityPatchUpgradePeriodInDaysInput { get; }
```

- *Type:* double

---

##### `BundleReleaseUpgradePeriodInDays`<sup>Required</sup> <a name="BundleReleaseUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.bundleReleaseUpgradePeriodInDays"></a>

```csharp
public double BundleReleaseUpgradePeriodInDays { get; }
```

- *Type:* double

---

##### `InterimReleaseUpgradePeriodInDays`<sup>Required</sup> <a name="InterimReleaseUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.interimReleaseUpgradePeriodInDays"></a>

```csharp
public double InterimReleaseUpgradePeriodInDays { get; }
```

- *Type:* double

---

##### `IsInterimReleaseAutoUpgradeEnabled`<sup>Required</sup> <a name="IsInterimReleaseAutoUpgradeEnabled" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.isInterimReleaseAutoUpgradeEnabled"></a>

```csharp
public object IsInterimReleaseAutoUpgradeEnabled { get; }
```

- *Type:* object

---

##### `MajorReleaseUpgradePeriodInDays`<sup>Required</sup> <a name="MajorReleaseUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.majorReleaseUpgradePeriodInDays"></a>

```csharp
public double MajorReleaseUpgradePeriodInDays { get; }
```

- *Type:* double

---

##### `SecurityPatchUpgradePeriodInDays`<sup>Required</sup> <a name="SecurityPatchUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.securityPatchUpgradePeriodInDays"></a>

```csharp
public double SecurityPatchUpgradePeriodInDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.internalValue"></a>

```csharp
public GoldenGateDeploymentMaintenanceConfiguration InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration">GoldenGateDeploymentMaintenanceConfiguration</a>

---


### GoldenGateDeploymentMaintenanceWindowOutputReference <a name="GoldenGateDeploymentMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateDeploymentMaintenanceWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.dayInput">DayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.startHourInput">StartHourInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.day">Day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.startHour">StartHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow">GoldenGateDeploymentMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.dayInput"></a>

```csharp
public string DayInput { get; }
```

- *Type:* string

---

##### `StartHourInput`<sup>Optional</sup> <a name="StartHourInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.startHourInput"></a>

```csharp
public double StartHourInput { get; }
```

- *Type:* double

---

##### `Day`<sup>Required</sup> <a name="Day" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.day"></a>

```csharp
public string Day { get; }
```

- *Type:* string

---

##### `StartHour`<sup>Required</sup> <a name="StartHour" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.startHour"></a>

```csharp
public double StartHour { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.internalValue"></a>

```csharp
public GoldenGateDeploymentMaintenanceWindow InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow">GoldenGateDeploymentMaintenanceWindow</a>

---


### GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference <a name="GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.resetAdministratorGroupId">ResetAdministratorGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.resetOperatorGroupId">ResetOperatorGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.resetUserGroupId">ResetUserGroupId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdministratorGroupId` <a name="ResetAdministratorGroupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.resetAdministratorGroupId"></a>

```csharp
private void ResetAdministratorGroupId()
```

##### `ResetOperatorGroupId` <a name="ResetOperatorGroupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.resetOperatorGroupId"></a>

```csharp
private void ResetOperatorGroupId()
```

##### `ResetUserGroupId` <a name="ResetUserGroupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.resetUserGroupId"></a>

```csharp
private void ResetUserGroupId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.administratorGroupIdInput">AdministratorGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.operatorGroupIdInput">OperatorGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.securityGroupIdInput">SecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.userGroupIdInput">UserGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.administratorGroupId">AdministratorGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.operatorGroupId">OperatorGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.securityGroupId">SecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.userGroupId">UserGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping">GoldenGateDeploymentOggDataGroupToRolesMapping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdministratorGroupIdInput`<sup>Optional</sup> <a name="AdministratorGroupIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.administratorGroupIdInput"></a>

```csharp
public string AdministratorGroupIdInput { get; }
```

- *Type:* string

---

##### `OperatorGroupIdInput`<sup>Optional</sup> <a name="OperatorGroupIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.operatorGroupIdInput"></a>

```csharp
public string OperatorGroupIdInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdInput`<sup>Optional</sup> <a name="SecurityGroupIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.securityGroupIdInput"></a>

```csharp
public string SecurityGroupIdInput { get; }
```

- *Type:* string

---

##### `UserGroupIdInput`<sup>Optional</sup> <a name="UserGroupIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.userGroupIdInput"></a>

```csharp
public string UserGroupIdInput { get; }
```

- *Type:* string

---

##### `AdministratorGroupId`<sup>Required</sup> <a name="AdministratorGroupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.administratorGroupId"></a>

```csharp
public string AdministratorGroupId { get; }
```

- *Type:* string

---

##### `OperatorGroupId`<sup>Required</sup> <a name="OperatorGroupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.operatorGroupId"></a>

```csharp
public string OperatorGroupId { get; }
```

- *Type:* string

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.securityGroupId"></a>

```csharp
public string SecurityGroupId { get; }
```

- *Type:* string

---

##### `UserGroupId`<sup>Required</sup> <a name="UserGroupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.userGroupId"></a>

```csharp
public string UserGroupId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.internalValue"></a>

```csharp
public GoldenGateDeploymentOggDataGroupToRolesMapping InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping">GoldenGateDeploymentOggDataGroupToRolesMapping</a>

---


### GoldenGateDeploymentOggDataOutputReference <a name="GoldenGateDeploymentOggDataOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateDeploymentOggDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.putGroupToRolesMapping">PutGroupToRolesMapping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetAdminPassword">ResetAdminPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetAdminUsername">ResetAdminUsername</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetCredentialStore">ResetCredentialStore</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetGroupToRolesMapping">ResetGroupToRolesMapping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetIdentityDomainId">ResetIdentityDomainId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetOggVersion">ResetOggVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetPasswordSecretId">ResetPasswordSecretId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGroupToRolesMapping` <a name="PutGroupToRolesMapping" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.putGroupToRolesMapping"></a>

```csharp
private void PutGroupToRolesMapping(GoldenGateDeploymentOggDataGroupToRolesMapping Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.putGroupToRolesMapping.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping">GoldenGateDeploymentOggDataGroupToRolesMapping</a>

---

##### `ResetAdminPassword` <a name="ResetAdminPassword" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetAdminPassword"></a>

```csharp
private void ResetAdminPassword()
```

##### `ResetAdminUsername` <a name="ResetAdminUsername" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetAdminUsername"></a>

```csharp
private void ResetAdminUsername()
```

##### `ResetCertificate` <a name="ResetCertificate" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetCredentialStore` <a name="ResetCredentialStore" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetCredentialStore"></a>

```csharp
private void ResetCredentialStore()
```

##### `ResetGroupToRolesMapping` <a name="ResetGroupToRolesMapping" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetGroupToRolesMapping"></a>

```csharp
private void ResetGroupToRolesMapping()
```

##### `ResetIdentityDomainId` <a name="ResetIdentityDomainId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetIdentityDomainId"></a>

```csharp
private void ResetIdentityDomainId()
```

##### `ResetKey` <a name="ResetKey" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetOggVersion` <a name="ResetOggVersion" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetOggVersion"></a>

```csharp
private void ResetOggVersion()
```

##### `ResetPasswordSecretId` <a name="ResetPasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetPasswordSecretId"></a>

```csharp
private void ResetPasswordSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.groupToRolesMapping">GroupToRolesMapping</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference">GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.adminPasswordInput">AdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.adminUsernameInput">AdminUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.certificateInput">CertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.credentialStoreInput">CredentialStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.deploymentNameInput">DeploymentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.groupToRolesMappingInput">GroupToRolesMappingInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping">GoldenGateDeploymentOggDataGroupToRolesMapping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.identityDomainIdInput">IdentityDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.oggVersionInput">OggVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.passwordSecretIdInput">PasswordSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.adminPassword">AdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.adminUsername">AdminUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.credentialStore">CredentialStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.deploymentName">DeploymentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.identityDomainId">IdentityDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.oggVersion">OggVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.passwordSecretId">PasswordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData">GoldenGateDeploymentOggData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupToRolesMapping`<sup>Required</sup> <a name="GroupToRolesMapping" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.groupToRolesMapping"></a>

```csharp
public GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference GroupToRolesMapping { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference">GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference</a>

---

##### `AdminPasswordInput`<sup>Optional</sup> <a name="AdminPasswordInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.adminPasswordInput"></a>

```csharp
public string AdminPasswordInput { get; }
```

- *Type:* string

---

##### `AdminUsernameInput`<sup>Optional</sup> <a name="AdminUsernameInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.adminUsernameInput"></a>

```csharp
public string AdminUsernameInput { get; }
```

- *Type:* string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.certificateInput"></a>

```csharp
public string CertificateInput { get; }
```

- *Type:* string

---

##### `CredentialStoreInput`<sup>Optional</sup> <a name="CredentialStoreInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.credentialStoreInput"></a>

```csharp
public string CredentialStoreInput { get; }
```

- *Type:* string

---

##### `DeploymentNameInput`<sup>Optional</sup> <a name="DeploymentNameInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.deploymentNameInput"></a>

```csharp
public string DeploymentNameInput { get; }
```

- *Type:* string

---

##### `GroupToRolesMappingInput`<sup>Optional</sup> <a name="GroupToRolesMappingInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.groupToRolesMappingInput"></a>

```csharp
public GoldenGateDeploymentOggDataGroupToRolesMapping GroupToRolesMappingInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping">GoldenGateDeploymentOggDataGroupToRolesMapping</a>

---

##### `IdentityDomainIdInput`<sup>Optional</sup> <a name="IdentityDomainIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.identityDomainIdInput"></a>

```csharp
public string IdentityDomainIdInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `OggVersionInput`<sup>Optional</sup> <a name="OggVersionInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.oggVersionInput"></a>

```csharp
public string OggVersionInput { get; }
```

- *Type:* string

---

##### `PasswordSecretIdInput`<sup>Optional</sup> <a name="PasswordSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.passwordSecretIdInput"></a>

```csharp
public string PasswordSecretIdInput { get; }
```

- *Type:* string

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.adminPassword"></a>

```csharp
public string AdminPassword { get; }
```

- *Type:* string

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.adminUsername"></a>

```csharp
public string AdminUsername { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `CredentialStore`<sup>Required</sup> <a name="CredentialStore" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.credentialStore"></a>

```csharp
public string CredentialStore { get; }
```

- *Type:* string

---

##### `DeploymentName`<sup>Required</sup> <a name="DeploymentName" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.deploymentName"></a>

```csharp
public string DeploymentName { get; }
```

- *Type:* string

---

##### `IdentityDomainId`<sup>Required</sup> <a name="IdentityDomainId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.identityDomainId"></a>

```csharp
public string IdentityDomainId { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `OggVersion`<sup>Required</sup> <a name="OggVersion" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.oggVersion"></a>

```csharp
public string OggVersion { get; }
```

- *Type:* string

---

##### `PasswordSecretId`<sup>Required</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.passwordSecretId"></a>

```csharp
public string PasswordSecretId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.internalValue"></a>

```csharp
public GoldenGateDeploymentOggData InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData">GoldenGateDeploymentOggData</a>

---


### GoldenGateDeploymentTimeoutsOutputReference <a name="GoldenGateDeploymentTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateDeploymentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



