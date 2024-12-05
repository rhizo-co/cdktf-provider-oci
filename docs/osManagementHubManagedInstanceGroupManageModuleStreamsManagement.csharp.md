# `osManagementHubManagedInstanceGroupManageModuleStreamsManagement` Submodule <a name="`osManagementHubManagedInstanceGroupManageModuleStreamsManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubManagedInstanceGroupManageModuleStreamsManagement <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management oci_os_management_hub_managed_instance_group_manage_module_streams_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupManageModuleStreamsManagement(Construct Scope, string Id, OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putDisable">PutDisable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putEnable">PutEnable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putInstall">PutInstall</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putRemove">PutRemove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putWorkRequestDetails">PutWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetDisable">ResetDisable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetEnable">ResetEnable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetInstall">ResetInstall</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetIsDryRun">ResetIsDryRun</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetRemove">ResetRemove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetWorkRequestDetails">ResetWorkRequestDetails</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDisable` <a name="PutDisable" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putDisable"></a>

```csharp
private void PutDisable(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putDisable.parameter.value"></a>

- *Type:* object

---

##### `PutEnable` <a name="PutEnable" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putEnable"></a>

```csharp
private void PutEnable(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putEnable.parameter.value"></a>

- *Type:* object

---

##### `PutInstall` <a name="PutInstall" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putInstall"></a>

```csharp
private void PutInstall(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putInstall.parameter.value"></a>

- *Type:* object

---

##### `PutRemove` <a name="PutRemove" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putRemove"></a>

```csharp
private void PutRemove(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putRemove.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putTimeouts"></a>

```csharp
private void PutTimeouts(OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts</a>

---

##### `PutWorkRequestDetails` <a name="PutWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putWorkRequestDetails"></a>

```csharp
private void PutWorkRequestDetails(OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putWorkRequestDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails</a>

---

##### `ResetDisable` <a name="ResetDisable" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetDisable"></a>

```csharp
private void ResetDisable()
```

##### `ResetEnable` <a name="ResetEnable" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetEnable"></a>

```csharp
private void ResetEnable()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstall` <a name="ResetInstall" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetInstall"></a>

```csharp
private void ResetInstall()
```

##### `ResetIsDryRun` <a name="ResetIsDryRun" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetIsDryRun"></a>

```csharp
private void ResetIsDryRun()
```

##### `ResetRemove` <a name="ResetRemove" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetRemove"></a>

```csharp
private void ResetRemove()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWorkRequestDetails` <a name="ResetWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetWorkRequestDetails"></a>

```csharp
private void ResetWorkRequestDetails()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupManageModuleStreamsManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupManageModuleStreamsManagement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OsManagementHubManagedInstanceGroupManageModuleStreamsManagement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OsManagementHubManagedInstanceGroupManageModuleStreamsManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubManagedInstanceGroupManageModuleStreamsManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.disable">Disable</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.enable">Enable</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.install">Install</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.remove">Remove</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.workRequestDetails">WorkRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.disableInput">DisableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.enableInput">EnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.installInput">InstallInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.isDryRunInput">IsDryRunInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.managedInstanceGroupIdInput">ManagedInstanceGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.removeInput">RemoveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.workRequestDetailsInput">WorkRequestDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.isDryRun">IsDryRun</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.managedInstanceGroupId">ManagedInstanceGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Disable`<sup>Required</sup> <a name="Disable" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.disable"></a>

```csharp
public OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList Disable { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList</a>

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.enable"></a>

```csharp
public OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList Enable { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList</a>

---

##### `Install`<sup>Required</sup> <a name="Install" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.install"></a>

```csharp
public OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList Install { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList</a>

---

##### `Remove`<sup>Required</sup> <a name="Remove" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.remove"></a>

```csharp
public OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList Remove { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.timeouts"></a>

```csharp
public OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference</a>

---

##### `WorkRequestDetails`<sup>Required</sup> <a name="WorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.workRequestDetails"></a>

```csharp
public OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference WorkRequestDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference</a>

---

##### `DisableInput`<sup>Optional</sup> <a name="DisableInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.disableInput"></a>

```csharp
public object DisableInput { get; }
```

- *Type:* object

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.enableInput"></a>

```csharp
public object EnableInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstallInput`<sup>Optional</sup> <a name="InstallInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.installInput"></a>

```csharp
public object InstallInput { get; }
```

- *Type:* object

---

##### `IsDryRunInput`<sup>Optional</sup> <a name="IsDryRunInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.isDryRunInput"></a>

```csharp
public object IsDryRunInput { get; }
```

- *Type:* object

---

##### `ManagedInstanceGroupIdInput`<sup>Optional</sup> <a name="ManagedInstanceGroupIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.managedInstanceGroupIdInput"></a>

```csharp
public string ManagedInstanceGroupIdInput { get; }
```

- *Type:* string

---

##### `RemoveInput`<sup>Optional</sup> <a name="RemoveInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.removeInput"></a>

```csharp
public object RemoveInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WorkRequestDetailsInput`<sup>Optional</sup> <a name="WorkRequestDetailsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.workRequestDetailsInput"></a>

```csharp
public OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails WorkRequestDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsDryRun`<sup>Required</sup> <a name="IsDryRun" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.isDryRun"></a>

```csharp
public object IsDryRun { get; }
```

- *Type:* object

---

##### `ManagedInstanceGroupId`<sup>Required</sup> <a name="ManagedInstanceGroupId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.managedInstanceGroupId"></a>

```csharp
public string ManagedInstanceGroupId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagedInstanceGroupId,
    object Disable = null,
    object Enable = null,
    string Id = null,
    object Install = null,
    object IsDryRun = null,
    object Remove = null,
    OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts Timeouts = null,
    OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails WorkRequestDetails = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.managedInstanceGroupId">ManagedInstanceGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#managed_instance_group_id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.disable">Disable</a></code> | <code>object</code> | disable block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.enable">Enable</a></code> | <code>object</code> | enable block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.install">Install</a></code> | <code>object</code> | install block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.isDryRun">IsDryRun</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#is_dry_run OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#is_dry_run}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.remove">Remove</a></code> | <code>object</code> | remove block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.workRequestDetails">WorkRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails</a></code> | work_request_details block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagedInstanceGroupId`<sup>Required</sup> <a name="ManagedInstanceGroupId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.managedInstanceGroupId"></a>

```csharp
public string ManagedInstanceGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#managed_instance_group_id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#managed_instance_group_id}.

---

##### `Disable`<sup>Optional</sup> <a name="Disable" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.disable"></a>

```csharp
public object Disable { get; set; }
```

- *Type:* object

disable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#disable OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#disable}

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.enable"></a>

```csharp
public object Enable { get; set; }
```

- *Type:* object

enable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#enable OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#enable}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Install`<sup>Optional</sup> <a name="Install" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.install"></a>

```csharp
public object Install { get; set; }
```

- *Type:* object

install block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#install OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#install}

---

##### `IsDryRun`<sup>Optional</sup> <a name="IsDryRun" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.isDryRun"></a>

```csharp
public object IsDryRun { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#is_dry_run OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#is_dry_run}.

---

##### `Remove`<sup>Optional</sup> <a name="Remove" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.remove"></a>

```csharp
public object Remove { get; set; }
```

- *Type:* object

remove block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#remove OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#remove}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.timeouts"></a>

```csharp
public OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#timeouts OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#timeouts}

---

##### `WorkRequestDetails`<sup>Optional</sup> <a name="WorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.workRequestDetails"></a>

```csharp
public OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails WorkRequestDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails</a>

work_request_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#work_request_details OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#work_request_details}

---

### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable {
    string ModuleName,
    string StreamName,
    string SoftwareSourceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable.property.moduleName">ModuleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#module_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable.property.streamName">StreamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#stream_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#stream_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable.property.softwareSourceId">SoftwareSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#software_source_id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#software_source_id}. |

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable.property.moduleName"></a>

```csharp
public string ModuleName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#module_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#module_name}.

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable.property.streamName"></a>

```csharp
public string StreamName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#stream_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#stream_name}.

---

##### `SoftwareSourceId`<sup>Optional</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable.property.softwareSourceId"></a>

```csharp
public string SoftwareSourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#software_source_id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#software_source_id}.

---

### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable {
    string ModuleName,
    string StreamName,
    string SoftwareSourceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable.property.moduleName">ModuleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#module_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable.property.streamName">StreamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#stream_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#stream_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable.property.softwareSourceId">SoftwareSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#software_source_id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#software_source_id}. |

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable.property.moduleName"></a>

```csharp
public string ModuleName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#module_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#module_name}.

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable.property.streamName"></a>

```csharp
public string StreamName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#stream_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#stream_name}.

---

##### `SoftwareSourceId`<sup>Optional</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable.property.softwareSourceId"></a>

```csharp
public string SoftwareSourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#software_source_id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#software_source_id}.

---

### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall {
    string ModuleName,
    string ProfileName,
    string StreamName,
    string SoftwareSourceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall.property.moduleName">ModuleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#module_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall.property.profileName">ProfileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#profile_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#profile_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall.property.streamName">StreamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#stream_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#stream_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall.property.softwareSourceId">SoftwareSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#software_source_id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#software_source_id}. |

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall.property.moduleName"></a>

```csharp
public string ModuleName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#module_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#module_name}.

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall.property.profileName"></a>

```csharp
public string ProfileName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#profile_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#profile_name}.

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall.property.streamName"></a>

```csharp
public string StreamName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#stream_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#stream_name}.

---

##### `SoftwareSourceId`<sup>Optional</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall.property.softwareSourceId"></a>

```csharp
public string SoftwareSourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#software_source_id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#software_source_id}.

---

### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove {
    string ModuleName,
    string ProfileName,
    string StreamName,
    string SoftwareSourceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove.property.moduleName">ModuleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#module_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove.property.profileName">ProfileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#profile_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#profile_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove.property.streamName">StreamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#stream_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#stream_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove.property.softwareSourceId">SoftwareSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#software_source_id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#software_source_id}. |

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove.property.moduleName"></a>

```csharp
public string ModuleName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#module_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#module_name}.

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove.property.profileName"></a>

```csharp
public string ProfileName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#profile_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#profile_name}.

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove.property.streamName"></a>

```csharp
public string StreamName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#stream_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#stream_name}.

---

##### `SoftwareSourceId`<sup>Optional</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove.property.softwareSourceId"></a>

```csharp
public string SoftwareSourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#software_source_id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#software_source_id}.

---

### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#create OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#delete OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#update OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#create OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#delete OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#update OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#update}.

---

### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails {
    string Description = null,
    string DisplayName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#description OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#display_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#display_name}. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#description OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#display_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#display_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.get"></a>

```csharp
private OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.resetSoftwareSourceId">ResetSoftwareSourceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSoftwareSourceId` <a name="ResetSoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.resetSoftwareSourceId"></a>

```csharp
private void ResetSoftwareSourceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.moduleNameInput">ModuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.softwareSourceIdInput">SoftwareSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.streamNameInput">StreamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.moduleName">ModuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.softwareSourceId">SoftwareSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.streamName">StreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModuleNameInput`<sup>Optional</sup> <a name="ModuleNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.moduleNameInput"></a>

```csharp
public string ModuleNameInput { get; }
```

- *Type:* string

---

##### `SoftwareSourceIdInput`<sup>Optional</sup> <a name="SoftwareSourceIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.softwareSourceIdInput"></a>

```csharp
public string SoftwareSourceIdInput { get; }
```

- *Type:* string

---

##### `StreamNameInput`<sup>Optional</sup> <a name="StreamNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.streamNameInput"></a>

```csharp
public string StreamNameInput { get; }
```

- *Type:* string

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.moduleName"></a>

```csharp
public string ModuleName { get; }
```

- *Type:* string

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.softwareSourceId"></a>

```csharp
public string SoftwareSourceId { get; }
```

- *Type:* string

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.streamName"></a>

```csharp
public string StreamName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.get"></a>

```csharp
private OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.resetSoftwareSourceId">ResetSoftwareSourceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSoftwareSourceId` <a name="ResetSoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.resetSoftwareSourceId"></a>

```csharp
private void ResetSoftwareSourceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.moduleNameInput">ModuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.softwareSourceIdInput">SoftwareSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.streamNameInput">StreamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.moduleName">ModuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.softwareSourceId">SoftwareSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.streamName">StreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModuleNameInput`<sup>Optional</sup> <a name="ModuleNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.moduleNameInput"></a>

```csharp
public string ModuleNameInput { get; }
```

- *Type:* string

---

##### `SoftwareSourceIdInput`<sup>Optional</sup> <a name="SoftwareSourceIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.softwareSourceIdInput"></a>

```csharp
public string SoftwareSourceIdInput { get; }
```

- *Type:* string

---

##### `StreamNameInput`<sup>Optional</sup> <a name="StreamNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.streamNameInput"></a>

```csharp
public string StreamNameInput { get; }
```

- *Type:* string

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.moduleName"></a>

```csharp
public string ModuleName { get; }
```

- *Type:* string

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.softwareSourceId"></a>

```csharp
public string SoftwareSourceId { get; }
```

- *Type:* string

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.streamName"></a>

```csharp
public string StreamName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.get"></a>

```csharp
private OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.resetSoftwareSourceId">ResetSoftwareSourceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSoftwareSourceId` <a name="ResetSoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.resetSoftwareSourceId"></a>

```csharp
private void ResetSoftwareSourceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.moduleNameInput">ModuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.profileNameInput">ProfileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.softwareSourceIdInput">SoftwareSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.streamNameInput">StreamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.moduleName">ModuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.profileName">ProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.softwareSourceId">SoftwareSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.streamName">StreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModuleNameInput`<sup>Optional</sup> <a name="ModuleNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.moduleNameInput"></a>

```csharp
public string ModuleNameInput { get; }
```

- *Type:* string

---

##### `ProfileNameInput`<sup>Optional</sup> <a name="ProfileNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.profileNameInput"></a>

```csharp
public string ProfileNameInput { get; }
```

- *Type:* string

---

##### `SoftwareSourceIdInput`<sup>Optional</sup> <a name="SoftwareSourceIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.softwareSourceIdInput"></a>

```csharp
public string SoftwareSourceIdInput { get; }
```

- *Type:* string

---

##### `StreamNameInput`<sup>Optional</sup> <a name="StreamNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.streamNameInput"></a>

```csharp
public string StreamNameInput { get; }
```

- *Type:* string

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.moduleName"></a>

```csharp
public string ModuleName { get; }
```

- *Type:* string

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.profileName"></a>

```csharp
public string ProfileName { get; }
```

- *Type:* string

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.softwareSourceId"></a>

```csharp
public string SoftwareSourceId { get; }
```

- *Type:* string

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.streamName"></a>

```csharp
public string StreamName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.get"></a>

```csharp
private OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.resetSoftwareSourceId">ResetSoftwareSourceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSoftwareSourceId` <a name="ResetSoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.resetSoftwareSourceId"></a>

```csharp
private void ResetSoftwareSourceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.moduleNameInput">ModuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.profileNameInput">ProfileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.softwareSourceIdInput">SoftwareSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.streamNameInput">StreamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.moduleName">ModuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.profileName">ProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.softwareSourceId">SoftwareSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.streamName">StreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModuleNameInput`<sup>Optional</sup> <a name="ModuleNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.moduleNameInput"></a>

```csharp
public string ModuleNameInput { get; }
```

- *Type:* string

---

##### `ProfileNameInput`<sup>Optional</sup> <a name="ProfileNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.profileNameInput"></a>

```csharp
public string ProfileNameInput { get; }
```

- *Type:* string

---

##### `SoftwareSourceIdInput`<sup>Optional</sup> <a name="SoftwareSourceIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.softwareSourceIdInput"></a>

```csharp
public string SoftwareSourceIdInput { get; }
```

- *Type:* string

---

##### `StreamNameInput`<sup>Optional</sup> <a name="StreamNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.streamNameInput"></a>

```csharp
public string StreamNameInput { get; }
```

- *Type:* string

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.moduleName"></a>

```csharp
public string ModuleName { get; }
```

- *Type:* string

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.profileName"></a>

```csharp
public string ProfileName { get; }
```

- *Type:* string

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.softwareSourceId"></a>

```csharp
public string SoftwareSourceId { get; }
```

- *Type:* string

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.streamName"></a>

```csharp
public string StreamName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.internalValue"></a>

```csharp
public OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails</a>

---



