# `mysqlMysqlDbSystem` Submodule <a name="`mysqlMysqlDbSystem` Submodule" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MysqlMysqlDbSystem <a name="MysqlMysqlDbSystem" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system oci_mysql_mysql_db_system}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystem(Construct Scope, string Id, MysqlMysqlDbSystemConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig">MysqlMysqlDbSystemConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig">MysqlMysqlDbSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putBackupPolicy">PutBackupPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putCustomerContacts">PutCustomerContacts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putDataStorage">PutDataStorage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putDeletionPolicy">PutDeletionPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putMaintenance">PutMaintenance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putSecureConnections">PutSecureConnections</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetAdminPassword">ResetAdminPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetAdminUsername">ResetAdminUsername</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetBackupPolicy">ResetBackupPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetConfigurationId">ResetConfigurationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetCrashRecovery">ResetCrashRecovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetCustomerContacts">ResetCustomerContacts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDatabaseManagement">ResetDatabaseManagement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDataStorage">ResetDataStorage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDataStorageSizeInGb">ResetDataStorageSizeInGb</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetFaultDomain">ResetFaultDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetHostnameLabel">ResetHostnameLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetIsHighlyAvailable">ResetIsHighlyAvailable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetMaintenance">ResetMaintenance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetMysqlVersion">ResetMysqlVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetPortX">ResetPortX</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetSecureConnections">ResetSecureConnections</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetShutdownType">ResetShutdownType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackupPolicy` <a name="PutBackupPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putBackupPolicy"></a>

