# `databaseManagementExternalDbSystemConnector` Submodule <a name="`databaseManagementExternalDbSystemConnector` Submodule" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseManagementExternalDbSystemConnector <a name="DatabaseManagementExternalDbSystemConnector" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector oci_database_management_external_db_system_connector}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementExternalDbSystemConnector(Construct Scope, string Id, DatabaseManagementExternalDbSystemConnectorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig">DatabaseManagementExternalDbSystemConnectorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig">DatabaseManagementExternalDbSystemConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.putConnectionInfo">PutConnectionInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.resetAgentId">ResetAgentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.resetConnectionInfo">ResetConnectionInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConnectionInfo` <a name="PutConnectionInfo" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.putConnectionInfo"></a>

```csharp
private void PutConnectionInfo(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.putConnectionInfo.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseManagementExternalDbSystemConnectorTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeouts">DatabaseManagementExternalDbSystemConnectorTimeouts</a>

---

##### `ResetAgentId` <a name="ResetAgentId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.resetAgentId"></a>

```csharp
private void ResetAgentId()
```

##### `ResetConnectionInfo` <a name="ResetConnectionInfo" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.resetConnectionInfo"></a>

```csharp
private void ResetConnectionInfo()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseManagementExternalDbSystemConnector resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseManagementExternalDbSystemConnector.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseManagementExternalDbSystemConnector.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseManagementExternalDbSystemConnector.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseManagementExternalDbSystemConnector.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseManagementExternalDbSystemConnector resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseManagementExternalDbSystemConnector to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseManagementExternalDbSystemConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseManagementExternalDbSystemConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.connectionFailureMessage">ConnectionFailureMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.connectionInfo">ConnectionInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList">DatabaseManagementExternalDbSystemConnectorConnectionInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.connectionStatus">ConnectionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.timeConnectionStatusLastUpdated">TimeConnectionStatusLastUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference">DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.agentIdInput">AgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.connectionInfoInput">ConnectionInfoInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.connectorTypeInput">ConnectorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.externalDbSystemIdInput">ExternalDbSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.agentId">AgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.connectorType">ConnectorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.externalDbSystemId">ExternalDbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConnectionFailureMessage`<sup>Required</sup> <a name="ConnectionFailureMessage" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.connectionFailureMessage"></a>

```csharp
public string ConnectionFailureMessage { get; }
```

- *Type:* string

---

##### `ConnectionInfo`<sup>Required</sup> <a name="ConnectionInfo" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.connectionInfo"></a>

