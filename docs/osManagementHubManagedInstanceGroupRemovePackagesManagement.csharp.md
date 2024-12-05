# `osManagementHubManagedInstanceGroupRemovePackagesManagement` Submodule <a name="`osManagementHubManagedInstanceGroupRemovePackagesManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubManagedInstanceGroupRemovePackagesManagement <a name="OsManagementHubManagedInstanceGroupRemovePackagesManagement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_remove_packages_management oci_os_management_hub_managed_instance_group_remove_packages_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupRemovePackagesManagement(Construct Scope, string Id, OsManagementHubManagedInstanceGroupRemovePackagesManagementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementConfig">OsManagementHubManagedInstanceGroupRemovePackagesManagementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementConfig">OsManagementHubManagedInstanceGroupRemovePackagesManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.putWorkRequestDetails">PutWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.resetWorkRequestDetails">ResetWorkRequestDetails</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.putTimeouts"></a>

```csharp
private void PutTimeouts(OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeouts">OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeouts</a>

---

##### `PutWorkRequestDetails` <a name="PutWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.putWorkRequestDetails"></a>

```csharp
private void PutWorkRequestDetails(OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.putWorkRequestDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetails</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWorkRequestDetails` <a name="ResetWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.resetWorkRequestDetails"></a>

```csharp
private void ResetWorkRequestDetails()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupRemovePackagesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagedInstanceGroupRemovePackagesManagement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagedInstanceGroupRemovePackagesManagement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagedInstanceGroupRemovePackagesManagement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagedInstanceGroupRemovePackagesManagement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupRemovePackagesManagement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OsManagementHubManagedInstanceGroupRemovePackagesManagement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OsManagementHubManagedInstanceGroupRemovePackagesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_remove_packages_management#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubManagedInstanceGroupRemovePackagesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.workRequestDetails">WorkRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.managedInstanceGroupIdInput">ManagedInstanceGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.packageNamesInput">PackageNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.workRequestDetailsInput">WorkRequestDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.managedInstanceGroupId">ManagedInstanceGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.packageNames">PackageNames</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.timeouts"></a>

```csharp
public OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference</a>

---

##### `WorkRequestDetails`<sup>Required</sup> <a name="WorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.workRequestDetails"></a>

```csharp
public OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference WorkRequestDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagedInstanceGroupIdInput`<sup>Optional</sup> <a name="ManagedInstanceGroupIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.managedInstanceGroupIdInput"></a>

```csharp
public string ManagedInstanceGroupIdInput { get; }
```

- *Type:* string

---

##### `PackageNamesInput`<sup>Optional</sup> <a name="PackageNamesInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.packageNamesInput"></a>

```csharp
public string[] PackageNamesInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WorkRequestDetailsInput`<sup>Optional</sup> <a name="WorkRequestDetailsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.workRequestDetailsInput"></a>

```csharp
public OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetails WorkRequestDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetails</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedInstanceGroupId`<sup>Required</sup> <a name="ManagedInstanceGroupId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.managedInstanceGroupId"></a>

```csharp
public string ManagedInstanceGroupId { get; }
```

- *Type:* string

---

##### `PackageNames`<sup>Required</sup> <a name="PackageNames" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.packageNames"></a>

```csharp
public string[] PackageNames { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubManagedInstanceGroupRemovePackagesManagementConfig <a name="OsManagementHubManagedInstanceGroupRemovePackagesManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupRemovePackagesManagementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagedInstanceGroupId,
    string[] PackageNames,
    string Id = null,
    OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeouts Timeouts = null,
    OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetails WorkRequestDetails = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementConfig.property.managedInstanceGroupId">ManagedInstanceGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_remove_packages_management#managed_instance_group_id OsManagementHubManagedInstanceGroupRemovePackagesManagement#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementConfig.property.packageNames">PackageNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_remove_packages_management#package_names OsManagementHubManagedInstanceGroupRemovePackagesManagement#package_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_remove_packages_management#id OsManagementHubManagedInstanceGroupRemovePackagesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeouts">OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementConfig.property.workRequestDetails">WorkRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetails</a></code> | work_request_details block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagedInstanceGroupId`<sup>Required</sup> <a name="ManagedInstanceGroupId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementConfig.property.managedInstanceGroupId"></a>

```csharp
public string ManagedInstanceGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_remove_packages_management#managed_instance_group_id OsManagementHubManagedInstanceGroupRemovePackagesManagement#managed_instance_group_id}.

---

##### `PackageNames`<sup>Required</sup> <a name="PackageNames" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementConfig.property.packageNames"></a>

```csharp
public string[] PackageNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_remove_packages_management#package_names OsManagementHubManagedInstanceGroupRemovePackagesManagement#package_names}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_remove_packages_management#id OsManagementHubManagedInstanceGroupRemovePackagesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementConfig.property.timeouts"></a>

```csharp
public OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeouts">OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_remove_packages_management#timeouts OsManagementHubManagedInstanceGroupRemovePackagesManagement#timeouts}

---

##### `WorkRequestDetails`<sup>Optional</sup> <a name="WorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementConfig.property.workRequestDetails"></a>

```csharp
public OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetails WorkRequestDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetails</a>

work_request_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_remove_packages_management#work_request_details OsManagementHubManagedInstanceGroupRemovePackagesManagement#work_request_details}

---

### OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeouts <a name="OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_remove_packages_management#create OsManagementHubManagedInstanceGroupRemovePackagesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_remove_packages_management#delete OsManagementHubManagedInstanceGroupRemovePackagesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_remove_packages_management#update OsManagementHubManagedInstanceGroupRemovePackagesManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_remove_packages_management#create OsManagementHubManagedInstanceGroupRemovePackagesManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_remove_packages_management#delete OsManagementHubManagedInstanceGroupRemovePackagesManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_remove_packages_management#update OsManagementHubManagedInstanceGroupRemovePackagesManagement#update}.

---

### OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetails <a name="OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetails {
    string Description = null,
    string DisplayName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetails.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_remove_packages_management#description OsManagementHubManagedInstanceGroupRemovePackagesManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetails.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_remove_packages_management#display_name OsManagementHubManagedInstanceGroupRemovePackagesManagement#display_name}. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetails.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_remove_packages_management#description OsManagementHubManagedInstanceGroupRemovePackagesManagement#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetails.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_remove_packages_management#display_name OsManagementHubManagedInstanceGroupRemovePackagesManagement#display_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference <a name="OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference <a name="OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetailsOutputReference.property.internalValue"></a>

```csharp
public OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupRemovePackagesManagement.OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupRemovePackagesManagementWorkRequestDetails</a>

---



