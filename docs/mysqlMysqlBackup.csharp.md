# `mysqlMysqlBackup` Submodule <a name="`mysqlMysqlBackup` Submodule" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MysqlMysqlBackup <a name="MysqlMysqlBackup" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup oci_mysql_mysql_backup}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlBackup(Construct Scope, string Id, MysqlMysqlBackupConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig">MysqlMysqlBackupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig">MysqlMysqlBackupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.putDbSystemSnapshotSummary">PutDbSystemSnapshotSummary</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.putSourceDetails">PutSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetBackupType">ResetBackupType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetDbSystemId">ResetDbSystemId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetDbSystemSnapshotSummary">ResetDbSystemSnapshotSummary</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetRetentionInDays">ResetRetentionInDays</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetSourceDetails">ResetSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDbSystemSnapshotSummary` <a name="PutDbSystemSnapshotSummary" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.putDbSystemSnapshotSummary"></a>

```csharp
private void PutDbSystemSnapshotSummary(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.putDbSystemSnapshotSummary.parameter.value"></a>

- *Type:* object

---

##### `PutSourceDetails` <a name="PutSourceDetails" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.putSourceDetails"></a>

```csharp
private void PutSourceDetails(MysqlMysqlBackupSourceDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.putSourceDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails">MysqlMysqlBackupSourceDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.putTimeouts"></a>

```csharp
private void PutTimeouts(MysqlMysqlBackupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts">MysqlMysqlBackupTimeouts</a>

---

##### `ResetBackupType` <a name="ResetBackupType" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetBackupType"></a>

```csharp
private void ResetBackupType()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetDbSystemId` <a name="ResetDbSystemId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetDbSystemId"></a>

```csharp
private void ResetDbSystemId()
```

##### `ResetDbSystemSnapshotSummary` <a name="ResetDbSystemSnapshotSummary" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetDbSystemSnapshotSummary"></a>

```csharp
private void ResetDbSystemSnapshotSummary()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRetentionInDays` <a name="ResetRetentionInDays" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetRetentionInDays"></a>

```csharp
private void ResetRetentionInDays()
```

##### `ResetSourceDetails` <a name="ResetSourceDetails" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetSourceDetails"></a>

```csharp
private void ResetSourceDetails()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MysqlMysqlBackup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MysqlMysqlBackup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MysqlMysqlBackup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MysqlMysqlBackup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MysqlMysqlBackup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MysqlMysqlBackup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MysqlMysqlBackup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MysqlMysqlBackup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MysqlMysqlBackup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.backupSizeInGbs">BackupSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.creationType">CreationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dataStorageSizeInGb">DataStorageSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dbSystemSnapshot">DbSystemSnapshot</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList">MysqlMysqlBackupDbSystemSnapshotList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dbSystemSnapshotSummary">DbSystemSnapshotSummary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList">MysqlMysqlBackupDbSystemSnapshotSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.immediateSourceBackupId">ImmediateSourceBackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.mysqlVersion">MysqlVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.originalSourceBackupId">OriginalSourceBackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.shapeName">ShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.sourceDetails">SourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference">MysqlMysqlBackupSourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.timeCopyCreated">TimeCopyCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference">MysqlMysqlBackupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.backupTypeInput">BackupTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dbSystemIdInput">DbSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dbSystemSnapshotSummaryInput">DbSystemSnapshotSummaryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.retentionInDaysInput">RetentionInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.sourceDetailsInput">SourceDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails">MysqlMysqlBackupSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.backupType">BackupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.retentionInDays">RetentionInDays</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BackupSizeInGbs`<sup>Required</sup> <a name="BackupSizeInGbs" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.backupSizeInGbs"></a>

```csharp
public double BackupSizeInGbs { get; }
```

- *Type:* double

---

##### `CreationType`<sup>Required</sup> <a name="CreationType" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.creationType"></a>

```csharp
public string CreationType { get; }
```

- *Type:* string

---

##### `DataStorageSizeInGb`<sup>Required</sup> <a name="DataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dataStorageSizeInGb"></a>

```csharp
public double DataStorageSizeInGb { get; }
```

- *Type:* double

---

##### `DbSystemSnapshot`<sup>Required</sup> <a name="DbSystemSnapshot" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dbSystemSnapshot"></a>

```csharp
public MysqlMysqlBackupDbSystemSnapshotList DbSystemSnapshot { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList">MysqlMysqlBackupDbSystemSnapshotList</a>

---

##### `DbSystemSnapshotSummary`<sup>Required</sup> <a name="DbSystemSnapshotSummary" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dbSystemSnapshotSummary"></a>

```csharp
public MysqlMysqlBackupDbSystemSnapshotSummaryList DbSystemSnapshotSummary { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList">MysqlMysqlBackupDbSystemSnapshotSummaryList</a>

---

##### `ImmediateSourceBackupId`<sup>Required</sup> <a name="ImmediateSourceBackupId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.immediateSourceBackupId"></a>

```csharp
public string ImmediateSourceBackupId { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `MysqlVersion`<sup>Required</sup> <a name="MysqlVersion" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.mysqlVersion"></a>

```csharp
public string MysqlVersion { get; }
```

- *Type:* string

---

##### `OriginalSourceBackupId`<sup>Required</sup> <a name="OriginalSourceBackupId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.originalSourceBackupId"></a>

```csharp
public string OriginalSourceBackupId { get; }
```

- *Type:* string

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.shapeName"></a>

```csharp
public string ShapeName { get; }
```

- *Type:* string

---

##### `SourceDetails`<sup>Required</sup> <a name="SourceDetails" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.sourceDetails"></a>

```csharp
public MysqlMysqlBackupSourceDetailsOutputReference SourceDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference">MysqlMysqlBackupSourceDetailsOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCopyCreated`<sup>Required</sup> <a name="TimeCopyCreated" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.timeCopyCreated"></a>

```csharp
public string TimeCopyCreated { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.timeouts"></a>

```csharp
public MysqlMysqlBackupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference">MysqlMysqlBackupTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `BackupTypeInput`<sup>Optional</sup> <a name="BackupTypeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.backupTypeInput"></a>

```csharp
public string BackupTypeInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DbSystemIdInput`<sup>Optional</sup> <a name="DbSystemIdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dbSystemIdInput"></a>

```csharp
public string DbSystemIdInput { get; }
```

- *Type:* string

---

##### `DbSystemSnapshotSummaryInput`<sup>Optional</sup> <a name="DbSystemSnapshotSummaryInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dbSystemSnapshotSummaryInput"></a>

```csharp
public object DbSystemSnapshotSummaryInput { get; }
```

- *Type:* object

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RetentionInDaysInput`<sup>Optional</sup> <a name="RetentionInDaysInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.retentionInDaysInput"></a>

```csharp
public double RetentionInDaysInput { get; }
```

- *Type:* double

---

##### `SourceDetailsInput`<sup>Optional</sup> <a name="SourceDetailsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.sourceDetailsInput"></a>

```csharp
public MysqlMysqlBackupSourceDetails SourceDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails">MysqlMysqlBackupSourceDetails</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `BackupType`<sup>Required</sup> <a name="BackupType" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.backupType"></a>

```csharp
public string BackupType { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RetentionInDays`<sup>Required</sup> <a name="RetentionInDays" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.retentionInDays"></a>

```csharp
public double RetentionInDays { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MysqlMysqlBackupConfig <a name="MysqlMysqlBackupConfig" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlBackupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BackupType = null,
    string CompartmentId = null,
    string DbSystemId = null,
    object DbSystemSnapshotSummary = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    double RetentionInDays = null,
    MysqlMysqlBackupSourceDetails SourceDetails = null,
    MysqlMysqlBackupTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.backupType">BackupType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#backup_type MysqlMysqlBackup#backup_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#compartment_id MysqlMysqlBackup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#db_system_id MysqlMysqlBackup#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.dbSystemSnapshotSummary">DbSystemSnapshotSummary</a></code> | <code>object</code> | db_system_snapshot_summary block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#defined_tags MysqlMysqlBackup#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#description MysqlMysqlBackup#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#display_name MysqlMysqlBackup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#freeform_tags MysqlMysqlBackup#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#id MysqlMysqlBackup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.retentionInDays">RetentionInDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#retention_in_days MysqlMysqlBackup#retention_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.sourceDetails">SourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails">MysqlMysqlBackupSourceDetails</a></code> | source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts">MysqlMysqlBackupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BackupType`<sup>Optional</sup> <a name="BackupType" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.backupType"></a>

```csharp
public string BackupType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#backup_type MysqlMysqlBackup#backup_type}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#compartment_id MysqlMysqlBackup#compartment_id}.

---

##### `DbSystemId`<sup>Optional</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#db_system_id MysqlMysqlBackup#db_system_id}.

---

##### `DbSystemSnapshotSummary`<sup>Optional</sup> <a name="DbSystemSnapshotSummary" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.dbSystemSnapshotSummary"></a>

```csharp
public object DbSystemSnapshotSummary { get; set; }
```

- *Type:* object

db_system_snapshot_summary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#db_system_snapshot_summary MysqlMysqlBackup#db_system_snapshot_summary}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#defined_tags MysqlMysqlBackup#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#description MysqlMysqlBackup#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#display_name MysqlMysqlBackup#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#freeform_tags MysqlMysqlBackup#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#id MysqlMysqlBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RetentionInDays`<sup>Optional</sup> <a name="RetentionInDays" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.retentionInDays"></a>

```csharp
public double RetentionInDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#retention_in_days MysqlMysqlBackup#retention_in_days}.

---

##### `SourceDetails`<sup>Optional</sup> <a name="SourceDetails" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.sourceDetails"></a>

```csharp
public MysqlMysqlBackupSourceDetails SourceDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails">MysqlMysqlBackupSourceDetails</a>

source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#source_details MysqlMysqlBackup#source_details}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.timeouts"></a>

```csharp
public MysqlMysqlBackupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts">MysqlMysqlBackupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#timeouts MysqlMysqlBackup#timeouts}

---

### MysqlMysqlBackupDbSystemSnapshot <a name="MysqlMysqlBackupDbSystemSnapshot" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshot"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshot.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlBackupDbSystemSnapshot {

};
```


### MysqlMysqlBackupDbSystemSnapshotBackupPolicy <a name="MysqlMysqlBackupDbSystemSnapshotBackupPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlBackupDbSystemSnapshotBackupPolicy {

};
```


### MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy <a name="MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy {

};
```


### MysqlMysqlBackupDbSystemSnapshotDataStorage <a name="MysqlMysqlBackupDbSystemSnapshotDataStorage" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlBackupDbSystemSnapshotDataStorage {

};
```


### MysqlMysqlBackupDbSystemSnapshotDeletionPolicy <a name="MysqlMysqlBackupDbSystemSnapshotDeletionPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlBackupDbSystemSnapshotDeletionPolicy {

};
```


