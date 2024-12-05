# `databaseAutonomousDatabaseSaasAdminUser` Submodule <a name="`databaseAutonomousDatabaseSaasAdminUser` Submodule" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseAutonomousDatabaseSaasAdminUser <a name="DatabaseAutonomousDatabaseSaasAdminUser" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user oci_database_autonomous_database_saas_admin_user}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousDatabaseSaasAdminUser(Construct Scope, string Id, DatabaseAutonomousDatabaseSaasAdminUserConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig">DatabaseAutonomousDatabaseSaasAdminUserConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig">DatabaseAutonomousDatabaseSaasAdminUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetAccessType">ResetAccessType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetSecretId">ResetSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetSecretVersionNumber">ResetSecretVersionNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetTimeSaasAdminUserEnabled">ResetTimeSaasAdminUserEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseAutonomousDatabaseSaasAdminUserTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts">DatabaseAutonomousDatabaseSaasAdminUserTimeouts</a>

---

##### `ResetAccessType` <a name="ResetAccessType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetAccessType"></a>

```csharp
private void ResetAccessType()
```

##### `ResetDuration` <a name="ResetDuration" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetDuration"></a>

```csharp
private void ResetDuration()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPassword` <a name="ResetPassword" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetSecretId` <a name="ResetSecretId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetSecretId"></a>

```csharp
private void ResetSecretId()
```

##### `ResetSecretVersionNumber` <a name="ResetSecretVersionNumber" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetSecretVersionNumber"></a>

```csharp
private void ResetSecretVersionNumber()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimeSaasAdminUserEnabled` <a name="ResetTimeSaasAdminUserEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetTimeSaasAdminUserEnabled"></a>

```csharp
private void ResetTimeSaasAdminUserEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseAutonomousDatabaseSaasAdminUser resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseAutonomousDatabaseSaasAdminUser.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseAutonomousDatabaseSaasAdminUser.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseAutonomousDatabaseSaasAdminUser.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseAutonomousDatabaseSaasAdminUser.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseAutonomousDatabaseSaasAdminUser resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseAutonomousDatabaseSaasAdminUser to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseAutonomousDatabaseSaasAdminUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseAutonomousDatabaseSaasAdminUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference">DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.accessTypeInput">AccessTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.autonomousDatabaseIdInput">AutonomousDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.durationInput">DurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.secretVersionNumberInput">SecretVersionNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.timeSaasAdminUserEnabledInput">TimeSaasAdminUserEnabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.accessType">AccessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.duration">Duration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.secretVersionNumber">SecretVersionNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.timeSaasAdminUserEnabled">TimeSaasAdminUserEnabled</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.timeouts"></a>

```csharp
public DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference">DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference</a>

---

##### `AccessTypeInput`<sup>Optional</sup> <a name="AccessTypeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.accessTypeInput"></a>

```csharp
public string AccessTypeInput { get; }
```

- *Type:* string

---

##### `AutonomousDatabaseIdInput`<sup>Optional</sup> <a name="AutonomousDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.autonomousDatabaseIdInput"></a>

```csharp
public string AutonomousDatabaseIdInput { get; }
```

- *Type:* string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.durationInput"></a>

```csharp
public double DurationInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `SecretVersionNumberInput`<sup>Optional</sup> <a name="SecretVersionNumberInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.secretVersionNumberInput"></a>

```csharp
public double SecretVersionNumberInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TimeSaasAdminUserEnabledInput`<sup>Optional</sup> <a name="TimeSaasAdminUserEnabledInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.timeSaasAdminUserEnabledInput"></a>

```csharp
public string TimeSaasAdminUserEnabledInput { get; }
```

- *Type:* string

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.accessType"></a>

```csharp
public string AccessType { get; }
```

- *Type:* string

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.autonomousDatabaseId"></a>