```csharp
private void PutBackupPolicy(MysqlMysqlDbSystemBackupPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putBackupPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy">MysqlMysqlDbSystemBackupPolicy</a>

---

##### `PutCustomerContacts` <a name="PutCustomerContacts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putCustomerContacts"></a>

```csharp
private void PutCustomerContacts(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putCustomerContacts.parameter.value"></a>

- *Type:* object

---

##### `PutDataStorage` <a name="PutDataStorage" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putDataStorage"></a>

```csharp
private void PutDataStorage(MysqlMysqlDbSystemDataStorage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putDataStorage.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage">MysqlMysqlDbSystemDataStorage</a>

---

##### `PutDeletionPolicy` <a name="PutDeletionPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putDeletionPolicy"></a>

```csharp
private void PutDeletionPolicy(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putDeletionPolicy.parameter.value"></a>

- *Type:* object

---

##### `PutMaintenance` <a name="PutMaintenance" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putMaintenance"></a>

```csharp
private void PutMaintenance(MysqlMysqlDbSystemMaintenance Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putMaintenance.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance">MysqlMysqlDbSystemMaintenance</a>

---

##### `PutSecureConnections` <a name="PutSecureConnections" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putSecureConnections"></a>

```csharp
private void PutSecureConnections(MysqlMysqlDbSystemSecureConnections Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putSecureConnections.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections">MysqlMysqlDbSystemSecureConnections</a>

---

##### `PutSource` <a name="PutSource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putSource"></a>

```csharp
private void PutSource(MysqlMysqlDbSystemSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putSource.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource">MysqlMysqlDbSystemSource</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putTimeouts"></a>

```csharp
private void PutTimeouts(MysqlMysqlDbSystemTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts">MysqlMysqlDbSystemTimeouts</a>

---

##### `ResetAdminPassword` <a name="ResetAdminPassword" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetAdminPassword"></a>

```csharp
private void ResetAdminPassword()
```

##### `ResetAdminUsername` <a name="ResetAdminUsername" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetAdminUsername"></a>

```csharp
private void ResetAdminUsername()
```

##### `ResetBackupPolicy` <a name="ResetBackupPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetBackupPolicy"></a>

```csharp
private void ResetBackupPolicy()
```

##### `ResetConfigurationId` <a name="ResetConfigurationId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetConfigurationId"></a>

```csharp
private void ResetConfigurationId()
```

##### `ResetCrashRecovery` <a name="ResetCrashRecovery" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetCrashRecovery"></a>

```csharp
private void ResetCrashRecovery()
```

##### `ResetCustomerContacts` <a name="ResetCustomerContacts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetCustomerContacts"></a>

```csharp
private void ResetCustomerContacts()
```

##### `ResetDatabaseManagement` <a name="ResetDatabaseManagement" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDatabaseManagement"></a>

```csharp
private void ResetDatabaseManagement()
```

##### `ResetDataStorage` <a name="ResetDataStorage" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDataStorage"></a>

```csharp
private void ResetDataStorage()
```

##### `ResetDataStorageSizeInGb` <a name="ResetDataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDataStorageSizeInGb"></a>

```csharp
private void ResetDataStorageSizeInGb()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFaultDomain` <a name="ResetFaultDomain" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetFaultDomain"></a>

```csharp
private void ResetFaultDomain()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetHostnameLabel` <a name="ResetHostnameLabel" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetHostnameLabel"></a>

```csharp
private void ResetHostnameLabel()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetIpAddress"></a>

```csharp
private void ResetIpAddress()
```

##### `ResetIsHighlyAvailable` <a name="ResetIsHighlyAvailable" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetIsHighlyAvailable"></a>

```csharp
private void ResetIsHighlyAvailable()
```

##### `ResetMaintenance` <a name="ResetMaintenance" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetMaintenance"></a>

```csharp
private void ResetMaintenance()
```

##### `ResetMysqlVersion` <a name="ResetMysqlVersion" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetMysqlVersion"></a>

```csharp
private void ResetMysqlVersion()
```

##### `ResetPort` <a name="ResetPort" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPortX` <a name="ResetPortX" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetPortX"></a>

```csharp
private void ResetPortX()
```

##### `ResetSecureConnections` <a name="ResetSecureConnections" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetSecureConnections"></a>

```csharp
private void ResetSecureConnections()
```

##### `ResetShutdownType` <a name="ResetShutdownType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetShutdownType"></a>

```csharp
private void ResetShutdownType()
```

##### `ResetSource` <a name="ResetSource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetSource"></a>

```csharp
private void ResetSource()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MysqlMysqlDbSystem resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MysqlMysqlDbSystem.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MysqlMysqlDbSystem.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MysqlMysqlDbSystem.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MysqlMysqlDbSystem.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MysqlMysqlDbSystem resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MysqlMysqlDbSystem to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MysqlMysqlDbSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MysqlMysqlDbSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.backupPolicy">BackupPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference">MysqlMysqlDbSystemBackupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.channels">Channels</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList">MysqlMysqlDbSystemChannelsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.currentPlacement">CurrentPlacement</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList">MysqlMysqlDbSystemCurrentPlacementList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.customerContacts">CustomerContacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList">MysqlMysqlDbSystemCustomerContactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dataStorage">DataStorage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference">MysqlMysqlDbSystemDataStorageOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.deletionPolicy">DeletionPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList">MysqlMysqlDbSystemDeletionPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.endpoints">Endpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList">MysqlMysqlDbSystemEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.heatWaveCluster">HeatWaveCluster</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList">MysqlMysqlDbSystemHeatWaveClusterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.isHeatWaveClusterAttached">IsHeatWaveClusterAttached</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.maintenance">Maintenance</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference">MysqlMysqlDbSystemMaintenanceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.pointInTimeRecoveryDetails">PointInTimeRecoveryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList">MysqlMysqlDbSystemPointInTimeRecoveryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.secureConnections">SecureConnections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference">MysqlMysqlDbSystemSecureConnectionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.source">Source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference">MysqlMysqlDbSystemSourceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference">MysqlMysqlDbSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.adminPasswordInput">AdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.adminUsernameInput">AdminUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.backupPolicyInput">BackupPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy">MysqlMysqlDbSystemBackupPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.configurationIdInput">ConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.crashRecoveryInput">CrashRecoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.customerContactsInput">CustomerContactsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.databaseManagementInput">DatabaseManagementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dataStorageInput">DataStorageInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage">MysqlMysqlDbSystemDataStorage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dataStorageSizeInGbInput">DataStorageSizeInGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.faultDomainInput">FaultDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.hostnameLabelInput">HostnameLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.isHighlyAvailableInput">IsHighlyAvailableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.maintenanceInput">MaintenanceInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance">MysqlMysqlDbSystemMaintenance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.mysqlVersionInput">MysqlVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.portXInput">PortXInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.secureConnectionsInput">SecureConnectionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections">MysqlMysqlDbSystemSecureConnections</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.shapeNameInput">ShapeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.shutdownTypeInput">ShutdownTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.sourceInput">SourceInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource">MysqlMysqlDbSystemSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.adminPassword">AdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.adminUsername">AdminUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.configurationId">ConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.crashRecovery">CrashRecovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.databaseManagement">DatabaseManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dataStorageSizeInGb">DataStorageSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.faultDomain">FaultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.hostnameLabel">HostnameLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.isHighlyAvailable">IsHighlyAvailable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.mysqlVersion">MysqlVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.portX">PortX</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.shapeName">ShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.shutdownType">ShutdownType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BackupPolicy`<sup>Required</sup> <a name="BackupPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.backupPolicy"></a>

```csharp
public MysqlMysqlDbSystemBackupPolicyOutputReference BackupPolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference">MysqlMysqlDbSystemBackupPolicyOutputReference</a>

---

##### `Channels`<sup>Required</sup> <a name="Channels" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.channels"></a>

```csharp
public MysqlMysqlDbSystemChannelsList Channels { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList">MysqlMysqlDbSystemChannelsList</a>

---

##### `CurrentPlacement`<sup>Required</sup> <a name="CurrentPlacement" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.currentPlacement"></a>

```csharp
public MysqlMysqlDbSystemCurrentPlacementList CurrentPlacement { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList">MysqlMysqlDbSystemCurrentPlacementList</a>

---

##### `CustomerContacts`<sup>Required</sup> <a name="CustomerContacts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.customerContacts"></a>

```csharp
public MysqlMysqlDbSystemCustomerContactsList CustomerContacts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList">MysqlMysqlDbSystemCustomerContactsList</a>

---

##### `DataStorage`<sup>Required</sup> <a name="DataStorage" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dataStorage"></a>

```csharp
public MysqlMysqlDbSystemDataStorageOutputReference DataStorage { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference">MysqlMysqlDbSystemDataStorageOutputReference</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.deletionPolicy"></a>

```csharp
public MysqlMysqlDbSystemDeletionPolicyList DeletionPolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList">MysqlMysqlDbSystemDeletionPolicyList</a>

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.endpoints"></a>

```csharp
public MysqlMysqlDbSystemEndpointsList Endpoints { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList">MysqlMysqlDbSystemEndpointsList</a>

---

##### `HeatWaveCluster`<sup>Required</sup> <a name="HeatWaveCluster" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.heatWaveCluster"></a>

```csharp
public MysqlMysqlDbSystemHeatWaveClusterList HeatWaveCluster { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList">MysqlMysqlDbSystemHeatWaveClusterList</a>

---

##### `IsHeatWaveClusterAttached`<sup>Required</sup> <a name="IsHeatWaveClusterAttached" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.isHeatWaveClusterAttached"></a>

```csharp
public IResolvable IsHeatWaveClusterAttached { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Maintenance`<sup>Required</sup> <a name="Maintenance" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.maintenance"></a>

```csharp
public MysqlMysqlDbSystemMaintenanceOutputReference Maintenance { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference">MysqlMysqlDbSystemMaintenanceOutputReference</a>

---

##### `PointInTimeRecoveryDetails`<sup>Required</sup> <a name="PointInTimeRecoveryDetails" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.pointInTimeRecoveryDetails"></a>

```csharp
public MysqlMysqlDbSystemPointInTimeRecoveryDetailsList PointInTimeRecoveryDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList">MysqlMysqlDbSystemPointInTimeRecoveryDetailsList</a>

---

##### `SecureConnections`<sup>Required</sup> <a name="SecureConnections" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.secureConnections"></a>

```csharp
public MysqlMysqlDbSystemSecureConnectionsOutputReference SecureConnections { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference">MysqlMysqlDbSystemSecureConnectionsOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.source"></a>

```csharp
public MysqlMysqlDbSystemSourceOutputReference Source { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference">MysqlMysqlDbSystemSourceOutputReference</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.timeouts"></a>

```csharp
public MysqlMysqlDbSystemTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference">MysqlMysqlDbSystemTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `AdminPasswordInput`<sup>Optional</sup> <a name="AdminPasswordInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.adminPasswordInput"></a>

```csharp
public string AdminPasswordInput { get; }
```

- *Type:* string

---

##### `AdminUsernameInput`<sup>Optional</sup> <a name="AdminUsernameInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.adminUsernameInput"></a>

```csharp
public string AdminUsernameInput { get; }
```

- *Type:* string

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.availabilityDomainInput"></a>

```csharp
public string AvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `BackupPolicyInput`<sup>Optional</sup> <a name="BackupPolicyInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.backupPolicyInput"></a>

```csharp
public MysqlMysqlDbSystemBackupPolicy BackupPolicyInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy">MysqlMysqlDbSystemBackupPolicy</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `ConfigurationIdInput`<sup>Optional</sup> <a name="ConfigurationIdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.configurationIdInput"></a>

```csharp
public string ConfigurationIdInput { get; }
```

- *Type:* string

---

##### `CrashRecoveryInput`<sup>Optional</sup> <a name="CrashRecoveryInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.crashRecoveryInput"></a>

```csharp
public string CrashRecoveryInput { get; }
```

- *Type:* string

---

##### `CustomerContactsInput`<sup>Optional</sup> <a name="CustomerContactsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.customerContactsInput"></a>

```csharp
public object CustomerContactsInput { get; }
```

- *Type:* object

---

##### `DatabaseManagementInput`<sup>Optional</sup> <a name="DatabaseManagementInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.databaseManagementInput"></a>

```csharp
public string DatabaseManagementInput { get; }
```

- *Type:* string

---

##### `DataStorageInput`<sup>Optional</sup> <a name="DataStorageInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dataStorageInput"></a>

```csharp
public MysqlMysqlDbSystemDataStorage DataStorageInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage">MysqlMysqlDbSystemDataStorage</a>

---

##### `DataStorageSizeInGbInput`<sup>Optional</sup> <a name="DataStorageSizeInGbInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dataStorageSizeInGbInput"></a>

```csharp
public double DataStorageSizeInGbInput { get; }
```

- *Type:* double

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.deletionPolicyInput"></a>

```csharp
public object DeletionPolicyInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FaultDomainInput`<sup>Optional</sup> <a name="FaultDomainInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.faultDomainInput"></a>

```csharp
public string FaultDomainInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HostnameLabelInput`<sup>Optional</sup> <a name="HostnameLabelInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.hostnameLabelInput"></a>

```csharp
public string HostnameLabelInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `IsHighlyAvailableInput`<sup>Optional</sup> <a name="IsHighlyAvailableInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.isHighlyAvailableInput"></a>

```csharp
public object IsHighlyAvailableInput { get; }
```

- *Type:* object

---

##### `MaintenanceInput`<sup>Optional</sup> <a name="MaintenanceInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.maintenanceInput"></a>

```csharp
public MysqlMysqlDbSystemMaintenance MaintenanceInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance">MysqlMysqlDbSystemMaintenance</a>

---

##### `MysqlVersionInput`<sup>Optional</sup> <a name="MysqlVersionInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.mysqlVersionInput"></a>

```csharp
public string MysqlVersionInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PortXInput`<sup>Optional</sup> <a name="PortXInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.portXInput"></a>

```csharp
public double PortXInput { get; }
```

- *Type:* double

---

##### `SecureConnectionsInput`<sup>Optional</sup> <a name="SecureConnectionsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.secureConnectionsInput"></a>

```csharp
public MysqlMysqlDbSystemSecureConnections SecureConnectionsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections">MysqlMysqlDbSystemSecureConnections</a>

---

##### `ShapeNameInput`<sup>Optional</sup> <a name="ShapeNameInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.shapeNameInput"></a>

```csharp
public string ShapeNameInput { get; }
```

- *Type:* string

---

##### `ShutdownTypeInput`<sup>Optional</sup> <a name="ShutdownTypeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.shutdownTypeInput"></a>

```csharp
public string ShutdownTypeInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.sourceInput"></a>

```csharp
public MysqlMysqlDbSystemSource SourceInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource">MysqlMysqlDbSystemSource</a>

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.adminPassword"></a>

```csharp
public string AdminPassword { get; }
```

- *Type:* string

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.adminUsername"></a>

```csharp
public string AdminUsername { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConfigurationId`<sup>Required</sup> <a name="ConfigurationId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.configurationId"></a>

```csharp
public string ConfigurationId { get; }
```

- *Type:* string

---

##### `CrashRecovery`<sup>Required</sup> <a name="CrashRecovery" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.crashRecovery"></a>

```csharp
public string CrashRecovery { get; }
```

- *Type:* string

---

##### `DatabaseManagement`<sup>Required</sup> <a name="DatabaseManagement" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.databaseManagement"></a>

```csharp
public string DatabaseManagement { get; }
```

- *Type:* string

---

##### `DataStorageSizeInGb`<sup>Required</sup> <a name="DataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dataStorageSizeInGb"></a>

```csharp
public double DataStorageSizeInGb { get; }
```

- *Type:* double

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.faultDomain"></a>

```csharp
public string FaultDomain { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HostnameLabel`<sup>Required</sup> <a name="HostnameLabel" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.hostnameLabel"></a>

```csharp
public string HostnameLabel { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `IsHighlyAvailable`<sup>Required</sup> <a name="IsHighlyAvailable" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.isHighlyAvailable"></a>

```csharp
public object IsHighlyAvailable { get; }
```

- *Type:* object

---

##### `MysqlVersion`<sup>Required</sup> <a name="MysqlVersion" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.mysqlVersion"></a>

```csharp
public string MysqlVersion { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PortX`<sup>Required</sup> <a name="PortX" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.portX"></a>

```csharp
public double PortX { get; }
```

- *Type:* double

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.shapeName"></a>

```csharp
public string ShapeName { get; }
```

- *Type:* string

---

##### `ShutdownType`<sup>Required</sup> <a name="ShutdownType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.shutdownType"></a>

```csharp
public string ShutdownType { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MysqlMysqlDbSystemBackupPolicy <a name="MysqlMysqlDbSystemBackupPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemBackupPolicy {
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    object IsEnabled = null,
    MysqlMysqlDbSystemBackupPolicyPitrPolicy PitrPolicy = null,
    double RetentionInDays = null,
    string WindowStartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#defined_tags MysqlMysqlDbSystem#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#freeform_tags MysqlMysqlDbSystem#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_enabled MysqlMysqlDbSystem#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.pitrPolicy">PitrPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy">MysqlMysqlDbSystemBackupPolicyPitrPolicy</a></code> | pitr_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.retentionInDays">RetentionInDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#retention_in_days MysqlMysqlDbSystem#retention_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.windowStartTime">WindowStartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#window_start_time MysqlMysqlDbSystem#window_start_time}. |

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#defined_tags MysqlMysqlDbSystem#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#freeform_tags MysqlMysqlDbSystem#freeform_tags}.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_enabled MysqlMysqlDbSystem#is_enabled}.

---

##### `PitrPolicy`<sup>Optional</sup> <a name="PitrPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.pitrPolicy"></a>

```csharp
public MysqlMysqlDbSystemBackupPolicyPitrPolicy PitrPolicy { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy">MysqlMysqlDbSystemBackupPolicyPitrPolicy</a>

pitr_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#pitr_policy MysqlMysqlDbSystem#pitr_policy}

---

##### `RetentionInDays`<sup>Optional</sup> <a name="RetentionInDays" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.retentionInDays"></a>

```csharp
public double RetentionInDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#retention_in_days MysqlMysqlDbSystem#retention_in_days}.

---

##### `WindowStartTime`<sup>Optional</sup> <a name="WindowStartTime" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.windowStartTime"></a>

```csharp
public string WindowStartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#window_start_time MysqlMysqlDbSystem#window_start_time}.

---

### MysqlMysqlDbSystemBackupPolicyPitrPolicy <a name="MysqlMysqlDbSystemBackupPolicyPitrPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemBackupPolicyPitrPolicy {
    object IsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_enabled MysqlMysqlDbSystem#is_enabled}. |

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_enabled MysqlMysqlDbSystem#is_enabled}.

---

### MysqlMysqlDbSystemChannels <a name="MysqlMysqlDbSystemChannels" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannels"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemChannels {

};
```


### MysqlMysqlDbSystemChannelsSource <a name="MysqlMysqlDbSystemChannelsSource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemChannelsSource {

};
```


### MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling <a name="MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling {

};
```


### MysqlMysqlDbSystemChannelsSourceSslCaCertificate <a name="MysqlMysqlDbSystemChannelsSourceSslCaCertificate" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemChannelsSourceSslCaCertificate {

};
```


### MysqlMysqlDbSystemChannelsTarget <a name="MysqlMysqlDbSystemChannelsTarget" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTarget"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemChannelsTarget {

};
```


### MysqlMysqlDbSystemChannelsTargetFilters <a name="MysqlMysqlDbSystemChannelsTargetFilters" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFilters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemChannelsTargetFilters {

};
```


### MysqlMysqlDbSystemConfig <a name="MysqlMysqlDbSystemConfig" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AvailabilityDomain,
    string CompartmentId,
    string ShapeName,
    string SubnetId,
    string AdminPassword = null,
    string AdminUsername = null,
    MysqlMysqlDbSystemBackupPolicy BackupPolicy = null,
    string ConfigurationId = null,
    string CrashRecovery = null,
    object CustomerContacts = null,
    string DatabaseManagement = null,
    MysqlMysqlDbSystemDataStorage DataStorage = null,
    double DataStorageSizeInGb = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    object DeletionPolicy = null,
    string Description = null,
    string DisplayName = null,
    string FaultDomain = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string HostnameLabel = null,
    string Id = null,
    string IpAddress = null,
    object IsHighlyAvailable = null,
    MysqlMysqlDbSystemMaintenance Maintenance = null,
    string MysqlVersion = null,
    double Port = null,
    double PortX = null,
    MysqlMysqlDbSystemSecureConnections SecureConnections = null,
    string ShutdownType = null,
    MysqlMysqlDbSystemSource Source = null,
    string State = null,
    MysqlMysqlDbSystemTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#availability_domain MysqlMysqlDbSystem#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#compartment_id MysqlMysqlDbSystem#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.shapeName">ShapeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#shape_name MysqlMysqlDbSystem#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#subnet_id MysqlMysqlDbSystem#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.adminPassword">AdminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#admin_password MysqlMysqlDbSystem#admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.adminUsername">AdminUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#admin_username MysqlMysqlDbSystem#admin_username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.backupPolicy">BackupPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy">MysqlMysqlDbSystemBackupPolicy</a></code> | backup_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.configurationId">ConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#configuration_id MysqlMysqlDbSystem#configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.crashRecovery">CrashRecovery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#crash_recovery MysqlMysqlDbSystem#crash_recovery}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.customerContacts">CustomerContacts</a></code> | <code>object</code> | customer_contacts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.databaseManagement">DatabaseManagement</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#database_management MysqlMysqlDbSystem#database_management}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.dataStorage">DataStorage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage">MysqlMysqlDbSystemDataStorage</a></code> | data_storage block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.dataStorageSizeInGb">DataStorageSizeInGb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#data_storage_size_in_gb MysqlMysqlDbSystem#data_storage_size_in_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#defined_tags MysqlMysqlDbSystem#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>object</code> | deletion_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#description MysqlMysqlDbSystem#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#display_name MysqlMysqlDbSystem#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.faultDomain">FaultDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#fault_domain MysqlMysqlDbSystem#fault_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#freeform_tags MysqlMysqlDbSystem#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.hostnameLabel">HostnameLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#hostname_label MysqlMysqlDbSystem#hostname_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#id MysqlMysqlDbSystem#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.ipAddress">IpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#ip_address MysqlMysqlDbSystem#ip_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.isHighlyAvailable">IsHighlyAvailable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_highly_available MysqlMysqlDbSystem#is_highly_available}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.maintenance">Maintenance</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance">MysqlMysqlDbSystemMaintenance</a></code> | maintenance block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.mysqlVersion">MysqlVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#mysql_version MysqlMysqlDbSystem#mysql_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#port MysqlMysqlDbSystem#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.portX">PortX</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#port_x MysqlMysqlDbSystem#port_x}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.secureConnections">SecureConnections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections">MysqlMysqlDbSystemSecureConnections</a></code> | secure_connections block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.shutdownType">ShutdownType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#shutdown_type MysqlMysqlDbSystem#shutdown_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.source">Source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource">MysqlMysqlDbSystemSource</a></code> | source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#state MysqlMysqlDbSystem#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts">MysqlMysqlDbSystemTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#availability_domain MysqlMysqlDbSystem#availability_domain}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#compartment_id MysqlMysqlDbSystem#compartment_id}.

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.shapeName"></a>

```csharp
public string ShapeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#shape_name MysqlMysqlDbSystem#shape_name}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#subnet_id MysqlMysqlDbSystem#subnet_id}.

---

##### `AdminPassword`<sup>Optional</sup> <a name="AdminPassword" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.adminPassword"></a>

```csharp
public string AdminPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#admin_password MysqlMysqlDbSystem#admin_password}.

---

##### `AdminUsername`<sup>Optional</sup> <a name="AdminUsername" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.adminUsername"></a>

```csharp
public string AdminUsername { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#admin_username MysqlMysqlDbSystem#admin_username}.

---

##### `BackupPolicy`<sup>Optional</sup> <a name="BackupPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.backupPolicy"></a>

```csharp
public MysqlMysqlDbSystemBackupPolicy BackupPolicy { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy">MysqlMysqlDbSystemBackupPolicy</a>

backup_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#backup_policy MysqlMysqlDbSystem#backup_policy}

---

##### `ConfigurationId`<sup>Optional</sup> <a name="ConfigurationId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.configurationId"></a>

```csharp
public string ConfigurationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#configuration_id MysqlMysqlDbSystem#configuration_id}.

---

##### `CrashRecovery`<sup>Optional</sup> <a name="CrashRecovery" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.crashRecovery"></a>

```csharp
public string CrashRecovery { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#crash_recovery MysqlMysqlDbSystem#crash_recovery}.

---

##### `CustomerContacts`<sup>Optional</sup> <a name="CustomerContacts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.customerContacts"></a>

```csharp
public object CustomerContacts { get; set; }
```

- *Type:* object

customer_contacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#customer_contacts MysqlMysqlDbSystem#customer_contacts}

---

##### `DatabaseManagement`<sup>Optional</sup> <a name="DatabaseManagement" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.databaseManagement"></a>

```csharp
public string DatabaseManagement { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#database_management MysqlMysqlDbSystem#database_management}.

---

##### `DataStorage`<sup>Optional</sup> <a name="DataStorage" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.dataStorage"></a>

```csharp
public MysqlMysqlDbSystemDataStorage DataStorage { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage">MysqlMysqlDbSystemDataStorage</a>

data_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#data_storage MysqlMysqlDbSystem#data_storage}

---

##### `DataStorageSizeInGb`<sup>Optional</sup> <a name="DataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.dataStorageSizeInGb"></a>

```csharp
public double DataStorageSizeInGb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#data_storage_size_in_gb MysqlMysqlDbSystem#data_storage_size_in_gb}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#defined_tags MysqlMysqlDbSystem#defined_tags}.

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.deletionPolicy"></a>

```csharp
public object DeletionPolicy { get; set; }
```

- *Type:* object

deletion_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#deletion_policy MysqlMysqlDbSystem#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#description MysqlMysqlDbSystem#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#display_name MysqlMysqlDbSystem#display_name}.

---

##### `FaultDomain`<sup>Optional</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.faultDomain"></a>

```csharp
public string FaultDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#fault_domain MysqlMysqlDbSystem#fault_domain}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#freeform_tags MysqlMysqlDbSystem#freeform_tags}.

---

##### `HostnameLabel`<sup>Optional</sup> <a name="HostnameLabel" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.hostnameLabel"></a>

```csharp
public string HostnameLabel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#hostname_label MysqlMysqlDbSystem#hostname_label}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#id MysqlMysqlDbSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#ip_address MysqlMysqlDbSystem#ip_address}.

---

##### `IsHighlyAvailable`<sup>Optional</sup> <a name="IsHighlyAvailable" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.isHighlyAvailable"></a>

```csharp
public object IsHighlyAvailable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_highly_available MysqlMysqlDbSystem#is_highly_available}.

---

##### `Maintenance`<sup>Optional</sup> <a name="Maintenance" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.maintenance"></a>

```csharp
public MysqlMysqlDbSystemMaintenance Maintenance { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance">MysqlMysqlDbSystemMaintenance</a>

maintenance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#maintenance MysqlMysqlDbSystem#maintenance}

---

##### `MysqlVersion`<sup>Optional</sup> <a name="MysqlVersion" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.mysqlVersion"></a>

```csharp
public string MysqlVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#mysql_version MysqlMysqlDbSystem#mysql_version}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#port MysqlMysqlDbSystem#port}.

---

##### `PortX`<sup>Optional</sup> <a name="PortX" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.portX"></a>

```csharp
public double PortX { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#port_x MysqlMysqlDbSystem#port_x}.

---

##### `SecureConnections`<sup>Optional</sup> <a name="SecureConnections" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.secureConnections"></a>

```csharp
public MysqlMysqlDbSystemSecureConnections SecureConnections { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections">MysqlMysqlDbSystemSecureConnections</a>

secure_connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#secure_connections MysqlMysqlDbSystem#secure_connections}

---

##### `ShutdownType`<sup>Optional</sup> <a name="ShutdownType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.shutdownType"></a>

```csharp
public string ShutdownType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#shutdown_type MysqlMysqlDbSystem#shutdown_type}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.source"></a>

```csharp
public MysqlMysqlDbSystemSource Source { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource">MysqlMysqlDbSystemSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#source MysqlMysqlDbSystem#source}

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#state MysqlMysqlDbSystem#state}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.timeouts"></a>

```csharp
public MysqlMysqlDbSystemTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts">MysqlMysqlDbSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#timeouts MysqlMysqlDbSystem#timeouts}

---

### MysqlMysqlDbSystemCurrentPlacement <a name="MysqlMysqlDbSystemCurrentPlacement" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacement"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemCurrentPlacement {

};
```


### MysqlMysqlDbSystemCustomerContacts <a name="MysqlMysqlDbSystemCustomerContacts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemCustomerContacts {
    string Email
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts.property.email">Email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#email MysqlMysqlDbSystem#email}. |

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#email MysqlMysqlDbSystem#email}.

---

### MysqlMysqlDbSystemDataStorage <a name="MysqlMysqlDbSystemDataStorage" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemDataStorage {
    object IsAutoExpandStorageEnabled = null,
    double MaxStorageSizeInGbs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage.property.isAutoExpandStorageEnabled">IsAutoExpandStorageEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_auto_expand_storage_enabled MysqlMysqlDbSystem#is_auto_expand_storage_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage.property.maxStorageSizeInGbs">MaxStorageSizeInGbs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#max_storage_size_in_gbs MysqlMysqlDbSystem#max_storage_size_in_gbs}. |

---

##### `IsAutoExpandStorageEnabled`<sup>Optional</sup> <a name="IsAutoExpandStorageEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage.property.isAutoExpandStorageEnabled"></a>

```csharp
public object IsAutoExpandStorageEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_auto_expand_storage_enabled MysqlMysqlDbSystem#is_auto_expand_storage_enabled}.

---

##### `MaxStorageSizeInGbs`<sup>Optional</sup> <a name="MaxStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage.property.maxStorageSizeInGbs"></a>

```csharp
public double MaxStorageSizeInGbs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#max_storage_size_in_gbs MysqlMysqlDbSystem#max_storage_size_in_gbs}.

---

### MysqlMysqlDbSystemDeletionPolicy <a name="MysqlMysqlDbSystemDeletionPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemDeletionPolicy {
    string AutomaticBackupRetention = null,
    string FinalBackup = null,
    object IsDeleteProtected = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy.property.automaticBackupRetention">AutomaticBackupRetention</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#automatic_backup_retention MysqlMysqlDbSystem#automatic_backup_retention}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy.property.finalBackup">FinalBackup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#final_backup MysqlMysqlDbSystem#final_backup}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy.property.isDeleteProtected">IsDeleteProtected</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_delete_protected MysqlMysqlDbSystem#is_delete_protected}. |

---

##### `AutomaticBackupRetention`<sup>Optional</sup> <a name="AutomaticBackupRetention" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy.property.automaticBackupRetention"></a>

```csharp
public string AutomaticBackupRetention { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#automatic_backup_retention MysqlMysqlDbSystem#automatic_backup_retention}.

---

##### `FinalBackup`<sup>Optional</sup> <a name="FinalBackup" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy.property.finalBackup"></a>

```csharp
public string FinalBackup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#final_backup MysqlMysqlDbSystem#final_backup}.

---

##### `IsDeleteProtected`<sup>Optional</sup> <a name="IsDeleteProtected" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy.property.isDeleteProtected"></a>

```csharp
public object IsDeleteProtected { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_delete_protected MysqlMysqlDbSystem#is_delete_protected}.

---

### MysqlMysqlDbSystemEndpoints <a name="MysqlMysqlDbSystemEndpoints" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemEndpoints {

};
```


### MysqlMysqlDbSystemHeatWaveCluster <a name="MysqlMysqlDbSystemHeatWaveCluster" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveCluster"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemHeatWaveCluster {

};
```


### MysqlMysqlDbSystemMaintenance <a name="MysqlMysqlDbSystemMaintenance" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemMaintenance {
    string WindowStartTime
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance.property.windowStartTime">WindowStartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#window_start_time MysqlMysqlDbSystem#window_start_time}. |

---

##### `WindowStartTime`<sup>Required</sup> <a name="WindowStartTime" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance.property.windowStartTime"></a>

```csharp
public string WindowStartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#window_start_time MysqlMysqlDbSystem#window_start_time}.

---

### MysqlMysqlDbSystemPointInTimeRecoveryDetails <a name="MysqlMysqlDbSystemPointInTimeRecoveryDetails" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemPointInTimeRecoveryDetails {

};
```


### MysqlMysqlDbSystemSecureConnections <a name="MysqlMysqlDbSystemSecureConnections" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemSecureConnections {
    string CertificateGenerationType,
    string CertificateId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections.property.certificateGenerationType">CertificateGenerationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#certificate_generation_type MysqlMysqlDbSystem#certificate_generation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections.property.certificateId">CertificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#certificate_id MysqlMysqlDbSystem#certificate_id}. |

---

##### `CertificateGenerationType`<sup>Required</sup> <a name="CertificateGenerationType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections.property.certificateGenerationType"></a>

```csharp
public string CertificateGenerationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#certificate_generation_type MysqlMysqlDbSystem#certificate_generation_type}.

---

##### `CertificateId`<sup>Optional</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections.property.certificateId"></a>

```csharp
public string CertificateId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#certificate_id MysqlMysqlDbSystem#certificate_id}.

---

### MysqlMysqlDbSystemSource <a name="MysqlMysqlDbSystemSource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemSource {
    string SourceType,
    string BackupId = null,
    string DbSystemId = null,
    string RecoveryPoint = null,
    string SourceUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.sourceType">SourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#source_type MysqlMysqlDbSystem#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.backupId">BackupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#backup_id MysqlMysqlDbSystem#backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#db_system_id MysqlMysqlDbSystem#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.recoveryPoint">RecoveryPoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#recovery_point MysqlMysqlDbSystem#recovery_point}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.sourceUrl">SourceUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#source_url MysqlMysqlDbSystem#source_url}. |

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.sourceType"></a>

```csharp
public string SourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#source_type MysqlMysqlDbSystem#source_type}.

---

##### `BackupId`<sup>Optional</sup> <a name="BackupId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.backupId"></a>

```csharp
public string BackupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#backup_id MysqlMysqlDbSystem#backup_id}.

---

##### `DbSystemId`<sup>Optional</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#db_system_id MysqlMysqlDbSystem#db_system_id}.

---

##### `RecoveryPoint`<sup>Optional</sup> <a name="RecoveryPoint" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.recoveryPoint"></a>

```csharp
public string RecoveryPoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#recovery_point MysqlMysqlDbSystem#recovery_point}.

---

##### `SourceUrl`<sup>Optional</sup> <a name="SourceUrl" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.sourceUrl"></a>

```csharp
public string SourceUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#source_url MysqlMysqlDbSystem#source_url}.

---

### MysqlMysqlDbSystemTimeouts <a name="MysqlMysqlDbSystemTimeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#create MysqlMysqlDbSystem#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#delete MysqlMysqlDbSystem#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#update MysqlMysqlDbSystem#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#create MysqlMysqlDbSystem#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#delete MysqlMysqlDbSystem#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#update MysqlMysqlDbSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MysqlMysqlDbSystemBackupPolicyOutputReference <a name="MysqlMysqlDbSystemBackupPolicyOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemBackupPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.putPitrPolicy">PutPitrPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetPitrPolicy">ResetPitrPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetRetentionInDays">ResetRetentionInDays</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetWindowStartTime">ResetWindowStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPitrPolicy` <a name="PutPitrPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.putPitrPolicy"></a>

```csharp
private void PutPitrPolicy(MysqlMysqlDbSystemBackupPolicyPitrPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.putPitrPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy">MysqlMysqlDbSystemBackupPolicyPitrPolicy</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```

##### `ResetPitrPolicy` <a name="ResetPitrPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetPitrPolicy"></a>

```csharp
private void ResetPitrPolicy()
```

##### `ResetRetentionInDays` <a name="ResetRetentionInDays" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetRetentionInDays"></a>

```csharp
private void ResetRetentionInDays()
```

##### `ResetWindowStartTime` <a name="ResetWindowStartTime" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetWindowStartTime"></a>

```csharp
private void ResetWindowStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.pitrPolicy">PitrPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference">MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.pitrPolicyInput">PitrPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy">MysqlMysqlDbSystemBackupPolicyPitrPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.retentionInDaysInput">RetentionInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.windowStartTimeInput">WindowStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.retentionInDays">RetentionInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.windowStartTime">WindowStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy">MysqlMysqlDbSystemBackupPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PitrPolicy`<sup>Required</sup> <a name="PitrPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.pitrPolicy"></a>

```csharp
public MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference PitrPolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference">MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference</a>

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `PitrPolicyInput`<sup>Optional</sup> <a name="PitrPolicyInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.pitrPolicyInput"></a>

```csharp
public MysqlMysqlDbSystemBackupPolicyPitrPolicy PitrPolicyInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy">MysqlMysqlDbSystemBackupPolicyPitrPolicy</a>

---

##### `RetentionInDaysInput`<sup>Optional</sup> <a name="RetentionInDaysInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.retentionInDaysInput"></a>

```csharp
public double RetentionInDaysInput { get; }
```

- *Type:* double

---

##### `WindowStartTimeInput`<sup>Optional</sup> <a name="WindowStartTimeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.windowStartTimeInput"></a>

```csharp
public string WindowStartTimeInput { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `RetentionInDays`<sup>Required</sup> <a name="RetentionInDays" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.retentionInDays"></a>

```csharp
public double RetentionInDays { get; }
```

- *Type:* double

---

##### `WindowStartTime`<sup>Required</sup> <a name="WindowStartTime" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.windowStartTime"></a>

```csharp
public string WindowStartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.internalValue"></a>

```csharp
public MysqlMysqlDbSystemBackupPolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy">MysqlMysqlDbSystemBackupPolicy</a>

---


### MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference <a name="MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy">MysqlMysqlDbSystemBackupPolicyPitrPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.internalValue"></a>

```csharp
public MysqlMysqlDbSystemBackupPolicyPitrPolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy">MysqlMysqlDbSystemBackupPolicyPitrPolicy</a>

---


### MysqlMysqlDbSystemChannelsList <a name="MysqlMysqlDbSystemChannelsList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemChannelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.get"></a>

```csharp
private MysqlMysqlDbSystemChannelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MysqlMysqlDbSystemChannelsOutputReference <a name="MysqlMysqlDbSystemChannelsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemChannelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.source">Source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList">MysqlMysqlDbSystemChannelsSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.target">Target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList">MysqlMysqlDbSystemChannelsTargetList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannels">MysqlMysqlDbSystemChannels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.source"></a>

```csharp
public MysqlMysqlDbSystemChannelsSourceList Source { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList">MysqlMysqlDbSystemChannelsSourceList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.target"></a>

```csharp
public MysqlMysqlDbSystemChannelsTargetList Target { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList">MysqlMysqlDbSystemChannelsTargetList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.internalValue"></a>

```csharp
public MysqlMysqlDbSystemChannels InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannels">MysqlMysqlDbSystemChannels</a>

---


### MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList <a name="MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.get"></a>

```csharp
private MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference <a name="MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogFilename">LastConfiguredLogFilename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogOffset">LastConfiguredLogOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling">MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastConfiguredLogFilename`<sup>Required</sup> <a name="LastConfiguredLogFilename" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogFilename"></a>

```csharp
public string LastConfiguredLogFilename { get; }
```

- *Type:* string

---

##### `LastConfiguredLogOffset`<sup>Required</sup> <a name="LastConfiguredLogOffset" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogOffset"></a>

```csharp
public string LastConfiguredLogOffset { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.internalValue"></a>

```csharp
public MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling">MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling</a>

---


### MysqlMysqlDbSystemChannelsSourceList <a name="MysqlMysqlDbSystemChannelsSourceList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemChannelsSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.get"></a>

```csharp
private MysqlMysqlDbSystemChannelsSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MysqlMysqlDbSystemChannelsSourceOutputReference <a name="MysqlMysqlDbSystemChannelsSourceOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemChannelsSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.anonymousTransactionsHandling">AnonymousTransactionsHandling</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList">MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.sslCaCertificate">SslCaCertificate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList">MysqlMysqlDbSystemChannelsSourceSslCaCertificateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.sslMode">SslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSource">MysqlMysqlDbSystemChannelsSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnonymousTransactionsHandling`<sup>Required</sup> <a name="AnonymousTransactionsHandling" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.anonymousTransactionsHandling"></a>

```csharp
public MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList AnonymousTransactionsHandling { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList">MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList</a>

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `SslCaCertificate`<sup>Required</sup> <a name="SslCaCertificate" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.sslCaCertificate"></a>

```csharp
public MysqlMysqlDbSystemChannelsSourceSslCaCertificateList SslCaCertificate { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList">MysqlMysqlDbSystemChannelsSourceSslCaCertificateList</a>

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.sslMode"></a>

```csharp
public string SslMode { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.internalValue"></a>

```csharp
public MysqlMysqlDbSystemChannelsSource InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSource">MysqlMysqlDbSystemChannelsSource</a>

---


### MysqlMysqlDbSystemChannelsSourceSslCaCertificateList <a name="MysqlMysqlDbSystemChannelsSourceSslCaCertificateList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemChannelsSourceSslCaCertificateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.get"></a>

```csharp
private MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference <a name="MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.certificateType">CertificateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.contents">Contents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificate">MysqlMysqlDbSystemChannelsSourceSslCaCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateType`<sup>Required</sup> <a name="CertificateType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.certificateType"></a>

```csharp
public string CertificateType { get; }
```

- *Type:* string

---

##### `Contents`<sup>Required</sup> <a name="Contents" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.contents"></a>

```csharp
public string Contents { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.internalValue"></a>

```csharp
public MysqlMysqlDbSystemChannelsSourceSslCaCertificate InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificate">MysqlMysqlDbSystemChannelsSourceSslCaCertificate</a>

---


### MysqlMysqlDbSystemChannelsTargetFiltersList <a name="MysqlMysqlDbSystemChannelsTargetFiltersList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemChannelsTargetFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.get"></a>

```csharp
private MysqlMysqlDbSystemChannelsTargetFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MysqlMysqlDbSystemChannelsTargetFiltersOutputReference <a name="MysqlMysqlDbSystemChannelsTargetFiltersOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemChannelsTargetFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFilters">MysqlMysqlDbSystemChannelsTargetFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.internalValue"></a>

```csharp
public MysqlMysqlDbSystemChannelsTargetFilters InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFilters">MysqlMysqlDbSystemChannelsTargetFilters</a>

---


### MysqlMysqlDbSystemChannelsTargetList <a name="MysqlMysqlDbSystemChannelsTargetList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemChannelsTargetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.get"></a>

```csharp
private MysqlMysqlDbSystemChannelsTargetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MysqlMysqlDbSystemChannelsTargetOutputReference <a name="MysqlMysqlDbSystemChannelsTargetOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemChannelsTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.applierUsername">ApplierUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.channelName">ChannelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.delayInSeconds">DelayInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.filters">Filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList">MysqlMysqlDbSystemChannelsTargetFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.tablesWithoutPrimaryKeyHandling">TablesWithoutPrimaryKeyHandling</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.targetType">TargetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTarget">MysqlMysqlDbSystemChannelsTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplierUsername`<sup>Required</sup> <a name="ApplierUsername" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.applierUsername"></a>

```csharp
public string ApplierUsername { get; }
```

- *Type:* string

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.channelName"></a>

```csharp
public string ChannelName { get; }
```

- *Type:* string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; }
```

- *Type:* string

---

##### `DelayInSeconds`<sup>Required</sup> <a name="DelayInSeconds" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.delayInSeconds"></a>

```csharp
public double DelayInSeconds { get; }
```

- *Type:* double

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.filters"></a>

```csharp
public MysqlMysqlDbSystemChannelsTargetFiltersList Filters { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList">MysqlMysqlDbSystemChannelsTargetFiltersList</a>

---

##### `TablesWithoutPrimaryKeyHandling`<sup>Required</sup> <a name="TablesWithoutPrimaryKeyHandling" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.tablesWithoutPrimaryKeyHandling"></a>

```csharp
public string TablesWithoutPrimaryKeyHandling { get; }
```

- *Type:* string

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.targetType"></a>

```csharp
public string TargetType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.internalValue"></a>

```csharp
public MysqlMysqlDbSystemChannelsTarget InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTarget">MysqlMysqlDbSystemChannelsTarget</a>

---


### MysqlMysqlDbSystemCurrentPlacementList <a name="MysqlMysqlDbSystemCurrentPlacementList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemCurrentPlacementList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.get"></a>

```csharp
private MysqlMysqlDbSystemCurrentPlacementOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MysqlMysqlDbSystemCurrentPlacementOutputReference <a name="MysqlMysqlDbSystemCurrentPlacementOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemCurrentPlacementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.faultDomain">FaultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacement">MysqlMysqlDbSystemCurrentPlacement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.faultDomain"></a>

```csharp
public string FaultDomain { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.internalValue"></a>

```csharp
public MysqlMysqlDbSystemCurrentPlacement InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacement">MysqlMysqlDbSystemCurrentPlacement</a>

---


### MysqlMysqlDbSystemCustomerContactsList <a name="MysqlMysqlDbSystemCustomerContactsList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemCustomerContactsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.get"></a>

```csharp
private MysqlMysqlDbSystemCustomerContactsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MysqlMysqlDbSystemCustomerContactsOutputReference <a name="MysqlMysqlDbSystemCustomerContactsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemCustomerContactsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MysqlMysqlDbSystemDataStorageOutputReference <a name="MysqlMysqlDbSystemDataStorageOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemDataStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.resetIsAutoExpandStorageEnabled">ResetIsAutoExpandStorageEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.resetMaxStorageSizeInGbs">ResetMaxStorageSizeInGbs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsAutoExpandStorageEnabled` <a name="ResetIsAutoExpandStorageEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.resetIsAutoExpandStorageEnabled"></a>

```csharp
private void ResetIsAutoExpandStorageEnabled()
```

##### `ResetMaxStorageSizeInGbs` <a name="ResetMaxStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.resetMaxStorageSizeInGbs"></a>

```csharp
private void ResetMaxStorageSizeInGbs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.allocatedStorageSizeInGbs">AllocatedStorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.dataStorageSizeInGb">DataStorageSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.dataStorageSizeLimitInGbs">DataStorageSizeLimitInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.isAutoExpandStorageEnabledInput">IsAutoExpandStorageEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.maxStorageSizeInGbsInput">MaxStorageSizeInGbsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.isAutoExpandStorageEnabled">IsAutoExpandStorageEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.maxStorageSizeInGbs">MaxStorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage">MysqlMysqlDbSystemDataStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllocatedStorageSizeInGbs`<sup>Required</sup> <a name="AllocatedStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.allocatedStorageSizeInGbs"></a>

```csharp
public double AllocatedStorageSizeInGbs { get; }
```

- *Type:* double

---

##### `DataStorageSizeInGb`<sup>Required</sup> <a name="DataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.dataStorageSizeInGb"></a>

```csharp
public double DataStorageSizeInGb { get; }
```

- *Type:* double

---

##### `DataStorageSizeLimitInGbs`<sup>Required</sup> <a name="DataStorageSizeLimitInGbs" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.dataStorageSizeLimitInGbs"></a>

```csharp
public double DataStorageSizeLimitInGbs { get; }
```

- *Type:* double

---

##### `IsAutoExpandStorageEnabledInput`<sup>Optional</sup> <a name="IsAutoExpandStorageEnabledInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.isAutoExpandStorageEnabledInput"></a>

```csharp
public object IsAutoExpandStorageEnabledInput { get; }
```

- *Type:* object

---

##### `MaxStorageSizeInGbsInput`<sup>Optional</sup> <a name="MaxStorageSizeInGbsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.maxStorageSizeInGbsInput"></a>

```csharp
public double MaxStorageSizeInGbsInput { get; }
```

- *Type:* double

---

##### `IsAutoExpandStorageEnabled`<sup>Required</sup> <a name="IsAutoExpandStorageEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.isAutoExpandStorageEnabled"></a>

```csharp
public object IsAutoExpandStorageEnabled { get; }
```

- *Type:* object

---

##### `MaxStorageSizeInGbs`<sup>Required</sup> <a name="MaxStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.maxStorageSizeInGbs"></a>

```csharp
public double MaxStorageSizeInGbs { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.internalValue"></a>

```csharp
public MysqlMysqlDbSystemDataStorage InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage">MysqlMysqlDbSystemDataStorage</a>

---


### MysqlMysqlDbSystemDeletionPolicyList <a name="MysqlMysqlDbSystemDeletionPolicyList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemDeletionPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.get"></a>

```csharp
private MysqlMysqlDbSystemDeletionPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MysqlMysqlDbSystemDeletionPolicyOutputReference <a name="MysqlMysqlDbSystemDeletionPolicyOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemDeletionPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.resetAutomaticBackupRetention">ResetAutomaticBackupRetention</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.resetFinalBackup">ResetFinalBackup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.resetIsDeleteProtected">ResetIsDeleteProtected</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutomaticBackupRetention` <a name="ResetAutomaticBackupRetention" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.resetAutomaticBackupRetention"></a>

```csharp
private void ResetAutomaticBackupRetention()
```

##### `ResetFinalBackup` <a name="ResetFinalBackup" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.resetFinalBackup"></a>

```csharp
private void ResetFinalBackup()
```

##### `ResetIsDeleteProtected` <a name="ResetIsDeleteProtected" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.resetIsDeleteProtected"></a>

```csharp
private void ResetIsDeleteProtected()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.automaticBackupRetentionInput">AutomaticBackupRetentionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.finalBackupInput">FinalBackupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.isDeleteProtectedInput">IsDeleteProtectedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.automaticBackupRetention">AutomaticBackupRetention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.finalBackup">FinalBackup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.isDeleteProtected">IsDeleteProtected</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutomaticBackupRetentionInput`<sup>Optional</sup> <a name="AutomaticBackupRetentionInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.automaticBackupRetentionInput"></a>

```csharp
public string AutomaticBackupRetentionInput { get; }
```

- *Type:* string

---

##### `FinalBackupInput`<sup>Optional</sup> <a name="FinalBackupInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.finalBackupInput"></a>

```csharp
public string FinalBackupInput { get; }
```

- *Type:* string

---

##### `IsDeleteProtectedInput`<sup>Optional</sup> <a name="IsDeleteProtectedInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.isDeleteProtectedInput"></a>

```csharp
public object IsDeleteProtectedInput { get; }
```

- *Type:* object

---

##### `AutomaticBackupRetention`<sup>Required</sup> <a name="AutomaticBackupRetention" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.automaticBackupRetention"></a>

```csharp
public string AutomaticBackupRetention { get; }
```

- *Type:* string

---

##### `FinalBackup`<sup>Required</sup> <a name="FinalBackup" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.finalBackup"></a>

```csharp
public string FinalBackup { get; }
```

- *Type:* string

---

##### `IsDeleteProtected`<sup>Required</sup> <a name="IsDeleteProtected" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.isDeleteProtected"></a>

```csharp
public object IsDeleteProtected { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MysqlMysqlDbSystemEndpointsList <a name="MysqlMysqlDbSystemEndpointsList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.get"></a>

```csharp
private MysqlMysqlDbSystemEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MysqlMysqlDbSystemEndpointsOutputReference <a name="MysqlMysqlDbSystemEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.modes">Modes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.portX">PortX</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.statusDetails">StatusDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpoints">MysqlMysqlDbSystemEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `Modes`<sup>Required</sup> <a name="Modes" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.modes"></a>

```csharp
public string[] Modes { get; }
```

- *Type:* string[]

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PortX`<sup>Required</sup> <a name="PortX" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.portX"></a>

```csharp
public double PortX { get; }
```

- *Type:* double

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusDetails`<sup>Required</sup> <a name="StatusDetails" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.statusDetails"></a>

```csharp
public string StatusDetails { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.internalValue"></a>

```csharp
public MysqlMysqlDbSystemEndpoints InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpoints">MysqlMysqlDbSystemEndpoints</a>

---


### MysqlMysqlDbSystemHeatWaveClusterList <a name="MysqlMysqlDbSystemHeatWaveClusterList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemHeatWaveClusterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.get"></a>

```csharp
private MysqlMysqlDbSystemHeatWaveClusterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MysqlMysqlDbSystemHeatWaveClusterOutputReference <a name="MysqlMysqlDbSystemHeatWaveClusterOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemHeatWaveClusterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.clusterSize">ClusterSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.isLakehouseEnabled">IsLakehouseEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.shapeName">ShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveCluster">MysqlMysqlDbSystemHeatWaveCluster</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterSize`<sup>Required</sup> <a name="ClusterSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.clusterSize"></a>

```csharp
public double ClusterSize { get; }
```

- *Type:* double

---

##### `IsLakehouseEnabled`<sup>Required</sup> <a name="IsLakehouseEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.isLakehouseEnabled"></a>

```csharp
public IResolvable IsLakehouseEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.shapeName"></a>

```csharp
public string ShapeName { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.internalValue"></a>

```csharp
public MysqlMysqlDbSystemHeatWaveCluster InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveCluster">MysqlMysqlDbSystemHeatWaveCluster</a>

---


### MysqlMysqlDbSystemMaintenanceOutputReference <a name="MysqlMysqlDbSystemMaintenanceOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemMaintenanceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.windowStartTimeInput">WindowStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.windowStartTime">WindowStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance">MysqlMysqlDbSystemMaintenance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WindowStartTimeInput`<sup>Optional</sup> <a name="WindowStartTimeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.windowStartTimeInput"></a>

```csharp
public string WindowStartTimeInput { get; }
```

- *Type:* string

---

##### `WindowStartTime`<sup>Required</sup> <a name="WindowStartTime" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.windowStartTime"></a>

```csharp
public string WindowStartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.internalValue"></a>

```csharp
public MysqlMysqlDbSystemMaintenance InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance">MysqlMysqlDbSystemMaintenance</a>

---


### MysqlMysqlDbSystemPointInTimeRecoveryDetailsList <a name="MysqlMysqlDbSystemPointInTimeRecoveryDetailsList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemPointInTimeRecoveryDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.get"></a>

```csharp
private MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference <a name="MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.timeEarliestRecoveryPoint">TimeEarliestRecoveryPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.timeLatestRecoveryPoint">TimeLatestRecoveryPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetails">MysqlMysqlDbSystemPointInTimeRecoveryDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeEarliestRecoveryPoint`<sup>Required</sup> <a name="TimeEarliestRecoveryPoint" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.timeEarliestRecoveryPoint"></a>

```csharp
public string TimeEarliestRecoveryPoint { get; }
```

- *Type:* string

---

##### `TimeLatestRecoveryPoint`<sup>Required</sup> <a name="TimeLatestRecoveryPoint" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.timeLatestRecoveryPoint"></a>

```csharp
public string TimeLatestRecoveryPoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.internalValue"></a>

```csharp
public MysqlMysqlDbSystemPointInTimeRecoveryDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetails">MysqlMysqlDbSystemPointInTimeRecoveryDetails</a>

---


### MysqlMysqlDbSystemSecureConnectionsOutputReference <a name="MysqlMysqlDbSystemSecureConnectionsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemSecureConnectionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.resetCertificateId">ResetCertificateId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateId` <a name="ResetCertificateId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.resetCertificateId"></a>

```csharp
private void ResetCertificateId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.certificateGenerationTypeInput">CertificateGenerationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.certificateIdInput">CertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.certificateGenerationType">CertificateGenerationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.certificateId">CertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections">MysqlMysqlDbSystemSecureConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateGenerationTypeInput`<sup>Optional</sup> <a name="CertificateGenerationTypeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.certificateGenerationTypeInput"></a>

```csharp
public string CertificateGenerationTypeInput { get; }
```

- *Type:* string

---

##### `CertificateIdInput`<sup>Optional</sup> <a name="CertificateIdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.certificateIdInput"></a>

```csharp
public string CertificateIdInput { get; }
```

- *Type:* string

---

##### `CertificateGenerationType`<sup>Required</sup> <a name="CertificateGenerationType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.certificateGenerationType"></a>

```csharp
public string CertificateGenerationType { get; }
```

- *Type:* string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.certificateId"></a>

```csharp
public string CertificateId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.internalValue"></a>

```csharp
public MysqlMysqlDbSystemSecureConnections InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections">MysqlMysqlDbSystemSecureConnections</a>

---


### MysqlMysqlDbSystemSourceOutputReference <a name="MysqlMysqlDbSystemSourceOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resetBackupId">ResetBackupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resetDbSystemId">ResetDbSystemId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resetRecoveryPoint">ResetRecoveryPoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resetSourceUrl">ResetSourceUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackupId` <a name="ResetBackupId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resetBackupId"></a>

```csharp
private void ResetBackupId()
```

##### `ResetDbSystemId` <a name="ResetDbSystemId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resetDbSystemId"></a>

```csharp
private void ResetDbSystemId()
```

##### `ResetRecoveryPoint` <a name="ResetRecoveryPoint" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resetRecoveryPoint"></a>

```csharp
private void ResetRecoveryPoint()
```

##### `ResetSourceUrl` <a name="ResetSourceUrl" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resetSourceUrl"></a>

```csharp
private void ResetSourceUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.backupIdInput">BackupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.dbSystemIdInput">DbSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.recoveryPointInput">RecoveryPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.sourceTypeInput">SourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.sourceUrlInput">SourceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.backupId">BackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.recoveryPoint">RecoveryPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.sourceUrl">SourceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource">MysqlMysqlDbSystemSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupIdInput`<sup>Optional</sup> <a name="BackupIdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.backupIdInput"></a>

```csharp
public string BackupIdInput { get; }
```

- *Type:* string

---

##### `DbSystemIdInput`<sup>Optional</sup> <a name="DbSystemIdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.dbSystemIdInput"></a>

```csharp
public string DbSystemIdInput { get; }
```

- *Type:* string

---

##### `RecoveryPointInput`<sup>Optional</sup> <a name="RecoveryPointInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.recoveryPointInput"></a>

```csharp
public string RecoveryPointInput { get; }
```

- *Type:* string

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.sourceTypeInput"></a>

```csharp
public string SourceTypeInput { get; }
```

- *Type:* string

---

##### `SourceUrlInput`<sup>Optional</sup> <a name="SourceUrlInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.sourceUrlInput"></a>

```csharp
public string SourceUrlInput { get; }
```

- *Type:* string

---

##### `BackupId`<sup>Required</sup> <a name="BackupId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.backupId"></a>

```csharp
public string BackupId { get; }
```

- *Type:* string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; }
```

- *Type:* string

---

##### `RecoveryPoint`<sup>Required</sup> <a name="RecoveryPoint" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.recoveryPoint"></a>

```csharp
public string RecoveryPoint { get; }
```

- *Type:* string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.sourceUrl"></a>

```csharp
public string SourceUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.internalValue"></a>

```csharp
public MysqlMysqlDbSystemSource InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource">MysqlMysqlDbSystemSource</a>

---


### MysqlMysqlDbSystemTimeoutsOutputReference <a name="MysqlMysqlDbSystemTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlDbSystemTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



