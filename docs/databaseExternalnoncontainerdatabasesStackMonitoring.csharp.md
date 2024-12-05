# `databaseExternalnoncontainerdatabasesStackMonitoring` Submodule <a name="`databaseExternalnoncontainerdatabasesStackMonitoring` Submodule" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseExternalnoncontainerdatabasesStackMonitoring <a name="DatabaseExternalnoncontainerdatabasesStackMonitoring" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring oci_database_externalnoncontainerdatabases_stack_monitoring}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExternalnoncontainerdatabasesStackMonitoring(Construct Scope, string Id, DatabaseExternalnoncontainerdatabasesStackMonitoringConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig">DatabaseExternalnoncontainerdatabasesStackMonitoringConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig">DatabaseExternalnoncontainerdatabasesStackMonitoringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts">DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseExternalnoncontainerdatabasesStackMonitoring resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseExternalnoncontainerdatabasesStackMonitoring.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseExternalnoncontainerdatabasesStackMonitoring.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseExternalnoncontainerdatabasesStackMonitoring.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseExternalnoncontainerdatabasesStackMonitoring.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseExternalnoncontainerdatabasesStackMonitoring resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseExternalnoncontainerdatabasesStackMonitoring to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseExternalnoncontainerdatabasesStackMonitoring that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseExternalnoncontainerdatabasesStackMonitoring to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference">DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.enableStackMonitoringInput">EnableStackMonitoringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.externalDatabaseConnectorIdInput">ExternalDatabaseConnectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.externalNonContainerDatabaseIdInput">ExternalNonContainerDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.enableStackMonitoring">EnableStackMonitoring</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.externalDatabaseConnectorId">ExternalDatabaseConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.externalNonContainerDatabaseId">ExternalNonContainerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.timeouts"></a>

```csharp
public DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference">DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference</a>

---

##### `EnableStackMonitoringInput`<sup>Optional</sup> <a name="EnableStackMonitoringInput" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.enableStackMonitoringInput"></a>

```csharp
public object EnableStackMonitoringInput { get; }
```

- *Type:* object

---

##### `ExternalDatabaseConnectorIdInput`<sup>Optional</sup> <a name="ExternalDatabaseConnectorIdInput" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.externalDatabaseConnectorIdInput"></a>

```csharp
public string ExternalDatabaseConnectorIdInput { get; }
```

- *Type:* string

---

##### `ExternalNonContainerDatabaseIdInput`<sup>Optional</sup> <a name="ExternalNonContainerDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.externalNonContainerDatabaseIdInput"></a>

```csharp
public string ExternalNonContainerDatabaseIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `EnableStackMonitoring`<sup>Required</sup> <a name="EnableStackMonitoring" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.enableStackMonitoring"></a>

```csharp
public object EnableStackMonitoring { get; }
```

- *Type:* object

---

##### `ExternalDatabaseConnectorId`<sup>Required</sup> <a name="ExternalDatabaseConnectorId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.externalDatabaseConnectorId"></a>

```csharp
public string ExternalDatabaseConnectorId { get; }
```

- *Type:* string

---

##### `ExternalNonContainerDatabaseId`<sup>Required</sup> <a name="ExternalNonContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.externalNonContainerDatabaseId"></a>

```csharp
public string ExternalNonContainerDatabaseId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseExternalnoncontainerdatabasesStackMonitoringConfig <a name="DatabaseExternalnoncontainerdatabasesStackMonitoringConfig" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExternalnoncontainerdatabasesStackMonitoringConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object EnableStackMonitoring,
    string ExternalDatabaseConnectorId,
    string ExternalNonContainerDatabaseId,
    string Id = null,
    DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.enableStackMonitoring">EnableStackMonitoring</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#enable_stack_monitoring DatabaseExternalnoncontainerdatabasesStackMonitoring#enable_stack_monitoring}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.externalDatabaseConnectorId">ExternalDatabaseConnectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#external_database_connector_id DatabaseExternalnoncontainerdatabasesStackMonitoring#external_database_connector_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.externalNonContainerDatabaseId">ExternalNonContainerDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#external_non_container_database_id DatabaseExternalnoncontainerdatabasesStackMonitoring#external_non_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#id DatabaseExternalnoncontainerdatabasesStackMonitoring#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts">DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EnableStackMonitoring`<sup>Required</sup> <a name="EnableStackMonitoring" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.enableStackMonitoring"></a>

```csharp
public object EnableStackMonitoring { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#enable_stack_monitoring DatabaseExternalnoncontainerdatabasesStackMonitoring#enable_stack_monitoring}.

---

##### `ExternalDatabaseConnectorId`<sup>Required</sup> <a name="ExternalDatabaseConnectorId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.externalDatabaseConnectorId"></a>

```csharp
public string ExternalDatabaseConnectorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#external_database_connector_id DatabaseExternalnoncontainerdatabasesStackMonitoring#external_database_connector_id}.

---

##### `ExternalNonContainerDatabaseId`<sup>Required</sup> <a name="ExternalNonContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.externalNonContainerDatabaseId"></a>

```csharp
public string ExternalNonContainerDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#external_non_container_database_id DatabaseExternalnoncontainerdatabasesStackMonitoring#external_non_container_database_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#id DatabaseExternalnoncontainerdatabasesStackMonitoring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.timeouts"></a>

```csharp
public DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts">DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#timeouts DatabaseExternalnoncontainerdatabasesStackMonitoring#timeouts}

---

### DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts <a name="DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#create DatabaseExternalnoncontainerdatabasesStackMonitoring#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#delete DatabaseExternalnoncontainerdatabasesStackMonitoring#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#update DatabaseExternalnoncontainerdatabasesStackMonitoring#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#create DatabaseExternalnoncontainerdatabasesStackMonitoring#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#delete DatabaseExternalnoncontainerdatabasesStackMonitoring#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#update DatabaseExternalnoncontainerdatabasesStackMonitoring#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference <a name="DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



