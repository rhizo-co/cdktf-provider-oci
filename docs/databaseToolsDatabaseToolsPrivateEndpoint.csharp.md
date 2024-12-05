# `databaseToolsDatabaseToolsPrivateEndpoint` Submodule <a name="`databaseToolsDatabaseToolsPrivateEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseToolsDatabaseToolsPrivateEndpoint <a name="DatabaseToolsDatabaseToolsPrivateEndpoint" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint oci_database_tools_database_tools_private_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseToolsDatabaseToolsPrivateEndpoint(Construct Scope, string Id, DatabaseToolsDatabaseToolsPrivateEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig">DatabaseToolsDatabaseToolsPrivateEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig">DatabaseToolsDatabaseToolsPrivateEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.putLocks">PutLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetLocks">ResetLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetNsgIds">ResetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetPrivateEndpointIp">ResetPrivateEndpointIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLocks` <a name="PutLocks" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.putLocks"></a>

```csharp
private void PutLocks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.putLocks.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseToolsDatabaseToolsPrivateEndpointTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts">DatabaseToolsDatabaseToolsPrivateEndpointTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocks` <a name="ResetLocks" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetLocks"></a>

```csharp
private void ResetLocks()
```

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetNsgIds"></a>

```csharp
private void ResetNsgIds()
```

##### `ResetPrivateEndpointIp` <a name="ResetPrivateEndpointIp" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetPrivateEndpointIp"></a>

```csharp
private void ResetPrivateEndpointIp()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseToolsDatabaseToolsPrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseToolsDatabaseToolsPrivateEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseToolsDatabaseToolsPrivateEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseToolsDatabaseToolsPrivateEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseToolsDatabaseToolsPrivateEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseToolsDatabaseToolsPrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseToolsDatabaseToolsPrivateEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseToolsDatabaseToolsPrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseToolsDatabaseToolsPrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.additionalFqdns">AdditionalFqdns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.endpointFqdn">EndpointFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.locks">Locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList">DatabaseToolsDatabaseToolsPrivateEndpointLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.privateEndpointVnicId">PrivateEndpointVnicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.reverseConnectionConfiguration">ReverseConnectionConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList">DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference">DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.vcnId">VcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.endpointServiceIdInput">EndpointServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.locksInput">LocksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.nsgIdsInput">NsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.privateEndpointIpInput">PrivateEndpointIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.endpointServiceId">EndpointServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.privateEndpointIp">PrivateEndpointIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdditionalFqdns`<sup>Required</sup> <a name="AdditionalFqdns" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.additionalFqdns"></a>

```csharp
public string[] AdditionalFqdns { get; }
```

- *Type:* string[]

---

##### `EndpointFqdn`<sup>Required</sup> <a name="EndpointFqdn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.endpointFqdn"></a>

