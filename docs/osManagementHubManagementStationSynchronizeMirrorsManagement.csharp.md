# `osManagementHubManagementStationSynchronizeMirrorsManagement` Submodule <a name="`osManagementHubManagementStationSynchronizeMirrorsManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubManagementStationSynchronizeMirrorsManagement <a name="OsManagementHubManagementStationSynchronizeMirrorsManagement" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_synchronize_mirrors_management oci_os_management_hub_management_station_synchronize_mirrors_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagementStationSynchronizeMirrorsManagement(Construct Scope, string Id, OsManagementHubManagementStationSynchronizeMirrorsManagementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig">OsManagementHubManagementStationSynchronizeMirrorsManagementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig">OsManagementHubManagementStationSynchronizeMirrorsManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.putTimeouts"></a>

```csharp
private void PutTimeouts(OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts">OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OsManagementHubManagementStationSynchronizeMirrorsManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagementStationSynchronizeMirrorsManagement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagementStationSynchronizeMirrorsManagement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagementStationSynchronizeMirrorsManagement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubManagementStationSynchronizeMirrorsManagement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OsManagementHubManagementStationSynchronizeMirrorsManagement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OsManagementHubManagementStationSynchronizeMirrorsManagement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OsManagementHubManagementStationSynchronizeMirrorsManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_synchronize_mirrors_management#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubManagementStationSynchronizeMirrorsManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference">OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.managementStationIdInput">ManagementStationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.softwareSourceListInput">SoftwareSourceListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.managementStationId">ManagementStationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.softwareSourceList">SoftwareSourceList</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.timeouts"></a>

```csharp
public OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference">OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagementStationIdInput`<sup>Optional</sup> <a name="ManagementStationIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.managementStationIdInput"></a>

```csharp
public string ManagementStationIdInput { get; }
```

- *Type:* string

---

##### `SoftwareSourceListInput`<sup>Optional</sup> <a name="SoftwareSourceListInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.softwareSourceListInput"></a>

```csharp
public string[] SoftwareSourceListInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagementStationId`<sup>Required</sup> <a name="ManagementStationId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.managementStationId"></a>

```csharp
public string ManagementStationId { get; }
```

- *Type:* string

---

##### `SoftwareSourceList`<sup>Required</sup> <a name="SoftwareSourceList" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.softwareSourceList"></a>

```csharp
public string[] SoftwareSourceList { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubManagementStationSynchronizeMirrorsManagementConfig <a name="OsManagementHubManagementStationSynchronizeMirrorsManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagementStationSynchronizeMirrorsManagementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagementStationId,
    string[] SoftwareSourceList,
    string Id = null,
    OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.managementStationId">ManagementStationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_synchronize_mirrors_management#management_station_id OsManagementHubManagementStationSynchronizeMirrorsManagement#management_station_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.softwareSourceList">SoftwareSourceList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_synchronize_mirrors_management#software_source_list OsManagementHubManagementStationSynchronizeMirrorsManagement#software_source_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_synchronize_mirrors_management#id OsManagementHubManagementStationSynchronizeMirrorsManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts">OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagementStationId`<sup>Required</sup> <a name="ManagementStationId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.managementStationId"></a>

```csharp
public string ManagementStationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_synchronize_mirrors_management#management_station_id OsManagementHubManagementStationSynchronizeMirrorsManagement#management_station_id}.

---

##### `SoftwareSourceList`<sup>Required</sup> <a name="SoftwareSourceList" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.softwareSourceList"></a>

```csharp
public string[] SoftwareSourceList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_synchronize_mirrors_management#software_source_list OsManagementHubManagementStationSynchronizeMirrorsManagement#software_source_list}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_synchronize_mirrors_management#id OsManagementHubManagementStationSynchronizeMirrorsManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.timeouts"></a>

```csharp
public OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts">OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_synchronize_mirrors_management#timeouts OsManagementHubManagementStationSynchronizeMirrorsManagement#timeouts}

---

### OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts <a name="OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_synchronize_mirrors_management#create OsManagementHubManagementStationSynchronizeMirrorsManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_synchronize_mirrors_management#delete OsManagementHubManagementStationSynchronizeMirrorsManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_synchronize_mirrors_management#update OsManagementHubManagementStationSynchronizeMirrorsManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_synchronize_mirrors_management#create OsManagementHubManagementStationSynchronizeMirrorsManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_synchronize_mirrors_management#delete OsManagementHubManagementStationSynchronizeMirrorsManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_synchronize_mirrors_management#update OsManagementHubManagementStationSynchronizeMirrorsManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference <a name="OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



