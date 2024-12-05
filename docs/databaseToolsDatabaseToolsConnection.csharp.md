# `databaseToolsDatabaseToolsConnection` Submodule <a name="`databaseToolsDatabaseToolsConnection` Submodule" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseToolsDatabaseToolsConnection <a name="DatabaseToolsDatabaseToolsConnection" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection oci_database_tools_database_tools_connection}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseToolsDatabaseToolsConnection(Construct Scope, string Id, DatabaseToolsDatabaseToolsConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig">DatabaseToolsDatabaseToolsConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig">DatabaseToolsDatabaseToolsConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putKeyStores">PutKeyStores</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putLocks">PutLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putProxyClient">PutProxyClient</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putRelatedResource">PutRelatedResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putUserPassword">PutUserPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetAdvancedProperties">ResetAdvancedProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetConnectionString">ResetConnectionString</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetKeyStores">ResetKeyStores</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetLocks">ResetLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetPrivateEndpointId">ResetPrivateEndpointId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetProxyClient">ResetProxyClient</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetRelatedResource">ResetRelatedResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetRuntimeSupport">ResetRuntimeSupport</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutKeyStores` <a name="PutKeyStores" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putKeyStores"></a>

```csharp
private void PutKeyStores(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putKeyStores.parameter.value"></a>

- *Type:* object

---

##### `PutLocks` <a name="PutLocks" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putLocks"></a>

```csharp
private void PutLocks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putLocks.parameter.value"></a>

- *Type:* object

---

##### `PutProxyClient` <a name="PutProxyClient" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putProxyClient"></a>