### MysqlMysqlBackupDbSystemSnapshotEndpoints <a name="MysqlMysqlBackupDbSystemSnapshotEndpoints" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlBackupDbSystemSnapshotEndpoints {

};
```


### MysqlMysqlBackupDbSystemSnapshotMaintenance <a name="MysqlMysqlBackupDbSystemSnapshotMaintenance" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenance"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlBackupDbSystemSnapshotMaintenance {

};
```


### MysqlMysqlBackupDbSystemSnapshotSecureConnections <a name="MysqlMysqlBackupDbSystemSnapshotSecureConnections" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnections"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnections.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlBackupDbSystemSnapshotSecureConnections {

};
```


### MysqlMysqlBackupDbSystemSnapshotSummary <a name="MysqlMysqlBackupDbSystemSnapshotSummary" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlBackupDbSystemSnapshotSummary {
    string DisplayName = null,
    string Id = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#display_name MysqlMysqlBackup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#id MysqlMysqlBackup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#region MysqlMysqlBackup#region}. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#display_name MysqlMysqlBackup#display_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#id MysqlMysqlBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#region MysqlMysqlBackup#region}.

---

### MysqlMysqlBackupSourceDetails <a name="MysqlMysqlBackupSourceDetails" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlBackupSourceDetails {
    string BackupId,
    string CompartmentId,
    string Region
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails.property.backupId">BackupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#backup_id MysqlMysqlBackup#backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#compartment_id MysqlMysqlBackup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#region MysqlMysqlBackup#region}. |

---

##### `BackupId`<sup>Required</sup> <a name="BackupId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails.property.backupId"></a>

```csharp
public string BackupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#backup_id MysqlMysqlBackup#backup_id}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#compartment_id MysqlMysqlBackup#compartment_id}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#region MysqlMysqlBackup#region}.

