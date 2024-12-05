# `osManagementHubLifecycleStageAttachManagedInstancesManagement` Submodule <a name="`osManagementHubLifecycleStageAttachManagedInstancesManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubLifecycleStageAttachManagedInstancesManagement <a name="OsManagementHubLifecycleStageAttachManagedInstancesManagement" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management oci_os_management_hub_lifecycle_stage_attach_managed_instances_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubLifecycleStageAttachManagedInstancesManagement(Construct Scope, string Id, OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig">OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig">OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.putManagedInstanceDetails">PutManagedInstanceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.resetManagedInstanceDetails">ResetManagedInstanceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutManagedInstanceDetails` <a name="PutManagedInstanceDetails" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.putManagedInstanceDetails"></a>

```csharp
private void PutManagedInstanceDetails(OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.putManagedInstanceDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails">OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.putTimeouts"></a>

```csharp
private void PutTimeouts(OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts">OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetManagedInstanceDetails` <a name="ResetManagedInstanceDetails" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.resetManagedInstanceDetails"></a>

```csharp
private void ResetManagedInstanceDetails()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OsManagementHubLifecycleStageAttachManagedInstancesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubLifecycleStageAttachManagedInstancesManagement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubLifecycleStageAttachManagedInstancesManagement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubLifecycleStageAttachManagedInstancesManagement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubLifecycleStageAttachManagedInstancesManagement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OsManagementHubLifecycleStageAttachManagedInstancesManagement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OsManagementHubLifecycleStageAttachManagedInstancesManagement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OsManagementHubLifecycleStageAttachManagedInstancesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubLifecycleStageAttachManagedInstancesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.managedInstanceDetails">ManagedInstanceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference">OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference">OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.lifecycleStageIdInput">LifecycleStageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.managedInstanceDetailsInput">ManagedInstanceDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails">OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.lifecycleStageId">LifecycleStageId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ManagedInstanceDetails`<sup>Required</sup> <a name="ManagedInstanceDetails" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.managedInstanceDetails"></a>

```csharp
public OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference ManagedInstanceDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference">OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.timeouts"></a>

```csharp
public OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference">OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LifecycleStageIdInput`<sup>Optional</sup> <a name="LifecycleStageIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.lifecycleStageIdInput"></a>

```csharp
public string LifecycleStageIdInput { get; }
```

- *Type:* string

---

##### `ManagedInstanceDetailsInput`<sup>Optional</sup> <a name="ManagedInstanceDetailsInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.managedInstanceDetailsInput"></a>

```csharp
public OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails ManagedInstanceDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails">OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleStageId`<sup>Required</sup> <a name="LifecycleStageId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.lifecycleStageId"></a>

```csharp
public string LifecycleStageId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig <a name="OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string LifecycleStageId,
    string Id = null,
    OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails ManagedInstanceDetails = null,
    OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.lifecycleStageId">LifecycleStageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#lifecycle_stage_id OsManagementHubLifecycleStageAttachManagedInstancesManagement#lifecycle_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#id OsManagementHubLifecycleStageAttachManagedInstancesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.managedInstanceDetails">ManagedInstanceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails">OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails</a></code> | managed_instance_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts">OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LifecycleStageId`<sup>Required</sup> <a name="LifecycleStageId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.lifecycleStageId"></a>

```csharp
public string LifecycleStageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#lifecycle_stage_id OsManagementHubLifecycleStageAttachManagedInstancesManagement#lifecycle_stage_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#id OsManagementHubLifecycleStageAttachManagedInstancesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ManagedInstanceDetails`<sup>Optional</sup> <a name="ManagedInstanceDetails" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.managedInstanceDetails"></a>

```csharp
public OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails ManagedInstanceDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails">OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails</a>

managed_instance_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#managed_instance_details OsManagementHubLifecycleStageAttachManagedInstancesManagement#managed_instance_details}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.timeouts"></a>

```csharp
public OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts">OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#timeouts OsManagementHubLifecycleStageAttachManagedInstancesManagement#timeouts}

---

### OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails <a name="OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails {
    string[] ManagedInstances,
    OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails WorkRequestDetails = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails.property.managedInstances">ManagedInstances</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#managed_instances OsManagementHubLifecycleStageAttachManagedInstancesManagement#managed_instances}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails.property.workRequestDetails">WorkRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails">OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails</a></code> | work_request_details block. |

---

##### `ManagedInstances`<sup>Required</sup> <a name="ManagedInstances" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails.property.managedInstances"></a>

```csharp
public string[] ManagedInstances { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#managed_instances OsManagementHubLifecycleStageAttachManagedInstancesManagement#managed_instances}.

---

##### `WorkRequestDetails`<sup>Optional</sup> <a name="WorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails.property.workRequestDetails"></a>

```csharp
public OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails WorkRequestDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails">OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails</a>

work_request_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#work_request_details OsManagementHubLifecycleStageAttachManagedInstancesManagement#work_request_details}

---

### OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails <a name="OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails {
    string Description = null,
    string DisplayName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#description OsManagementHubLifecycleStageAttachManagedInstancesManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#display_name OsManagementHubLifecycleStageAttachManagedInstancesManagement#display_name}. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#description OsManagementHubLifecycleStageAttachManagedInstancesManagement#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#display_name OsManagementHubLifecycleStageAttachManagedInstancesManagement#display_name}.

---

### OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts <a name="OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#create OsManagementHubLifecycleStageAttachManagedInstancesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#delete OsManagementHubLifecycleStageAttachManagedInstancesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#update OsManagementHubLifecycleStageAttachManagedInstancesManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#create OsManagementHubLifecycleStageAttachManagedInstancesManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#delete OsManagementHubLifecycleStageAttachManagedInstancesManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#update OsManagementHubLifecycleStageAttachManagedInstancesManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference <a name="OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.putWorkRequestDetails">PutWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.resetWorkRequestDetails">ResetWorkRequestDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWorkRequestDetails` <a name="PutWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.putWorkRequestDetails"></a>

```csharp
private void PutWorkRequestDetails(OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.putWorkRequestDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails">OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails</a>

---

##### `ResetWorkRequestDetails` <a name="ResetWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.resetWorkRequestDetails"></a>

```csharp
private void ResetWorkRequestDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.property.workRequestDetails">WorkRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference">OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.property.managedInstancesInput">ManagedInstancesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.property.workRequestDetailsInput">WorkRequestDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails">OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.property.managedInstances">ManagedInstances</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails">OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkRequestDetails`<sup>Required</sup> <a name="WorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.property.workRequestDetails"></a>

```csharp
public OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference WorkRequestDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference">OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference</a>

---

##### `ManagedInstancesInput`<sup>Optional</sup> <a name="ManagedInstancesInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.property.managedInstancesInput"></a>

```csharp
public string[] ManagedInstancesInput { get; }
```

- *Type:* string[]

---

##### `WorkRequestDetailsInput`<sup>Optional</sup> <a name="WorkRequestDetailsInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.property.workRequestDetailsInput"></a>

```csharp
public OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails WorkRequestDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails">OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails</a>

---

##### `ManagedInstances`<sup>Required</sup> <a name="ManagedInstances" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.property.managedInstances"></a>

```csharp
public string[] ManagedInstances { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.property.internalValue"></a>

```csharp
public OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails">OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails</a>

---


### OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference <a name="OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails">OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.property.internalValue"></a>

```csharp
public OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails">OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails</a>

---


### OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference <a name="OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