```csharp
public DatabaseManagementExternalDbSystemConnectorConnectionInfoList ConnectionInfo { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList">DatabaseManagementExternalDbSystemConnectorConnectionInfoList</a>

---

##### `ConnectionStatus`<sup>Required</sup> <a name="ConnectionStatus" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.connectionStatus"></a>

```csharp
public string ConnectionStatus { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeConnectionStatusLastUpdated`<sup>Required</sup> <a name="TimeConnectionStatusLastUpdated" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.timeConnectionStatusLastUpdated"></a>

```csharp
public string TimeConnectionStatusLastUpdated { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.timeouts"></a>

```csharp
public DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference">DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `AgentIdInput`<sup>Optional</sup> <a name="AgentIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.agentIdInput"></a>

```csharp
public string AgentIdInput { get; }
```

- *Type:* string

---

##### `ConnectionInfoInput`<sup>Optional</sup> <a name="ConnectionInfoInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.connectionInfoInput"></a>

```csharp
public object ConnectionInfoInput { get; }
```

- *Type:* object

---

##### `ConnectorTypeInput`<sup>Optional</sup> <a name="ConnectorTypeInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.connectorTypeInput"></a>

```csharp
public string ConnectorTypeInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ExternalDbSystemIdInput`<sup>Optional</sup> <a name="ExternalDbSystemIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.externalDbSystemIdInput"></a>

```csharp
public string ExternalDbSystemIdInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.agentId"></a>

```csharp
public string AgentId { get; }
```

- *Type:* string

---

##### `ConnectorType`<sup>Required</sup> <a name="ConnectorType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.connectorType"></a>

```csharp
public string ConnectorType { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExternalDbSystemId`<sup>Required</sup> <a name="ExternalDbSystemId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.externalDbSystemId"></a>

```csharp
public string ExternalDbSystemId { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnector.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseManagementExternalDbSystemConnectorConfig <a name="DatabaseManagementExternalDbSystemConnectorConfig" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementExternalDbSystemConnectorConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ConnectorType,
    string ExternalDbSystemId,
    string AgentId = null,
    object ConnectionInfo = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    DatabaseManagementExternalDbSystemConnectorTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.connectorType">ConnectorType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#connector_type DatabaseManagementExternalDbSystemConnector#connector_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.externalDbSystemId">ExternalDbSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#external_db_system_id DatabaseManagementExternalDbSystemConnector#external_db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.agentId">AgentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#agent_id DatabaseManagementExternalDbSystemConnector#agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.connectionInfo">ConnectionInfo</a></code> | <code>object</code> | connection_info block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#defined_tags DatabaseManagementExternalDbSystemConnector#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#display_name DatabaseManagementExternalDbSystemConnector#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#freeform_tags DatabaseManagementExternalDbSystemConnector#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#id DatabaseManagementExternalDbSystemConnector#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeouts">DatabaseManagementExternalDbSystemConnectorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ConnectorType`<sup>Required</sup> <a name="ConnectorType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.connectorType"></a>

```csharp
public string ConnectorType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#connector_type DatabaseManagementExternalDbSystemConnector#connector_type}.

---

##### `ExternalDbSystemId`<sup>Required</sup> <a name="ExternalDbSystemId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.externalDbSystemId"></a>

```csharp
public string ExternalDbSystemId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#external_db_system_id DatabaseManagementExternalDbSystemConnector#external_db_system_id}.

---

##### `AgentId`<sup>Optional</sup> <a name="AgentId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.agentId"></a>

```csharp
public string AgentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#agent_id DatabaseManagementExternalDbSystemConnector#agent_id}.

---

##### `ConnectionInfo`<sup>Optional</sup> <a name="ConnectionInfo" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.connectionInfo"></a>

```csharp
public object ConnectionInfo { get; set; }
```

- *Type:* object

connection_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#connection_info DatabaseManagementExternalDbSystemConnector#connection_info}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#defined_tags DatabaseManagementExternalDbSystemConnector#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#display_name DatabaseManagementExternalDbSystemConnector#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#freeform_tags DatabaseManagementExternalDbSystemConnector#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#id DatabaseManagementExternalDbSystemConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConfig.property.timeouts"></a>

```csharp
public DatabaseManagementExternalDbSystemConnectorTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeouts">DatabaseManagementExternalDbSystemConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#timeouts DatabaseManagementExternalDbSystemConnector#timeouts}

---

### DatabaseManagementExternalDbSystemConnectorConnectionInfo <a name="DatabaseManagementExternalDbSystemConnectorConnectionInfo" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementExternalDbSystemConnectorConnectionInfo {
    string ComponentType,
    object ConnectionCredentials = null,
    object ConnectionString = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfo.property.componentType">ComponentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#component_type DatabaseManagementExternalDbSystemConnector#component_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfo.property.connectionCredentials">ConnectionCredentials</a></code> | <code>object</code> | connection_credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfo.property.connectionString">ConnectionString</a></code> | <code>object</code> | connection_string block. |

---

##### `ComponentType`<sup>Required</sup> <a name="ComponentType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfo.property.componentType"></a>

```csharp
public string ComponentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#component_type DatabaseManagementExternalDbSystemConnector#component_type}.

---

##### `ConnectionCredentials`<sup>Optional</sup> <a name="ConnectionCredentials" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfo.property.connectionCredentials"></a>

```csharp
public object ConnectionCredentials { get; set; }
```

- *Type:* object

connection_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#connection_credentials DatabaseManagementExternalDbSystemConnector#connection_credentials}

---

##### `ConnectionString`<sup>Optional</sup> <a name="ConnectionString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfo.property.connectionString"></a>

```csharp
public object ConnectionString { get; set; }
```

- *Type:* object

connection_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#connection_string DatabaseManagementExternalDbSystemConnector#connection_string}

---

### DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials <a name="DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials {
    string CredentialName = null,
    string CredentialType = null,
    string PasswordSecretId = null,
    string Role = null,
    string SslSecretId = null,
    string UserName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials.property.credentialName">CredentialName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#credential_name DatabaseManagementExternalDbSystemConnector#credential_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials.property.credentialType">CredentialType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#credential_type DatabaseManagementExternalDbSystemConnector#credential_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials.property.passwordSecretId">PasswordSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#password_secret_id DatabaseManagementExternalDbSystemConnector#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#role DatabaseManagementExternalDbSystemConnector#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials.property.sslSecretId">SslSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#ssl_secret_id DatabaseManagementExternalDbSystemConnector#ssl_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials.property.userName">UserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#user_name DatabaseManagementExternalDbSystemConnector#user_name}. |

---

##### `CredentialName`<sup>Optional</sup> <a name="CredentialName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials.property.credentialName"></a>

```csharp
public string CredentialName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#credential_name DatabaseManagementExternalDbSystemConnector#credential_name}.

---

##### `CredentialType`<sup>Optional</sup> <a name="CredentialType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials.property.credentialType"></a>

```csharp
public string CredentialType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#credential_type DatabaseManagementExternalDbSystemConnector#credential_type}.

---

##### `PasswordSecretId`<sup>Optional</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials.property.passwordSecretId"></a>

```csharp
public string PasswordSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#password_secret_id DatabaseManagementExternalDbSystemConnector#password_secret_id}.

---

##### `Role`<sup>Optional</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#role DatabaseManagementExternalDbSystemConnector#role}.

---

##### `SslSecretId`<sup>Optional</sup> <a name="SslSecretId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials.property.sslSecretId"></a>

```csharp
public string SslSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#ssl_secret_id DatabaseManagementExternalDbSystemConnector#ssl_secret_id}.

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentials.property.userName"></a>

```csharp
public string UserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#user_name DatabaseManagementExternalDbSystemConnector#user_name}.

---

### DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString <a name="DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString {
    string HostName = null,
    string[] Hosts = null,
    double Port = null,
    string Protocol = null,
    string Service = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString.property.hostName">HostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#host_name DatabaseManagementExternalDbSystemConnector#host_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString.property.hosts">Hosts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#hosts DatabaseManagementExternalDbSystemConnector#hosts}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#port DatabaseManagementExternalDbSystemConnector#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#protocol DatabaseManagementExternalDbSystemConnector#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString.property.service">Service</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#service DatabaseManagementExternalDbSystemConnector#service}. |

---

##### `HostName`<sup>Optional</sup> <a name="HostName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString.property.hostName"></a>

```csharp
public string HostName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#host_name DatabaseManagementExternalDbSystemConnector#host_name}.

---

##### `Hosts`<sup>Optional</sup> <a name="Hosts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString.property.hosts"></a>

```csharp
public string[] Hosts { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#hosts DatabaseManagementExternalDbSystemConnector#hosts}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#port DatabaseManagementExternalDbSystemConnector#port}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#protocol DatabaseManagementExternalDbSystemConnector#protocol}.

---

##### `Service`<sup>Optional</sup> <a name="Service" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionString.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#service DatabaseManagementExternalDbSystemConnector#service}.

---

### DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredential <a name="DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredential" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredential"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredential.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredential {

};
```


### DatabaseManagementExternalDbSystemConnectorTimeouts <a name="DatabaseManagementExternalDbSystemConnectorTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementExternalDbSystemConnectorTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#create DatabaseManagementExternalDbSystemConnector#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#delete DatabaseManagementExternalDbSystemConnector#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#update DatabaseManagementExternalDbSystemConnector#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#create DatabaseManagementExternalDbSystemConnector#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#delete DatabaseManagementExternalDbSystemConnector#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_connector#update DatabaseManagementExternalDbSystemConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList <a name="DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.get"></a>

```csharp
private DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference <a name="DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.resetCredentialName">ResetCredentialName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.resetCredentialType">ResetCredentialType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.resetPasswordSecretId">ResetPasswordSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.resetRole">ResetRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.resetSslSecretId">ResetSslSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.resetUserName">ResetUserName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCredentialName` <a name="ResetCredentialName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.resetCredentialName"></a>

```csharp
private void ResetCredentialName()
```

##### `ResetCredentialType` <a name="ResetCredentialType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.resetCredentialType"></a>

```csharp
private void ResetCredentialType()
```

##### `ResetPasswordSecretId` <a name="ResetPasswordSecretId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.resetPasswordSecretId"></a>

```csharp
private void ResetPasswordSecretId()
```

##### `ResetRole` <a name="ResetRole" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.resetRole"></a>

```csharp
private void ResetRole()
```

##### `ResetSslSecretId` <a name="ResetSslSecretId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.resetSslSecretId"></a>

```csharp
private void ResetSslSecretId()
```

##### `ResetUserName` <a name="ResetUserName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.resetUserName"></a>

```csharp
private void ResetUserName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.namedCredentialId">NamedCredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.credentialNameInput">CredentialNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.credentialTypeInput">CredentialTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.passwordSecretIdInput">PasswordSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.sslSecretIdInput">SslSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.userNameInput">UserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.credentialName">CredentialName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.credentialType">CredentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.passwordSecretId">PasswordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.sslSecretId">SslSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NamedCredentialId`<sup>Required</sup> <a name="NamedCredentialId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.namedCredentialId"></a>

```csharp
public string NamedCredentialId { get; }
```

- *Type:* string

---

##### `CredentialNameInput`<sup>Optional</sup> <a name="CredentialNameInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.credentialNameInput"></a>

```csharp
public string CredentialNameInput { get; }
```

- *Type:* string

---

##### `CredentialTypeInput`<sup>Optional</sup> <a name="CredentialTypeInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.credentialTypeInput"></a>

```csharp
public string CredentialTypeInput { get; }
```

- *Type:* string

---

##### `PasswordSecretIdInput`<sup>Optional</sup> <a name="PasswordSecretIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.passwordSecretIdInput"></a>

```csharp
public string PasswordSecretIdInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `SslSecretIdInput`<sup>Optional</sup> <a name="SslSecretIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.sslSecretIdInput"></a>

```csharp
public string SslSecretIdInput { get; }
```

- *Type:* string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.userNameInput"></a>

```csharp
public string UserNameInput { get; }
```

- *Type:* string

---

##### `CredentialName`<sup>Required</sup> <a name="CredentialName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.credentialName"></a>

```csharp
public string CredentialName { get; }
```

- *Type:* string

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.credentialType"></a>

```csharp
public string CredentialType { get; }
```

- *Type:* string

---

##### `PasswordSecretId`<sup>Required</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.passwordSecretId"></a>

```csharp
public string PasswordSecretId { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `SslSecretId`<sup>Required</sup> <a name="SslSecretId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.sslSecretId"></a>

```csharp
public string SslSecretId { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList <a name="DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.get"></a>

```csharp
private DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference <a name="DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.resetHostName">ResetHostName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.resetHosts">ResetHosts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.resetService">ResetService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHostName` <a name="ResetHostName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.resetHostName"></a>

```csharp
private void ResetHostName()
```

##### `ResetHosts` <a name="ResetHosts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.resetHosts"></a>

```csharp
private void ResetHosts()
```

##### `ResetPort` <a name="ResetPort" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetService` <a name="ResetService" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.resetService"></a>

```csharp
private void ResetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.hostsInput">HostsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.hostName">HostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.hosts">Hosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.hostNameInput"></a>

```csharp
public string HostNameInput { get; }
```

- *Type:* string

---

##### `HostsInput`<sup>Optional</sup> <a name="HostsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.hostsInput"></a>

```csharp
public string[] HostsInput { get; }
```

- *Type:* string[]

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.hostName"></a>

```csharp
public string HostName { get; }
```

- *Type:* string

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.hosts"></a>

```csharp
public string[] Hosts { get; }
```

- *Type:* string[]

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList <a name="DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.get"></a>

```csharp
private DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference <a name="DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.credentialType">CredentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.namedCredentialId">NamedCredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.passwordSecretId">PasswordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredential">DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.credentialType"></a>

```csharp
public string CredentialType { get; }
```

- *Type:* string

---

##### `NamedCredentialId`<sup>Required</sup> <a name="NamedCredentialId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.namedCredentialId"></a>

```csharp
public string NamedCredentialId { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PasswordSecretId`<sup>Required</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.passwordSecretId"></a>

```csharp
public string PasswordSecretId { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialOutputReference.property.internalValue"></a>

```csharp
public DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredential InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredential">DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredential</a>

---


### DatabaseManagementExternalDbSystemConnectorConnectionInfoList <a name="DatabaseManagementExternalDbSystemConnectorConnectionInfoList" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementExternalDbSystemConnectorConnectionInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.get"></a>

```csharp
private DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference <a name="DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.putConnectionCredentials">PutConnectionCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.putConnectionString">PutConnectionString</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.resetConnectionCredentials">ResetConnectionCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.resetConnectionString">ResetConnectionString</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConnectionCredentials` <a name="PutConnectionCredentials" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.putConnectionCredentials"></a>

```csharp
private void PutConnectionCredentials(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.putConnectionCredentials.parameter.value"></a>

- *Type:* object

---

##### `PutConnectionString` <a name="PutConnectionString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.putConnectionString"></a>

```csharp
private void PutConnectionString(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.putConnectionString.parameter.value"></a>

- *Type:* object

---

##### `ResetConnectionCredentials` <a name="ResetConnectionCredentials" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.resetConnectionCredentials"></a>

```csharp
private void ResetConnectionCredentials()
```

##### `ResetConnectionString` <a name="ResetConnectionString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.resetConnectionString"></a>

```csharp
private void ResetConnectionString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.connectionCredentials">ConnectionCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList">DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.connectionString">ConnectionString</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList">DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.databaseCredential">DatabaseCredential</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList">DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.componentTypeInput">ComponentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.connectionCredentialsInput">ConnectionCredentialsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.connectionStringInput">ConnectionStringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.componentType">ComponentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionCredentials`<sup>Required</sup> <a name="ConnectionCredentials" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.connectionCredentials"></a>

```csharp
public DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList ConnectionCredentials { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList">DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionCredentialsList</a>

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.connectionString"></a>

```csharp
public DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList ConnectionString { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList">DatabaseManagementExternalDbSystemConnectorConnectionInfoConnectionStringList</a>

---

##### `DatabaseCredential`<sup>Required</sup> <a name="DatabaseCredential" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.databaseCredential"></a>

```csharp
public DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList DatabaseCredential { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList">DatabaseManagementExternalDbSystemConnectorConnectionInfoDatabaseCredentialList</a>

---

##### `ComponentTypeInput`<sup>Optional</sup> <a name="ComponentTypeInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.componentTypeInput"></a>

```csharp
public string ComponentTypeInput { get; }
```

- *Type:* string

---

##### `ConnectionCredentialsInput`<sup>Optional</sup> <a name="ConnectionCredentialsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.connectionCredentialsInput"></a>

```csharp
public object ConnectionCredentialsInput { get; }
```

- *Type:* object

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.connectionStringInput"></a>

```csharp
public object ConnectionStringInput { get; }
```

- *Type:* object

---

##### `ComponentType`<sup>Required</sup> <a name="ComponentType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.componentType"></a>

```csharp
public string ComponentType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorConnectionInfoOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference <a name="DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemConnector.DatabaseManagementExternalDbSystemConnectorTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



