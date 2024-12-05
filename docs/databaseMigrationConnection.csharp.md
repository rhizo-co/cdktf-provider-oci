# `databaseMigrationConnection` Submodule <a name="`databaseMigrationConnection` Submodule" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseMigrationConnection <a name="DatabaseMigrationConnection" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection oci_database_migration_connection}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationConnection(Construct Scope, string Id, DatabaseMigrationConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig">DatabaseMigrationConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig">DatabaseMigrationConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.putAdditionalAttributes">PutAdditionalAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetAdditionalAttributes">ResetAdditionalAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetConnectionString">ResetConnectionString</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetDatabaseId">ResetDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetDbSystemId">ResetDbSystemId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetNsgIds">ResetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetReplicationPassword">ResetReplicationPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetReplicationUsername">ResetReplicationUsername</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSecurityProtocol">ResetSecurityProtocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSshHost">ResetSshHost</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSshKey">ResetSshKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSshSudoLocation">ResetSshSudoLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSshUser">ResetSshUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSslCa">ResetSslCa</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSslCert">ResetSslCert</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSslCrl">ResetSslCrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSslKey">ResetSslKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSslMode">ResetSslMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetWallet">ResetWallet</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdditionalAttributes` <a name="PutAdditionalAttributes" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.putAdditionalAttributes"></a>

```csharp
private void PutAdditionalAttributes(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.putAdditionalAttributes.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseMigrationConnectionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts">DatabaseMigrationConnectionTimeouts</a>

---

##### `ResetAdditionalAttributes` <a name="ResetAdditionalAttributes" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetAdditionalAttributes"></a>

```csharp
private void ResetAdditionalAttributes()
```

##### `ResetConnectionString` <a name="ResetConnectionString" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetConnectionString"></a>

```csharp
private void ResetConnectionString()
```

##### `ResetDatabaseId` <a name="ResetDatabaseId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetDatabaseId"></a>

```csharp
private void ResetDatabaseId()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetDbSystemId` <a name="ResetDbSystemId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetDbSystemId"></a>

```csharp
private void ResetDbSystemId()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetHost` <a name="ResetHost" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetNsgIds"></a>

```csharp
private void ResetNsgIds()
```

##### `ResetPort` <a name="ResetPort" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetReplicationPassword` <a name="ResetReplicationPassword" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetReplicationPassword"></a>

```csharp
private void ResetReplicationPassword()
```

##### `ResetReplicationUsername` <a name="ResetReplicationUsername" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetReplicationUsername"></a>

```csharp
private void ResetReplicationUsername()
```

##### `ResetSecurityProtocol` <a name="ResetSecurityProtocol" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSecurityProtocol"></a>

```csharp
private void ResetSecurityProtocol()
```

##### `ResetSshHost` <a name="ResetSshHost" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSshHost"></a>

```csharp
private void ResetSshHost()
```

##### `ResetSshKey` <a name="ResetSshKey" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSshKey"></a>

```csharp
private void ResetSshKey()
```

##### `ResetSshSudoLocation` <a name="ResetSshSudoLocation" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSshSudoLocation"></a>

```csharp
private void ResetSshSudoLocation()
```

##### `ResetSshUser` <a name="ResetSshUser" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSshUser"></a>

```csharp
private void ResetSshUser()
```

##### `ResetSslCa` <a name="ResetSslCa" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSslCa"></a>

```csharp
private void ResetSslCa()
```

##### `ResetSslCert` <a name="ResetSslCert" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSslCert"></a>

```csharp
private void ResetSslCert()
```

##### `ResetSslCrl` <a name="ResetSslCrl" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSslCrl"></a>

```csharp
private void ResetSslCrl()
```

##### `ResetSslKey` <a name="ResetSslKey" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSslKey"></a>

```csharp
private void ResetSslKey()
```

##### `ResetSslMode` <a name="ResetSslMode" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSslMode"></a>