```csharp
public string EndpointFqdn { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.locks"></a>

```csharp
public DatabaseToolsDatabaseToolsPrivateEndpointLocksList Locks { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList">DatabaseToolsDatabaseToolsPrivateEndpointLocksList</a>

---

##### `PrivateEndpointVnicId`<sup>Required</sup> <a name="PrivateEndpointVnicId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.privateEndpointVnicId"></a>

```csharp
public string PrivateEndpointVnicId { get; }
```

- *Type:* string

---

##### `ReverseConnectionConfiguration`<sup>Required</sup> <a name="ReverseConnectionConfiguration" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.reverseConnectionConfiguration"></a>

```csharp
public DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList ReverseConnectionConfiguration { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList">DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.timeouts"></a>

```csharp
public DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference">DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.vcnId"></a>

```csharp
public string VcnId { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EndpointServiceIdInput`<sup>Optional</sup> <a name="EndpointServiceIdInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.endpointServiceIdInput"></a>

```csharp
public string EndpointServiceIdInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocksInput`<sup>Optional</sup> <a name="LocksInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.locksInput"></a>

```csharp
public object LocksInput { get; }
```

- *Type:* object

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.nsgIdsInput"></a>

```csharp
public string[] NsgIdsInput { get; }
```

- *Type:* string[]

---

##### `PrivateEndpointIpInput`<sup>Optional</sup> <a name="PrivateEndpointIpInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.privateEndpointIpInput"></a>

```csharp
public string PrivateEndpointIpInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EndpointServiceId`<sup>Required</sup> <a name="EndpointServiceId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.endpointServiceId"></a>

```csharp
public string EndpointServiceId { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `PrivateEndpointIp`<sup>Required</sup> <a name="PrivateEndpointIp" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.privateEndpointIp"></a>

```csharp
public string PrivateEndpointIp { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseToolsDatabaseToolsPrivateEndpointConfig <a name="DatabaseToolsDatabaseToolsPrivateEndpointConfig" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseToolsDatabaseToolsPrivateEndpointConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DisplayName,
    string EndpointServiceId,
    string SubnetId,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    object Locks = null,
    string[] NsgIds = null,
    string PrivateEndpointIp = null,
    DatabaseToolsDatabaseToolsPrivateEndpointTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#compartment_id DatabaseToolsDatabaseToolsPrivateEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#display_name DatabaseToolsDatabaseToolsPrivateEndpoint#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.endpointServiceId">EndpointServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#endpoint_service_id DatabaseToolsDatabaseToolsPrivateEndpoint#endpoint_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#subnet_id DatabaseToolsDatabaseToolsPrivateEndpoint#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#defined_tags DatabaseToolsDatabaseToolsPrivateEndpoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#description DatabaseToolsDatabaseToolsPrivateEndpoint#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#freeform_tags DatabaseToolsDatabaseToolsPrivateEndpoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#id DatabaseToolsDatabaseToolsPrivateEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.locks">Locks</a></code> | <code>object</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#nsg_ids DatabaseToolsDatabaseToolsPrivateEndpoint#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.privateEndpointIp">PrivateEndpointIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#private_endpoint_ip DatabaseToolsDatabaseToolsPrivateEndpoint#private_endpoint_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts">DatabaseToolsDatabaseToolsPrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#compartment_id DatabaseToolsDatabaseToolsPrivateEndpoint#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#display_name DatabaseToolsDatabaseToolsPrivateEndpoint#display_name}.

---

##### `EndpointServiceId`<sup>Required</sup> <a name="EndpointServiceId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.endpointServiceId"></a>

```csharp
public string EndpointServiceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#endpoint_service_id DatabaseToolsDatabaseToolsPrivateEndpoint#endpoint_service_id}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#subnet_id DatabaseToolsDatabaseToolsPrivateEndpoint#subnet_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#defined_tags DatabaseToolsDatabaseToolsPrivateEndpoint#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#description DatabaseToolsDatabaseToolsPrivateEndpoint#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#freeform_tags DatabaseToolsDatabaseToolsPrivateEndpoint#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#id DatabaseToolsDatabaseToolsPrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Locks`<sup>Optional</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.locks"></a>

```csharp
public object Locks { get; set; }
```

- *Type:* object

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#locks DatabaseToolsDatabaseToolsPrivateEndpoint#locks}

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#nsg_ids DatabaseToolsDatabaseToolsPrivateEndpoint#nsg_ids}.

---

##### `PrivateEndpointIp`<sup>Optional</sup> <a name="PrivateEndpointIp" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.privateEndpointIp"></a>

```csharp
public string PrivateEndpointIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#private_endpoint_ip DatabaseToolsDatabaseToolsPrivateEndpoint#private_endpoint_ip}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.timeouts"></a>

```csharp
public DatabaseToolsDatabaseToolsPrivateEndpointTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts">DatabaseToolsDatabaseToolsPrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#timeouts DatabaseToolsDatabaseToolsPrivateEndpoint#timeouts}

---

### DatabaseToolsDatabaseToolsPrivateEndpointLocks <a name="DatabaseToolsDatabaseToolsPrivateEndpointLocks" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseToolsDatabaseToolsPrivateEndpointLocks {
    string Type,
    string Message = null,
    string RelatedResourceId = null,
    string TimeCreated = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#type DatabaseToolsDatabaseToolsPrivateEndpoint#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks.property.message">Message</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#message DatabaseToolsDatabaseToolsPrivateEndpoint#message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks.property.relatedResourceId">RelatedResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#related_resource_id DatabaseToolsDatabaseToolsPrivateEndpoint#related_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks.property.timeCreated">TimeCreated</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#time_created DatabaseToolsDatabaseToolsPrivateEndpoint#time_created}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#type DatabaseToolsDatabaseToolsPrivateEndpoint#type}.

---

##### `Message`<sup>Optional</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks.property.message"></a>

```csharp
public string Message { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#message DatabaseToolsDatabaseToolsPrivateEndpoint#message}.

---

##### `RelatedResourceId`<sup>Optional</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks.property.relatedResourceId"></a>

```csharp
public string RelatedResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#related_resource_id DatabaseToolsDatabaseToolsPrivateEndpoint#related_resource_id}.

---

##### `TimeCreated`<sup>Optional</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks.property.timeCreated"></a>

```csharp
public string TimeCreated { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#time_created DatabaseToolsDatabaseToolsPrivateEndpoint#time_created}.

---

### DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration <a name="DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration {

};
```


### DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps <a name="DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps {

};
```


### DatabaseToolsDatabaseToolsPrivateEndpointTimeouts <a name="DatabaseToolsDatabaseToolsPrivateEndpointTimeouts" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseToolsDatabaseToolsPrivateEndpointTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#create DatabaseToolsDatabaseToolsPrivateEndpoint#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#delete DatabaseToolsDatabaseToolsPrivateEndpoint#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#update DatabaseToolsDatabaseToolsPrivateEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#create DatabaseToolsDatabaseToolsPrivateEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#delete DatabaseToolsDatabaseToolsPrivateEndpoint#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#update DatabaseToolsDatabaseToolsPrivateEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseToolsDatabaseToolsPrivateEndpointLocksList <a name="DatabaseToolsDatabaseToolsPrivateEndpointLocksList" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseToolsDatabaseToolsPrivateEndpointLocksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.get"></a>

```csharp
private DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference <a name="DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.resetRelatedResourceId">ResetRelatedResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.resetTimeCreated">ResetTimeCreated</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessage` <a name="ResetMessage" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.resetMessage"></a>

```csharp
private void ResetMessage()
```

##### `ResetRelatedResourceId` <a name="ResetRelatedResourceId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.resetRelatedResourceId"></a>

```csharp
private void ResetRelatedResourceId()
```

##### `ResetTimeCreated` <a name="ResetTimeCreated" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.resetTimeCreated"></a>

```csharp
private void ResetTimeCreated()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.messageInput">MessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.relatedResourceIdInput">RelatedResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.timeCreatedInput">TimeCreatedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.relatedResourceId">RelatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.messageInput"></a>

```csharp
public string MessageInput { get; }
```

- *Type:* string

---

##### `RelatedResourceIdInput`<sup>Optional</sup> <a name="RelatedResourceIdInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.relatedResourceIdInput"></a>

```csharp
public string RelatedResourceIdInput { get; }
```

- *Type:* string

---

##### `TimeCreatedInput`<sup>Optional</sup> <a name="TimeCreatedInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.timeCreatedInput"></a>

```csharp
public string TimeCreatedInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `RelatedResourceId`<sup>Required</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.relatedResourceId"></a>

```csharp
public string RelatedResourceId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList <a name="DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.get"></a>

```csharp
private DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference <a name="DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.property.reverseConnectionsSourceIps">ReverseConnectionsSourceIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList">DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration">DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReverseConnectionsSourceIps`<sup>Required</sup> <a name="ReverseConnectionsSourceIps" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.property.reverseConnectionsSourceIps"></a>

```csharp
public DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList ReverseConnectionsSourceIps { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList">DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.property.internalValue"></a>

```csharp
public DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration">DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration</a>

---


### DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList <a name="DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.get"></a>

```csharp
private DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference <a name="DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.sourceIp">SourceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps">DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceIp`<sup>Required</sup> <a name="SourceIp" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.sourceIp"></a>

```csharp
public string SourceIp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.internalValue"></a>

```csharp
public DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps">DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps</a>

---


### DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference <a name="DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



