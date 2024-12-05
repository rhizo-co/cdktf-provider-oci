# `osManagementHubManagedInstanceUpdatePackagesManagement` Submodule <a name="`osManagementHubManagedInstanceUpdatePackagesManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubManagedInstanceUpdatePackagesManagement <a name="OsManagementHubManagedInstanceUpdatePackagesManagement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management oci_os_management_hub_managed_instance_update_packages_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceUpdatePackagesManagement(Construct Scope, string Id, OsManagementHubManagedInstanceUpdatePackagesManagementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig">OsManagementHubManagedInstanceUpdatePackagesManagementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig">OsManagementHubManagedInstanceUpdatePackagesManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.putWorkRequestDetails">PutWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.resetPackageNames">ResetPackageNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.resetUpdateTypes">ResetUpdateTypes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.resetWorkRequestDetails">ResetWorkRequestDetails</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.putTimeouts"></a>

```csharp
private void PutTimeouts(OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts">OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts</a>

---

##### `PutWorkRequestDetails` <a name="PutWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.putWorkRequestDetails"></a>

```csharp
private void PutWorkRequestDetails(OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.putWorkRequestDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPackageNames` <a name="ResetPackageNames" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.resetPackageNames"></a>

```csharp
private void ResetPackageNames()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUpdateTypes` <a name="ResetUpdateTypes" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.resetUpdateTypes"></a>

```csharp
private void ResetUpdateTypes()
```

##### `ResetWorkRequestDetails` <a name="ResetWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.resetWorkRequestDetails"></a>

```csharp
private void ResetWorkRequestDetails()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OsManagementHubManagedInstanceUpdatePackagesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagedInstanceUpdatePackagesManagement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagedInstanceUpdatePackagesManagement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagedInstanceUpdatePackagesManagement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagedInstanceUpdatePackagesManagement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OsManagementHubManagedInstanceUpdatePackagesManagement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OsManagementHubManagedInstanceUpdatePackagesManagement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OsManagementHubManagedInstanceUpdatePackagesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubManagedInstanceUpdatePackagesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.workRequestDetails">WorkRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.managedInstanceIdInput">ManagedInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.packageNamesInput">PackageNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.updateTypesInput">UpdateTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.workRequestDetailsInput">WorkRequestDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.managedInstanceId">ManagedInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.packageNames">PackageNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.updateTypes">UpdateTypes</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.timeouts"></a>

```csharp
public OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference</a>

---

##### `WorkRequestDetails`<sup>Required</sup> <a name="WorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.workRequestDetails"></a>

```csharp
public OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference WorkRequestDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagedInstanceIdInput`<sup>Optional</sup> <a name="ManagedInstanceIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.managedInstanceIdInput"></a>

```csharp
public string ManagedInstanceIdInput { get; }
```

- *Type:* string

---

##### `PackageNamesInput`<sup>Optional</sup> <a name="PackageNamesInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.packageNamesInput"></a>

```csharp
public string[] PackageNamesInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UpdateTypesInput`<sup>Optional</sup> <a name="UpdateTypesInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.updateTypesInput"></a>

```csharp
public string[] UpdateTypesInput { get; }
```

- *Type:* string[]

---

##### `WorkRequestDetailsInput`<sup>Optional</sup> <a name="WorkRequestDetailsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.workRequestDetailsInput"></a>

```csharp
public OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails WorkRequestDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.managedInstanceId"></a>

```csharp
public string ManagedInstanceId { get; }
```

- *Type:* string

---

##### `PackageNames`<sup>Required</sup> <a name="PackageNames" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.packageNames"></a>

```csharp
public string[] PackageNames { get; }
```

- *Type:* string[]

---

##### `UpdateTypes`<sup>Required</sup> <a name="UpdateTypes" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.updateTypes"></a>

```csharp
public string[] UpdateTypes { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubManagedInstanceUpdatePackagesManagementConfig <a name="OsManagementHubManagedInstanceUpdatePackagesManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceUpdatePackagesManagementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagedInstanceId,
    string Id = null,
    string[] PackageNames = null,
    OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts Timeouts = null,
    string[] UpdateTypes = null,
    OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails WorkRequestDetails = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.managedInstanceId">ManagedInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#managed_instance_id OsManagementHubManagedInstanceUpdatePackagesManagement#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#id OsManagementHubManagedInstanceUpdatePackagesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.packageNames">PackageNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#package_names OsManagementHubManagedInstanceUpdatePackagesManagement#package_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts">OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.updateTypes">UpdateTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#update_types OsManagementHubManagedInstanceUpdatePackagesManagement#update_types}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.workRequestDetails">WorkRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails</a></code> | work_request_details block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.managedInstanceId"></a>

```csharp
public string ManagedInstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#managed_instance_id OsManagementHubManagedInstanceUpdatePackagesManagement#managed_instance_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#id OsManagementHubManagedInstanceUpdatePackagesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PackageNames`<sup>Optional</sup> <a name="PackageNames" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.packageNames"></a>

```csharp
public string[] PackageNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#package_names OsManagementHubManagedInstanceUpdatePackagesManagement#package_names}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.timeouts"></a>

```csharp
public OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts">OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#timeouts OsManagementHubManagedInstanceUpdatePackagesManagement#timeouts}

---

##### `UpdateTypes`<sup>Optional</sup> <a name="UpdateTypes" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.updateTypes"></a>

```csharp
public string[] UpdateTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#update_types OsManagementHubManagedInstanceUpdatePackagesManagement#update_types}.

---

##### `WorkRequestDetails`<sup>Optional</sup> <a name="WorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.workRequestDetails"></a>

```csharp
public OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails WorkRequestDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails</a>

work_request_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#work_request_details OsManagementHubManagedInstanceUpdatePackagesManagement#work_request_details}

---

### OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts <a name="OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#create OsManagementHubManagedInstanceUpdatePackagesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#delete OsManagementHubManagedInstanceUpdatePackagesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#update OsManagementHubManagedInstanceUpdatePackagesManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#create OsManagementHubManagedInstanceUpdatePackagesManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#delete OsManagementHubManagedInstanceUpdatePackagesManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#update OsManagementHubManagedInstanceUpdatePackagesManagement#update}.

---

### OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails <a name="OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails {
    string Description = null,
    string DisplayName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#description OsManagementHubManagedInstanceUpdatePackagesManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#display_name OsManagementHubManagedInstanceUpdatePackagesManagement#display_name}. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#description OsManagementHubManagedInstanceUpdatePackagesManagement#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#display_name OsManagementHubManagedInstanceUpdatePackagesManagement#display_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference <a name="OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference <a name="OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.internalValue"></a>

```csharp
public OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails</a>

---