```csharp
private void ResetSslMode()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWallet` <a name="ResetWallet" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetWallet"></a>

```csharp
private void ResetWallet()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseMigrationConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseMigrationConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseMigrationConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseMigrationConnection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseMigrationConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseMigrationConnection resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseMigrationConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseMigrationConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseMigrationConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.additionalAttributes">AdditionalAttributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList">DatabaseMigrationConnectionAdditionalAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.ingressIps">IngressIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList">DatabaseMigrationConnectionIngressIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.privateEndpointId">PrivateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference">DatabaseMigrationConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.additionalAttributesInput">AdditionalAttributesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.connectionStringInput">ConnectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.connectionTypeInput">ConnectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.databaseIdInput">DatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.dbSystemIdInput">DbSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.keyIdInput">KeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.nsgIdsInput">NsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.replicationPasswordInput">ReplicationPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.replicationUsernameInput">ReplicationUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.securityProtocolInput">SecurityProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshHostInput">SshHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshKeyInput">SshKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshSudoLocationInput">SshSudoLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshUserInput">SshUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslCaInput">SslCaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslCertInput">SslCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslCrlInput">SslCrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslKeyInput">SslKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslModeInput">SslModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.technologyTypeInput">TechnologyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.vaultIdInput">VaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.walletInput">WalletInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.connectionString">ConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.connectionType">ConnectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.databaseId">DatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.replicationPassword">ReplicationPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.replicationUsername">ReplicationUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.securityProtocol">SecurityProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshHost">SshHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshKey">SshKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshSudoLocation">SshSudoLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshUser">SshUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslCa">SslCa</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslCert">SslCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslCrl">SslCrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslKey">SslKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslMode">SslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.technologyType">TechnologyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.vaultId">VaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.wallet">Wallet</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdditionalAttributes`<sup>Required</sup> <a name="AdditionalAttributes" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.additionalAttributes"></a>

