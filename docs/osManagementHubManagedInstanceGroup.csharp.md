# `osManagementHubManagedInstanceGroup` Submodule <a name="`osManagementHubManagedInstanceGroup` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubManagedInstanceGroup <a name="OsManagementHubManagedInstanceGroup" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group oci_os_management_hub_managed_instance_group}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroup(Construct Scope, string Id, OsManagementHubManagedInstanceGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig">OsManagementHubManagedInstanceGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig">OsManagementHubManagedInstanceGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.putAutonomousSettings">PutAutonomousSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.resetAutonomousSettings">ResetAutonomousSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.resetManagedInstanceIds">ResetManagedInstanceIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.resetNotificationTopicId">ResetNotificationTopicId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.resetSoftwareSourceIds">ResetSoftwareSourceIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutonomousSettings` <a name="PutAutonomousSettings" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.putAutonomousSettings"></a>

```csharp
private void PutAutonomousSettings(OsManagementHubManagedInstanceGroupAutonomousSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.putAutonomousSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettings">OsManagementHubManagedInstanceGroupAutonomousSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(OsManagementHubManagedInstanceGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeouts">OsManagementHubManagedInstanceGroupTimeouts</a>

---

##### `ResetAutonomousSettings` <a name="ResetAutonomousSettings" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.resetAutonomousSettings"></a>

```csharp
private void ResetAutonomousSettings()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetManagedInstanceIds` <a name="ResetManagedInstanceIds" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.resetManagedInstanceIds"></a>

```csharp
private void ResetManagedInstanceIds()
```

##### `ResetNotificationTopicId` <a name="ResetNotificationTopicId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.resetNotificationTopicId"></a>

```csharp
private void ResetNotificationTopicId()
```

##### `ResetSoftwareSourceIds` <a name="ResetSoftwareSourceIds" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.resetSoftwareSourceIds"></a>

```csharp
private void ResetSoftwareSourceIds()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OsManagementHubManagedInstanceGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagedInstanceGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagedInstanceGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagedInstanceGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagedInstanceGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OsManagementHubManagedInstanceGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OsManagementHubManagedInstanceGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OsManagementHubManagedInstanceGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubManagedInstanceGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.autonomousSettings">AutonomousSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference">OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.isManagedByAutonomousLinux">IsManagedByAutonomousLinux</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.managedInstanceCount">ManagedInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.pendingJobCount">PendingJobCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.softwareSources">SoftwareSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesList">OsManagementHubManagedInstanceGroupSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.timeModified">TimeModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference">OsManagementHubManagedInstanceGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.archTypeInput">ArchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.autonomousSettingsInput">AutonomousSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettings">OsManagementHubManagedInstanceGroupAutonomousSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.managedInstanceIdsInput">ManagedInstanceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.notificationTopicIdInput">NotificationTopicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.osFamilyInput">OsFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.softwareSourceIdsInput">SoftwareSourceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.vendorNameInput">VendorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.archType">ArchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.managedInstanceIds">ManagedInstanceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.notificationTopicId">NotificationTopicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.osFamily">OsFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.softwareSourceIds">SoftwareSourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.vendorName">VendorName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AutonomousSettings`<sup>Required</sup> <a name="AutonomousSettings" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.autonomousSettings"></a>

