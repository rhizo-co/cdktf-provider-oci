# `databaseManagementExternalDbSystemStackMonitoringsManagement` Submodule <a name="`databaseManagementExternalDbSystemStackMonitoringsManagement` Submodule" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseManagementExternalDbSystemStackMonitoringsManagement <a name="DatabaseManagementExternalDbSystemStackMonitoringsManagement" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management oci_database_management_external_db_system_stack_monitorings_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementExternalDbSystemStackMonitoringsManagement(Construct Scope, string Id, DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig">DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig">DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts">DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```

##### `ResetMetadata` <a name="ResetMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseManagementExternalDbSystemStackMonitoringsManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseManagementExternalDbSystemStackMonitoringsManagement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseManagementExternalDbSystemStackMonitoringsManagement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseManagementExternalDbSystemStackMonitoringsManagement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseManagementExternalDbSystemStackMonitoringsManagement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseManagementExternalDbSystemStackMonitoringsManagement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseManagementExternalDbSystemStackMonitoringsManagement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseManagementExternalDbSystemStackMonitoringsManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseManagementExternalDbSystemStackMonitoringsManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference">DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.enableStackMonitoringInput">EnableStackMonitoringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.externalDbSystemIdInput">ExternalDbSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.metadataInput">MetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.enableStackMonitoring">EnableStackMonitoring</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.externalDbSystemId">ExternalDbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.timeouts"></a>

```csharp
public DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference">DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference</a>

---

##### `EnableStackMonitoringInput`<sup>Optional</sup> <a name="EnableStackMonitoringInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.enableStackMonitoringInput"></a>

```csharp
public object EnableStackMonitoringInput { get; }
```

- *Type:* object

---

##### `ExternalDbSystemIdInput`<sup>Optional</sup> <a name="ExternalDbSystemIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.externalDbSystemIdInput"></a>

```csharp
public string ExternalDbSystemIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.metadataInput"></a>

```csharp
public string MetadataInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `EnableStackMonitoring`<sup>Required</sup> <a name="EnableStackMonitoring" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.enableStackMonitoring"></a>

```csharp
public object EnableStackMonitoring { get; }
```

- *Type:* object

---

##### `ExternalDbSystemId`<sup>Required</sup> <a name="ExternalDbSystemId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.externalDbSystemId"></a>

```csharp
public string ExternalDbSystemId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig <a name="DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object EnableStackMonitoring,
    string ExternalDbSystemId,
    string Id = null,
    object IsEnabled = null,
    string Metadata = null,
    DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.enableStackMonitoring">EnableStackMonitoring</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#enable_stack_monitoring DatabaseManagementExternalDbSystemStackMonitoringsManagement#enable_stack_monitoring}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.externalDbSystemId">ExternalDbSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#external_db_system_id DatabaseManagementExternalDbSystemStackMonitoringsManagement#external_db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#id DatabaseManagementExternalDbSystemStackMonitoringsManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#is_enabled DatabaseManagementExternalDbSystemStackMonitoringsManagement#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.metadata">Metadata</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#metadata DatabaseManagementExternalDbSystemStackMonitoringsManagement#metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts">DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EnableStackMonitoring`<sup>Required</sup> <a name="EnableStackMonitoring" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.enableStackMonitoring"></a>

```csharp
public object EnableStackMonitoring { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#enable_stack_monitoring DatabaseManagementExternalDbSystemStackMonitoringsManagement#enable_stack_monitoring}.

---

##### `ExternalDbSystemId`<sup>Required</sup> <a name="ExternalDbSystemId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.externalDbSystemId"></a>

```csharp
public string ExternalDbSystemId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#external_db_system_id DatabaseManagementExternalDbSystemStackMonitoringsManagement#external_db_system_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#id DatabaseManagementExternalDbSystemStackMonitoringsManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#is_enabled DatabaseManagementExternalDbSystemStackMonitoringsManagement#is_enabled}.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.metadata"></a>

```csharp
public string Metadata { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#metadata DatabaseManagementExternalDbSystemStackMonitoringsManagement#metadata}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.timeouts"></a>

```csharp
public DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts">DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#timeouts DatabaseManagementExternalDbSystemStackMonitoringsManagement#timeouts}

---

### DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts <a name="DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#create DatabaseManagementExternalDbSystemStackMonitoringsManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#delete DatabaseManagementExternalDbSystemStackMonitoringsManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#update DatabaseManagementExternalDbSystemStackMonitoringsManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#create DatabaseManagementExternalDbSystemStackMonitoringsManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#delete DatabaseManagementExternalDbSystemStackMonitoringsManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#update DatabaseManagementExternalDbSystemStackMonitoringsManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference <a name="DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



