# `osManagementHubManagedInstanceGroupUpdateAllPackagesManagement` Submodule <a name="`osManagementHubManagedInstanceGroupUpdateAllPackagesManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement <a name="OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management oci_os_management_hub_managed_instance_group_update_all_packages_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement(Construct Scope, string Id, OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig">OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig">OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.putWorkRequestDetails">PutWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.resetUpdateTypes">ResetUpdateTypes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.resetWorkRequestDetails">ResetWorkRequestDetails</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.putTimeouts"></a>

```csharp
private void PutTimeouts(OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts">OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts</a>

---

##### `PutWorkRequestDetails` <a name="PutWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.putWorkRequestDetails"></a>

```csharp
private void PutWorkRequestDetails(OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.putWorkRequestDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUpdateTypes` <a name="ResetUpdateTypes" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.resetUpdateTypes"></a>

```csharp
private void ResetUpdateTypes()
```

##### `ResetWorkRequestDetails` <a name="ResetWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.resetWorkRequestDetails"></a>

```csharp
private void ResetWorkRequestDetails()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.workRequestDetails">WorkRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.managedInstanceGroupIdInput">ManagedInstanceGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.updateTypesInput">UpdateTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.workRequestDetailsInput">WorkRequestDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.managedInstanceGroupId">ManagedInstanceGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.updateTypes">UpdateTypes</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.timeouts"></a>

```csharp
public OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference</a>

---

##### `WorkRequestDetails`<sup>Required</sup> <a name="WorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.workRequestDetails"></a>

```csharp
public OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference WorkRequestDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagedInstanceGroupIdInput`<sup>Optional</sup> <a name="ManagedInstanceGroupIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.managedInstanceGroupIdInput"></a>

```csharp
public string ManagedInstanceGroupIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UpdateTypesInput`<sup>Optional</sup> <a name="UpdateTypesInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.updateTypesInput"></a>

```csharp
public string[] UpdateTypesInput { get; }
```

- *Type:* string[]

---

##### `WorkRequestDetailsInput`<sup>Optional</sup> <a name="WorkRequestDetailsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.workRequestDetailsInput"></a>

```csharp
public OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails WorkRequestDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedInstanceGroupId`<sup>Required</sup> <a name="ManagedInstanceGroupId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.managedInstanceGroupId"></a>

```csharp
public string ManagedInstanceGroupId { get; }
```

- *Type:* string

---

##### `UpdateTypes`<sup>Required</sup> <a name="UpdateTypes" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.updateTypes"></a>

```csharp
public string[] UpdateTypes { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig <a name="OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagedInstanceGroupId,
    string Id = null,
    OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts Timeouts = null,
    string[] UpdateTypes = null,
    OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails WorkRequestDetails = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.managedInstanceGroupId">ManagedInstanceGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management#managed_instance_group_id OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management#id OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts">OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.updateTypes">UpdateTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management#update_types OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement#update_types}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.workRequestDetails">WorkRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails</a></code> | work_request_details block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagedInstanceGroupId`<sup>Required</sup> <a name="ManagedInstanceGroupId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.managedInstanceGroupId"></a>

```csharp
public string ManagedInstanceGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management#managed_instance_group_id OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement#managed_instance_group_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management#id OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.timeouts"></a>

```csharp
public OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts">OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management#timeouts OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement#timeouts}

---

##### `UpdateTypes`<sup>Optional</sup> <a name="UpdateTypes" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.updateTypes"></a>

```csharp
public string[] UpdateTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management#update_types OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement#update_types}.

---

##### `WorkRequestDetails`<sup>Optional</sup> <a name="WorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.workRequestDetails"></a>

```csharp
public OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails WorkRequestDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails</a>

work_request_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management#work_request_details OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement#work_request_details}

---

### OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts <a name="OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management#create OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management#delete OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management#update OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management#create OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management#delete OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management#update OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement#update}.

---

### OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails <a name="OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails {
    string Description = null,
    string DisplayName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management#description OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management#display_name OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement#display_name}. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management#description OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management#display_name OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement#display_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference <a name="OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference <a name="OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.property.internalValue"></a>

```csharp
public OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails</a>

---