```csharp
public DatabaseMigrationConnectionAdditionalAttributesList AdditionalAttributes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList">DatabaseMigrationConnectionAdditionalAttributesList</a>

---

##### `IngressIps`<sup>Required</sup> <a name="IngressIps" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.ingressIps"></a>

```csharp
public DatabaseMigrationConnectionIngressIpsList IngressIps { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList">DatabaseMigrationConnectionIngressIpsList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `PrivateEndpointId`<sup>Required</sup> <a name="PrivateEndpointId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.privateEndpointId"></a>

```csharp
public string PrivateEndpointId { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.timeouts"></a>

```csharp
public DatabaseMigrationConnectionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference">DatabaseMigrationConnectionTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `AdditionalAttributesInput`<sup>Optional</sup> <a name="AdditionalAttributesInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.additionalAttributesInput"></a>

```csharp
public object AdditionalAttributesInput { get; }
```

- *Type:* object

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.connectionStringInput"></a>

```csharp
public string ConnectionStringInput { get; }
```

- *Type:* string

---

##### `ConnectionTypeInput`<sup>Optional</sup> <a name="ConnectionTypeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.connectionTypeInput"></a>

```csharp
public string ConnectionTypeInput { get; }
```

- *Type:* string

---

##### `DatabaseIdInput`<sup>Optional</sup> <a name="DatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.databaseIdInput"></a>

```csharp
public string DatabaseIdInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `DbSystemIdInput`<sup>Optional</sup> <a name="DbSystemIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.dbSystemIdInput"></a>

```csharp
public string DbSystemIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.keyIdInput"></a>

```csharp
public string KeyIdInput { get; }
```

- *Type:* string

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.nsgIdsInput"></a>

```csharp
public string[] NsgIdsInput { get; }
```

- *Type:* string[]

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ReplicationPasswordInput`<sup>Optional</sup> <a name="ReplicationPasswordInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.replicationPasswordInput"></a>

```csharp
public string ReplicationPasswordInput { get; }
```

- *Type:* string

---

##### `ReplicationUsernameInput`<sup>Optional</sup> <a name="ReplicationUsernameInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.replicationUsernameInput"></a>

```csharp
public string ReplicationUsernameInput { get; }
```

- *Type:* string

---

##### `SecurityProtocolInput`<sup>Optional</sup> <a name="SecurityProtocolInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.securityProtocolInput"></a>

```csharp
public string SecurityProtocolInput { get; }
```

- *Type:* string

---

##### `SshHostInput`<sup>Optional</sup> <a name="SshHostInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshHostInput"></a>

```csharp
public string SshHostInput { get; }
```

- *Type:* string

---

##### `SshKeyInput`<sup>Optional</sup> <a name="SshKeyInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshKeyInput"></a>

```csharp
public string SshKeyInput { get; }
```

- *Type:* string

---

##### `SshSudoLocationInput`<sup>Optional</sup> <a name="SshSudoLocationInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshSudoLocationInput"></a>

```csharp
public string SshSudoLocationInput { get; }
```

- *Type:* string

---

##### `SshUserInput`<sup>Optional</sup> <a name="SshUserInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshUserInput"></a>

```csharp
public string SshUserInput { get; }
```

- *Type:* string

---

##### `SslCaInput`<sup>Optional</sup> <a name="SslCaInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslCaInput"></a>

```csharp
public string SslCaInput { get; }
```

- *Type:* string

---

##### `SslCertInput`<sup>Optional</sup> <a name="SslCertInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslCertInput"></a>

```csharp
public string SslCertInput { get; }
```

- *Type:* string

---

##### `SslCrlInput`<sup>Optional</sup> <a name="SslCrlInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslCrlInput"></a>

```csharp
public string SslCrlInput { get; }
```

- *Type:* string

---

##### `SslKeyInput`<sup>Optional</sup> <a name="SslKeyInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslKeyInput"></a>

```csharp
public string SslKeyInput { get; }
```

- *Type:* string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslModeInput"></a>

```csharp
public string SslModeInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TechnologyTypeInput`<sup>Optional</sup> <a name="TechnologyTypeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.technologyTypeInput"></a>

```csharp
public string TechnologyTypeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `VaultIdInput`<sup>Optional</sup> <a name="VaultIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.vaultIdInput"></a>

```csharp
public string VaultIdInput { get; }
```

- *Type:* string

---

##### `WalletInput`<sup>Optional</sup> <a name="WalletInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.walletInput"></a>

```csharp
public string WalletInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.connectionString"></a>

```csharp
public string ConnectionString { get; }
```

- *Type:* string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.connectionType"></a>

```csharp
public string ConnectionType { get; }
```

- *Type:* string

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.databaseId"></a>

```csharp
public string DatabaseId { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Host`<sup>Required</sup> <a name="Host" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `ReplicationPassword`<sup>Required</sup> <a name="ReplicationPassword" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.replicationPassword"></a>

```csharp
public string ReplicationPassword { get; }
```

- *Type:* string

---

##### `ReplicationUsername`<sup>Required</sup> <a name="ReplicationUsername" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.replicationUsername"></a>

```csharp
public string ReplicationUsername { get; }
```

- *Type:* string

---

##### `SecurityProtocol`<sup>Required</sup> <a name="SecurityProtocol" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.securityProtocol"></a>

```csharp
public string SecurityProtocol { get; }
```

- *Type:* string

---

##### `SshHost`<sup>Required</sup> <a name="SshHost" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshHost"></a>

```csharp
public string SshHost { get; }
```

- *Type:* string

---

##### `SshKey`<sup>Required</sup> <a name="SshKey" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshKey"></a>

```csharp
public string SshKey { get; }
```

- *Type:* string

---

##### `SshSudoLocation`<sup>Required</sup> <a name="SshSudoLocation" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshSudoLocation"></a>

```csharp
public string SshSudoLocation { get; }
```

- *Type:* string

---

##### `SshUser`<sup>Required</sup> <a name="SshUser" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshUser"></a>

```csharp
public string SshUser { get; }
```

- *Type:* string

---

##### `SslCa`<sup>Required</sup> <a name="SslCa" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslCa"></a>

```csharp
public string SslCa { get; }
```

- *Type:* string

---

##### `SslCert`<sup>Required</sup> <a name="SslCert" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslCert"></a>

```csharp
public string SslCert { get; }
```

- *Type:* string

---

##### `SslCrl`<sup>Required</sup> <a name="SslCrl" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslCrl"></a>

```csharp
public string SslCrl { get; }
```

- *Type:* string

---

##### `SslKey`<sup>Required</sup> <a name="SslKey" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslKey"></a>

```csharp
public string SslKey { get; }
```

- *Type:* string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslMode"></a>

```csharp
public string SslMode { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `TechnologyType`<sup>Required</sup> <a name="TechnologyType" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.technologyType"></a>

```csharp
public string TechnologyType { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.vaultId"></a>

```csharp
public string VaultId { get; }
```

- *Type:* string

---

##### `Wallet`<sup>Required</sup> <a name="Wallet" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.wallet"></a>

```csharp
public string Wallet { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseMigrationConnectionAdditionalAttributes <a name="DatabaseMigrationConnectionAdditionalAttributes" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationConnectionAdditionalAttributes {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#name DatabaseMigrationConnection#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#value DatabaseMigrationConnection#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#name DatabaseMigrationConnection#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#value DatabaseMigrationConnection#value}.

---

### DatabaseMigrationConnectionConfig <a name="DatabaseMigrationConnectionConfig" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationConnectionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string ConnectionType,
    string DisplayName,
    string KeyId,
    string Password,
    string TechnologyType,
    string Username,
    string VaultId,
    object AdditionalAttributes = null,
    string ConnectionString = null,
    string DatabaseId = null,
    string DatabaseName = null,
    string DbSystemId = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Host = null,
    string Id = null,
    string[] NsgIds = null,
    double Port = null,
    string ReplicationPassword = null,
    string ReplicationUsername = null,
    string SecurityProtocol = null,
    string SshHost = null,
    string SshKey = null,
    string SshSudoLocation = null,
    string SshUser = null,
    string SslCa = null,
    string SslCert = null,
    string SslCrl = null,
    string SslKey = null,
    string SslMode = null,
    string SubnetId = null,
    DatabaseMigrationConnectionTimeouts Timeouts = null,
    string Wallet = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#compartment_id DatabaseMigrationConnection#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.connectionType">ConnectionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#connection_type DatabaseMigrationConnection#connection_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#display_name DatabaseMigrationConnection#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.keyId">KeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#key_id DatabaseMigrationConnection#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#password DatabaseMigrationConnection#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.technologyType">TechnologyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#technology_type DatabaseMigrationConnection#technology_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#username DatabaseMigrationConnection#username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.vaultId">VaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#vault_id DatabaseMigrationConnection#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.additionalAttributes">AdditionalAttributes</a></code> | <code>object</code> | additional_attributes block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.connectionString">ConnectionString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#connection_string DatabaseMigrationConnection#connection_string}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.databaseId">DatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#database_id DatabaseMigrationConnection#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#database_name DatabaseMigrationConnection#database_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#db_system_id DatabaseMigrationConnection#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#defined_tags DatabaseMigrationConnection#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#description DatabaseMigrationConnection#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#freeform_tags DatabaseMigrationConnection#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.host">Host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#host DatabaseMigrationConnection#host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#id DatabaseMigrationConnection#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#nsg_ids DatabaseMigrationConnection#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#port DatabaseMigrationConnection#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.replicationPassword">ReplicationPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#replication_password DatabaseMigrationConnection#replication_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.replicationUsername">ReplicationUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#replication_username DatabaseMigrationConnection#replication_username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.securityProtocol">SecurityProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#security_protocol DatabaseMigrationConnection#security_protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sshHost">SshHost</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_host DatabaseMigrationConnection#ssh_host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sshKey">SshKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_key DatabaseMigrationConnection#ssh_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sshSudoLocation">SshSudoLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_sudo_location DatabaseMigrationConnection#ssh_sudo_location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sshUser">SshUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_user DatabaseMigrationConnection#ssh_user}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sslCa">SslCa</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_ca DatabaseMigrationConnection#ssl_ca}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sslCert">SslCert</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_cert DatabaseMigrationConnection#ssl_cert}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sslCrl">SslCrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_crl DatabaseMigrationConnection#ssl_crl}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sslKey">SslKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_key DatabaseMigrationConnection#ssl_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sslMode">SslMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_mode DatabaseMigrationConnection#ssl_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#subnet_id DatabaseMigrationConnection#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts">DatabaseMigrationConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.wallet">Wallet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#wallet DatabaseMigrationConnection#wallet}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#compartment_id DatabaseMigrationConnection#compartment_id}.

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.connectionType"></a>

```csharp
public string ConnectionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#connection_type DatabaseMigrationConnection#connection_type}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#display_name DatabaseMigrationConnection#display_name}.

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.keyId"></a>

```csharp
public string KeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#key_id DatabaseMigrationConnection#key_id}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#password DatabaseMigrationConnection#password}.

---

##### `TechnologyType`<sup>Required</sup> <a name="TechnologyType" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.technologyType"></a>

```csharp
public string TechnologyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#technology_type DatabaseMigrationConnection#technology_type}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#username DatabaseMigrationConnection#username}.

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.vaultId"></a>

```csharp
public string VaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#vault_id DatabaseMigrationConnection#vault_id}.

---

##### `AdditionalAttributes`<sup>Optional</sup> <a name="AdditionalAttributes" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.additionalAttributes"></a>

```csharp
public object AdditionalAttributes { get; set; }
```

- *Type:* object

additional_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#additional_attributes DatabaseMigrationConnection#additional_attributes}

---

##### `ConnectionString`<sup>Optional</sup> <a name="ConnectionString" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.connectionString"></a>

```csharp
public string ConnectionString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#connection_string DatabaseMigrationConnection#connection_string}.

---

##### `DatabaseId`<sup>Optional</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.databaseId"></a>

```csharp
public string DatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#database_id DatabaseMigrationConnection#database_id}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#database_name DatabaseMigrationConnection#database_name}.

---

##### `DbSystemId`<sup>Optional</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#db_system_id DatabaseMigrationConnection#db_system_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#defined_tags DatabaseMigrationConnection#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#description DatabaseMigrationConnection#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#freeform_tags DatabaseMigrationConnection#freeform_tags}.

---

##### `Host`<sup>Optional</sup> <a name="Host" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#host DatabaseMigrationConnection#host}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#id DatabaseMigrationConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#nsg_ids DatabaseMigrationConnection#nsg_ids}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#port DatabaseMigrationConnection#port}.

---

##### `ReplicationPassword`<sup>Optional</sup> <a name="ReplicationPassword" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.replicationPassword"></a>

```csharp
public string ReplicationPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#replication_password DatabaseMigrationConnection#replication_password}.

---

##### `ReplicationUsername`<sup>Optional</sup> <a name="ReplicationUsername" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.replicationUsername"></a>

```csharp
public string ReplicationUsername { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#replication_username DatabaseMigrationConnection#replication_username}.

---

##### `SecurityProtocol`<sup>Optional</sup> <a name="SecurityProtocol" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.securityProtocol"></a>

```csharp
public string SecurityProtocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#security_protocol DatabaseMigrationConnection#security_protocol}.

---

##### `SshHost`<sup>Optional</sup> <a name="SshHost" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sshHost"></a>

```csharp
public string SshHost { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_host DatabaseMigrationConnection#ssh_host}.

---

##### `SshKey`<sup>Optional</sup> <a name="SshKey" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sshKey"></a>

```csharp
public string SshKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_key DatabaseMigrationConnection#ssh_key}.

---

##### `SshSudoLocation`<sup>Optional</sup> <a name="SshSudoLocation" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sshSudoLocation"></a>

```csharp
public string SshSudoLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_sudo_location DatabaseMigrationConnection#ssh_sudo_location}.

---

##### `SshUser`<sup>Optional</sup> <a name="SshUser" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sshUser"></a>

```csharp
public string SshUser { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_user DatabaseMigrationConnection#ssh_user}.

---

##### `SslCa`<sup>Optional</sup> <a name="SslCa" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sslCa"></a>

```csharp
public string SslCa { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_ca DatabaseMigrationConnection#ssl_ca}.

---

##### `SslCert`<sup>Optional</sup> <a name="SslCert" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sslCert"></a>

```csharp
public string SslCert { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_cert DatabaseMigrationConnection#ssl_cert}.

---

##### `SslCrl`<sup>Optional</sup> <a name="SslCrl" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sslCrl"></a>

```csharp
public string SslCrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_crl DatabaseMigrationConnection#ssl_crl}.

---

##### `SslKey`<sup>Optional</sup> <a name="SslKey" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sslKey"></a>

```csharp
public string SslKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_key DatabaseMigrationConnection#ssl_key}.

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sslMode"></a>

```csharp
public string SslMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_mode DatabaseMigrationConnection#ssl_mode}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#subnet_id DatabaseMigrationConnection#subnet_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.timeouts"></a>

```csharp
public DatabaseMigrationConnectionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts">DatabaseMigrationConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#timeouts DatabaseMigrationConnection#timeouts}

---

##### `Wallet`<sup>Optional</sup> <a name="Wallet" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.wallet"></a>

```csharp
public string Wallet { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#wallet DatabaseMigrationConnection#wallet}.

---

### DatabaseMigrationConnectionIngressIps <a name="DatabaseMigrationConnectionIngressIps" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationConnectionIngressIps {

};
```


### DatabaseMigrationConnectionTimeouts <a name="DatabaseMigrationConnectionTimeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationConnectionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#create DatabaseMigrationConnection#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#delete DatabaseMigrationConnection#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#update DatabaseMigrationConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#create DatabaseMigrationConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#delete DatabaseMigrationConnection#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#update DatabaseMigrationConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseMigrationConnectionAdditionalAttributesList <a name="DatabaseMigrationConnectionAdditionalAttributesList" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationConnectionAdditionalAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.get"></a>

```csharp
private DatabaseMigrationConnectionAdditionalAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseMigrationConnectionAdditionalAttributesOutputReference <a name="DatabaseMigrationConnectionAdditionalAttributesOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationConnectionAdditionalAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseMigrationConnectionIngressIpsList <a name="DatabaseMigrationConnectionIngressIpsList" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationConnectionIngressIpsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.get"></a>

```csharp
private DatabaseMigrationConnectionIngressIpsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseMigrationConnectionIngressIpsOutputReference <a name="DatabaseMigrationConnectionIngressIpsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationConnectionIngressIpsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.property.ingressIp">IngressIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIps">DatabaseMigrationConnectionIngressIps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IngressIp`<sup>Required</sup> <a name="IngressIp" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.property.ingressIp"></a>

```csharp
public string IngressIp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.property.internalValue"></a>

```csharp
public DatabaseMigrationConnectionIngressIps InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIps">DatabaseMigrationConnectionIngressIps</a>

---


### DatabaseMigrationConnectionTimeoutsOutputReference <a name="DatabaseMigrationConnectionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationConnectionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