---

### MysqlMysqlBackupTimeouts <a name="MysqlMysqlBackupTimeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlBackupTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#create MysqlMysqlBackup#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#delete MysqlMysqlBackup#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#update MysqlMysqlBackup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#create MysqlMysqlBackup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#delete MysqlMysqlBackup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#update MysqlMysqlBackup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MysqlMysqlBackupDbSystemSnapshotBackupPolicyList <a name="MysqlMysqlBackupDbSystemSnapshotBackupPolicyList" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlBackupDbSystemSnapshotBackupPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.get"></a>

```csharp
private MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference <a name="MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.pitrPolicy">PitrPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList">MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.retentionInDays">RetentionInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.windowStartTime">WindowStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicy">MysqlMysqlBackupDbSystemSnapshotBackupPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `PitrPolicy`<sup>Required</sup> <a name="PitrPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.pitrPolicy"></a>

```csharp
public MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList PitrPolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList">MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList</a>

---

##### `RetentionInDays`<sup>Required</sup> <a name="RetentionInDays" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.retentionInDays"></a>

```csharp
public double RetentionInDays { get; }
```

- *Type:* double

---

##### `WindowStartTime`<sup>Required</sup> <a name="WindowStartTime" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.windowStartTime"></a>

```csharp
public string WindowStartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.internalValue"></a>

```csharp
public MysqlMysqlBackupDbSystemSnapshotBackupPolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicy">MysqlMysqlBackupDbSystemSnapshotBackupPolicy</a>