```csharp
public string AutonomousDatabaseId { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.duration"></a>

```csharp
public double Duration { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `SecretVersionNumber`<sup>Required</sup> <a name="SecretVersionNumber" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.secretVersionNumber"></a>

```csharp
public double SecretVersionNumber { get; }
```

- *Type:* double

---

##### `TimeSaasAdminUserEnabled`<sup>Required</sup> <a name="TimeSaasAdminUserEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.timeSaasAdminUserEnabled"></a>

```csharp
public string TimeSaasAdminUserEnabled { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseAutonomousDatabaseSaasAdminUserConfig <a name="DatabaseAutonomousDatabaseSaasAdminUserConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousDatabaseSaasAdminUserConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AutonomousDatabaseId,
    string AccessType = null,
    double Duration = null,
    string Id = null,
    string Password = null,
    string SecretId = null,
    double SecretVersionNumber = null,
    DatabaseAutonomousDatabaseSaasAdminUserTimeouts Timeouts = null,
    string TimeSaasAdminUserEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#autonomous_database_id DatabaseAutonomousDatabaseSaasAdminUser#autonomous_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.accessType">AccessType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#access_type DatabaseAutonomousDatabaseSaasAdminUser#access_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.duration">Duration</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#duration DatabaseAutonomousDatabaseSaasAdminUser#duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#id DatabaseAutonomousDatabaseSaasAdminUser#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#password DatabaseAutonomousDatabaseSaasAdminUser#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.secretId">SecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#secret_id DatabaseAutonomousDatabaseSaasAdminUser#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.secretVersionNumber">SecretVersionNumber</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#secret_version_number DatabaseAutonomousDatabaseSaasAdminUser#secret_version_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts">DatabaseAutonomousDatabaseSaasAdminUserTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.timeSaasAdminUserEnabled">TimeSaasAdminUserEnabled</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#time_saas_admin_user_enabled DatabaseAutonomousDatabaseSaasAdminUser#time_saas_admin_user_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.autonomousDatabaseId"></a>

```csharp
public string AutonomousDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#autonomous_database_id DatabaseAutonomousDatabaseSaasAdminUser#autonomous_database_id}.

---

##### `AccessType`<sup>Optional</sup> <a name="AccessType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.accessType"></a>

```csharp
public string AccessType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#access_type DatabaseAutonomousDatabaseSaasAdminUser#access_type}.

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.duration"></a>

```csharp
public double Duration { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#duration DatabaseAutonomousDatabaseSaasAdminUser#duration}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#id DatabaseAutonomousDatabaseSaasAdminUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#password DatabaseAutonomousDatabaseSaasAdminUser#password}.

---

##### `SecretId`<sup>Optional</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#secret_id DatabaseAutonomousDatabaseSaasAdminUser#secret_id}.

---

##### `SecretVersionNumber`<sup>Optional</sup> <a name="SecretVersionNumber" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.secretVersionNumber"></a>

```csharp
public double SecretVersionNumber { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#secret_version_number DatabaseAutonomousDatabaseSaasAdminUser#secret_version_number}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.timeouts"></a>

```csharp
public DatabaseAutonomousDatabaseSaasAdminUserTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts">DatabaseAutonomousDatabaseSaasAdminUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#timeouts DatabaseAutonomousDatabaseSaasAdminUser#timeouts}

---

##### `TimeSaasAdminUserEnabled`<sup>Optional</sup> <a name="TimeSaasAdminUserEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.timeSaasAdminUserEnabled"></a>

```csharp
public string TimeSaasAdminUserEnabled { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#time_saas_admin_user_enabled DatabaseAutonomousDatabaseSaasAdminUser#time_saas_admin_user_enabled}.

---

### DatabaseAutonomousDatabaseSaasAdminUserTimeouts <a name="DatabaseAutonomousDatabaseSaasAdminUserTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousDatabaseSaasAdminUserTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#create DatabaseAutonomousDatabaseSaasAdminUser#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#delete DatabaseAutonomousDatabaseSaasAdminUser#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#update DatabaseAutonomousDatabaseSaasAdminUser#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#create DatabaseAutonomousDatabaseSaasAdminUser#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#delete DatabaseAutonomousDatabaseSaasAdminUser#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#update DatabaseAutonomousDatabaseSaasAdminUser#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference <a name="DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



