# `databaseExternalpluggabledatabasesStackMonitoring` Submodule <a name="`databaseExternalpluggabledatabasesStackMonitoring` Submodule" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseExternalpluggabledatabasesStackMonitoring <a name="DatabaseExternalpluggabledatabasesStackMonitoring" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalpluggabledatabases_stack_monitoring oci_database_externalpluggabledatabases_stack_monitoring}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExternalpluggabledatabasesStackMonitoring(Construct Scope, string Id, DatabaseExternalpluggabledatabasesStackMonitoringConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig">DatabaseExternalpluggabledatabasesStackMonitoringConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig">DatabaseExternalpluggabledatabasesStackMonitoringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseExternalpluggabledatabasesStackMonitoringTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeouts">DatabaseExternalpluggabledatabasesStackMonitoringTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseExternalpluggabledatabasesStackMonitoring resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseExternalpluggabledatabasesStackMonitoring.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseExternalpluggabledatabasesStackMonitoring.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseExternalpluggabledatabasesStackMonitoring.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseExternalpluggabledatabasesStackMonitoring.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseExternalpluggabledatabasesStackMonitoring resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseExternalpluggabledatabasesStackMonitoring to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseExternalpluggabledatabasesStackMonitoring that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalpluggabledatabases_stack_monitoring#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseExternalpluggabledatabasesStackMonitoring to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference">DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.enableStackMonitoringInput">EnableStackMonitoringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.externalDatabaseConnectorIdInput">ExternalDatabaseConnectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.externalPluggableDatabaseIdInput">ExternalPluggableDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.enableStackMonitoring">EnableStackMonitoring</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.externalDatabaseConnectorId">ExternalDatabaseConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.externalPluggableDatabaseId">ExternalPluggableDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.timeouts"></a>

```csharp
public DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference">DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference</a>

---

##### `EnableStackMonitoringInput`<sup>Optional</sup> <a name="EnableStackMonitoringInput" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.enableStackMonitoringInput"></a>

```csharp
public object EnableStackMonitoringInput { get; }
```

- *Type:* object

---

##### `ExternalDatabaseConnectorIdInput`<sup>Optional</sup> <a name="ExternalDatabaseConnectorIdInput" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.externalDatabaseConnectorIdInput"></a>

```csharp
public string ExternalDatabaseConnectorIdInput { get; }
```

- *Type:* string

---

##### `ExternalPluggableDatabaseIdInput`<sup>Optional</sup> <a name="ExternalPluggableDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.externalPluggableDatabaseIdInput"></a>

```csharp
public string ExternalPluggableDatabaseIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `EnableStackMonitoring`<sup>Required</sup> <a name="EnableStackMonitoring" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.enableStackMonitoring"></a>

```csharp
public object EnableStackMonitoring { get; }
```

- *Type:* object

---

##### `ExternalDatabaseConnectorId`<sup>Required</sup> <a name="ExternalDatabaseConnectorId" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.externalDatabaseConnectorId"></a>

```csharp
public string ExternalDatabaseConnectorId { get; }
```

- *Type:* string

---

##### `ExternalPluggableDatabaseId`<sup>Required</sup> <a name="ExternalPluggableDatabaseId" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.externalPluggableDatabaseId"></a>

```csharp
public string ExternalPluggableDatabaseId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseExternalpluggabledatabasesStackMonitoringConfig <a name="DatabaseExternalpluggabledatabasesStackMonitoringConfig" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExternalpluggabledatabasesStackMonitoringConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object EnableStackMonitoring,
    string ExternalDatabaseConnectorId,
    string ExternalPluggableDatabaseId,
    string Id = null,
    DatabaseExternalpluggabledatabasesStackMonitoringTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.enableStackMonitoring">EnableStackMonitoring</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalpluggabledatabases_stack_monitoring#enable_stack_monitoring DatabaseExternalpluggabledatabasesStackMonitoring#enable_stack_monitoring}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.externalDatabaseConnectorId">ExternalDatabaseConnectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalpluggabledatabases_stack_monitoring#external_database_connector_id DatabaseExternalpluggabledatabasesStackMonitoring#external_database_connector_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.externalPluggableDatabaseId">ExternalPluggableDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalpluggabledatabases_stack_monitoring#external_pluggable_database_id DatabaseExternalpluggabledatabasesStackMonitoring#external_pluggable_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalpluggabledatabases_stack_monitoring#id DatabaseExternalpluggabledatabasesStackMonitoring#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeouts">DatabaseExternalpluggabledatabasesStackMonitoringTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EnableStackMonitoring`<sup>Required</sup> <a name="EnableStackMonitoring" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.enableStackMonitoring"></a>

```csharp
public object EnableStackMonitoring { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalpluggabledatabases_stack_monitoring#enable_stack_monitoring DatabaseExternalpluggabledatabasesStackMonitoring#enable_stack_monitoring}.

---

##### `ExternalDatabaseConnectorId`<sup>Required</sup> <a name="ExternalDatabaseConnectorId" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.externalDatabaseConnectorId"></a>

```csharp
public string ExternalDatabaseConnectorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalpluggabledatabases_stack_monitoring#external_database_connector_id DatabaseExternalpluggabledatabasesStackMonitoring#external_database_connector_id}.

---

##### `ExternalPluggableDatabaseId`<sup>Required</sup> <a name="ExternalPluggableDatabaseId" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.externalPluggableDatabaseId"></a>

```csharp
public string ExternalPluggableDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalpluggabledatabases_stack_monitoring#external_pluggable_database_id DatabaseExternalpluggabledatabasesStackMonitoring#external_pluggable_database_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalpluggabledatabases_stack_monitoring#id DatabaseExternalpluggabledatabasesStackMonitoring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.timeouts"></a>

```csharp
public DatabaseExternalpluggabledatabasesStackMonitoringTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeouts">DatabaseExternalpluggabledatabasesStackMonitoringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalpluggabledatabases_stack_monitoring#timeouts DatabaseExternalpluggabledatabasesStackMonitoring#timeouts}

---

### DatabaseExternalpluggabledatabasesStackMonitoringTimeouts <a name="DatabaseExternalpluggabledatabasesStackMonitoringTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExternalpluggabledatabasesStackMonitoringTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalpluggabledatabases_stack_monitoring#create DatabaseExternalpluggabledatabasesStackMonitoring#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalpluggabledatabases_stack_monitoring#delete DatabaseExternalpluggabledatabasesStackMonitoring#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalpluggabledatabases_stack_monitoring#update DatabaseExternalpluggabledatabasesStackMonitoring#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalpluggabledatabases_stack_monitoring#create DatabaseExternalpluggabledatabasesStackMonitoring#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalpluggabledatabases_stack_monitoring#delete DatabaseExternalpluggabledatabasesStackMonitoring#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalpluggabledatabases_stack_monitoring#update DatabaseExternalpluggabledatabasesStackMonitoring#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference <a name="DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



