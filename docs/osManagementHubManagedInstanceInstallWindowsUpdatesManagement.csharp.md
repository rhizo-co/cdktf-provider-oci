# `osManagementHubManagedInstanceInstallWindowsUpdatesManagement` Submodule <a name="`osManagementHubManagedInstanceInstallWindowsUpdatesManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubManagedInstanceInstallWindowsUpdatesManagement <a name="OsManagementHubManagedInstanceInstallWindowsUpdatesManagement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management oci_os_management_hub_managed_instance_install_windows_updates_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceInstallWindowsUpdatesManagement(Construct Scope, string Id, OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.putWorkRequestDetails">PutWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.resetWindowsUpdateName">ResetWindowsUpdateName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.resetWindowsUpdateTypes">ResetWindowsUpdateTypes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.resetWorkRequestDetails">ResetWorkRequestDetails</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.putTimeouts"></a>

```csharp
private void PutTimeouts(OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts</a>

---

##### `PutWorkRequestDetails` <a name="PutWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.putWorkRequestDetails"></a>

```csharp
private void PutWorkRequestDetails(OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.putWorkRequestDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWindowsUpdateName` <a name="ResetWindowsUpdateName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.resetWindowsUpdateName"></a>

```csharp
private void ResetWindowsUpdateName()
```

##### `ResetWindowsUpdateTypes` <a name="ResetWindowsUpdateTypes" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.resetWindowsUpdateTypes"></a>

```csharp
private void ResetWindowsUpdateTypes()
```

##### `ResetWorkRequestDetails` <a name="ResetWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.resetWorkRequestDetails"></a>

```csharp
private void ResetWorkRequestDetails()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OsManagementHubManagedInstanceInstallWindowsUpdatesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OsManagementHubManagedInstanceInstallWindowsUpdatesManagement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OsManagementHubManagedInstanceInstallWindowsUpdatesManagement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OsManagementHubManagedInstanceInstallWindowsUpdatesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubManagedInstanceInstallWindowsUpdatesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.workRequestDetails">WorkRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.managedInstanceIdInput">ManagedInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.windowsUpdateNameInput">WindowsUpdateNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.windowsUpdateTypesInput">WindowsUpdateTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.workRequestDetailsInput">WorkRequestDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.managedInstanceId">ManagedInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.windowsUpdateName">WindowsUpdateName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.windowsUpdateTypes">WindowsUpdateTypes</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.timeouts"></a>

```csharp
public OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference</a>

---

##### `WorkRequestDetails`<sup>Required</sup> <a name="WorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.workRequestDetails"></a>

```csharp
public OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference WorkRequestDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagedInstanceIdInput`<sup>Optional</sup> <a name="ManagedInstanceIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.managedInstanceIdInput"></a>

```csharp
public string ManagedInstanceIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WindowsUpdateNameInput`<sup>Optional</sup> <a name="WindowsUpdateNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.windowsUpdateNameInput"></a>

```csharp
public string[] WindowsUpdateNameInput { get; }
```

- *Type:* string[]

---

##### `WindowsUpdateTypesInput`<sup>Optional</sup> <a name="WindowsUpdateTypesInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.windowsUpdateTypesInput"></a>

```csharp
public string[] WindowsUpdateTypesInput { get; }
```

- *Type:* string[]

---

##### `WorkRequestDetailsInput`<sup>Optional</sup> <a name="WorkRequestDetailsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.workRequestDetailsInput"></a>

```csharp
public OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails WorkRequestDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.managedInstanceId"></a>

```csharp
public string ManagedInstanceId { get; }
```

- *Type:* string

---

##### `WindowsUpdateName`<sup>Required</sup> <a name="WindowsUpdateName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.windowsUpdateName"></a>

```csharp
public string[] WindowsUpdateName { get; }
```

- *Type:* string[]

---

##### `WindowsUpdateTypes`<sup>Required</sup> <a name="WindowsUpdateTypes" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.windowsUpdateTypes"></a>

```csharp
public string[] WindowsUpdateTypes { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig <a name="OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagedInstanceId,
    string Id = null,
    OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts Timeouts = null,
    string[] WindowsUpdateName = null,
    string[] WindowsUpdateTypes = null,
    OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails WorkRequestDetails = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.managedInstanceId">ManagedInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#managed_instance_id OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#id OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.windowsUpdateName">WindowsUpdateName</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#windows_update_name OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#windows_update_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.windowsUpdateTypes">WindowsUpdateTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#windows_update_types OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#windows_update_types}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.workRequestDetails">WorkRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails</a></code> | work_request_details block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.managedInstanceId"></a>

```csharp
public string ManagedInstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#managed_instance_id OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#managed_instance_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#id OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.timeouts"></a>

```csharp
public OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#timeouts OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#timeouts}

---

##### `WindowsUpdateName`<sup>Optional</sup> <a name="WindowsUpdateName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.windowsUpdateName"></a>

```csharp
public string[] WindowsUpdateName { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#windows_update_name OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#windows_update_name}.

---

##### `WindowsUpdateTypes`<sup>Optional</sup> <a name="WindowsUpdateTypes" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.windowsUpdateTypes"></a>

```csharp
public string[] WindowsUpdateTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#windows_update_types OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#windows_update_types}.

---

##### `WorkRequestDetails`<sup>Optional</sup> <a name="WorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.workRequestDetails"></a>

```csharp
public OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails WorkRequestDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails</a>

work_request_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#work_request_details OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#work_request_details}

---

### OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts <a name="OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#create OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#delete OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#update OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#create OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#delete OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#update OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#update}.

---

### OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails <a name="OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails {
    string Description = null,
    string DisplayName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#description OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#display_name OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#display_name}. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#description OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#display_name OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#display_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference <a name="OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference <a name="OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.internalValue"></a>

```csharp
public OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails</a>

---



