# `osManagementHubLifecycleStagePromoteSoftwareSourceManagement` Submodule <a name="`osManagementHubLifecycleStagePromoteSoftwareSourceManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubLifecycleStagePromoteSoftwareSourceManagement <a name="OsManagementHubLifecycleStagePromoteSoftwareSourceManagement" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management oci_os_management_hub_lifecycle_stage_promote_software_source_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubLifecycleStagePromoteSoftwareSourceManagement(Construct Scope, string Id, OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.putWorkRequestDetails">PutWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.resetSoftwareSourceId">ResetSoftwareSourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.resetWorkRequestDetails">ResetWorkRequestDetails</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.putTimeouts"></a>

```csharp
private void PutTimeouts(OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts</a>

---

##### `PutWorkRequestDetails` <a name="PutWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.putWorkRequestDetails"></a>

```csharp
private void PutWorkRequestDetails(OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.putWorkRequestDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSoftwareSourceId` <a name="ResetSoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.resetSoftwareSourceId"></a>

```csharp
private void ResetSoftwareSourceId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWorkRequestDetails` <a name="ResetWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.resetWorkRequestDetails"></a>

```csharp
private void ResetWorkRequestDetails()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OsManagementHubLifecycleStagePromoteSoftwareSourceManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OsManagementHubLifecycleStagePromoteSoftwareSourceManagement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OsManagementHubLifecycleStagePromoteSoftwareSourceManagement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OsManagementHubLifecycleStagePromoteSoftwareSourceManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubLifecycleStagePromoteSoftwareSourceManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.workRequestDetails">WorkRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.lifecycleStageIdInput">LifecycleStageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.softwareSourceIdInput">SoftwareSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.workRequestDetailsInput">WorkRequestDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.lifecycleStageId">LifecycleStageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.softwareSourceId">SoftwareSourceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.timeouts"></a>

```csharp
public OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference</a>

---

##### `WorkRequestDetails`<sup>Required</sup> <a name="WorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.workRequestDetails"></a>

```csharp
public OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference WorkRequestDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LifecycleStageIdInput`<sup>Optional</sup> <a name="LifecycleStageIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.lifecycleStageIdInput"></a>

```csharp
public string LifecycleStageIdInput { get; }
```

- *Type:* string

---

##### `SoftwareSourceIdInput`<sup>Optional</sup> <a name="SoftwareSourceIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.softwareSourceIdInput"></a>

```csharp
public string SoftwareSourceIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WorkRequestDetailsInput`<sup>Optional</sup> <a name="WorkRequestDetailsInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.workRequestDetailsInput"></a>

```csharp
public OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails WorkRequestDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleStageId`<sup>Required</sup> <a name="LifecycleStageId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.lifecycleStageId"></a>

```csharp
public string LifecycleStageId { get; }
```

- *Type:* string

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.softwareSourceId"></a>

```csharp
public string SoftwareSourceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig <a name="OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string LifecycleStageId,
    string Id = null,
    string SoftwareSourceId = null,
    OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts Timeouts = null,
    OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails WorkRequestDetails = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.lifecycleStageId">LifecycleStageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#lifecycle_stage_id OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#lifecycle_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#id OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.softwareSourceId">SoftwareSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#software_source_id OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.workRequestDetails">WorkRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails</a></code> | work_request_details block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LifecycleStageId`<sup>Required</sup> <a name="LifecycleStageId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.lifecycleStageId"></a>

```csharp
public string LifecycleStageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#lifecycle_stage_id OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#lifecycle_stage_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#id OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SoftwareSourceId`<sup>Optional</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.softwareSourceId"></a>

```csharp
public string SoftwareSourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#software_source_id OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#software_source_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.timeouts"></a>

```csharp
public OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#timeouts OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#timeouts}

---

##### `WorkRequestDetails`<sup>Optional</sup> <a name="WorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.workRequestDetails"></a>

```csharp
public OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails WorkRequestDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails</a>

work_request_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#work_request_details OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#work_request_details}

---

### OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts <a name="OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#create OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#delete OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#update OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#create OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#delete OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#update OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#update}.

---

### OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails <a name="OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails {
    string Description = null,
    string DisplayName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#description OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#display_name OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#display_name}. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#description OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#display_name OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#display_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference <a name="OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference <a name="OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.internalValue"></a>

```csharp
public OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails</a>

---