---


### MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList <a name="MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.get"></a>

```csharp
private MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference <a name="MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy">MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.internalValue"></a>

```csharp
public MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy">MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy</a>

---


### MysqlMysqlBackupDbSystemSnapshotDataStorageList <a name="MysqlMysqlBackupDbSystemSnapshotDataStorageList" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlBackupDbSystemSnapshotDataStorageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.get"></a>

```csharp
private MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference <a name="MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.allocatedStorageSizeInGbs">AllocatedStorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.dataStorageSizeInGb">DataStorageSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.dataStorageSizeLimitInGbs">DataStorageSizeLimitInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.isAutoExpandStorageEnabled">IsAutoExpandStorageEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.maxStorageSizeInGbs">MaxStorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorage">MysqlMysqlBackupDbSystemSnapshotDataStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllocatedStorageSizeInGbs`<sup>Required</sup> <a name="AllocatedStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.allocatedStorageSizeInGbs"></a>

```csharp
public double AllocatedStorageSizeInGbs { get; }
```

- *Type:* double

---

##### `DataStorageSizeInGb`<sup>Required</sup> <a name="DataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.dataStorageSizeInGb"></a>

```csharp
public double DataStorageSizeInGb { get; }
```

- *Type:* double

---

##### `DataStorageSizeLimitInGbs`<sup>Required</sup> <a name="DataStorageSizeLimitInGbs" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.dataStorageSizeLimitInGbs"></a>

```csharp
public double DataStorageSizeLimitInGbs { get; }
```

- *Type:* double

---

##### `IsAutoExpandStorageEnabled`<sup>Required</sup> <a name="IsAutoExpandStorageEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.isAutoExpandStorageEnabled"></a>

```csharp
public IResolvable IsAutoExpandStorageEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MaxStorageSizeInGbs`<sup>Required</sup> <a name="MaxStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.maxStorageSizeInGbs"></a>

```csharp
public double MaxStorageSizeInGbs { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.internalValue"></a>

```csharp
public MysqlMysqlBackupDbSystemSnapshotDataStorage InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorage">MysqlMysqlBackupDbSystemSnapshotDataStorage</a>

---


### MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList <a name="MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.get"></a>

```csharp
private MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference <a name="MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.property.automaticBackupRetention">AutomaticBackupRetention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.property.finalBackup">FinalBackup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.property.isDeleteProtected">IsDeleteProtected</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicy">MysqlMysqlBackupDbSystemSnapshotDeletionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutomaticBackupRetention`<sup>Required</sup> <a name="AutomaticBackupRetention" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.property.automaticBackupRetention"></a>

```csharp
public string AutomaticBackupRetention { get; }
```

