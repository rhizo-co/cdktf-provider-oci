# `fleetAppsManagementFleetCredential` Submodule <a name="`fleetAppsManagementFleetCredential` Submodule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FleetAppsManagementFleetCredential <a name="FleetAppsManagementFleetCredential" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential oci_fleet_apps_management_fleet_credential}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetAppsManagementFleetCredential(Construct Scope, string Id, FleetAppsManagementFleetCredentialConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig">FleetAppsManagementFleetCredentialConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig">FleetAppsManagementFleetCredentialConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putEntitySpecifics">PutEntitySpecifics</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putPassword">PutPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putUser">PutUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEntitySpecifics` <a name="PutEntitySpecifics" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putEntitySpecifics"></a>

```csharp
private void PutEntitySpecifics(FleetAppsManagementFleetCredentialEntitySpecifics Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putEntitySpecifics.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics">FleetAppsManagementFleetCredentialEntitySpecifics</a>

---

##### `PutPassword` <a name="PutPassword" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putPassword"></a>

```csharp
private void PutPassword(FleetAppsManagementFleetCredentialPassword Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putPassword.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword">FleetAppsManagementFleetCredentialPassword</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putTimeouts"></a>

```csharp
private void PutTimeouts(FleetAppsManagementFleetCredentialTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts">FleetAppsManagementFleetCredentialTimeouts</a>

---

##### `PutUser` <a name="PutUser" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putUser"></a>

```csharp
private void PutUser(FleetAppsManagementFleetCredentialUser Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putUser.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser">FleetAppsManagementFleetCredentialUser</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FleetAppsManagementFleetCredential resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FleetAppsManagementFleetCredential.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FleetAppsManagementFleetCredential.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FleetAppsManagementFleetCredential.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FleetAppsManagementFleetCredential.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FleetAppsManagementFleetCredential resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FleetAppsManagementFleetCredential to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FleetAppsManagementFleetCredential that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FleetAppsManagementFleetCredential to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.entitySpecifics">EntitySpecifics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference">FleetAppsManagementFleetCredentialEntitySpecificsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.password">Password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference">FleetAppsManagementFleetCredentialPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference">FleetAppsManagementFleetCredentialTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.user">User</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference">FleetAppsManagementFleetCredentialUserOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.entitySpecificsInput">EntitySpecificsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics">FleetAppsManagementFleetCredentialEntitySpecifics</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.fleetIdInput">FleetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.passwordInput">PasswordInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword">FleetAppsManagementFleetCredentialPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.userInput">UserInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser">FleetAppsManagementFleetCredentialUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.fleetId">FleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EntitySpecifics`<sup>Required</sup> <a name="EntitySpecifics" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.entitySpecifics"></a>

```csharp
public FleetAppsManagementFleetCredentialEntitySpecificsOutputReference EntitySpecifics { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference">FleetAppsManagementFleetCredentialEntitySpecificsOutputReference</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.password"></a>

```csharp
public FleetAppsManagementFleetCredentialPasswordOutputReference Password { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference">FleetAppsManagementFleetCredentialPasswordOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.timeouts"></a>

```csharp
public FleetAppsManagementFleetCredentialTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference">FleetAppsManagementFleetCredentialTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `User`<sup>Required</sup> <a name="User" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.user"></a>

```csharp
public FleetAppsManagementFleetCredentialUserOutputReference User { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference">FleetAppsManagementFleetCredentialUserOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EntitySpecificsInput`<sup>Optional</sup> <a name="EntitySpecificsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.entitySpecificsInput"></a>

```csharp
public FleetAppsManagementFleetCredentialEntitySpecifics EntitySpecificsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics">FleetAppsManagementFleetCredentialEntitySpecifics</a>

---

##### `FleetIdInput`<sup>Optional</sup> <a name="FleetIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.fleetIdInput"></a>

```csharp
public string FleetIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.passwordInput"></a>

```csharp
public FleetAppsManagementFleetCredentialPassword PasswordInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword">FleetAppsManagementFleetCredentialPassword</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.userInput"></a>

```csharp
public FleetAppsManagementFleetCredentialUser UserInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser">FleetAppsManagementFleetCredentialUser</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.fleetId"></a>

```csharp
public string FleetId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FleetAppsManagementFleetCredentialConfig <a name="FleetAppsManagementFleetCredentialConfig" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetAppsManagementFleetCredentialConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DisplayName,
    FleetAppsManagementFleetCredentialEntitySpecifics EntitySpecifics,
    string FleetId,
    FleetAppsManagementFleetCredentialPassword Password,
    FleetAppsManagementFleetCredentialUser User,
    string Id = null,
    FleetAppsManagementFleetCredentialTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#compartment_id FleetAppsManagementFleetCredential#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#display_name FleetAppsManagementFleetCredential#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.entitySpecifics">EntitySpecifics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics">FleetAppsManagementFleetCredentialEntitySpecifics</a></code> | entity_specifics block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.fleetId">FleetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#fleet_id FleetAppsManagementFleetCredential#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.password">Password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword">FleetAppsManagementFleetCredentialPassword</a></code> | password block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.user">User</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser">FleetAppsManagementFleetCredentialUser</a></code> | user block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#id FleetAppsManagementFleetCredential#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts">FleetAppsManagementFleetCredentialTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#compartment_id FleetAppsManagementFleetCredential#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#display_name FleetAppsManagementFleetCredential#display_name}.

---

##### `EntitySpecifics`<sup>Required</sup> <a name="EntitySpecifics" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.entitySpecifics"></a>

```csharp
public FleetAppsManagementFleetCredentialEntitySpecifics EntitySpecifics { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics">FleetAppsManagementFleetCredentialEntitySpecifics</a>

entity_specifics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#entity_specifics FleetAppsManagementFleetCredential#entity_specifics}

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.fleetId"></a>

```csharp
public string FleetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#fleet_id FleetAppsManagementFleetCredential#fleet_id}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.password"></a>

```csharp
public FleetAppsManagementFleetCredentialPassword Password { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword">FleetAppsManagementFleetCredentialPassword</a>

password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#password FleetAppsManagementFleetCredential#password}

---

##### `User`<sup>Required</sup> <a name="User" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.user"></a>

```csharp
public FleetAppsManagementFleetCredentialUser User { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser">FleetAppsManagementFleetCredentialUser</a>

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#user FleetAppsManagementFleetCredential#user}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#id FleetAppsManagementFleetCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.timeouts"></a>

```csharp
public FleetAppsManagementFleetCredentialTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts">FleetAppsManagementFleetCredentialTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#timeouts FleetAppsManagementFleetCredential#timeouts}

---

### FleetAppsManagementFleetCredentialEntitySpecifics <a name="FleetAppsManagementFleetCredentialEntitySpecifics" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetAppsManagementFleetCredentialEntitySpecifics {
    string CredentialLevel,
    string ResourceId,
    string Target
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics.property.credentialLevel">CredentialLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#credential_level FleetAppsManagementFleetCredential#credential_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics.property.resourceId">ResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#resource_id FleetAppsManagementFleetCredential#resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics.property.target">Target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#target FleetAppsManagementFleetCredential#target}. |

---

##### `CredentialLevel`<sup>Required</sup> <a name="CredentialLevel" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics.property.credentialLevel"></a>

```csharp
public string CredentialLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#credential_level FleetAppsManagementFleetCredential#credential_level}.

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#resource_id FleetAppsManagementFleetCredential#resource_id}.

---

##### `Target`<sup>Required</sup> <a name="Target" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#target FleetAppsManagementFleetCredential#target}.

---

### FleetAppsManagementFleetCredentialPassword <a name="FleetAppsManagementFleetCredentialPassword" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetAppsManagementFleetCredentialPassword {
    string CredentialType,
    string KeyId = null,
    string KeyVersion = null,
    string SecretId = null,
    string SecretVersion = null,
    string Value = null,
    string VaultId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.credentialType">CredentialType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#credential_type FleetAppsManagementFleetCredential#credential_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.keyId">KeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#key_id FleetAppsManagementFleetCredential#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.keyVersion">KeyVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#key_version FleetAppsManagementFleetCredential#key_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.secretId">SecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#secret_id FleetAppsManagementFleetCredential#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.secretVersion">SecretVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#secret_version FleetAppsManagementFleetCredential#secret_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#value FleetAppsManagementFleetCredential#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.vaultId">VaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#vault_id FleetAppsManagementFleetCredential#vault_id}. |

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.credentialType"></a>

```csharp
public string CredentialType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#credential_type FleetAppsManagementFleetCredential#credential_type}.

---

##### `KeyId`<sup>Optional</sup> <a name="KeyId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.keyId"></a>

```csharp
public string KeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#key_id FleetAppsManagementFleetCredential#key_id}.

---

##### `KeyVersion`<sup>Optional</sup> <a name="KeyVersion" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.keyVersion"></a>

```csharp
public string KeyVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#key_version FleetAppsManagementFleetCredential#key_version}.

---

##### `SecretId`<sup>Optional</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#secret_id FleetAppsManagementFleetCredential#secret_id}.

---

##### `SecretVersion`<sup>Optional</sup> <a name="SecretVersion" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.secretVersion"></a>

```csharp
public string SecretVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#secret_version FleetAppsManagementFleetCredential#secret_version}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#value FleetAppsManagementFleetCredential#value}.

---

##### `VaultId`<sup>Optional</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.vaultId"></a>

```csharp
public string VaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#vault_id FleetAppsManagementFleetCredential#vault_id}.

---

### FleetAppsManagementFleetCredentialTimeouts <a name="FleetAppsManagementFleetCredentialTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetAppsManagementFleetCredentialTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#create FleetAppsManagementFleetCredential#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#delete FleetAppsManagementFleetCredential#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#update FleetAppsManagementFleetCredential#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#create FleetAppsManagementFleetCredential#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#delete FleetAppsManagementFleetCredential#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#update FleetAppsManagementFleetCredential#update}.

---

### FleetAppsManagementFleetCredentialUser <a name="FleetAppsManagementFleetCredentialUser" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetAppsManagementFleetCredentialUser {
    string CredentialType,
    string KeyId = null,
    string KeyVersion = null,
    string SecretId = null,
    string SecretVersion = null,
    string Value = null,
    string VaultId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.credentialType">CredentialType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#credential_type FleetAppsManagementFleetCredential#credential_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.keyId">KeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#key_id FleetAppsManagementFleetCredential#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.keyVersion">KeyVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#key_version FleetAppsManagementFleetCredential#key_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.secretId">SecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#secret_id FleetAppsManagementFleetCredential#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.secretVersion">SecretVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#secret_version FleetAppsManagementFleetCredential#secret_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#value FleetAppsManagementFleetCredential#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.vaultId">VaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#vault_id FleetAppsManagementFleetCredential#vault_id}. |

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.credentialType"></a>

```csharp
public string CredentialType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#credential_type FleetAppsManagementFleetCredential#credential_type}.

---

##### `KeyId`<sup>Optional</sup> <a name="KeyId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.keyId"></a>

```csharp
public string KeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#key_id FleetAppsManagementFleetCredential#key_id}.

---

##### `KeyVersion`<sup>Optional</sup> <a name="KeyVersion" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.keyVersion"></a>

```csharp
public string KeyVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#key_version FleetAppsManagementFleetCredential#key_version}.

---

##### `SecretId`<sup>Optional</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#secret_id FleetAppsManagementFleetCredential#secret_id}.

---

##### `SecretVersion`<sup>Optional</sup> <a name="SecretVersion" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.secretVersion"></a>

```csharp
public string SecretVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#secret_version FleetAppsManagementFleetCredential#secret_version}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#value FleetAppsManagementFleetCredential#value}.

---

##### `VaultId`<sup>Optional</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.vaultId"></a>

```csharp
public string VaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#vault_id FleetAppsManagementFleetCredential#vault_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### FleetAppsManagementFleetCredentialEntitySpecificsOutputReference <a name="FleetAppsManagementFleetCredentialEntitySpecificsOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetAppsManagementFleetCredentialEntitySpecificsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.credentialLevelInput">CredentialLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.credentialLevel">CredentialLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics">FleetAppsManagementFleetCredentialEntitySpecifics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CredentialLevelInput`<sup>Optional</sup> <a name="CredentialLevelInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.credentialLevelInput"></a>

```csharp
public string CredentialLevelInput { get; }
```

- *Type:* string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `CredentialLevel`<sup>Required</sup> <a name="CredentialLevel" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.credentialLevel"></a>

```csharp
public string CredentialLevel { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.internalValue"></a>

```csharp
public FleetAppsManagementFleetCredentialEntitySpecifics InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics">FleetAppsManagementFleetCredentialEntitySpecifics</a>

---


### FleetAppsManagementFleetCredentialPasswordOutputReference <a name="FleetAppsManagementFleetCredentialPasswordOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetAppsManagementFleetCredentialPasswordOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resetKeyId">ResetKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resetKeyVersion">ResetKeyVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resetSecretId">ResetSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resetSecretVersion">ResetSecretVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resetVaultId">ResetVaultId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyId` <a name="ResetKeyId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resetKeyId"></a>

```csharp
private void ResetKeyId()
```

##### `ResetKeyVersion` <a name="ResetKeyVersion" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resetKeyVersion"></a>

```csharp
private void ResetKeyVersion()
```

##### `ResetSecretId` <a name="ResetSecretId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resetSecretId"></a>

```csharp
private void ResetSecretId()
```

##### `ResetSecretVersion` <a name="ResetSecretVersion" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resetSecretVersion"></a>

```csharp
private void ResetSecretVersion()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```

##### `ResetVaultId` <a name="ResetVaultId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resetVaultId"></a>

```csharp
private void ResetVaultId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.credentialTypeInput">CredentialTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.keyIdInput">KeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.keyVersionInput">KeyVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.secretVersionInput">SecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.vaultIdInput">VaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.credentialType">CredentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.keyVersion">KeyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.secretVersion">SecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.vaultId">VaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword">FleetAppsManagementFleetCredentialPassword</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CredentialTypeInput`<sup>Optional</sup> <a name="CredentialTypeInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.credentialTypeInput"></a>

```csharp
public string CredentialTypeInput { get; }
```

- *Type:* string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.keyIdInput"></a>

```csharp
public string KeyIdInput { get; }
```

- *Type:* string

---

##### `KeyVersionInput`<sup>Optional</sup> <a name="KeyVersionInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.keyVersionInput"></a>

```csharp
public string KeyVersionInput { get; }
```

- *Type:* string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `SecretVersionInput`<sup>Optional</sup> <a name="SecretVersionInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.secretVersionInput"></a>

```csharp
public string SecretVersionInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `VaultIdInput`<sup>Optional</sup> <a name="VaultIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.vaultIdInput"></a>

```csharp
public string VaultIdInput { get; }
```

- *Type:* string

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.credentialType"></a>

```csharp
public string CredentialType { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `KeyVersion`<sup>Required</sup> <a name="KeyVersion" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.keyVersion"></a>

```csharp
public string KeyVersion { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.secretVersion"></a>

```csharp
public string SecretVersion { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.vaultId"></a>

```csharp
public string VaultId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.internalValue"></a>

```csharp
public FleetAppsManagementFleetCredentialPassword InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword">FleetAppsManagementFleetCredentialPassword</a>

---


### FleetAppsManagementFleetCredentialTimeoutsOutputReference <a name="FleetAppsManagementFleetCredentialTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetAppsManagementFleetCredentialTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FleetAppsManagementFleetCredentialUserOutputReference <a name="FleetAppsManagementFleetCredentialUserOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetAppsManagementFleetCredentialUserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resetKeyId">ResetKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resetKeyVersion">ResetKeyVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resetSecretId">ResetSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resetSecretVersion">ResetSecretVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resetVaultId">ResetVaultId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyId` <a name="ResetKeyId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resetKeyId"></a>

```csharp
private void ResetKeyId()
```

##### `ResetKeyVersion` <a name="ResetKeyVersion" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resetKeyVersion"></a>

```csharp
private void ResetKeyVersion()
```

##### `ResetSecretId` <a name="ResetSecretId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resetSecretId"></a>

```csharp
private void ResetSecretId()
```

##### `ResetSecretVersion` <a name="ResetSecretVersion" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resetSecretVersion"></a>

```csharp
private void ResetSecretVersion()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```

##### `ResetVaultId` <a name="ResetVaultId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resetVaultId"></a>

```csharp
private void ResetVaultId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.credentialTypeInput">CredentialTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.keyIdInput">KeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.keyVersionInput">KeyVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.secretVersionInput">SecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.vaultIdInput">VaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.credentialType">CredentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.keyVersion">KeyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.secretVersion">SecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.vaultId">VaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser">FleetAppsManagementFleetCredentialUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CredentialTypeInput`<sup>Optional</sup> <a name="CredentialTypeInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.credentialTypeInput"></a>

```csharp
public string CredentialTypeInput { get; }
```

- *Type:* string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.keyIdInput"></a>

```csharp
public string KeyIdInput { get; }
```

- *Type:* string

---

##### `KeyVersionInput`<sup>Optional</sup> <a name="KeyVersionInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.keyVersionInput"></a>

```csharp
public string KeyVersionInput { get; }
```

- *Type:* string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `SecretVersionInput`<sup>Optional</sup> <a name="SecretVersionInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.secretVersionInput"></a>

```csharp
public string SecretVersionInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `VaultIdInput`<sup>Optional</sup> <a name="VaultIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.vaultIdInput"></a>

```csharp
public string VaultIdInput { get; }
```

- *Type:* string

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.credentialType"></a>

```csharp
public string CredentialType { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `KeyVersion`<sup>Required</sup> <a name="KeyVersion" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.keyVersion"></a>

```csharp
public string KeyVersion { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.secretVersion"></a>

```csharp
public string SecretVersion { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.vaultId"></a>

```csharp
public string VaultId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.internalValue"></a>

```csharp
public FleetAppsManagementFleetCredentialUser InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser">FleetAppsManagementFleetCredentialUser</a>

---



