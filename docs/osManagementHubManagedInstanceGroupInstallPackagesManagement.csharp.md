# `osManagementHubManagedInstanceGroupInstallPackagesManagement` Submodule <a name="`osManagementHubManagedInstanceGroupInstallPackagesManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubManagedInstanceGroupInstallPackagesManagement <a name="OsManagementHubManagedInstanceGroupInstallPackagesManagement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_packages_management oci_os_management_hub_managed_instance_group_install_packages_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupInstallPackagesManagement(Construct Scope, string Id, OsManagementHubManagedInstanceGroupInstallPackagesManagementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementConfig">OsManagementHubManagedInstanceGroupInstallPackagesManagementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementConfig">OsManagementHubManagedInstanceGroupInstallPackagesManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.putWorkRequestDetails">PutWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.resetWorkRequestDetails">ResetWorkRequestDetails</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.putTimeouts"></a>

```csharp
private void PutTimeouts(OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeouts">OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeouts</a>

---

##### `PutWorkRequestDetails` <a name="PutWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.putWorkRequestDetails"></a>

```csharp
private void PutWorkRequestDetails(OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.putWorkRequestDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetails</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWorkRequestDetails` <a name="ResetWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.resetWorkRequestDetails"></a>

```csharp
private void ResetWorkRequestDetails()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupInstallPackagesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagedInstanceGroupInstallPackagesManagement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagedInstanceGroupInstallPackagesManagement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagedInstanceGroupInstallPackagesManagement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagedInstanceGroupInstallPackagesManagement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupInstallPackagesManagement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OsManagementHubManagedInstanceGroupInstallPackagesManagement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OsManagementHubManagedInstanceGroupInstallPackagesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_packages_management#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubManagedInstanceGroupInstallPackagesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.workRequestDetails">WorkRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.managedInstanceGroupIdInput">ManagedInstanceGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.packageNamesInput">PackageNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.workRequestDetailsInput">WorkRequestDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.managedInstanceGroupId">ManagedInstanceGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.packageNames">PackageNames</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.timeouts"></a>

```csharp
public OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference</a>

---

##### `WorkRequestDetails`<sup>Required</sup> <a name="WorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.workRequestDetails"></a>

```csharp
public OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference WorkRequestDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagedInstanceGroupIdInput`<sup>Optional</sup> <a name="ManagedInstanceGroupIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.managedInstanceGroupIdInput"></a>

```csharp
public string ManagedInstanceGroupIdInput { get; }
```

- *Type:* string

---

##### `PackageNamesInput`<sup>Optional</sup> <a name="PackageNamesInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.packageNamesInput"></a>

```csharp
public string[] PackageNamesInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WorkRequestDetailsInput`<sup>Optional</sup> <a name="WorkRequestDetailsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.workRequestDetailsInput"></a>

```csharp
public OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetails WorkRequestDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetails</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedInstanceGroupId`<sup>Required</sup> <a name="ManagedInstanceGroupId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.managedInstanceGroupId"></a>

```csharp
public string ManagedInstanceGroupId { get; }
```

- *Type:* string

---

##### `PackageNames`<sup>Required</sup> <a name="PackageNames" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.packageNames"></a>

```csharp
public string[] PackageNames { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubManagedInstanceGroupInstallPackagesManagementConfig <a name="OsManagementHubManagedInstanceGroupInstallPackagesManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupInstallPackagesManagementConfig {
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
    OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeouts Timeouts = null,
    OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetails WorkRequestDetails = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementConfig.property.managedInstanceGroupId">ManagedInstanceGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_packages_management#managed_instance_group_id OsManagementHubManagedInstanceGroupInstallPackagesManagement#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementConfig.property.packageNames">PackageNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_packages_management#package_names OsManagementHubManagedInstanceGroupInstallPackagesManagement#package_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_packages_management#id OsManagementHubManagedInstanceGroupInstallPackagesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeouts">OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementConfig.property.workRequestDetails">WorkRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetails</a></code> | work_request_details block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagedInstanceGroupId`<sup>Required</sup> <a name="ManagedInstanceGroupId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementConfig.property.managedInstanceGroupId"></a>

```csharp
public string ManagedInstanceGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_packages_management#managed_instance_group_id OsManagementHubManagedInstanceGroupInstallPackagesManagement#managed_instance_group_id}.

---

##### `PackageNames`<sup>Required</sup> <a name="PackageNames" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementConfig.property.packageNames"></a>

```csharp
public string[] PackageNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_packages_management#package_names OsManagementHubManagedInstanceGroupInstallPackagesManagement#package_names}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_packages_management#id OsManagementHubManagedInstanceGroupInstallPackagesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementConfig.property.timeouts"></a>

```csharp
public OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeouts">OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_packages_management#timeouts OsManagementHubManagedInstanceGroupInstallPackagesManagement#timeouts}

---

##### `WorkRequestDetails`<sup>Optional</sup> <a name="WorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementConfig.property.workRequestDetails"></a>

```csharp
public OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetails WorkRequestDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetails</a>

work_request_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_packages_management#work_request_details OsManagementHubManagedInstanceGroupInstallPackagesManagement#work_request_details}

---

### OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeouts <a name="OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_packages_management#create OsManagementHubManagedInstanceGroupInstallPackagesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_packages_management#delete OsManagementHubManagedInstanceGroupInstallPackagesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_packages_management#update OsManagementHubManagedInstanceGroupInstallPackagesManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_packages_management#create OsManagementHubManagedInstanceGroupInstallPackagesManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_packages_management#delete OsManagementHubManagedInstanceGroupInstallPackagesManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_packages_management#update OsManagementHubManagedInstanceGroupInstallPackagesManagement#update}.

---

### OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetails <a name="OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetails {
    string Description = null,
    string DisplayName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetails.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_packages_management#description OsManagementHubManagedInstanceGroupInstallPackagesManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetails.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_packages_management#display_name OsManagementHubManagedInstanceGroupInstallPackagesManagement#display_name}. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetails.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_packages_management#description OsManagementHubManagedInstanceGroupInstallPackagesManagement#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetails.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_packages_management#display_name OsManagementHubManagedInstanceGroupInstallPackagesManagement#display_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference <a name="OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference <a name="OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetailsOutputReference.property.internalValue"></a>

```csharp
public OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallPackagesManagement.OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupInstallPackagesManagementWorkRequestDetails</a>

---



