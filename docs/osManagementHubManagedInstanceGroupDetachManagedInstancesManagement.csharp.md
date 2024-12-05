# `osManagementHubManagedInstanceGroupDetachManagedInstancesManagement` Submodule <a name="`osManagementHubManagedInstanceGroupDetachManagedInstancesManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement <a name="OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management oci_os_management_hub_managed_instance_group_detach_managed_instances_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement(Construct Scope, string Id, OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig">OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig">OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.putTimeouts"></a>

```csharp
private void PutTimeouts(OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.managedInstanceGroupIdInput">ManagedInstanceGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.managedInstancesInput">ManagedInstancesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.managedInstanceGroupId">ManagedInstanceGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.managedInstances">ManagedInstances</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.timeouts"></a>

```csharp
public OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagedInstanceGroupIdInput`<sup>Optional</sup> <a name="ManagedInstanceGroupIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.managedInstanceGroupIdInput"></a>

```csharp
public string ManagedInstanceGroupIdInput { get; }
```

- *Type:* string

---

##### `ManagedInstancesInput`<sup>Optional</sup> <a name="ManagedInstancesInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.managedInstancesInput"></a>

```csharp
public string[] ManagedInstancesInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedInstanceGroupId`<sup>Required</sup> <a name="ManagedInstanceGroupId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.managedInstanceGroupId"></a>

```csharp
public string ManagedInstanceGroupId { get; }
```

- *Type:* string

---

##### `ManagedInstances`<sup>Required</sup> <a name="ManagedInstances" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.managedInstances"></a>

```csharp
public string[] ManagedInstances { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig <a name="OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagedInstanceGroupId,
    string[] ManagedInstances,
    string Id = null,
    OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.managedInstanceGroupId">ManagedInstanceGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#managed_instance_group_id OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.managedInstances">ManagedInstances</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#managed_instances OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#managed_instances}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#id OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagedInstanceGroupId`<sup>Required</sup> <a name="ManagedInstanceGroupId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.managedInstanceGroupId"></a>

```csharp
public string ManagedInstanceGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#managed_instance_group_id OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#managed_instance_group_id}.

---

##### `ManagedInstances`<sup>Required</sup> <a name="ManagedInstances" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.managedInstances"></a>

```csharp
public string[] ManagedInstances { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#managed_instances OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#managed_instances}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#id OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.timeouts"></a>

```csharp
public OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#timeouts OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#timeouts}

---

### OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts <a name="OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#create OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#delete OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#update OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#create OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#delete OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#update OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference <a name="OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