```csharp
private void PutProxyClient(DatabaseToolsDatabaseToolsConnectionProxyClient Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putProxyClient.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClient">DatabaseToolsDatabaseToolsConnectionProxyClient</a>

---

##### `PutRelatedResource` <a name="PutRelatedResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putRelatedResource"></a>

```csharp
private void PutRelatedResource(DatabaseToolsDatabaseToolsConnectionRelatedResource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putRelatedResource.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResource">DatabaseToolsDatabaseToolsConnectionRelatedResource</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseToolsDatabaseToolsConnectionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeouts">DatabaseToolsDatabaseToolsConnectionTimeouts</a>

---

##### `PutUserPassword` <a name="PutUserPassword" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putUserPassword"></a>

```csharp
private void PutUserPassword(DatabaseToolsDatabaseToolsConnectionUserPassword Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putUserPassword.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPassword">DatabaseToolsDatabaseToolsConnectionUserPassword</a>

---

##### `ResetAdvancedProperties` <a name="ResetAdvancedProperties" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetAdvancedProperties"></a>

```csharp
private void ResetAdvancedProperties()
```

##### `ResetConnectionString` <a name="ResetConnectionString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetConnectionString"></a>

```csharp
private void ResetConnectionString()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKeyStores` <a name="ResetKeyStores" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetKeyStores"></a>

```csharp
private void ResetKeyStores()
```

##### `ResetLocks` <a name="ResetLocks" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetLocks"></a>

```csharp
private void ResetLocks()
```

##### `ResetPrivateEndpointId` <a name="ResetPrivateEndpointId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetPrivateEndpointId"></a>

```csharp
private void ResetPrivateEndpointId()
```

##### `ResetProxyClient` <a name="ResetProxyClient" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetProxyClient"></a>

```csharp
private void ResetProxyClient()
```

##### `ResetRelatedResource` <a name="ResetRelatedResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetRelatedResource"></a>

```csharp
private void ResetRelatedResource()
```

##### `ResetRuntimeSupport` <a name="ResetRuntimeSupport" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetRuntimeSupport"></a>

```csharp
private void ResetRuntimeSupport()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUrl` <a name="ResetUrl" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetUrl"></a>

```csharp
private void ResetUrl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseToolsDatabaseToolsConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseToolsDatabaseToolsConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseToolsDatabaseToolsConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseToolsDatabaseToolsConnection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseToolsDatabaseToolsConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseToolsDatabaseToolsConnection resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseToolsDatabaseToolsConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseToolsDatabaseToolsConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseToolsDatabaseToolsConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.keyStores">KeyStores</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList">DatabaseToolsDatabaseToolsConnectionKeyStoresList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.locks">Locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList">DatabaseToolsDatabaseToolsConnectionLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.proxyClient">ProxyClient</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference">DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.relatedResource">RelatedResource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference">DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference">DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.userPassword">UserPassword</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference">DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.advancedPropertiesInput">AdvancedPropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.connectionStringInput">ConnectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.keyStoresInput">KeyStoresInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.locksInput">LocksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.privateEndpointIdInput">PrivateEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.proxyClientInput">ProxyClientInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClient">DatabaseToolsDatabaseToolsConnectionProxyClient</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.relatedResourceInput">RelatedResourceInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResource">DatabaseToolsDatabaseToolsConnectionRelatedResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.runtimeSupportInput">RuntimeSupportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.userNameInput">UserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.userPasswordInput">UserPasswordInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPassword">DatabaseToolsDatabaseToolsConnectionUserPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.advancedProperties">AdvancedProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.connectionString">ConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.privateEndpointId">PrivateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.runtimeSupport">RuntimeSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.userName">UserName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `KeyStores`<sup>Required</sup> <a name="KeyStores" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.keyStores"></a>

```csharp
public DatabaseToolsDatabaseToolsConnectionKeyStoresList KeyStores { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList">DatabaseToolsDatabaseToolsConnectionKeyStoresList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.locks"></a>

```csharp
public DatabaseToolsDatabaseToolsConnectionLocksList Locks { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList">DatabaseToolsDatabaseToolsConnectionLocksList</a>

---

##### `ProxyClient`<sup>Required</sup> <a name="ProxyClient" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.proxyClient"></a>

```csharp
public DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference ProxyClient { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference">DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference</a>

---

##### `RelatedResource`<sup>Required</sup> <a name="RelatedResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.relatedResource"></a>

```csharp
public DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference RelatedResource { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference">DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.timeouts"></a>

```csharp
public DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference">DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `UserPassword`<sup>Required</sup> <a name="UserPassword" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.userPassword"></a>

```csharp
public DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference UserPassword { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference">DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference</a>

---

##### `AdvancedPropertiesInput`<sup>Optional</sup> <a name="AdvancedPropertiesInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.advancedPropertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdvancedPropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.connectionStringInput"></a>

```csharp
public string ConnectionStringInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyStoresInput`<sup>Optional</sup> <a name="KeyStoresInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.keyStoresInput"></a>

```csharp
public object KeyStoresInput { get; }
```

- *Type:* object

---

##### `LocksInput`<sup>Optional</sup> <a name="LocksInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.locksInput"></a>

```csharp
public object LocksInput { get; }
```

- *Type:* object

---

##### `PrivateEndpointIdInput`<sup>Optional</sup> <a name="PrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.privateEndpointIdInput"></a>

```csharp
public string PrivateEndpointIdInput { get; }
```

- *Type:* string

---

##### `ProxyClientInput`<sup>Optional</sup> <a name="ProxyClientInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.proxyClientInput"></a>

```csharp
public DatabaseToolsDatabaseToolsConnectionProxyClient ProxyClientInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClient">DatabaseToolsDatabaseToolsConnectionProxyClient</a>

---

##### `RelatedResourceInput`<sup>Optional</sup> <a name="RelatedResourceInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.relatedResourceInput"></a>

```csharp
public DatabaseToolsDatabaseToolsConnectionRelatedResource RelatedResourceInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResource">DatabaseToolsDatabaseToolsConnectionRelatedResource</a>

---

##### `RuntimeSupportInput`<sup>Optional</sup> <a name="RuntimeSupportInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.runtimeSupportInput"></a>

```csharp
public string RuntimeSupportInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.userNameInput"></a>

```csharp
public string UserNameInput { get; }
```

- *Type:* string

---

##### `UserPasswordInput`<sup>Optional</sup> <a name="UserPasswordInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.userPasswordInput"></a>

```csharp
public DatabaseToolsDatabaseToolsConnectionUserPassword UserPasswordInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPassword">DatabaseToolsDatabaseToolsConnectionUserPassword</a>

---

##### `AdvancedProperties`<sup>Required</sup> <a name="AdvancedProperties" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.advancedProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdvancedProperties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.connectionString"></a>

```csharp
public string ConnectionString { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrivateEndpointId`<sup>Required</sup> <a name="PrivateEndpointId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.privateEndpointId"></a>

```csharp
public string PrivateEndpointId { get; }
```

- *Type:* string

---

##### `RuntimeSupport`<sup>Required</sup> <a name="RuntimeSupport" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.runtimeSupport"></a>

```csharp
public string RuntimeSupport { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseToolsDatabaseToolsConnectionConfig <a name="DatabaseToolsDatabaseToolsConnectionConfig" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseToolsDatabaseToolsConnectionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DisplayName,
    string Type,
    string UserName,
    DatabaseToolsDatabaseToolsConnectionUserPassword UserPassword,
    System.Collections.Generic.IDictionary<string, string> AdvancedProperties = null,
    string ConnectionString = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    object KeyStores = null,
    object Locks = null,
    string PrivateEndpointId = null,
    DatabaseToolsDatabaseToolsConnectionProxyClient ProxyClient = null,
    DatabaseToolsDatabaseToolsConnectionRelatedResource RelatedResource = null,
    string RuntimeSupport = null,
    DatabaseToolsDatabaseToolsConnectionTimeouts Timeouts = null,
    string Url = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#compartment_id DatabaseToolsDatabaseToolsConnection#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#display_name DatabaseToolsDatabaseToolsConnection#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#type DatabaseToolsDatabaseToolsConnection#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.userName">UserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#user_name DatabaseToolsDatabaseToolsConnection#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.userPassword">UserPassword</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPassword">DatabaseToolsDatabaseToolsConnectionUserPassword</a></code> | user_password block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.advancedProperties">AdvancedProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#advanced_properties DatabaseToolsDatabaseToolsConnection#advanced_properties}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.connectionString">ConnectionString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#connection_string DatabaseToolsDatabaseToolsConnection#connection_string}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#defined_tags DatabaseToolsDatabaseToolsConnection#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#freeform_tags DatabaseToolsDatabaseToolsConnection#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#id DatabaseToolsDatabaseToolsConnection#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.keyStores">KeyStores</a></code> | <code>object</code> | key_stores block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.locks">Locks</a></code> | <code>object</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.privateEndpointId">PrivateEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#private_endpoint_id DatabaseToolsDatabaseToolsConnection#private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.proxyClient">ProxyClient</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClient">DatabaseToolsDatabaseToolsConnectionProxyClient</a></code> | proxy_client block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.relatedResource">RelatedResource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResource">DatabaseToolsDatabaseToolsConnectionRelatedResource</a></code> | related_resource block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.runtimeSupport">RuntimeSupport</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#runtime_support DatabaseToolsDatabaseToolsConnection#runtime_support}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeouts">DatabaseToolsDatabaseToolsConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#url DatabaseToolsDatabaseToolsConnection#url}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#compartment_id DatabaseToolsDatabaseToolsConnection#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#display_name DatabaseToolsDatabaseToolsConnection#display_name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#type DatabaseToolsDatabaseToolsConnection#type}.

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.userName"></a>

```csharp
public string UserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#user_name DatabaseToolsDatabaseToolsConnection#user_name}.

---

##### `UserPassword`<sup>Required</sup> <a name="UserPassword" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.userPassword"></a>

```csharp
public DatabaseToolsDatabaseToolsConnectionUserPassword UserPassword { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPassword">DatabaseToolsDatabaseToolsConnectionUserPassword</a>

user_password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#user_password DatabaseToolsDatabaseToolsConnection#user_password}

---

##### `AdvancedProperties`<sup>Optional</sup> <a name="AdvancedProperties" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.advancedProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdvancedProperties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#advanced_properties DatabaseToolsDatabaseToolsConnection#advanced_properties}.

---

##### `ConnectionString`<sup>Optional</sup> <a name="ConnectionString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.connectionString"></a>

```csharp
public string ConnectionString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#connection_string DatabaseToolsDatabaseToolsConnection#connection_string}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#defined_tags DatabaseToolsDatabaseToolsConnection#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#freeform_tags DatabaseToolsDatabaseToolsConnection#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#id DatabaseToolsDatabaseToolsConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyStores`<sup>Optional</sup> <a name="KeyStores" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.keyStores"></a>

```csharp
public object KeyStores { get; set; }
```

- *Type:* object

key_stores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#key_stores DatabaseToolsDatabaseToolsConnection#key_stores}

---

##### `Locks`<sup>Optional</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.locks"></a>

```csharp
public object Locks { get; set; }
```

- *Type:* object

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#locks DatabaseToolsDatabaseToolsConnection#locks}

---

##### `PrivateEndpointId`<sup>Optional</sup> <a name="PrivateEndpointId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.privateEndpointId"></a>

```csharp
public string PrivateEndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#private_endpoint_id DatabaseToolsDatabaseToolsConnection#private_endpoint_id}.

---

##### `ProxyClient`<sup>Optional</sup> <a name="ProxyClient" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.proxyClient"></a>

```csharp
public DatabaseToolsDatabaseToolsConnectionProxyClient ProxyClient { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClient">DatabaseToolsDatabaseToolsConnectionProxyClient</a>

proxy_client block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#proxy_client DatabaseToolsDatabaseToolsConnection#proxy_client}

---

##### `RelatedResource`<sup>Optional</sup> <a name="RelatedResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.relatedResource"></a>

```csharp
public DatabaseToolsDatabaseToolsConnectionRelatedResource RelatedResource { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResource">DatabaseToolsDatabaseToolsConnectionRelatedResource</a>

related_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#related_resource DatabaseToolsDatabaseToolsConnection#related_resource}

---

##### `RuntimeSupport`<sup>Optional</sup> <a name="RuntimeSupport" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.runtimeSupport"></a>

```csharp
public string RuntimeSupport { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#runtime_support DatabaseToolsDatabaseToolsConnection#runtime_support}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.timeouts"></a>

```csharp
public DatabaseToolsDatabaseToolsConnectionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeouts">DatabaseToolsDatabaseToolsConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#timeouts DatabaseToolsDatabaseToolsConnection#timeouts}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#url DatabaseToolsDatabaseToolsConnection#url}.

---

### DatabaseToolsDatabaseToolsConnectionKeyStores <a name="DatabaseToolsDatabaseToolsConnectionKeyStores" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStores"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStores.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseToolsDatabaseToolsConnectionKeyStores {
    DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent KeyStoreContent = null,
    DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword KeyStorePassword = null,
    string KeyStoreType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStores.property.keyStoreContent">KeyStoreContent</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent">DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent</a></code> | key_store_content block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStores.property.keyStorePassword">KeyStorePassword</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword">DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword</a></code> | key_store_password block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStores.property.keyStoreType">KeyStoreType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#key_store_type DatabaseToolsDatabaseToolsConnection#key_store_type}. |

---

##### `KeyStoreContent`<sup>Optional</sup> <a name="KeyStoreContent" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStores.property.keyStoreContent"></a>

```csharp
public DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent KeyStoreContent { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent">DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent</a>

key_store_content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#key_store_content DatabaseToolsDatabaseToolsConnection#key_store_content}

---

##### `KeyStorePassword`<sup>Optional</sup> <a name="KeyStorePassword" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStores.property.keyStorePassword"></a>

```csharp
public DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword KeyStorePassword { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword">DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword</a>

key_store_password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#key_store_password DatabaseToolsDatabaseToolsConnection#key_store_password}

---

##### `KeyStoreType`<sup>Optional</sup> <a name="KeyStoreType" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStores.property.keyStoreType"></a>

```csharp
public string KeyStoreType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#key_store_type DatabaseToolsDatabaseToolsConnection#key_store_type}.

---

### DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent <a name="DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent {
    string ValueType,
    string SecretId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent.property.valueType">ValueType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#value_type DatabaseToolsDatabaseToolsConnection#value_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent.property.secretId">SecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#secret_id DatabaseToolsDatabaseToolsConnection#secret_id}. |

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent.property.valueType"></a>

```csharp
public string ValueType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#value_type DatabaseToolsDatabaseToolsConnection#value_type}.

---

##### `SecretId`<sup>Optional</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#secret_id DatabaseToolsDatabaseToolsConnection#secret_id}.

---

### DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword <a name="DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword {
    string ValueType,
    string SecretId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword.property.valueType">ValueType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#value_type DatabaseToolsDatabaseToolsConnection#value_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword.property.secretId">SecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#secret_id DatabaseToolsDatabaseToolsConnection#secret_id}. |

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword.property.valueType"></a>

```csharp
public string ValueType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#value_type DatabaseToolsDatabaseToolsConnection#value_type}.

---

##### `SecretId`<sup>Optional</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#secret_id DatabaseToolsDatabaseToolsConnection#secret_id}.

---

### DatabaseToolsDatabaseToolsConnectionLocks <a name="DatabaseToolsDatabaseToolsConnectionLocks" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseToolsDatabaseToolsConnectionLocks {
    string Type,
    string Message = null,
    string RelatedResourceId = null,
    string TimeCreated = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocks.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#type DatabaseToolsDatabaseToolsConnection#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocks.property.message">Message</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#message DatabaseToolsDatabaseToolsConnection#message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocks.property.relatedResourceId">RelatedResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#related_resource_id DatabaseToolsDatabaseToolsConnection#related_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocks.property.timeCreated">TimeCreated</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#time_created DatabaseToolsDatabaseToolsConnection#time_created}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocks.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#type DatabaseToolsDatabaseToolsConnection#type}.

---

##### `Message`<sup>Optional</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocks.property.message"></a>

```csharp
public string Message { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#message DatabaseToolsDatabaseToolsConnection#message}.

---

##### `RelatedResourceId`<sup>Optional</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocks.property.relatedResourceId"></a>

```csharp
public string RelatedResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#related_resource_id DatabaseToolsDatabaseToolsConnection#related_resource_id}.

---

##### `TimeCreated`<sup>Optional</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocks.property.timeCreated"></a>

```csharp
public string TimeCreated { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#time_created DatabaseToolsDatabaseToolsConnection#time_created}.

---

### DatabaseToolsDatabaseToolsConnectionProxyClient <a name="DatabaseToolsDatabaseToolsConnectionProxyClient" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClient"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClient.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseToolsDatabaseToolsConnectionProxyClient {
    string ProxyAuthenticationType,
    string[] Roles = null,
    string UserName = null,
    DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword UserPassword = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClient.property.proxyAuthenticationType">ProxyAuthenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#proxy_authentication_type DatabaseToolsDatabaseToolsConnection#proxy_authentication_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClient.property.roles">Roles</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#roles DatabaseToolsDatabaseToolsConnection#roles}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClient.property.userName">UserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#user_name DatabaseToolsDatabaseToolsConnection#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClient.property.userPassword">UserPassword</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword">DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword</a></code> | user_password block. |

---

##### `ProxyAuthenticationType`<sup>Required</sup> <a name="ProxyAuthenticationType" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClient.property.proxyAuthenticationType"></a>

```csharp
public string ProxyAuthenticationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#proxy_authentication_type DatabaseToolsDatabaseToolsConnection#proxy_authentication_type}.

---

##### `Roles`<sup>Optional</sup> <a name="Roles" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClient.property.roles"></a>

```csharp
public string[] Roles { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#roles DatabaseToolsDatabaseToolsConnection#roles}.

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClient.property.userName"></a>

```csharp
public string UserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#user_name DatabaseToolsDatabaseToolsConnection#user_name}.

---

##### `UserPassword`<sup>Optional</sup> <a name="UserPassword" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClient.property.userPassword"></a>

```csharp
public DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword UserPassword { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword">DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword</a>

user_password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#user_password DatabaseToolsDatabaseToolsConnection#user_password}

---

### DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword <a name="DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword {
    string SecretId,
    string ValueType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword.property.secretId">SecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#secret_id DatabaseToolsDatabaseToolsConnection#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword.property.valueType">ValueType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#value_type DatabaseToolsDatabaseToolsConnection#value_type}. |

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#secret_id DatabaseToolsDatabaseToolsConnection#secret_id}.

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword.property.valueType"></a>

```csharp
public string ValueType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#value_type DatabaseToolsDatabaseToolsConnection#value_type}.

---

### DatabaseToolsDatabaseToolsConnectionRelatedResource <a name="DatabaseToolsDatabaseToolsConnectionRelatedResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseToolsDatabaseToolsConnectionRelatedResource {
    string EntityType = null,
    string Identifier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResource.property.entityType">EntityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#entity_type DatabaseToolsDatabaseToolsConnection#entity_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResource.property.identifier">Identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#identifier DatabaseToolsDatabaseToolsConnection#identifier}. |

---

##### `EntityType`<sup>Optional</sup> <a name="EntityType" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResource.property.entityType"></a>

```csharp
public string EntityType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#entity_type DatabaseToolsDatabaseToolsConnection#entity_type}.

---

##### `Identifier`<sup>Optional</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResource.property.identifier"></a>

```csharp
public string Identifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#identifier DatabaseToolsDatabaseToolsConnection#identifier}.

---

### DatabaseToolsDatabaseToolsConnectionTimeouts <a name="DatabaseToolsDatabaseToolsConnectionTimeouts" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseToolsDatabaseToolsConnectionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#create DatabaseToolsDatabaseToolsConnection#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#delete DatabaseToolsDatabaseToolsConnection#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#update DatabaseToolsDatabaseToolsConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#create DatabaseToolsDatabaseToolsConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#delete DatabaseToolsDatabaseToolsConnection#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#update DatabaseToolsDatabaseToolsConnection#update}.

---

### DatabaseToolsDatabaseToolsConnectionUserPassword <a name="DatabaseToolsDatabaseToolsConnectionUserPassword" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPassword.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseToolsDatabaseToolsConnectionUserPassword {
    string SecretId,
    string ValueType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPassword.property.secretId">SecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#secret_id DatabaseToolsDatabaseToolsConnection#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPassword.property.valueType">ValueType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#value_type DatabaseToolsDatabaseToolsConnection#value_type}. |

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPassword.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#secret_id DatabaseToolsDatabaseToolsConnection#secret_id}.

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPassword.property.valueType"></a>

```csharp
public string ValueType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#value_type DatabaseToolsDatabaseToolsConnection#value_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference <a name="DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.resetSecretId">ResetSecretId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretId` <a name="ResetSecretId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.resetSecretId"></a>

```csharp
private void ResetSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.property.valueTypeInput">ValueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.property.valueType">ValueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent">DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.property.valueTypeInput"></a>

```csharp
public string ValueTypeInput { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.property.valueType"></a>

```csharp
public string ValueType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.property.internalValue"></a>

```csharp
public DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent">DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent</a>

---


### DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference <a name="DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.resetSecretId">ResetSecretId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretId` <a name="ResetSecretId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.resetSecretId"></a>

```csharp
private void ResetSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.property.valueTypeInput">ValueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.property.valueType">ValueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword">DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.property.valueTypeInput"></a>

```csharp
public string ValueTypeInput { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.property.valueType"></a>

```csharp
public string ValueType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.property.internalValue"></a>

```csharp
public DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword">DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword</a>

---


### DatabaseToolsDatabaseToolsConnectionKeyStoresList <a name="DatabaseToolsDatabaseToolsConnectionKeyStoresList" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseToolsDatabaseToolsConnectionKeyStoresList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.get"></a>

```csharp
private DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference <a name="DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.putKeyStoreContent">PutKeyStoreContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.putKeyStorePassword">PutKeyStorePassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.resetKeyStoreContent">ResetKeyStoreContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.resetKeyStorePassword">ResetKeyStorePassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.resetKeyStoreType">ResetKeyStoreType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutKeyStoreContent` <a name="PutKeyStoreContent" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.putKeyStoreContent"></a>

```csharp
private void PutKeyStoreContent(DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.putKeyStoreContent.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent">DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent</a>

---

##### `PutKeyStorePassword` <a name="PutKeyStorePassword" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.putKeyStorePassword"></a>

```csharp
private void PutKeyStorePassword(DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.putKeyStorePassword.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword">DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword</a>

---

##### `ResetKeyStoreContent` <a name="ResetKeyStoreContent" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.resetKeyStoreContent"></a>

```csharp
private void ResetKeyStoreContent()
```

##### `ResetKeyStorePassword` <a name="ResetKeyStorePassword" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.resetKeyStorePassword"></a>

```csharp
private void ResetKeyStorePassword()
```

##### `ResetKeyStoreType` <a name="ResetKeyStoreType" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.resetKeyStoreType"></a>

```csharp
private void ResetKeyStoreType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.keyStoreContent">KeyStoreContent</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference">DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.keyStorePassword">KeyStorePassword</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference">DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.keyStoreContentInput">KeyStoreContentInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent">DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.keyStorePasswordInput">KeyStorePasswordInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword">DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.keyStoreTypeInput">KeyStoreTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.keyStoreType">KeyStoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyStoreContent`<sup>Required</sup> <a name="KeyStoreContent" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.keyStoreContent"></a>

```csharp
public DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference KeyStoreContent { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference">DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference</a>

---

##### `KeyStorePassword`<sup>Required</sup> <a name="KeyStorePassword" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.keyStorePassword"></a>

```csharp
public DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference KeyStorePassword { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference">DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference</a>

---

##### `KeyStoreContentInput`<sup>Optional</sup> <a name="KeyStoreContentInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.keyStoreContentInput"></a>

```csharp
public DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent KeyStoreContentInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent">DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent</a>

---

##### `KeyStorePasswordInput`<sup>Optional</sup> <a name="KeyStorePasswordInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.keyStorePasswordInput"></a>

```csharp
public DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword KeyStorePasswordInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword">DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword</a>

---

##### `KeyStoreTypeInput`<sup>Optional</sup> <a name="KeyStoreTypeInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.keyStoreTypeInput"></a>

```csharp
public string KeyStoreTypeInput { get; }
```

- *Type:* string

---

##### `KeyStoreType`<sup>Required</sup> <a name="KeyStoreType" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.keyStoreType"></a>

```csharp
public string KeyStoreType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseToolsDatabaseToolsConnectionLocksList <a name="DatabaseToolsDatabaseToolsConnectionLocksList" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseToolsDatabaseToolsConnectionLocksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.get"></a>

```csharp
private DatabaseToolsDatabaseToolsConnectionLocksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseToolsDatabaseToolsConnectionLocksOutputReference <a name="DatabaseToolsDatabaseToolsConnectionLocksOutputReference" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseToolsDatabaseToolsConnectionLocksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.resetRelatedResourceId">ResetRelatedResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.resetTimeCreated">ResetTimeCreated</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessage` <a name="ResetMessage" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.resetMessage"></a>

```csharp
private void ResetMessage()
```

##### `ResetRelatedResourceId` <a name="ResetRelatedResourceId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.resetRelatedResourceId"></a>

```csharp
private void ResetRelatedResourceId()
```

##### `ResetTimeCreated` <a name="ResetTimeCreated" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.resetTimeCreated"></a>

```csharp
private void ResetTimeCreated()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.messageInput">MessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.relatedResourceIdInput">RelatedResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.timeCreatedInput">TimeCreatedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.relatedResourceId">RelatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.messageInput"></a>

```csharp
public string MessageInput { get; }
```

- *Type:* string

---

##### `RelatedResourceIdInput`<sup>Optional</sup> <a name="RelatedResourceIdInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.relatedResourceIdInput"></a>

```csharp
public string RelatedResourceIdInput { get; }
```

- *Type:* string

---

##### `TimeCreatedInput`<sup>Optional</sup> <a name="TimeCreatedInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.timeCreatedInput"></a>

```csharp
public string TimeCreatedInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `RelatedResourceId`<sup>Required</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.relatedResourceId"></a>

```csharp
public string RelatedResourceId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference <a name="DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.putUserPassword">PutUserPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.resetRoles">ResetRoles</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.resetUserName">ResetUserName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.resetUserPassword">ResetUserPassword</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUserPassword` <a name="PutUserPassword" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.putUserPassword"></a>

```csharp
private void PutUserPassword(DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.putUserPassword.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword">DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword</a>

---

##### `ResetRoles` <a name="ResetRoles" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.resetRoles"></a>

```csharp
private void ResetRoles()
```

##### `ResetUserName` <a name="ResetUserName" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.resetUserName"></a>

```csharp
private void ResetUserName()
```

##### `ResetUserPassword` <a name="ResetUserPassword" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.resetUserPassword"></a>

```csharp
private void ResetUserPassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.userPassword">UserPassword</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference">DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.proxyAuthenticationTypeInput">ProxyAuthenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.rolesInput">RolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.userNameInput">UserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.userPasswordInput">UserPasswordInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword">DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.proxyAuthenticationType">ProxyAuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.roles">Roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClient">DatabaseToolsDatabaseToolsConnectionProxyClient</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UserPassword`<sup>Required</sup> <a name="UserPassword" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.userPassword"></a>

```csharp
public DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference UserPassword { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference">DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference</a>

---

##### `ProxyAuthenticationTypeInput`<sup>Optional</sup> <a name="ProxyAuthenticationTypeInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.proxyAuthenticationTypeInput"></a>

```csharp
public string ProxyAuthenticationTypeInput { get; }
```

- *Type:* string

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.rolesInput"></a>

```csharp
public string[] RolesInput { get; }
```

- *Type:* string[]

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.userNameInput"></a>

```csharp
public string UserNameInput { get; }
```

- *Type:* string

---

##### `UserPasswordInput`<sup>Optional</sup> <a name="UserPasswordInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.userPasswordInput"></a>

```csharp
public DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword UserPasswordInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword">DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword</a>

---

##### `ProxyAuthenticationType`<sup>Required</sup> <a name="ProxyAuthenticationType" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.proxyAuthenticationType"></a>

```csharp
public string ProxyAuthenticationType { get; }
```

- *Type:* string

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.roles"></a>

```csharp
public string[] Roles { get; }
```

- *Type:* string[]

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.internalValue"></a>

```csharp
public DatabaseToolsDatabaseToolsConnectionProxyClient InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClient">DatabaseToolsDatabaseToolsConnectionProxyClient</a>

---


### DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference <a name="DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.property.valueTypeInput">ValueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.property.valueType">ValueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword">DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.property.valueTypeInput"></a>

```csharp
public string ValueTypeInput { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.property.valueType"></a>

```csharp
public string ValueType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.property.internalValue"></a>

```csharp
public DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword">DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword</a>

---


### DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference <a name="DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.resetEntityType">ResetEntityType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.resetIdentifier">ResetIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEntityType` <a name="ResetEntityType" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.resetEntityType"></a>

```csharp
private void ResetEntityType()
```

##### `ResetIdentifier` <a name="ResetIdentifier" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.resetIdentifier"></a>

```csharp
private void ResetIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.property.entityTypeInput">EntityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.property.entityType">EntityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResource">DatabaseToolsDatabaseToolsConnectionRelatedResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EntityTypeInput`<sup>Optional</sup> <a name="EntityTypeInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.property.entityTypeInput"></a>

```csharp
public string EntityTypeInput { get; }
```

- *Type:* string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.property.identifierInput"></a>

```csharp
public string IdentifierInput { get; }
```

- *Type:* string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.property.entityType"></a>

```csharp
public string EntityType { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.property.internalValue"></a>

```csharp
public DatabaseToolsDatabaseToolsConnectionRelatedResource InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResource">DatabaseToolsDatabaseToolsConnectionRelatedResource</a>

---


### DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference <a name="DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference <a name="DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.property.valueTypeInput">ValueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.property.valueType">ValueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPassword">DatabaseToolsDatabaseToolsConnectionUserPassword</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.property.valueTypeInput"></a>

```csharp
public string ValueTypeInput { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.property.valueType"></a>

```csharp
public string ValueType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.property.internalValue"></a>

```csharp
public DatabaseToolsDatabaseToolsConnectionUserPassword InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPassword">DatabaseToolsDatabaseToolsConnectionUserPassword</a>

---



