# `desktopsDesktopPool` Submodule <a name="`desktopsDesktopPool` Submodule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DesktopsDesktopPool <a name="DesktopsDesktopPool" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool oci_desktops_desktop_pool}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DesktopsDesktopPool(Construct Scope, string Id, DesktopsDesktopPoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig">DesktopsDesktopPoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig">DesktopsDesktopPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putAvailabilityPolicy">PutAvailabilityPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putDevicePolicy">PutDevicePolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putImage">PutImage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putNetworkConfiguration">PutNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putPrivateAccessDetails">PutPrivateAccessDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putSessionLifecycleActions">PutSessionLifecycleActions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putShapeConfig">PutShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetNsgIds">ResetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetPrivateAccessDetails">ResetPrivateAccessDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetSessionLifecycleActions">ResetSessionLifecycleActions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetShapeConfig">ResetShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetTimeStartScheduled">ResetTimeStartScheduled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetTimeStopScheduled">ResetTimeStopScheduled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetUseDedicatedVmHost">ResetUseDedicatedVmHost</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAvailabilityPolicy` <a name="PutAvailabilityPolicy" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putAvailabilityPolicy"></a>

```csharp
private void PutAvailabilityPolicy(DesktopsDesktopPoolAvailabilityPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putAvailabilityPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy">DesktopsDesktopPoolAvailabilityPolicy</a>

---

##### `PutDevicePolicy` <a name="PutDevicePolicy" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putDevicePolicy"></a>

```csharp
private void PutDevicePolicy(DesktopsDesktopPoolDevicePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putDevicePolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy">DesktopsDesktopPoolDevicePolicy</a>

---

##### `PutImage` <a name="PutImage" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putImage"></a>

```csharp
private void PutImage(DesktopsDesktopPoolImage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putImage.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage">DesktopsDesktopPoolImage</a>

---

##### `PutNetworkConfiguration` <a name="PutNetworkConfiguration" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putNetworkConfiguration"></a>

```csharp
private void PutNetworkConfiguration(DesktopsDesktopPoolNetworkConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration">DesktopsDesktopPoolNetworkConfiguration</a>

---

##### `PutPrivateAccessDetails` <a name="PutPrivateAccessDetails" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putPrivateAccessDetails"></a>

```csharp
private void PutPrivateAccessDetails(DesktopsDesktopPoolPrivateAccessDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putPrivateAccessDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails">DesktopsDesktopPoolPrivateAccessDetails</a>

---

##### `PutSessionLifecycleActions` <a name="PutSessionLifecycleActions" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putSessionLifecycleActions"></a>

```csharp
private void PutSessionLifecycleActions(DesktopsDesktopPoolSessionLifecycleActions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putSessionLifecycleActions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions">DesktopsDesktopPoolSessionLifecycleActions</a>

---

##### `PutShapeConfig` <a name="PutShapeConfig" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putShapeConfig"></a>

```csharp
private void PutShapeConfig(DesktopsDesktopPoolShapeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putShapeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig">DesktopsDesktopPoolShapeConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putTimeouts"></a>

```csharp
private void PutTimeouts(DesktopsDesktopPoolTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts">DesktopsDesktopPoolTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetNsgIds"></a>

```csharp
private void ResetNsgIds()
```

##### `ResetPrivateAccessDetails` <a name="ResetPrivateAccessDetails" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetPrivateAccessDetails"></a>

```csharp
private void ResetPrivateAccessDetails()
```

##### `ResetSessionLifecycleActions` <a name="ResetSessionLifecycleActions" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetSessionLifecycleActions"></a>

```csharp
private void ResetSessionLifecycleActions()
```

##### `ResetShapeConfig` <a name="ResetShapeConfig" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetShapeConfig"></a>

```csharp
private void ResetShapeConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimeStartScheduled` <a name="ResetTimeStartScheduled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetTimeStartScheduled"></a>

```csharp
private void ResetTimeStartScheduled()
```

##### `ResetTimeStopScheduled` <a name="ResetTimeStopScheduled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetTimeStopScheduled"></a>

```csharp
private void ResetTimeStopScheduled()
```

##### `ResetUseDedicatedVmHost` <a name="ResetUseDedicatedVmHost" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetUseDedicatedVmHost"></a>

```csharp
private void ResetUseDedicatedVmHost()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DesktopsDesktopPool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DesktopsDesktopPool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DesktopsDesktopPool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DesktopsDesktopPool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DesktopsDesktopPool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DesktopsDesktopPool resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DesktopsDesktopPool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DesktopsDesktopPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DesktopsDesktopPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.activeDesktops">ActiveDesktops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.availabilityPolicy">AvailabilityPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference">DesktopsDesktopPoolAvailabilityPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.devicePolicy">DevicePolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference">DesktopsDesktopPoolDevicePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.image">Image</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference">DesktopsDesktopPoolImageOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference">DesktopsDesktopPoolNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.privateAccessDetails">PrivateAccessDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference">DesktopsDesktopPoolPrivateAccessDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.sessionLifecycleActions">SessionLifecycleActions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference">DesktopsDesktopPoolSessionLifecycleActionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference">DesktopsDesktopPoolShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference">DesktopsDesktopPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.arePrivilegedUsersInput">ArePrivilegedUsersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.availabilityPolicyInput">AvailabilityPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy">DesktopsDesktopPoolAvailabilityPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.contactDetailsInput">ContactDetailsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.devicePolicyInput">DevicePolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy">DesktopsDesktopPoolDevicePolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.imageInput">ImageInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage">DesktopsDesktopPoolImage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.isStorageEnabledInput">IsStorageEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.maximumSizeInput">MaximumSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.networkConfigurationInput">NetworkConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration">DesktopsDesktopPoolNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.nsgIdsInput">NsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.privateAccessDetailsInput">PrivateAccessDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails">DesktopsDesktopPoolPrivateAccessDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.sessionLifecycleActionsInput">SessionLifecycleActionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions">DesktopsDesktopPoolSessionLifecycleActions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.shapeConfigInput">ShapeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig">DesktopsDesktopPoolShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.shapeNameInput">ShapeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.standbySizeInput">StandbySizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.storageBackupPolicyIdInput">StorageBackupPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.storageSizeInGbsInput">StorageSizeInGbsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeStartScheduledInput">TimeStartScheduledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeStopScheduledInput">TimeStopScheduledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.useDedicatedVmHostInput">UseDedicatedVmHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.arePrivilegedUsers">ArePrivilegedUsers</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.contactDetails">ContactDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.isStorageEnabled">IsStorageEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.maximumSize">MaximumSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.shapeName">ShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.standbySize">StandbySize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.storageBackupPolicyId">StorageBackupPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.storageSizeInGbs">StorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeStartScheduled">TimeStartScheduled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeStopScheduled">TimeStopScheduled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.useDedicatedVmHost">UseDedicatedVmHost</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ActiveDesktops`<sup>Required</sup> <a name="ActiveDesktops" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.activeDesktops"></a>

```csharp
public double ActiveDesktops { get; }
```

- *Type:* double

---

##### `AvailabilityPolicy`<sup>Required</sup> <a name="AvailabilityPolicy" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.availabilityPolicy"></a>

```csharp
public DesktopsDesktopPoolAvailabilityPolicyOutputReference AvailabilityPolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference">DesktopsDesktopPoolAvailabilityPolicyOutputReference</a>

---

##### `DevicePolicy`<sup>Required</sup> <a name="DevicePolicy" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.devicePolicy"></a>

```csharp
public DesktopsDesktopPoolDevicePolicyOutputReference DevicePolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference">DesktopsDesktopPoolDevicePolicyOutputReference</a>

---

##### `Image`<sup>Required</sup> <a name="Image" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.image"></a>

```csharp
public DesktopsDesktopPoolImageOutputReference Image { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference">DesktopsDesktopPoolImageOutputReference</a>

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.networkConfiguration"></a>

```csharp
public DesktopsDesktopPoolNetworkConfigurationOutputReference NetworkConfiguration { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference">DesktopsDesktopPoolNetworkConfigurationOutputReference</a>

---

##### `PrivateAccessDetails`<sup>Required</sup> <a name="PrivateAccessDetails" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.privateAccessDetails"></a>

```csharp
public DesktopsDesktopPoolPrivateAccessDetailsOutputReference PrivateAccessDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference">DesktopsDesktopPoolPrivateAccessDetailsOutputReference</a>

---

##### `SessionLifecycleActions`<sup>Required</sup> <a name="SessionLifecycleActions" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.sessionLifecycleActions"></a>

```csharp
public DesktopsDesktopPoolSessionLifecycleActionsOutputReference SessionLifecycleActions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference">DesktopsDesktopPoolSessionLifecycleActionsOutputReference</a>

---

##### `ShapeConfig`<sup>Required</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.shapeConfig"></a>

```csharp
public DesktopsDesktopPoolShapeConfigOutputReference ShapeConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference">DesktopsDesktopPoolShapeConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeouts"></a>

```csharp
public DesktopsDesktopPoolTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference">DesktopsDesktopPoolTimeoutsOutputReference</a>

---

##### `ArePrivilegedUsersInput`<sup>Optional</sup> <a name="ArePrivilegedUsersInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.arePrivilegedUsersInput"></a>

```csharp
public object ArePrivilegedUsersInput { get; }
```

- *Type:* object

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.availabilityDomainInput"></a>

```csharp
public string AvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `AvailabilityPolicyInput`<sup>Optional</sup> <a name="AvailabilityPolicyInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.availabilityPolicyInput"></a>

```csharp
public DesktopsDesktopPoolAvailabilityPolicy AvailabilityPolicyInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy">DesktopsDesktopPoolAvailabilityPolicy</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `ContactDetailsInput`<sup>Optional</sup> <a name="ContactDetailsInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.contactDetailsInput"></a>

```csharp
public string ContactDetailsInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DevicePolicyInput`<sup>Optional</sup> <a name="DevicePolicyInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.devicePolicyInput"></a>

```csharp
public DesktopsDesktopPoolDevicePolicy DevicePolicyInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy">DesktopsDesktopPoolDevicePolicy</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.imageInput"></a>

```csharp
public DesktopsDesktopPoolImage ImageInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage">DesktopsDesktopPoolImage</a>

---

##### `IsStorageEnabledInput`<sup>Optional</sup> <a name="IsStorageEnabledInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.isStorageEnabledInput"></a>

```csharp
public object IsStorageEnabledInput { get; }
```

- *Type:* object

---

##### `MaximumSizeInput`<sup>Optional</sup> <a name="MaximumSizeInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.maximumSizeInput"></a>

```csharp
public double MaximumSizeInput { get; }
```

- *Type:* double

---

##### `NetworkConfigurationInput`<sup>Optional</sup> <a name="NetworkConfigurationInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.networkConfigurationInput"></a>

```csharp
public DesktopsDesktopPoolNetworkConfiguration NetworkConfigurationInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration">DesktopsDesktopPoolNetworkConfiguration</a>

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.nsgIdsInput"></a>

```csharp
public string[] NsgIdsInput { get; }
```

- *Type:* string[]

---

##### `PrivateAccessDetailsInput`<sup>Optional</sup> <a name="PrivateAccessDetailsInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.privateAccessDetailsInput"></a>

```csharp
public DesktopsDesktopPoolPrivateAccessDetails PrivateAccessDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails">DesktopsDesktopPoolPrivateAccessDetails</a>

---

##### `SessionLifecycleActionsInput`<sup>Optional</sup> <a name="SessionLifecycleActionsInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.sessionLifecycleActionsInput"></a>

```csharp
public DesktopsDesktopPoolSessionLifecycleActions SessionLifecycleActionsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions">DesktopsDesktopPoolSessionLifecycleActions</a>

---

##### `ShapeConfigInput`<sup>Optional</sup> <a name="ShapeConfigInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.shapeConfigInput"></a>

```csharp
public DesktopsDesktopPoolShapeConfig ShapeConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig">DesktopsDesktopPoolShapeConfig</a>

---

##### `ShapeNameInput`<sup>Optional</sup> <a name="ShapeNameInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.shapeNameInput"></a>

```csharp
public string ShapeNameInput { get; }
```

- *Type:* string

---

##### `StandbySizeInput`<sup>Optional</sup> <a name="StandbySizeInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.standbySizeInput"></a>

```csharp
public double StandbySizeInput { get; }
```

- *Type:* double

---

##### `StorageBackupPolicyIdInput`<sup>Optional</sup> <a name="StorageBackupPolicyIdInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.storageBackupPolicyIdInput"></a>

```csharp
public string StorageBackupPolicyIdInput { get; }
```

- *Type:* string

---

##### `StorageSizeInGbsInput`<sup>Optional</sup> <a name="StorageSizeInGbsInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.storageSizeInGbsInput"></a>

```csharp
public double StorageSizeInGbsInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TimeStartScheduledInput`<sup>Optional</sup> <a name="TimeStartScheduledInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeStartScheduledInput"></a>

```csharp
public string TimeStartScheduledInput { get; }
```

- *Type:* string

---

##### `TimeStopScheduledInput`<sup>Optional</sup> <a name="TimeStopScheduledInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeStopScheduledInput"></a>

```csharp
public string TimeStopScheduledInput { get; }
```

- *Type:* string

---

##### `UseDedicatedVmHostInput`<sup>Optional</sup> <a name="UseDedicatedVmHostInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.useDedicatedVmHostInput"></a>

```csharp
public string UseDedicatedVmHostInput { get; }
```

- *Type:* string

---

##### `ArePrivilegedUsers`<sup>Required</sup> <a name="ArePrivilegedUsers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.arePrivilegedUsers"></a>

```csharp
public object ArePrivilegedUsers { get; }
```

- *Type:* object

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ContactDetails`<sup>Required</sup> <a name="ContactDetails" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.contactDetails"></a>

```csharp
public string ContactDetails { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsStorageEnabled`<sup>Required</sup> <a name="IsStorageEnabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.isStorageEnabled"></a>

```csharp
public object IsStorageEnabled { get; }
```

- *Type:* object

---

##### `MaximumSize`<sup>Required</sup> <a name="MaximumSize" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.maximumSize"></a>

```csharp
public double MaximumSize { get; }
```

- *Type:* double

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.shapeName"></a>

```csharp
public string ShapeName { get; }
```

- *Type:* string

---

##### `StandbySize`<sup>Required</sup> <a name="StandbySize" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.standbySize"></a>

```csharp
public double StandbySize { get; }
```

- *Type:* double

---

##### `StorageBackupPolicyId`<sup>Required</sup> <a name="StorageBackupPolicyId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.storageBackupPolicyId"></a>

```csharp
public string StorageBackupPolicyId { get; }
```

- *Type:* string

---

##### `StorageSizeInGbs`<sup>Required</sup> <a name="StorageSizeInGbs" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.storageSizeInGbs"></a>

```csharp
public double StorageSizeInGbs { get; }
```

- *Type:* double

---

##### `TimeStartScheduled`<sup>Required</sup> <a name="TimeStartScheduled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeStartScheduled"></a>

```csharp
public string TimeStartScheduled { get; }
```

- *Type:* string

---

##### `TimeStopScheduled`<sup>Required</sup> <a name="TimeStopScheduled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeStopScheduled"></a>

```csharp
public string TimeStopScheduled { get; }
```

- *Type:* string

---

##### `UseDedicatedVmHost`<sup>Required</sup> <a name="UseDedicatedVmHost" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.useDedicatedVmHost"></a>

```csharp
public string UseDedicatedVmHost { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DesktopsDesktopPoolAvailabilityPolicy <a name="DesktopsDesktopPoolAvailabilityPolicy" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DesktopsDesktopPoolAvailabilityPolicy {
    DesktopsDesktopPoolAvailabilityPolicyStartSchedule StartSchedule = null,
    DesktopsDesktopPoolAvailabilityPolicyStopSchedule StopSchedule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy.property.startSchedule">StartSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule">DesktopsDesktopPoolAvailabilityPolicyStartSchedule</a></code> | start_schedule block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy.property.stopSchedule">StopSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule">DesktopsDesktopPoolAvailabilityPolicyStopSchedule</a></code> | stop_schedule block. |

---

##### `StartSchedule`<sup>Optional</sup> <a name="StartSchedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy.property.startSchedule"></a>

```csharp
public DesktopsDesktopPoolAvailabilityPolicyStartSchedule StartSchedule { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule">DesktopsDesktopPoolAvailabilityPolicyStartSchedule</a>

start_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#start_schedule DesktopsDesktopPool#start_schedule}

---

##### `StopSchedule`<sup>Optional</sup> <a name="StopSchedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy.property.stopSchedule"></a>

```csharp
public DesktopsDesktopPoolAvailabilityPolicyStopSchedule StopSchedule { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule">DesktopsDesktopPoolAvailabilityPolicyStopSchedule</a>

stop_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#stop_schedule DesktopsDesktopPool#stop_schedule}

---

### DesktopsDesktopPoolAvailabilityPolicyStartSchedule <a name="DesktopsDesktopPoolAvailabilityPolicyStartSchedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DesktopsDesktopPoolAvailabilityPolicyStartSchedule {
    string CronExpression,
    string Timezone
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule.property.cronExpression">CronExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#cron_expression DesktopsDesktopPool#cron_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule.property.timezone">Timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#timezone DesktopsDesktopPool#timezone}. |

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule.property.cronExpression"></a>

```csharp
public string CronExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#cron_expression DesktopsDesktopPool#cron_expression}.

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule.property.timezone"></a>

```csharp
public string Timezone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#timezone DesktopsDesktopPool#timezone}.

---

### DesktopsDesktopPoolAvailabilityPolicyStopSchedule <a name="DesktopsDesktopPoolAvailabilityPolicyStopSchedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DesktopsDesktopPoolAvailabilityPolicyStopSchedule {
    string CronExpression,
    string Timezone
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule.property.cronExpression">CronExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#cron_expression DesktopsDesktopPool#cron_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule.property.timezone">Timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#timezone DesktopsDesktopPool#timezone}. |

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule.property.cronExpression"></a>

```csharp
public string CronExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#cron_expression DesktopsDesktopPool#cron_expression}.

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule.property.timezone"></a>

```csharp
public string Timezone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#timezone DesktopsDesktopPool#timezone}.

---

### DesktopsDesktopPoolConfig <a name="DesktopsDesktopPoolConfig" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DesktopsDesktopPoolConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object ArePrivilegedUsers,
    string AvailabilityDomain,
    DesktopsDesktopPoolAvailabilityPolicy AvailabilityPolicy,
    string CompartmentId,
    string ContactDetails,
    DesktopsDesktopPoolDevicePolicy DevicePolicy,
    string DisplayName,
    DesktopsDesktopPoolImage Image,
    object IsStorageEnabled,
    double MaximumSize,
    DesktopsDesktopPoolNetworkConfiguration NetworkConfiguration,
    string ShapeName,
    double StandbySize,
    string StorageBackupPolicyId,
    double StorageSizeInGbs,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    string[] NsgIds = null,
    DesktopsDesktopPoolPrivateAccessDetails PrivateAccessDetails = null,
    DesktopsDesktopPoolSessionLifecycleActions SessionLifecycleActions = null,
    DesktopsDesktopPoolShapeConfig ShapeConfig = null,
    DesktopsDesktopPoolTimeouts Timeouts = null,
    string TimeStartScheduled = null,
    string TimeStopScheduled = null,
    string UseDedicatedVmHost = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.arePrivilegedUsers">ArePrivilegedUsers</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#are_privileged_users DesktopsDesktopPool#are_privileged_users}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#availability_domain DesktopsDesktopPool#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.availabilityPolicy">AvailabilityPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy">DesktopsDesktopPoolAvailabilityPolicy</a></code> | availability_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#compartment_id DesktopsDesktopPool#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.contactDetails">ContactDetails</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#contact_details DesktopsDesktopPool#contact_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.devicePolicy">DevicePolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy">DesktopsDesktopPoolDevicePolicy</a></code> | device_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#display_name DesktopsDesktopPool#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.image">Image</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage">DesktopsDesktopPoolImage</a></code> | image block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.isStorageEnabled">IsStorageEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_storage_enabled DesktopsDesktopPool#is_storage_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.maximumSize">MaximumSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#maximum_size DesktopsDesktopPool#maximum_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration">DesktopsDesktopPoolNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.shapeName">ShapeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#shape_name DesktopsDesktopPool#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.standbySize">StandbySize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#standby_size DesktopsDesktopPool#standby_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.storageBackupPolicyId">StorageBackupPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#storage_backup_policy_id DesktopsDesktopPool#storage_backup_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.storageSizeInGbs">StorageSizeInGbs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#storage_size_in_gbs DesktopsDesktopPool#storage_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#defined_tags DesktopsDesktopPool#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#description DesktopsDesktopPool#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#freeform_tags DesktopsDesktopPool#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#id DesktopsDesktopPool#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#nsg_ids DesktopsDesktopPool#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.privateAccessDetails">PrivateAccessDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails">DesktopsDesktopPoolPrivateAccessDetails</a></code> | private_access_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.sessionLifecycleActions">SessionLifecycleActions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions">DesktopsDesktopPoolSessionLifecycleActions</a></code> | session_lifecycle_actions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig">DesktopsDesktopPoolShapeConfig</a></code> | shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts">DesktopsDesktopPoolTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.timeStartScheduled">TimeStartScheduled</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#time_start_scheduled DesktopsDesktopPool#time_start_scheduled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.timeStopScheduled">TimeStopScheduled</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#time_stop_scheduled DesktopsDesktopPool#time_stop_scheduled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.useDedicatedVmHost">UseDedicatedVmHost</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#use_dedicated_vm_host DesktopsDesktopPool#use_dedicated_vm_host}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ArePrivilegedUsers`<sup>Required</sup> <a name="ArePrivilegedUsers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.arePrivilegedUsers"></a>

```csharp
public object ArePrivilegedUsers { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#are_privileged_users DesktopsDesktopPool#are_privileged_users}.

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#availability_domain DesktopsDesktopPool#availability_domain}.

---

##### `AvailabilityPolicy`<sup>Required</sup> <a name="AvailabilityPolicy" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.availabilityPolicy"></a>

```csharp
public DesktopsDesktopPoolAvailabilityPolicy AvailabilityPolicy { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy">DesktopsDesktopPoolAvailabilityPolicy</a>

availability_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#availability_policy DesktopsDesktopPool#availability_policy}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#compartment_id DesktopsDesktopPool#compartment_id}.

---

##### `ContactDetails`<sup>Required</sup> <a name="ContactDetails" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.contactDetails"></a>

```csharp
public string ContactDetails { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#contact_details DesktopsDesktopPool#contact_details}.

---

##### `DevicePolicy`<sup>Required</sup> <a name="DevicePolicy" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.devicePolicy"></a>

```csharp
public DesktopsDesktopPoolDevicePolicy DevicePolicy { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy">DesktopsDesktopPoolDevicePolicy</a>

device_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#device_policy DesktopsDesktopPool#device_policy}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#display_name DesktopsDesktopPool#display_name}.

---

##### `Image`<sup>Required</sup> <a name="Image" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.image"></a>

```csharp
public DesktopsDesktopPoolImage Image { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage">DesktopsDesktopPoolImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#image DesktopsDesktopPool#image}

---

##### `IsStorageEnabled`<sup>Required</sup> <a name="IsStorageEnabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.isStorageEnabled"></a>

```csharp
public object IsStorageEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_storage_enabled DesktopsDesktopPool#is_storage_enabled}.

---

##### `MaximumSize`<sup>Required</sup> <a name="MaximumSize" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.maximumSize"></a>

```csharp
public double MaximumSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#maximum_size DesktopsDesktopPool#maximum_size}.

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.networkConfiguration"></a>

```csharp
public DesktopsDesktopPoolNetworkConfiguration NetworkConfiguration { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration">DesktopsDesktopPoolNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#network_configuration DesktopsDesktopPool#network_configuration}

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.shapeName"></a>

```csharp
public string ShapeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#shape_name DesktopsDesktopPool#shape_name}.

---

##### `StandbySize`<sup>Required</sup> <a name="StandbySize" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.standbySize"></a>

```csharp
public double StandbySize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#standby_size DesktopsDesktopPool#standby_size}.

---

##### `StorageBackupPolicyId`<sup>Required</sup> <a name="StorageBackupPolicyId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.storageBackupPolicyId"></a>

```csharp
public string StorageBackupPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#storage_backup_policy_id DesktopsDesktopPool#storage_backup_policy_id}.

---

##### `StorageSizeInGbs`<sup>Required</sup> <a name="StorageSizeInGbs" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.storageSizeInGbs"></a>

```csharp
public double StorageSizeInGbs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#storage_size_in_gbs DesktopsDesktopPool#storage_size_in_gbs}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#defined_tags DesktopsDesktopPool#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#description DesktopsDesktopPool#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#freeform_tags DesktopsDesktopPool#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#id DesktopsDesktopPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#nsg_ids DesktopsDesktopPool#nsg_ids}.

---

##### `PrivateAccessDetails`<sup>Optional</sup> <a name="PrivateAccessDetails" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.privateAccessDetails"></a>

```csharp
public DesktopsDesktopPoolPrivateAccessDetails PrivateAccessDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails">DesktopsDesktopPoolPrivateAccessDetails</a>

private_access_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#private_access_details DesktopsDesktopPool#private_access_details}

---

##### `SessionLifecycleActions`<sup>Optional</sup> <a name="SessionLifecycleActions" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.sessionLifecycleActions"></a>

```csharp
public DesktopsDesktopPoolSessionLifecycleActions SessionLifecycleActions { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions">DesktopsDesktopPoolSessionLifecycleActions</a>

session_lifecycle_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#session_lifecycle_actions DesktopsDesktopPool#session_lifecycle_actions}

---

##### `ShapeConfig`<sup>Optional</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.shapeConfig"></a>

```csharp
public DesktopsDesktopPoolShapeConfig ShapeConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig">DesktopsDesktopPoolShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#shape_config DesktopsDesktopPool#shape_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.timeouts"></a>

```csharp
public DesktopsDesktopPoolTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts">DesktopsDesktopPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#timeouts DesktopsDesktopPool#timeouts}

---

##### `TimeStartScheduled`<sup>Optional</sup> <a name="TimeStartScheduled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.timeStartScheduled"></a>

```csharp
public string TimeStartScheduled { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#time_start_scheduled DesktopsDesktopPool#time_start_scheduled}.

---

##### `TimeStopScheduled`<sup>Optional</sup> <a name="TimeStopScheduled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.timeStopScheduled"></a>

```csharp
public string TimeStopScheduled { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#time_stop_scheduled DesktopsDesktopPool#time_stop_scheduled}.

---

##### `UseDedicatedVmHost`<sup>Optional</sup> <a name="UseDedicatedVmHost" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.useDedicatedVmHost"></a>

```csharp
public string UseDedicatedVmHost { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#use_dedicated_vm_host DesktopsDesktopPool#use_dedicated_vm_host}.

---

### DesktopsDesktopPoolDevicePolicy <a name="DesktopsDesktopPoolDevicePolicy" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DesktopsDesktopPoolDevicePolicy {
    string AudioMode,
    string CdmMode,
    string ClipboardMode,
    object IsDisplayEnabled,
    object IsKeyboardEnabled,
    object IsPointerEnabled,
    object IsPrintingEnabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.audioMode">AudioMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#audio_mode DesktopsDesktopPool#audio_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.cdmMode">CdmMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#cdm_mode DesktopsDesktopPool#cdm_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.clipboardMode">ClipboardMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#clipboard_mode DesktopsDesktopPool#clipboard_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.isDisplayEnabled">IsDisplayEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_display_enabled DesktopsDesktopPool#is_display_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.isKeyboardEnabled">IsKeyboardEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_keyboard_enabled DesktopsDesktopPool#is_keyboard_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.isPointerEnabled">IsPointerEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_pointer_enabled DesktopsDesktopPool#is_pointer_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.isPrintingEnabled">IsPrintingEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_printing_enabled DesktopsDesktopPool#is_printing_enabled}. |

---

##### `AudioMode`<sup>Required</sup> <a name="AudioMode" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.audioMode"></a>

```csharp
public string AudioMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#audio_mode DesktopsDesktopPool#audio_mode}.

---

##### `CdmMode`<sup>Required</sup> <a name="CdmMode" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.cdmMode"></a>

```csharp
public string CdmMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#cdm_mode DesktopsDesktopPool#cdm_mode}.

---

##### `ClipboardMode`<sup>Required</sup> <a name="ClipboardMode" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.clipboardMode"></a>

```csharp
public string ClipboardMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#clipboard_mode DesktopsDesktopPool#clipboard_mode}.

---

##### `IsDisplayEnabled`<sup>Required</sup> <a name="IsDisplayEnabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.isDisplayEnabled"></a>

```csharp
public object IsDisplayEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_display_enabled DesktopsDesktopPool#is_display_enabled}.

---

##### `IsKeyboardEnabled`<sup>Required</sup> <a name="IsKeyboardEnabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.isKeyboardEnabled"></a>

```csharp
public object IsKeyboardEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_keyboard_enabled DesktopsDesktopPool#is_keyboard_enabled}.

---

##### `IsPointerEnabled`<sup>Required</sup> <a name="IsPointerEnabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.isPointerEnabled"></a>

```csharp
public object IsPointerEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_pointer_enabled DesktopsDesktopPool#is_pointer_enabled}.

---

##### `IsPrintingEnabled`<sup>Required</sup> <a name="IsPrintingEnabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.isPrintingEnabled"></a>

```csharp
public object IsPrintingEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_printing_enabled DesktopsDesktopPool#is_printing_enabled}.

---

### DesktopsDesktopPoolImage <a name="DesktopsDesktopPoolImage" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DesktopsDesktopPoolImage {
    string ImageId,
    string ImageName,
    string OperatingSystem = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage.property.imageId">ImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#image_id DesktopsDesktopPool#image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage.property.imageName">ImageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#image_name DesktopsDesktopPool#image_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage.property.operatingSystem">OperatingSystem</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#operating_system DesktopsDesktopPool#operating_system}. |

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage.property.imageId"></a>

```csharp
public string ImageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#image_id DesktopsDesktopPool#image_id}.

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage.property.imageName"></a>

```csharp
public string ImageName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#image_name DesktopsDesktopPool#image_name}.

---

##### `OperatingSystem`<sup>Optional</sup> <a name="OperatingSystem" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage.property.operatingSystem"></a>

```csharp
public string OperatingSystem { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#operating_system DesktopsDesktopPool#operating_system}.

---

### DesktopsDesktopPoolNetworkConfiguration <a name="DesktopsDesktopPoolNetworkConfiguration" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DesktopsDesktopPoolNetworkConfiguration {
    string SubnetId,
    string VcnId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#subnet_id DesktopsDesktopPool#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration.property.vcnId">VcnId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#vcn_id DesktopsDesktopPool#vcn_id}. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#subnet_id DesktopsDesktopPool#subnet_id}.

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration.property.vcnId"></a>

```csharp
public string VcnId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#vcn_id DesktopsDesktopPool#vcn_id}.

---

### DesktopsDesktopPoolPrivateAccessDetails <a name="DesktopsDesktopPoolPrivateAccessDetails" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DesktopsDesktopPoolPrivateAccessDetails {
    string SubnetId,
    string[] NsgIds = null,
    string PrivateIp = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#subnet_id DesktopsDesktopPool#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#nsg_ids DesktopsDesktopPool#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails.property.privateIp">PrivateIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#private_ip DesktopsDesktopPool#private_ip}. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#subnet_id DesktopsDesktopPool#subnet_id}.

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#nsg_ids DesktopsDesktopPool#nsg_ids}.

---

##### `PrivateIp`<sup>Optional</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails.property.privateIp"></a>

```csharp
public string PrivateIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#private_ip DesktopsDesktopPool#private_ip}.

---

### DesktopsDesktopPoolSessionLifecycleActions <a name="DesktopsDesktopPoolSessionLifecycleActions" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DesktopsDesktopPoolSessionLifecycleActions {
    DesktopsDesktopPoolSessionLifecycleActionsDisconnect Disconnect = null,
    DesktopsDesktopPoolSessionLifecycleActionsInactivity Inactivity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions.property.disconnect">Disconnect</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect">DesktopsDesktopPoolSessionLifecycleActionsDisconnect</a></code> | disconnect block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions.property.inactivity">Inactivity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity">DesktopsDesktopPoolSessionLifecycleActionsInactivity</a></code> | inactivity block. |

---

##### `Disconnect`<sup>Optional</sup> <a name="Disconnect" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions.property.disconnect"></a>

```csharp
public DesktopsDesktopPoolSessionLifecycleActionsDisconnect Disconnect { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect">DesktopsDesktopPoolSessionLifecycleActionsDisconnect</a>

disconnect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#disconnect DesktopsDesktopPool#disconnect}

---

##### `Inactivity`<sup>Optional</sup> <a name="Inactivity" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions.property.inactivity"></a>

```csharp
public DesktopsDesktopPoolSessionLifecycleActionsInactivity Inactivity { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity">DesktopsDesktopPoolSessionLifecycleActionsInactivity</a>

inactivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#inactivity DesktopsDesktopPool#inactivity}

---

### DesktopsDesktopPoolSessionLifecycleActionsDisconnect <a name="DesktopsDesktopPoolSessionLifecycleActionsDisconnect" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DesktopsDesktopPoolSessionLifecycleActionsDisconnect {
    string Action,
    double GracePeriodInMinutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#action DesktopsDesktopPool#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect.property.gracePeriodInMinutes">GracePeriodInMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#grace_period_in_minutes DesktopsDesktopPool#grace_period_in_minutes}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#action DesktopsDesktopPool#action}.

---

##### `GracePeriodInMinutes`<sup>Optional</sup> <a name="GracePeriodInMinutes" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect.property.gracePeriodInMinutes"></a>

```csharp
public double GracePeriodInMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#grace_period_in_minutes DesktopsDesktopPool#grace_period_in_minutes}.

---

### DesktopsDesktopPoolSessionLifecycleActionsInactivity <a name="DesktopsDesktopPoolSessionLifecycleActionsInactivity" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DesktopsDesktopPoolSessionLifecycleActionsInactivity {
    string Action,
    double GracePeriodInMinutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#action DesktopsDesktopPool#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity.property.gracePeriodInMinutes">GracePeriodInMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#grace_period_in_minutes DesktopsDesktopPool#grace_period_in_minutes}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#action DesktopsDesktopPool#action}.

---

##### `GracePeriodInMinutes`<sup>Optional</sup> <a name="GracePeriodInMinutes" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity.property.gracePeriodInMinutes"></a>

```csharp
public double GracePeriodInMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#grace_period_in_minutes DesktopsDesktopPool#grace_period_in_minutes}.

---

### DesktopsDesktopPoolShapeConfig <a name="DesktopsDesktopPoolShapeConfig" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DesktopsDesktopPoolShapeConfig {
    string BaselineOcpuUtilization = null,
    string MemoryInGbs = null,
    string Ocpus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig.property.baselineOcpuUtilization">BaselineOcpuUtilization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#baseline_ocpu_utilization DesktopsDesktopPool#baseline_ocpu_utilization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig.property.memoryInGbs">MemoryInGbs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#memory_in_gbs DesktopsDesktopPool#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig.property.ocpus">Ocpus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#ocpus DesktopsDesktopPool#ocpus}. |

---

##### `BaselineOcpuUtilization`<sup>Optional</sup> <a name="BaselineOcpuUtilization" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig.property.baselineOcpuUtilization"></a>

```csharp
public string BaselineOcpuUtilization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#baseline_ocpu_utilization DesktopsDesktopPool#baseline_ocpu_utilization}.

---

##### `MemoryInGbs`<sup>Optional</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig.property.memoryInGbs"></a>

```csharp
public string MemoryInGbs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#memory_in_gbs DesktopsDesktopPool#memory_in_gbs}.

---

##### `Ocpus`<sup>Optional</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig.property.ocpus"></a>

```csharp
public string Ocpus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#ocpus DesktopsDesktopPool#ocpus}.

---

### DesktopsDesktopPoolTimeouts <a name="DesktopsDesktopPoolTimeouts" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DesktopsDesktopPoolTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#create DesktopsDesktopPool#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#delete DesktopsDesktopPool#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#update DesktopsDesktopPool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#create DesktopsDesktopPool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#delete DesktopsDesktopPool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#update DesktopsDesktopPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DesktopsDesktopPoolAvailabilityPolicyOutputReference <a name="DesktopsDesktopPoolAvailabilityPolicyOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DesktopsDesktopPoolAvailabilityPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.putStartSchedule">PutStartSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.putStopSchedule">PutStopSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.resetStartSchedule">ResetStartSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.resetStopSchedule">ResetStopSchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStartSchedule` <a name="PutStartSchedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.putStartSchedule"></a>

```csharp
private void PutStartSchedule(DesktopsDesktopPoolAvailabilityPolicyStartSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.putStartSchedule.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule">DesktopsDesktopPoolAvailabilityPolicyStartSchedule</a>

---

##### `PutStopSchedule` <a name="PutStopSchedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.putStopSchedule"></a>

```csharp
private void PutStopSchedule(DesktopsDesktopPoolAvailabilityPolicyStopSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.putStopSchedule.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule">DesktopsDesktopPoolAvailabilityPolicyStopSchedule</a>

---

##### `ResetStartSchedule` <a name="ResetStartSchedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.resetStartSchedule"></a>

```csharp
private void ResetStartSchedule()
```

##### `ResetStopSchedule` <a name="ResetStopSchedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.resetStopSchedule"></a>

```csharp
private void ResetStopSchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.startSchedule">StartSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference">DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.stopSchedule">StopSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference">DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.startScheduleInput">StartScheduleInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule">DesktopsDesktopPoolAvailabilityPolicyStartSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.stopScheduleInput">StopScheduleInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule">DesktopsDesktopPoolAvailabilityPolicyStopSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy">DesktopsDesktopPoolAvailabilityPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StartSchedule`<sup>Required</sup> <a name="StartSchedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.startSchedule"></a>

```csharp
public DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference StartSchedule { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference">DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference</a>

---

##### `StopSchedule`<sup>Required</sup> <a name="StopSchedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.stopSchedule"></a>

```csharp
public DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference StopSchedule { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference">DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference</a>

---

##### `StartScheduleInput`<sup>Optional</sup> <a name="StartScheduleInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.startScheduleInput"></a>

```csharp
public DesktopsDesktopPoolAvailabilityPolicyStartSchedule StartScheduleInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule">DesktopsDesktopPoolAvailabilityPolicyStartSchedule</a>

---

##### `StopScheduleInput`<sup>Optional</sup> <a name="StopScheduleInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.stopScheduleInput"></a>

```csharp
public DesktopsDesktopPoolAvailabilityPolicyStopSchedule StopScheduleInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule">DesktopsDesktopPoolAvailabilityPolicyStopSchedule</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.internalValue"></a>

```csharp
public DesktopsDesktopPoolAvailabilityPolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy">DesktopsDesktopPoolAvailabilityPolicy</a>

---


### DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference <a name="DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.cronExpressionInput">CronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.timezoneInput">TimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.cronExpression">CronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule">DesktopsDesktopPoolAvailabilityPolicyStartSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CronExpressionInput`<sup>Optional</sup> <a name="CronExpressionInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.cronExpressionInput"></a>

```csharp
public string CronExpressionInput { get; }
```

- *Type:* string

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.timezoneInput"></a>

```csharp
public string TimezoneInput { get; }
```

- *Type:* string

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.cronExpression"></a>

```csharp
public string CronExpression { get; }
```

- *Type:* string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.internalValue"></a>

```csharp
public DesktopsDesktopPoolAvailabilityPolicyStartSchedule InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule">DesktopsDesktopPoolAvailabilityPolicyStartSchedule</a>

---


### DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference <a name="DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.cronExpressionInput">CronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.timezoneInput">TimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.cronExpression">CronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule">DesktopsDesktopPoolAvailabilityPolicyStopSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CronExpressionInput`<sup>Optional</sup> <a name="CronExpressionInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.cronExpressionInput"></a>

```csharp
public string CronExpressionInput { get; }
```

- *Type:* string

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.timezoneInput"></a>

```csharp
public string TimezoneInput { get; }
```

- *Type:* string

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.cronExpression"></a>

```csharp
public string CronExpression { get; }
```

- *Type:* string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.internalValue"></a>

```csharp
public DesktopsDesktopPoolAvailabilityPolicyStopSchedule InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule">DesktopsDesktopPoolAvailabilityPolicyStopSchedule</a>

---


### DesktopsDesktopPoolDevicePolicyOutputReference <a name="DesktopsDesktopPoolDevicePolicyOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DesktopsDesktopPoolDevicePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.audioModeInput">AudioModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.cdmModeInput">CdmModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.clipboardModeInput">ClipboardModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isDisplayEnabledInput">IsDisplayEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isKeyboardEnabledInput">IsKeyboardEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isPointerEnabledInput">IsPointerEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isPrintingEnabledInput">IsPrintingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.audioMode">AudioMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.cdmMode">CdmMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.clipboardMode">ClipboardMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isDisplayEnabled">IsDisplayEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isKeyboardEnabled">IsKeyboardEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isPointerEnabled">IsPointerEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isPrintingEnabled">IsPrintingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy">DesktopsDesktopPoolDevicePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AudioModeInput`<sup>Optional</sup> <a name="AudioModeInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.audioModeInput"></a>

```csharp
public string AudioModeInput { get; }
```

- *Type:* string

---

##### `CdmModeInput`<sup>Optional</sup> <a name="CdmModeInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.cdmModeInput"></a>

```csharp
public string CdmModeInput { get; }
```

- *Type:* string

---

##### `ClipboardModeInput`<sup>Optional</sup> <a name="ClipboardModeInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.clipboardModeInput"></a>

```csharp
public string ClipboardModeInput { get; }
```

- *Type:* string

---

##### `IsDisplayEnabledInput`<sup>Optional</sup> <a name="IsDisplayEnabledInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isDisplayEnabledInput"></a>

```csharp
public object IsDisplayEnabledInput { get; }
```

- *Type:* object

---

##### `IsKeyboardEnabledInput`<sup>Optional</sup> <a name="IsKeyboardEnabledInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isKeyboardEnabledInput"></a>

```csharp
public object IsKeyboardEnabledInput { get; }
```

- *Type:* object

---

##### `IsPointerEnabledInput`<sup>Optional</sup> <a name="IsPointerEnabledInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isPointerEnabledInput"></a>

```csharp
public object IsPointerEnabledInput { get; }
```

- *Type:* object

---

##### `IsPrintingEnabledInput`<sup>Optional</sup> <a name="IsPrintingEnabledInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isPrintingEnabledInput"></a>

```csharp
public object IsPrintingEnabledInput { get; }
```

- *Type:* object

---

##### `AudioMode`<sup>Required</sup> <a name="AudioMode" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.audioMode"></a>

```csharp
public string AudioMode { get; }
```

- *Type:* string

---

##### `CdmMode`<sup>Required</sup> <a name="CdmMode" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.cdmMode"></a>

```csharp
public string CdmMode { get; }
```

- *Type:* string

---

##### `ClipboardMode`<sup>Required</sup> <a name="ClipboardMode" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.clipboardMode"></a>

```csharp
public string ClipboardMode { get; }
```

- *Type:* string

---

##### `IsDisplayEnabled`<sup>Required</sup> <a name="IsDisplayEnabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isDisplayEnabled"></a>

```csharp
public object IsDisplayEnabled { get; }
```

- *Type:* object

---

##### `IsKeyboardEnabled`<sup>Required</sup> <a name="IsKeyboardEnabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isKeyboardEnabled"></a>

```csharp
public object IsKeyboardEnabled { get; }
```

- *Type:* object

---

##### `IsPointerEnabled`<sup>Required</sup> <a name="IsPointerEnabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isPointerEnabled"></a>

```csharp
public object IsPointerEnabled { get; }
```

- *Type:* object

---

##### `IsPrintingEnabled`<sup>Required</sup> <a name="IsPrintingEnabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isPrintingEnabled"></a>

```csharp
public object IsPrintingEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.internalValue"></a>

```csharp
public DesktopsDesktopPoolDevicePolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy">DesktopsDesktopPoolDevicePolicy</a>

---


### DesktopsDesktopPoolImageOutputReference <a name="DesktopsDesktopPoolImageOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DesktopsDesktopPoolImageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.resetOperatingSystem">ResetOperatingSystem</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOperatingSystem` <a name="ResetOperatingSystem" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.resetOperatingSystem"></a>

```csharp
private void ResetOperatingSystem()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.imageIdInput">ImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.imageNameInput">ImageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.operatingSystemInput">OperatingSystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.imageId">ImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.imageName">ImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.operatingSystem">OperatingSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage">DesktopsDesktopPoolImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImageIdInput`<sup>Optional</sup> <a name="ImageIdInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.imageIdInput"></a>

```csharp
public string ImageIdInput { get; }
```

- *Type:* string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.imageNameInput"></a>

```csharp
public string ImageNameInput { get; }
```

- *Type:* string

---

##### `OperatingSystemInput`<sup>Optional</sup> <a name="OperatingSystemInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.operatingSystemInput"></a>

```csharp
public string OperatingSystemInput { get; }
```

- *Type:* string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.imageId"></a>

```csharp
public string ImageId { get; }
```

- *Type:* string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.imageName"></a>

```csharp
public string ImageName { get; }
```

- *Type:* string

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.operatingSystem"></a>

```csharp
public string OperatingSystem { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.internalValue"></a>

```csharp
public DesktopsDesktopPoolImage InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage">DesktopsDesktopPoolImage</a>

---


### DesktopsDesktopPoolNetworkConfigurationOutputReference <a name="DesktopsDesktopPoolNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DesktopsDesktopPoolNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.vcnIdInput">VcnIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.vcnId">VcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration">DesktopsDesktopPoolNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `VcnIdInput`<sup>Optional</sup> <a name="VcnIdInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.vcnIdInput"></a>

```csharp
public string VcnIdInput { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.vcnId"></a>

```csharp
public string VcnId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public DesktopsDesktopPoolNetworkConfiguration InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration">DesktopsDesktopPoolNetworkConfiguration</a>

---


### DesktopsDesktopPoolPrivateAccessDetailsOutputReference <a name="DesktopsDesktopPoolPrivateAccessDetailsOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DesktopsDesktopPoolPrivateAccessDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.resetNsgIds">ResetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.resetPrivateIp">ResetPrivateIp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.resetNsgIds"></a>

```csharp
private void ResetNsgIds()
```

##### `ResetPrivateIp` <a name="ResetPrivateIp" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.resetPrivateIp"></a>

```csharp
private void ResetPrivateIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.endpointFqdn">EndpointFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.vcnId">VcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.nsgIdsInput">NsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.privateIpInput">PrivateIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.privateIp">PrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails">DesktopsDesktopPoolPrivateAccessDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndpointFqdn`<sup>Required</sup> <a name="EndpointFqdn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.endpointFqdn"></a>

```csharp
public string EndpointFqdn { get; }
```

- *Type:* string

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.vcnId"></a>

```csharp
public string VcnId { get; }
```

- *Type:* string

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.nsgIdsInput"></a>

```csharp
public string[] NsgIdsInput { get; }
```

- *Type:* string[]

---

##### `PrivateIpInput`<sup>Optional</sup> <a name="PrivateIpInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.privateIpInput"></a>

```csharp
public string PrivateIpInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.privateIp"></a>

```csharp
public string PrivateIp { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.internalValue"></a>

```csharp
public DesktopsDesktopPoolPrivateAccessDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails">DesktopsDesktopPoolPrivateAccessDetails</a>

---


### DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference <a name="DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.resetGracePeriodInMinutes">ResetGracePeriodInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGracePeriodInMinutes` <a name="ResetGracePeriodInMinutes" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.resetGracePeriodInMinutes"></a>

```csharp
private void ResetGracePeriodInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.gracePeriodInMinutesInput">GracePeriodInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.gracePeriodInMinutes">GracePeriodInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect">DesktopsDesktopPoolSessionLifecycleActionsDisconnect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `GracePeriodInMinutesInput`<sup>Optional</sup> <a name="GracePeriodInMinutesInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.gracePeriodInMinutesInput"></a>

```csharp
public double GracePeriodInMinutesInput { get; }
```

- *Type:* double

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `GracePeriodInMinutes`<sup>Required</sup> <a name="GracePeriodInMinutes" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.gracePeriodInMinutes"></a>

```csharp
public double GracePeriodInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.internalValue"></a>

```csharp
public DesktopsDesktopPoolSessionLifecycleActionsDisconnect InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect">DesktopsDesktopPoolSessionLifecycleActionsDisconnect</a>

---


### DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference <a name="DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.resetGracePeriodInMinutes">ResetGracePeriodInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGracePeriodInMinutes` <a name="ResetGracePeriodInMinutes" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.resetGracePeriodInMinutes"></a>

```csharp
private void ResetGracePeriodInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.gracePeriodInMinutesInput">GracePeriodInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.gracePeriodInMinutes">GracePeriodInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity">DesktopsDesktopPoolSessionLifecycleActionsInactivity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `GracePeriodInMinutesInput`<sup>Optional</sup> <a name="GracePeriodInMinutesInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.gracePeriodInMinutesInput"></a>

```csharp
public double GracePeriodInMinutesInput { get; }
```

- *Type:* double

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `GracePeriodInMinutes`<sup>Required</sup> <a name="GracePeriodInMinutes" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.gracePeriodInMinutes"></a>

```csharp
public double GracePeriodInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.internalValue"></a>

```csharp
public DesktopsDesktopPoolSessionLifecycleActionsInactivity InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity">DesktopsDesktopPoolSessionLifecycleActionsInactivity</a>

---


### DesktopsDesktopPoolSessionLifecycleActionsOutputReference <a name="DesktopsDesktopPoolSessionLifecycleActionsOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DesktopsDesktopPoolSessionLifecycleActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.putDisconnect">PutDisconnect</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.putInactivity">PutInactivity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.resetDisconnect">ResetDisconnect</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.resetInactivity">ResetInactivity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDisconnect` <a name="PutDisconnect" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.putDisconnect"></a>

```csharp
private void PutDisconnect(DesktopsDesktopPoolSessionLifecycleActionsDisconnect Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.putDisconnect.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect">DesktopsDesktopPoolSessionLifecycleActionsDisconnect</a>

---

##### `PutInactivity` <a name="PutInactivity" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.putInactivity"></a>

```csharp
private void PutInactivity(DesktopsDesktopPoolSessionLifecycleActionsInactivity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.putInactivity.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity">DesktopsDesktopPoolSessionLifecycleActionsInactivity</a>

---

##### `ResetDisconnect` <a name="ResetDisconnect" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.resetDisconnect"></a>

```csharp
private void ResetDisconnect()
```

##### `ResetInactivity` <a name="ResetInactivity" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.resetInactivity"></a>

```csharp
private void ResetInactivity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.disconnect">Disconnect</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference">DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.inactivity">Inactivity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference">DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.disconnectInput">DisconnectInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect">DesktopsDesktopPoolSessionLifecycleActionsDisconnect</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.inactivityInput">InactivityInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity">DesktopsDesktopPoolSessionLifecycleActionsInactivity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions">DesktopsDesktopPoolSessionLifecycleActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Disconnect`<sup>Required</sup> <a name="Disconnect" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.disconnect"></a>

```csharp
public DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference Disconnect { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference">DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference</a>

---

##### `Inactivity`<sup>Required</sup> <a name="Inactivity" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.inactivity"></a>

```csharp
public DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference Inactivity { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference">DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference</a>

---

##### `DisconnectInput`<sup>Optional</sup> <a name="DisconnectInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.disconnectInput"></a>

```csharp
public DesktopsDesktopPoolSessionLifecycleActionsDisconnect DisconnectInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect">DesktopsDesktopPoolSessionLifecycleActionsDisconnect</a>

---

##### `InactivityInput`<sup>Optional</sup> <a name="InactivityInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.inactivityInput"></a>

```csharp
public DesktopsDesktopPoolSessionLifecycleActionsInactivity InactivityInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity">DesktopsDesktopPoolSessionLifecycleActionsInactivity</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.internalValue"></a>

```csharp
public DesktopsDesktopPoolSessionLifecycleActions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions">DesktopsDesktopPoolSessionLifecycleActions</a>

---


### DesktopsDesktopPoolShapeConfigOutputReference <a name="DesktopsDesktopPoolShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DesktopsDesktopPoolShapeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.resetBaselineOcpuUtilization">ResetBaselineOcpuUtilization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.resetMemoryInGbs">ResetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.resetOcpus">ResetOcpus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBaselineOcpuUtilization` <a name="ResetBaselineOcpuUtilization" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.resetBaselineOcpuUtilization"></a>

```csharp
private void ResetBaselineOcpuUtilization()
```

##### `ResetMemoryInGbs` <a name="ResetMemoryInGbs" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.resetMemoryInGbs"></a>

```csharp
private void ResetMemoryInGbs()
```

##### `ResetOcpus` <a name="ResetOcpus" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.resetOcpus"></a>

```csharp
private void ResetOcpus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.baselineOcpuUtilizationInput">BaselineOcpuUtilizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.memoryInGbsInput">MemoryInGbsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.ocpusInput">OcpusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.baselineOcpuUtilization">BaselineOcpuUtilization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig">DesktopsDesktopPoolShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaselineOcpuUtilizationInput`<sup>Optional</sup> <a name="BaselineOcpuUtilizationInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.baselineOcpuUtilizationInput"></a>

```csharp
public string BaselineOcpuUtilizationInput { get; }
```

- *Type:* string

---

##### `MemoryInGbsInput`<sup>Optional</sup> <a name="MemoryInGbsInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.memoryInGbsInput"></a>

```csharp
public string MemoryInGbsInput { get; }
```

- *Type:* string

---

##### `OcpusInput`<sup>Optional</sup> <a name="OcpusInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.ocpusInput"></a>

```csharp
public string OcpusInput { get; }
```

- *Type:* string

---

##### `BaselineOcpuUtilization`<sup>Required</sup> <a name="BaselineOcpuUtilization" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.baselineOcpuUtilization"></a>

```csharp
public string BaselineOcpuUtilization { get; }
```

- *Type:* string

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.memoryInGbs"></a>

```csharp
public string MemoryInGbs { get; }
```

- *Type:* string

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.ocpus"></a>

```csharp
public string Ocpus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.internalValue"></a>

```csharp
public DesktopsDesktopPoolShapeConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig">DesktopsDesktopPoolShapeConfig</a>

---


### DesktopsDesktopPoolTimeoutsOutputReference <a name="DesktopsDesktopPoolTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DesktopsDesktopPoolTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