- *Type:* string

---

##### `FinalBackup`<sup>Required</sup> <a name="FinalBackup" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.property.finalBackup"></a>

```csharp
public string FinalBackup { get; }
```

- *Type:* string

---

##### `IsDeleteProtected`<sup>Required</sup> <a name="IsDeleteProtected" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.property.isDeleteProtected"></a>

```csharp
public IResolvable IsDeleteProtected { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.property.internalValue"></a>

```csharp
public MysqlMysqlBackupDbSystemSnapshotDeletionPolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicy">MysqlMysqlBackupDbSystemSnapshotDeletionPolicy</a>

---


### MysqlMysqlBackupDbSystemSnapshotEndpointsList <a name="MysqlMysqlBackupDbSystemSnapshotEndpointsList" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlBackupDbSystemSnapshotEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.get"></a>

```csharp
private MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference <a name="MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.modes">Modes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.portX">PortX</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.statusDetails">StatusDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpoints">MysqlMysqlBackupDbSystemSnapshotEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `Modes`<sup>Required</sup> <a name="Modes" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.modes"></a>

```csharp
public string[] Modes { get; }
```

- *Type:* string[]

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PortX`<sup>Required</sup> <a name="PortX" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.portX"></a>

```csharp
public double PortX { get; }
```

- *Type:* double

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusDetails`<sup>Required</sup> <a name="StatusDetails" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.statusDetails"></a>

```csharp
public string StatusDetails { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.internalValue"></a>

```csharp
public MysqlMysqlBackupDbSystemSnapshotEndpoints InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpoints">MysqlMysqlBackupDbSystemSnapshotEndpoints</a>

---


### MysqlMysqlBackupDbSystemSnapshotList <a name="MysqlMysqlBackupDbSystemSnapshotList" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlBackupDbSystemSnapshotList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.get"></a>

```csharp
private MysqlMysqlBackupDbSystemSnapshotOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MysqlMysqlBackupDbSystemSnapshotMaintenanceList <a name="MysqlMysqlBackupDbSystemSnapshotMaintenanceList" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlBackupDbSystemSnapshotMaintenanceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.get"></a>

```csharp
private MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference <a name="MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.property.windowStartTime">WindowStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenance">MysqlMysqlBackupDbSystemSnapshotMaintenance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WindowStartTime`<sup>Required</sup> <a name="WindowStartTime" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.property.windowStartTime"></a>

```csharp
public string WindowStartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.property.internalValue"></a>

```csharp
public MysqlMysqlBackupDbSystemSnapshotMaintenance InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenance">MysqlMysqlBackupDbSystemSnapshotMaintenance</a>

---


### MysqlMysqlBackupDbSystemSnapshotOutputReference <a name="MysqlMysqlBackupDbSystemSnapshotOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlBackupDbSystemSnapshotOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.adminUsername">AdminUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.backupPolicy">BackupPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList">MysqlMysqlBackupDbSystemSnapshotBackupPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.configurationId">ConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.crashRecovery">CrashRecovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.databaseManagement">DatabaseManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.dataStorage">DataStorage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList">MysqlMysqlBackupDbSystemSnapshotDataStorageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.dataStorageSizeInGb">DataStorageSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.deletionPolicy">DeletionPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList">MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.endpoints">Endpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList">MysqlMysqlBackupDbSystemSnapshotEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.faultDomain">FaultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.hostnameLabel">HostnameLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.isHighlyAvailable">IsHighlyAvailable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.maintenance">Maintenance</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList">MysqlMysqlBackupDbSystemSnapshotMaintenanceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.mysqlVersion">MysqlVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.portX">PortX</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.secureConnections">SecureConnections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList">MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.shapeName">ShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshot">MysqlMysqlBackupDbSystemSnapshot</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.adminUsername"></a>

```csharp
public string AdminUsername { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `BackupPolicy`<sup>Required</sup> <a name="BackupPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.backupPolicy"></a>

```csharp
public MysqlMysqlBackupDbSystemSnapshotBackupPolicyList BackupPolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList">MysqlMysqlBackupDbSystemSnapshotBackupPolicyList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConfigurationId`<sup>Required</sup> <a name="ConfigurationId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.configurationId"></a>

```csharp
public string ConfigurationId { get; }
```

- *Type:* string

---

##### `CrashRecovery`<sup>Required</sup> <a name="CrashRecovery" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.crashRecovery"></a>

```csharp
public string CrashRecovery { get; }
```

- *Type:* string

---

##### `DatabaseManagement`<sup>Required</sup> <a name="DatabaseManagement" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.databaseManagement"></a>

```csharp
public string DatabaseManagement { get; }
```

- *Type:* string

---

##### `DataStorage`<sup>Required</sup> <a name="DataStorage" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.dataStorage"></a>

```csharp
public MysqlMysqlBackupDbSystemSnapshotDataStorageList DataStorage { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList">MysqlMysqlBackupDbSystemSnapshotDataStorageList</a>

---

##### `DataStorageSizeInGb`<sup>Required</sup> <a name="DataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.dataStorageSizeInGb"></a>

```csharp
public double DataStorageSizeInGb { get; }
```

- *Type:* double

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.deletionPolicy"></a>

```csharp
public MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList DeletionPolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList">MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.endpoints"></a>

```csharp
public MysqlMysqlBackupDbSystemSnapshotEndpointsList Endpoints { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList">MysqlMysqlBackupDbSystemSnapshotEndpointsList</a>

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.faultDomain"></a>

```csharp
public string FaultDomain { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `HostnameLabel`<sup>Required</sup> <a name="HostnameLabel" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.hostnameLabel"></a>

```csharp
public string HostnameLabel { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `IsHighlyAvailable`<sup>Required</sup> <a name="IsHighlyAvailable" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.isHighlyAvailable"></a>

```csharp
public IResolvable IsHighlyAvailable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Maintenance`<sup>Required</sup> <a name="Maintenance" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.maintenance"></a>

```csharp
public MysqlMysqlBackupDbSystemSnapshotMaintenanceList Maintenance { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList">MysqlMysqlBackupDbSystemSnapshotMaintenanceList</a>

---

##### `MysqlVersion`<sup>Required</sup> <a name="MysqlVersion" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.mysqlVersion"></a>

```csharp
public string MysqlVersion { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PortX`<sup>Required</sup> <a name="PortX" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.portX"></a>

```csharp
public double PortX { get; }
```

- *Type:* double

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SecureConnections`<sup>Required</sup> <a name="SecureConnections" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.secureConnections"></a>

```csharp
public MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList SecureConnections { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList">MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList</a>

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.shapeName"></a>

```csharp
public string ShapeName { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.internalValue"></a>

```csharp
public MysqlMysqlBackupDbSystemSnapshot InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshot">MysqlMysqlBackupDbSystemSnapshot</a>

---


### MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList <a name="MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.get"></a>

```csharp
private MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference <a name="MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.property.certificateGenerationType">CertificateGenerationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.property.certificateId">CertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnections">MysqlMysqlBackupDbSystemSnapshotSecureConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateGenerationType`<sup>Required</sup> <a name="CertificateGenerationType" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.property.certificateGenerationType"></a>

```csharp
public string CertificateGenerationType { get; }
```

- *Type:* string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.property.certificateId"></a>

```csharp
public string CertificateId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.property.internalValue"></a>

```csharp
public MysqlMysqlBackupDbSystemSnapshotSecureConnections InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnections">MysqlMysqlBackupDbSystemSnapshotSecureConnections</a>

---


### MysqlMysqlBackupDbSystemSnapshotSummaryList <a name="MysqlMysqlBackupDbSystemSnapshotSummaryList" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlBackupDbSystemSnapshotSummaryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.get"></a>

```csharp
private MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference <a name="MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MysqlMysqlBackupSourceDetailsOutputReference <a name="MysqlMysqlBackupSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlBackupSourceDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.backupIdInput">BackupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.backupId">BackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails">MysqlMysqlBackupSourceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupIdInput`<sup>Optional</sup> <a name="BackupIdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.backupIdInput"></a>

```csharp
public string BackupIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `BackupId`<sup>Required</sup> <a name="BackupId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.backupId"></a>

```csharp
public string BackupId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.internalValue"></a>

```csharp
public MysqlMysqlBackupSourceDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails">MysqlMysqlBackupSourceDetails</a>

---


### MysqlMysqlBackupTimeoutsOutputReference <a name="MysqlMysqlBackupTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlBackupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



