# `databaseManagementManagedDatabasesResetDatabaseParameter` Submodule <a name="`databaseManagementManagedDatabasesResetDatabaseParameter` Submodule" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseManagementManagedDatabasesResetDatabaseParameter <a name="DatabaseManagementManagedDatabasesResetDatabaseParameter" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter oci_database_management_managed_databases_reset_database_parameter}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementManagedDatabasesResetDatabaseParameter(Construct Scope, string Id, DatabaseManagementManagedDatabasesResetDatabaseParameterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig">DatabaseManagementManagedDatabasesResetDatabaseParameterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig">DatabaseManagementManagedDatabasesResetDatabaseParameterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.putCredentials">PutCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.putDatabaseCredential">PutDatabaseCredential</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.resetCredentials">ResetCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.resetDatabaseCredential">ResetDatabaseCredential</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCredentials` <a name="PutCredentials" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.putCredentials"></a>

```csharp
private void PutCredentials(DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.putCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials">DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials</a>

---

##### `PutDatabaseCredential` <a name="PutDatabaseCredential" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.putDatabaseCredential"></a>

```csharp
private void PutDatabaseCredential(DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.putDatabaseCredential.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential">DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts">DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts</a>

---

##### `ResetCredentials` <a name="ResetCredentials" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.resetCredentials"></a>

```csharp
private void ResetCredentials()
```

##### `ResetDatabaseCredential` <a name="ResetDatabaseCredential" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.resetDatabaseCredential"></a>

```csharp
private void ResetDatabaseCredential()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseManagementManagedDatabasesResetDatabaseParameter resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseManagementManagedDatabasesResetDatabaseParameter.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseManagementManagedDatabasesResetDatabaseParameter.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseManagementManagedDatabasesResetDatabaseParameter.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseManagementManagedDatabasesResetDatabaseParameter.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseManagementManagedDatabasesResetDatabaseParameter resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseManagementManagedDatabasesResetDatabaseParameter to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseManagementManagedDatabasesResetDatabaseParameter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseManagementManagedDatabasesResetDatabaseParameter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference">DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.databaseCredential">DatabaseCredential</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference">DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference">DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.credentialsInput">CredentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials">DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.databaseCredentialInput">DatabaseCredentialInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential">DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.managedDatabaseIdInput">ManagedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.parametersInput">ParametersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.parameters">Parameters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.scope">Scope</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.credentials"></a>

```csharp
public DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference Credentials { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference">DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference</a>

---

##### `DatabaseCredential`<sup>Required</sup> <a name="DatabaseCredential" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.databaseCredential"></a>

```csharp
public DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference DatabaseCredential { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference">DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.timeouts"></a>

```csharp
public DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference">DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference</a>

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.credentialsInput"></a>

```csharp
public DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials CredentialsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials">DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials</a>

---

##### `DatabaseCredentialInput`<sup>Optional</sup> <a name="DatabaseCredentialInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.databaseCredentialInput"></a>

```csharp
public DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential DatabaseCredentialInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential">DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagedDatabaseIdInput`<sup>Optional</sup> <a name="ManagedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.managedDatabaseIdInput"></a>

```csharp
public string ManagedDatabaseIdInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.parametersInput"></a>

```csharp
public string[] ParametersInput { get; }
```

- *Type:* string[]

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.managedDatabaseId"></a>

```csharp
public string ManagedDatabaseId { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.parameters"></a>

```csharp
public string[] Parameters { get; }
```

- *Type:* string[]

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseManagementManagedDatabasesResetDatabaseParameterConfig <a name="DatabaseManagementManagedDatabasesResetDatabaseParameterConfig" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementManagedDatabasesResetDatabaseParameterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagedDatabaseId,
    string[] Parameters,
    string Scope,
    DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials Credentials = null,
    DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential DatabaseCredential = null,
    string Id = null,
    DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#managed_database_id DatabaseManagementManagedDatabasesResetDatabaseParameter#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.parameters">Parameters</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#parameters DatabaseManagementManagedDatabasesResetDatabaseParameter#parameters}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.scope">Scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#scope DatabaseManagementManagedDatabasesResetDatabaseParameter#scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials">DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.databaseCredential">DatabaseCredential</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential">DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential</a></code> | database_credential block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#id DatabaseManagementManagedDatabasesResetDatabaseParameter#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts">DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.managedDatabaseId"></a>

```csharp
public string ManagedDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#managed_database_id DatabaseManagementManagedDatabasesResetDatabaseParameter#managed_database_id}.

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.parameters"></a>

```csharp
public string[] Parameters { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#parameters DatabaseManagementManagedDatabasesResetDatabaseParameter#parameters}.

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#scope DatabaseManagementManagedDatabasesResetDatabaseParameter#scope}.

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.credentials"></a>

```csharp
public DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials Credentials { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials">DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#credentials DatabaseManagementManagedDatabasesResetDatabaseParameter#credentials}

---

##### `DatabaseCredential`<sup>Optional</sup> <a name="DatabaseCredential" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.databaseCredential"></a>

```csharp
public DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential DatabaseCredential { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential">DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential</a>

database_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#database_credential DatabaseManagementManagedDatabasesResetDatabaseParameter#database_credential}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#id DatabaseManagementManagedDatabasesResetDatabaseParameter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.timeouts"></a>

```csharp
public DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts">DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#timeouts DatabaseManagementManagedDatabasesResetDatabaseParameter#timeouts}

---

### DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials <a name="DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials {
    string Password = null,
    string Role = null,
    string SecretId = null,
    string UserName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#password DatabaseManagementManagedDatabasesResetDatabaseParameter#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#role DatabaseManagementManagedDatabasesResetDatabaseParameter#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials.property.secretId">SecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#secret_id DatabaseManagementManagedDatabasesResetDatabaseParameter#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials.property.userName">UserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#user_name DatabaseManagementManagedDatabasesResetDatabaseParameter#user_name}. |

---

##### `Password`<sup>Optional</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#password DatabaseManagementManagedDatabasesResetDatabaseParameter#password}.

---

##### `Role`<sup>Optional</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#role DatabaseManagementManagedDatabasesResetDatabaseParameter#role}.

---

##### `SecretId`<sup>Optional</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#secret_id DatabaseManagementManagedDatabasesResetDatabaseParameter#secret_id}.

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials.property.userName"></a>

```csharp
public string UserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#user_name DatabaseManagementManagedDatabasesResetDatabaseParameter#user_name}.

---

### DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential <a name="DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential {
    string CredentialType,
    string NamedCredentialId = null,
    string Password = null,
    string PasswordSecretId = null,
    string Role = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential.property.credentialType">CredentialType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#credential_type DatabaseManagementManagedDatabasesResetDatabaseParameter#credential_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential.property.namedCredentialId">NamedCredentialId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#named_credential_id DatabaseManagementManagedDatabasesResetDatabaseParameter#named_credential_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#password DatabaseManagementManagedDatabasesResetDatabaseParameter#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential.property.passwordSecretId">PasswordSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#password_secret_id DatabaseManagementManagedDatabasesResetDatabaseParameter#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#role DatabaseManagementManagedDatabasesResetDatabaseParameter#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#username DatabaseManagementManagedDatabasesResetDatabaseParameter#username}. |

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential.property.credentialType"></a>

```csharp
public string CredentialType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#credential_type DatabaseManagementManagedDatabasesResetDatabaseParameter#credential_type}.

---

##### `NamedCredentialId`<sup>Optional</sup> <a name="NamedCredentialId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential.property.namedCredentialId"></a>

```csharp
public string NamedCredentialId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#named_credential_id DatabaseManagementManagedDatabasesResetDatabaseParameter#named_credential_id}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#password DatabaseManagementManagedDatabasesResetDatabaseParameter#password}.

---

##### `PasswordSecretId`<sup>Optional</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential.property.passwordSecretId"></a>

```csharp
public string PasswordSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#password_secret_id DatabaseManagementManagedDatabasesResetDatabaseParameter#password_secret_id}.

---

##### `Role`<sup>Optional</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#role DatabaseManagementManagedDatabasesResetDatabaseParameter#role}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#username DatabaseManagementManagedDatabasesResetDatabaseParameter#username}.

---

### DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts <a name="DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#create DatabaseManagementManagedDatabasesResetDatabaseParameter#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#delete DatabaseManagementManagedDatabasesResetDatabaseParameter#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#update DatabaseManagementManagedDatabasesResetDatabaseParameter#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#create DatabaseManagementManagedDatabasesResetDatabaseParameter#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#delete DatabaseManagementManagedDatabasesResetDatabaseParameter#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#update DatabaseManagementManagedDatabasesResetDatabaseParameter#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference <a name="DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.resetRole">ResetRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.resetSecretId">ResetSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.resetUserName">ResetUserName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetRole` <a name="ResetRole" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.resetRole"></a>

```csharp
private void ResetRole()
```

##### `ResetSecretId` <a name="ResetSecretId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.resetSecretId"></a>

```csharp
private void ResetSecretId()
```

##### `ResetUserName` <a name="ResetUserName" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.resetUserName"></a>

```csharp
private void ResetUserName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.userNameInput">UserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials">DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.userNameInput"></a>

```csharp
public string UserNameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.internalValue"></a>

```csharp
public DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials">DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials</a>

---


### DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference <a name="DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.resetNamedCredentialId">ResetNamedCredentialId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.resetPasswordSecretId">ResetPasswordSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.resetRole">ResetRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNamedCredentialId` <a name="ResetNamedCredentialId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.resetNamedCredentialId"></a>

```csharp
private void ResetNamedCredentialId()
```

##### `ResetPassword` <a name="ResetPassword" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPasswordSecretId` <a name="ResetPasswordSecretId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.resetPasswordSecretId"></a>

```csharp
private void ResetPasswordSecretId()
```

##### `ResetRole` <a name="ResetRole" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.resetRole"></a>

```csharp
private void ResetRole()
```

##### `ResetUsername` <a name="ResetUsername" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.credentialTypeInput">CredentialTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.namedCredentialIdInput">NamedCredentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.passwordSecretIdInput">PasswordSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.credentialType">CredentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.namedCredentialId">NamedCredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.passwordSecretId">PasswordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential">DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CredentialTypeInput`<sup>Optional</sup> <a name="CredentialTypeInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.credentialTypeInput"></a>

```csharp
public string CredentialTypeInput { get; }
```

- *Type:* string

---

##### `NamedCredentialIdInput`<sup>Optional</sup> <a name="NamedCredentialIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.namedCredentialIdInput"></a>

```csharp
public string NamedCredentialIdInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PasswordSecretIdInput`<sup>Optional</sup> <a name="PasswordSecretIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.passwordSecretIdInput"></a>

```csharp
public string PasswordSecretIdInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.credentialType"></a>

```csharp
public string CredentialType { get; }
```

- *Type:* string

---

##### `NamedCredentialId`<sup>Required</sup> <a name="NamedCredentialId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.namedCredentialId"></a>

```csharp
public string NamedCredentialId { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PasswordSecretId`<sup>Required</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.passwordSecretId"></a>

```csharp
public string PasswordSecretId { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.internalValue"></a>

```csharp
public DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential">DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential</a>

---


### DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference <a name="DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



