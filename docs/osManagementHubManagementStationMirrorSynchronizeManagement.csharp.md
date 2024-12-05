# `osManagementHubManagementStationMirrorSynchronizeManagement` Submodule <a name="`osManagementHubManagementStationMirrorSynchronizeManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubManagementStationMirrorSynchronizeManagement <a name="OsManagementHubManagementStationMirrorSynchronizeManagement" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management oci_os_management_hub_management_station_mirror_synchronize_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagementStationMirrorSynchronizeManagement(Construct Scope, string Id, OsManagementHubManagementStationMirrorSynchronizeManagementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig">OsManagementHubManagementStationMirrorSynchronizeManagementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig">OsManagementHubManagementStationMirrorSynchronizeManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.putTimeouts"></a>

```csharp
private void PutTimeouts(OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts">OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OsManagementHubManagementStationMirrorSynchronizeManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagementStationMirrorSynchronizeManagement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagementStationMirrorSynchronizeManagement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagementStationMirrorSynchronizeManagement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagementStationMirrorSynchronizeManagement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OsManagementHubManagementStationMirrorSynchronizeManagement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OsManagementHubManagementStationMirrorSynchronizeManagement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OsManagementHubManagementStationMirrorSynchronizeManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubManagementStationMirrorSynchronizeManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference">OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.managementStationIdInput">ManagementStationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.mirrorIdInput">MirrorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.managementStationId">ManagementStationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.mirrorId">MirrorId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.timeouts"></a>

```csharp
public OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference">OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagementStationIdInput`<sup>Optional</sup> <a name="ManagementStationIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.managementStationIdInput"></a>

```csharp
public string ManagementStationIdInput { get; }
```

- *Type:* string

---

##### `MirrorIdInput`<sup>Optional</sup> <a name="MirrorIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.mirrorIdInput"></a>

```csharp
public string MirrorIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagementStationId`<sup>Required</sup> <a name="ManagementStationId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.managementStationId"></a>

```csharp
public string ManagementStationId { get; }
```

- *Type:* string

---

##### `MirrorId`<sup>Required</sup> <a name="MirrorId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.mirrorId"></a>

```csharp
public string MirrorId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubManagementStationMirrorSynchronizeManagementConfig <a name="OsManagementHubManagementStationMirrorSynchronizeManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagementStationMirrorSynchronizeManagementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagementStationId,
    string MirrorId,
    string Id = null,
    OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.managementStationId">ManagementStationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management#management_station_id OsManagementHubManagementStationMirrorSynchronizeManagement#management_station_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.mirrorId">MirrorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management#mirror_id OsManagementHubManagementStationMirrorSynchronizeManagement#mirror_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management#id OsManagementHubManagementStationMirrorSynchronizeManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts">OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagementStationId`<sup>Required</sup> <a name="ManagementStationId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.managementStationId"></a>

```csharp
public string ManagementStationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management#management_station_id OsManagementHubManagementStationMirrorSynchronizeManagement#management_station_id}.

---

##### `MirrorId`<sup>Required</sup> <a name="MirrorId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.mirrorId"></a>

```csharp
public string MirrorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management#mirror_id OsManagementHubManagementStationMirrorSynchronizeManagement#mirror_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management#id OsManagementHubManagementStationMirrorSynchronizeManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.timeouts"></a>

```csharp
public OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts">OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management#timeouts OsManagementHubManagementStationMirrorSynchronizeManagement#timeouts}

---

### OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts <a name="OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management#create OsManagementHubManagementStationMirrorSynchronizeManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management#delete OsManagementHubManagementStationMirrorSynchronizeManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management#update OsManagementHubManagementStationMirrorSynchronizeManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management#create OsManagementHubManagementStationMirrorSynchronizeManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management#delete OsManagementHubManagementStationMirrorSynchronizeManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management#update OsManagementHubManagementStationMirrorSynchronizeManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference <a name="OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