```csharp
public OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference AutonomousSettings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference">OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference</a>

---

##### `IsManagedByAutonomousLinux`<sup>Required</sup> <a name="IsManagedByAutonomousLinux" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.isManagedByAutonomousLinux"></a>

```csharp
public IResolvable IsManagedByAutonomousLinux { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ManagedInstanceCount`<sup>Required</sup> <a name="ManagedInstanceCount" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.managedInstanceCount"></a>

```csharp
public double ManagedInstanceCount { get; }
```

- *Type:* double

---

##### `PendingJobCount`<sup>Required</sup> <a name="PendingJobCount" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.pendingJobCount"></a>

```csharp
public double PendingJobCount { get; }
```

- *Type:* double

---

##### `SoftwareSources`<sup>Required</sup> <a name="SoftwareSources" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.softwareSources"></a>

```csharp
public OsManagementHubManagedInstanceGroupSoftwareSourcesList SoftwareSources { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesList">OsManagementHubManagedInstanceGroupSoftwareSourcesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeModified`<sup>Required</sup> <a name="TimeModified" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.timeModified"></a>

```csharp
public string TimeModified { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.timeouts"></a>

```csharp
public OsManagementHubManagedInstanceGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference">OsManagementHubManagedInstanceGroupTimeoutsOutputReference</a>

---

##### `ArchTypeInput`<sup>Optional</sup> <a name="ArchTypeInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.archTypeInput"></a>

```csharp
public string ArchTypeInput { get; }
```

- *Type:* string

---

##### `AutonomousSettingsInput`<sup>Optional</sup> <a name="AutonomousSettingsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.autonomousSettingsInput"></a>

```csharp
public OsManagementHubManagedInstanceGroupAutonomousSettings AutonomousSettingsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettings">OsManagementHubManagedInstanceGroupAutonomousSettings</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ManagedInstanceIdsInput`<sup>Optional</sup> <a name="ManagedInstanceIdsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.managedInstanceIdsInput"></a>

```csharp
public string[] ManagedInstanceIdsInput { get; }
```

- *Type:* string[]

---

##### `NotificationTopicIdInput`<sup>Optional</sup> <a name="NotificationTopicIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.notificationTopicIdInput"></a>

```csharp
public string NotificationTopicIdInput { get; }
```

- *Type:* string

---

##### `OsFamilyInput`<sup>Optional</sup> <a name="OsFamilyInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.osFamilyInput"></a>

```csharp
public string OsFamilyInput { get; }
```

- *Type:* string

---

##### `SoftwareSourceIdsInput`<sup>Optional</sup> <a name="SoftwareSourceIdsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.softwareSourceIdsInput"></a>

```csharp
public string[] SoftwareSourceIdsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VendorNameInput`<sup>Optional</sup> <a name="VendorNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.vendorNameInput"></a>

```csharp
public string VendorNameInput { get; }
```

- *Type:* string

---

##### `ArchType`<sup>Required</sup> <a name="ArchType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.archType"></a>

```csharp
public string ArchType { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ManagedInstanceIds`<sup>Required</sup> <a name="ManagedInstanceIds" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.managedInstanceIds"></a>

```csharp
public string[] ManagedInstanceIds { get; }
```

- *Type:* string[]

---

##### `NotificationTopicId`<sup>Required</sup> <a name="NotificationTopicId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.notificationTopicId"></a>

```csharp
public string NotificationTopicId { get; }
```

- *Type:* string

---

##### `OsFamily`<sup>Required</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.osFamily"></a>

```csharp
public string OsFamily { get; }
```

- *Type:* string

---

##### `SoftwareSourceIds`<sup>Required</sup> <a name="SoftwareSourceIds" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.softwareSourceIds"></a>

```csharp
public string[] SoftwareSourceIds { get; }
```

- *Type:* string[]

---

##### `VendorName`<sup>Required</sup> <a name="VendorName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.vendorName"></a>

```csharp
public string VendorName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubManagedInstanceGroupAutonomousSettings <a name="OsManagementHubManagedInstanceGroupAutonomousSettings" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupAutonomousSettings {
    object IsDataCollectionAuthorized = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettings.property.isDataCollectionAuthorized">IsDataCollectionAuthorized</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group#is_data_collection_authorized OsManagementHubManagedInstanceGroup#is_data_collection_authorized}. |

---

##### `IsDataCollectionAuthorized`<sup>Optional</sup> <a name="IsDataCollectionAuthorized" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettings.property.isDataCollectionAuthorized"></a>

```csharp
public object IsDataCollectionAuthorized { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group#is_data_collection_authorized OsManagementHubManagedInstanceGroup#is_data_collection_authorized}.

---

### OsManagementHubManagedInstanceGroupConfig <a name="OsManagementHubManagedInstanceGroupConfig" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ArchType,
    string CompartmentId,
    string DisplayName,
    string OsFamily,
    string VendorName,
    OsManagementHubManagedInstanceGroupAutonomousSettings AutonomousSettings = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    string Location = null,
    string[] ManagedInstanceIds = null,
    string NotificationTopicId = null,
    string[] SoftwareSourceIds = null,
    OsManagementHubManagedInstanceGroupTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.archType">ArchType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group#arch_type OsManagementHubManagedInstanceGroup#arch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group#compartment_id OsManagementHubManagedInstanceGroup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group#display_name OsManagementHubManagedInstanceGroup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.osFamily">OsFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group#os_family OsManagementHubManagedInstanceGroup#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.vendorName">VendorName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group#vendor_name OsManagementHubManagedInstanceGroup#vendor_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.autonomousSettings">AutonomousSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettings">OsManagementHubManagedInstanceGroupAutonomousSettings</a></code> | autonomous_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group#defined_tags OsManagementHubManagedInstanceGroup#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group#description OsManagementHubManagedInstanceGroup#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group#freeform_tags OsManagementHubManagedInstanceGroup#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group#id OsManagementHubManagedInstanceGroup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group#location OsManagementHubManagedInstanceGroup#location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.managedInstanceIds">ManagedInstanceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group#managed_instance_ids OsManagementHubManagedInstanceGroup#managed_instance_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.notificationTopicId">NotificationTopicId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group#notification_topic_id OsManagementHubManagedInstanceGroup#notification_topic_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.softwareSourceIds">SoftwareSourceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group#software_source_ids OsManagementHubManagedInstanceGroup#software_source_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeouts">OsManagementHubManagedInstanceGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ArchType`<sup>Required</sup> <a name="ArchType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.archType"></a>

```csharp
public string ArchType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group#arch_type OsManagementHubManagedInstanceGroup#arch_type}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group#compartment_id OsManagementHubManagedInstanceGroup#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group#display_name OsManagementHubManagedInstanceGroup#display_name}.

---

##### `OsFamily`<sup>Required</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.osFamily"></a>

```csharp
public string OsFamily { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group#os_family OsManagementHubManagedInstanceGroup#os_family}.

---

##### `VendorName`<sup>Required</sup> <a name="VendorName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.vendorName"></a>

```csharp
public string VendorName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group#vendor_name OsManagementHubManagedInstanceGroup#vendor_name}.

---

##### `AutonomousSettings`<sup>Optional</sup> <a name="AutonomousSettings" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.autonomousSettings"></a>

```csharp
public OsManagementHubManagedInstanceGroupAutonomousSettings AutonomousSettings { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettings">OsManagementHubManagedInstanceGroupAutonomousSettings</a>

autonomous_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group#autonomous_settings OsManagementHubManagedInstanceGroup#autonomous_settings}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group#defined_tags OsManagementHubManagedInstanceGroup#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group#description OsManagementHubManagedInstanceGroup#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group#freeform_tags OsManagementHubManagedInstanceGroup#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group#id OsManagementHubManagedInstanceGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group#location OsManagementHubManagedInstanceGroup#location}.

---

##### `ManagedInstanceIds`<sup>Optional</sup> <a name="ManagedInstanceIds" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.managedInstanceIds"></a>

```csharp
public string[] ManagedInstanceIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group#managed_instance_ids OsManagementHubManagedInstanceGroup#managed_instance_ids}.

---

##### `NotificationTopicId`<sup>Optional</sup> <a name="NotificationTopicId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.notificationTopicId"></a>

```csharp
public string NotificationTopicId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group#notification_topic_id OsManagementHubManagedInstanceGroup#notification_topic_id}.

---

##### `SoftwareSourceIds`<sup>Optional</sup> <a name="SoftwareSourceIds" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.softwareSourceIds"></a>

```csharp
public string[] SoftwareSourceIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group#software_source_ids OsManagementHubManagedInstanceGroup#software_source_ids}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupConfig.property.timeouts"></a>

```csharp
public OsManagementHubManagedInstanceGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeouts">OsManagementHubManagedInstanceGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group#timeouts OsManagementHubManagedInstanceGroup#timeouts}

---

### OsManagementHubManagedInstanceGroupSoftwareSources <a name="OsManagementHubManagedInstanceGroupSoftwareSources" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupSoftwareSources {

};
```


### OsManagementHubManagedInstanceGroupTimeouts <a name="OsManagementHubManagedInstanceGroupTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group#create OsManagementHubManagedInstanceGroup#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group#delete OsManagementHubManagedInstanceGroup#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group#update OsManagementHubManagedInstanceGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group#create OsManagementHubManagedInstanceGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group#delete OsManagementHubManagedInstanceGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group#update OsManagementHubManagedInstanceGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference <a name="OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.resetIsDataCollectionAuthorized">ResetIsDataCollectionAuthorized</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsDataCollectionAuthorized` <a name="ResetIsDataCollectionAuthorized" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.resetIsDataCollectionAuthorized"></a>

```csharp
private void ResetIsDataCollectionAuthorized()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.property.scheduledJobId">ScheduledJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.property.isDataCollectionAuthorizedInput">IsDataCollectionAuthorizedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.property.isDataCollectionAuthorized">IsDataCollectionAuthorized</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettings">OsManagementHubManagedInstanceGroupAutonomousSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScheduledJobId`<sup>Required</sup> <a name="ScheduledJobId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.property.scheduledJobId"></a>

```csharp
public string ScheduledJobId { get; }
```

- *Type:* string

---

##### `IsDataCollectionAuthorizedInput`<sup>Optional</sup> <a name="IsDataCollectionAuthorizedInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.property.isDataCollectionAuthorizedInput"></a>

```csharp
public object IsDataCollectionAuthorizedInput { get; }
```

- *Type:* object

---

##### `IsDataCollectionAuthorized`<sup>Required</sup> <a name="IsDataCollectionAuthorized" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.property.isDataCollectionAuthorized"></a>

```csharp
public object IsDataCollectionAuthorized { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettingsOutputReference.property.internalValue"></a>

```csharp
public OsManagementHubManagedInstanceGroupAutonomousSettings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupAutonomousSettings">OsManagementHubManagedInstanceGroupAutonomousSettings</a>

---


### OsManagementHubManagedInstanceGroupSoftwareSourcesList <a name="OsManagementHubManagedInstanceGroupSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupSoftwareSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesList.get"></a>

```csharp
private OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference <a name="OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux">IsMandatoryForAutonomousLinux</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.property.softwareSourceType">SoftwareSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSources">OsManagementHubManagedInstanceGroupSoftwareSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsMandatoryForAutonomousLinux`<sup>Required</sup> <a name="IsMandatoryForAutonomousLinux" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux"></a>

```csharp
public IResolvable IsMandatoryForAutonomousLinux { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SoftwareSourceType`<sup>Required</sup> <a name="SoftwareSourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.property.softwareSourceType"></a>

```csharp
public string SoftwareSourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSourcesOutputReference.property.internalValue"></a>

```csharp
public OsManagementHubManagedInstanceGroupSoftwareSources InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupSoftwareSources">OsManagementHubManagedInstanceGroupSoftwareSources</a>

---


### OsManagementHubManagedInstanceGroupTimeoutsOutputReference <a name="OsManagementHubManagedInstanceGroupTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroup.OsManagementHubManagedInstanceGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



