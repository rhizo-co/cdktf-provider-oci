# `schServiceConnector` Submodule <a name="`schServiceConnector` Submodule" id="rhizo-co-terraform-provider-oci.schServiceConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SchServiceConnector <a name="SchServiceConnector" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector oci_sch_service_connector}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SchServiceConnector(Construct Scope, string Id, SchServiceConnectorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig">SchServiceConnectorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig">SchServiceConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTasks">PutTasks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetTasks">ResetTasks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSource` <a name="PutSource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putSource"></a>

```csharp
private void PutSource(SchServiceConnectorSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putSource.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource">SchServiceConnectorSource</a>

---

##### `PutTarget` <a name="PutTarget" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTarget"></a>

```csharp
private void PutTarget(SchServiceConnectorTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTarget.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget">SchServiceConnectorTarget</a>

---

##### `PutTasks` <a name="PutTasks" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTasks"></a>

```csharp
private void PutTasks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTasks.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTimeouts"></a>

```csharp
private void PutTimeouts(SchServiceConnectorTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts">SchServiceConnectorTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTasks` <a name="ResetTasks" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetTasks"></a>

```csharp
private void ResetTasks()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SchServiceConnector resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

SchServiceConnector.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

SchServiceConnector.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

SchServiceConnector.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

SchServiceConnector.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SchServiceConnector resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SchServiceConnector to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SchServiceConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SchServiceConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.lifecyleDetails">LifecyleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.source">Source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference">SchServiceConnectorSourceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.target">Target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference">SchServiceConnectorTargetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.tasks">Tasks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList">SchServiceConnectorTasksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference">SchServiceConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.sourceInput">SourceInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource">SchServiceConnectorSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.targetInput">TargetInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget">SchServiceConnectorTarget</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.tasksInput">TasksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `LifecyleDetails`<sup>Required</sup> <a name="LifecyleDetails" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.lifecyleDetails"></a>

```csharp
public string LifecyleDetails { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.source"></a>

```csharp
public SchServiceConnectorSourceOutputReference Source { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference">SchServiceConnectorSourceOutputReference</a>

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Target`<sup>Required</sup> <a name="Target" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.target"></a>

```csharp
public SchServiceConnectorTargetOutputReference Target { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference">SchServiceConnectorTargetOutputReference</a>

---

##### `Tasks`<sup>Required</sup> <a name="Tasks" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.tasks"></a>

```csharp
public SchServiceConnectorTasksList Tasks { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList">SchServiceConnectorTasksList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.timeouts"></a>

```csharp
public SchServiceConnectorTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference">SchServiceConnectorTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.sourceInput"></a>

```csharp
public SchServiceConnectorSource SourceInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource">SchServiceConnectorSource</a>

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.targetInput"></a>

```csharp
public SchServiceConnectorTarget TargetInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget">SchServiceConnectorTarget</a>

---

##### `TasksInput`<sup>Optional</sup> <a name="TasksInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.tasksInput"></a>

```csharp
public object TasksInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SchServiceConnectorConfig <a name="SchServiceConnectorConfig" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SchServiceConnectorConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DisplayName,
    SchServiceConnectorSource Source,
    SchServiceConnectorTarget Target,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    string State = null,
    object Tasks = null,
    SchServiceConnectorTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#display_name SchServiceConnector#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.source">Source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource">SchServiceConnectorSource</a></code> | source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.target">Target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget">SchServiceConnectorTarget</a></code> | target block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#defined_tags SchServiceConnector#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#description SchServiceConnector#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#freeform_tags SchServiceConnector#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#id SchServiceConnector#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#state SchServiceConnector#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.tasks">Tasks</a></code> | <code>object</code> | tasks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts">SchServiceConnectorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#display_name SchServiceConnector#display_name}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.source"></a>

```csharp
public SchServiceConnectorSource Source { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource">SchServiceConnectorSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#source SchServiceConnector#source}

---

##### `Target`<sup>Required</sup> <a name="Target" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.target"></a>

```csharp
public SchServiceConnectorTarget Target { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget">SchServiceConnectorTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#target SchServiceConnector#target}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#defined_tags SchServiceConnector#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#description SchServiceConnector#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#freeform_tags SchServiceConnector#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#id SchServiceConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#state SchServiceConnector#state}.

---

##### `Tasks`<sup>Optional</sup> <a name="Tasks" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.tasks"></a>

```csharp
public object Tasks { get; set; }
```

- *Type:* object

tasks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#tasks SchServiceConnector#tasks}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.timeouts"></a>

```csharp
public SchServiceConnectorTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts">SchServiceConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#timeouts SchServiceConnector#timeouts}

---

### SchServiceConnectorSource <a name="SchServiceConnectorSource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SchServiceConnectorSource {
    string Kind,
    string ConfigMap = null,
    SchServiceConnectorSourceCursor Cursor = null,
    object LogSources = null,
    object MonitoringSources = null,
    string PluginName = null,
    string StreamId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.kind">Kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.configMap">ConfigMap</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#config_map SchServiceConnector#config_map}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.cursor">Cursor</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor">SchServiceConnectorSourceCursor</a></code> | cursor block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.logSources">LogSources</a></code> | <code>object</code> | log_sources block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.monitoringSources">MonitoringSources</a></code> | <code>object</code> | monitoring_sources block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.pluginName">PluginName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#plugin_name SchServiceConnector#plugin_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.streamId">StreamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#stream_id SchServiceConnector#stream_id}. |

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}.

---

##### `ConfigMap`<sup>Optional</sup> <a name="ConfigMap" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.configMap"></a>

```csharp
public string ConfigMap { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#config_map SchServiceConnector#config_map}.

---

##### `Cursor`<sup>Optional</sup> <a name="Cursor" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.cursor"></a>

```csharp
public SchServiceConnectorSourceCursor Cursor { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor">SchServiceConnectorSourceCursor</a>

cursor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#cursor SchServiceConnector#cursor}

---

##### `LogSources`<sup>Optional</sup> <a name="LogSources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.logSources"></a>

```csharp
public object LogSources { get; set; }
```

- *Type:* object

log_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_sources SchServiceConnector#log_sources}

---

##### `MonitoringSources`<sup>Optional</sup> <a name="MonitoringSources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.monitoringSources"></a>

```csharp
public object MonitoringSources { get; set; }
```

- *Type:* object

monitoring_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#monitoring_sources SchServiceConnector#monitoring_sources}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.pluginName"></a>

```csharp
public string PluginName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#plugin_name SchServiceConnector#plugin_name}.

---

##### `StreamId`<sup>Optional</sup> <a name="StreamId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.streamId"></a>

```csharp
public string StreamId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#stream_id SchServiceConnector#stream_id}.

---

### SchServiceConnectorSourceCursor <a name="SchServiceConnectorSourceCursor" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SchServiceConnectorSourceCursor {
    string Kind = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor.property.kind">Kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}. |

---

##### `Kind`<sup>Optional</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}.

---

### SchServiceConnectorSourceLogSources <a name="SchServiceConnectorSourceLogSources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SchServiceConnectorSourceLogSources {
    string CompartmentId = null,
    string LogGroupId = null,
    string LogId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources.property.logGroupId">LogGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_group_id SchServiceConnector#log_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources.property.logId">LogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_id SchServiceConnector#log_id}. |

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}.

---

##### `LogGroupId`<sup>Optional</sup> <a name="LogGroupId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources.property.logGroupId"></a>

```csharp
public string LogGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_group_id SchServiceConnector#log_group_id}.

---

##### `LogId`<sup>Optional</sup> <a name="LogId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources.property.logId"></a>

```csharp
public string LogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_id SchServiceConnector#log_id}.

---

### SchServiceConnectorSourceMonitoringSources <a name="SchServiceConnectorSourceMonitoringSources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SchServiceConnectorSourceMonitoringSources {
    string CompartmentId = null,
    SchServiceConnectorSourceMonitoringSourcesNamespaceDetails NamespaceDetails = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources.property.namespaceDetails">NamespaceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails">SchServiceConnectorSourceMonitoringSourcesNamespaceDetails</a></code> | namespace_details block. |

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}.

---

##### `NamespaceDetails`<sup>Optional</sup> <a name="NamespaceDetails" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources.property.namespaceDetails"></a>

```csharp
public SchServiceConnectorSourceMonitoringSourcesNamespaceDetails NamespaceDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails">SchServiceConnectorSourceMonitoringSourcesNamespaceDetails</a>

namespace_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#namespace_details SchServiceConnector#namespace_details}

---

### SchServiceConnectorSourceMonitoringSourcesNamespaceDetails <a name="SchServiceConnectorSourceMonitoringSourcesNamespaceDetails" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SchServiceConnectorSourceMonitoringSourcesNamespaceDetails {
    string Kind,
    object Namespaces
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails.property.kind">Kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails.property.namespaces">Namespaces</a></code> | <code>object</code> | namespaces block. |

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}.

---

##### `Namespaces`<sup>Required</sup> <a name="Namespaces" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails.property.namespaces"></a>

```csharp
public object Namespaces { get; set; }
```

- *Type:* object

namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#namespaces SchServiceConnector#namespaces}

---

### SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces <a name="SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces {
    SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics Metrics,
    string Namespace
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces.property.metrics">Metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a></code> | metrics block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#namespace SchServiceConnector#namespace}. |

---

##### `Metrics`<sup>Required</sup> <a name="Metrics" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces.property.metrics"></a>

```csharp
public SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics Metrics { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a>

metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#metrics SchServiceConnector#metrics}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#namespace SchServiceConnector#namespace}.

---

### SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics <a name="SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics {
    string Kind
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics.property.kind">Kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}. |

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}.

---

### SchServiceConnectorTarget <a name="SchServiceConnectorTarget" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SchServiceConnectorTarget {
    string Kind,
    double BatchRolloverSizeInMbs = null,
    double BatchRolloverTimeInMs = null,
    double BatchSizeInKbs = null,
    double BatchSizeInNum = null,
    double BatchTimeInSec = null,
    string Bucket = null,
    string CompartmentId = null,
    object Dimensions = null,
    object EnableFormattedMessaging = null,
    string FunctionId = null,
    string LogGroupId = null,
    string LogSourceIdentifier = null,
    string Metric = null,
    string MetricNamespace = null,
    string Namespace = null,
    string ObjectNamePrefix = null,
    string StreamId = null,
    string TopicId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.kind">Kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchRolloverSizeInMbs">BatchRolloverSizeInMbs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_rollover_size_in_mbs SchServiceConnector#batch_rollover_size_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchRolloverTimeInMs">BatchRolloverTimeInMs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_rollover_time_in_ms SchServiceConnector#batch_rollover_time_in_ms}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchSizeInKbs">BatchSizeInKbs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_size_in_kbs SchServiceConnector#batch_size_in_kbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchSizeInNum">BatchSizeInNum</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_size_in_num SchServiceConnector#batch_size_in_num}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchTimeInSec">BatchTimeInSec</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_time_in_sec SchServiceConnector#batch_time_in_sec}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#bucket SchServiceConnector#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.dimensions">Dimensions</a></code> | <code>object</code> | dimensions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.enableFormattedMessaging">EnableFormattedMessaging</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#enable_formatted_messaging SchServiceConnector#enable_formatted_messaging}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.functionId">FunctionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#function_id SchServiceConnector#function_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.logGroupId">LogGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_group_id SchServiceConnector#log_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.logSourceIdentifier">LogSourceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_source_identifier SchServiceConnector#log_source_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.metric">Metric</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#metric SchServiceConnector#metric}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.metricNamespace">MetricNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#metric_namespace SchServiceConnector#metric_namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#namespace SchServiceConnector#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.objectNamePrefix">ObjectNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#object_name_prefix SchServiceConnector#object_name_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.streamId">StreamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#stream_id SchServiceConnector#stream_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.topicId">TopicId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#topic_id SchServiceConnector#topic_id}. |

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}.

---

##### `BatchRolloverSizeInMbs`<sup>Optional</sup> <a name="BatchRolloverSizeInMbs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchRolloverSizeInMbs"></a>

```csharp
public double BatchRolloverSizeInMbs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_rollover_size_in_mbs SchServiceConnector#batch_rollover_size_in_mbs}.

---

##### `BatchRolloverTimeInMs`<sup>Optional</sup> <a name="BatchRolloverTimeInMs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchRolloverTimeInMs"></a>

```csharp
public double BatchRolloverTimeInMs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_rollover_time_in_ms SchServiceConnector#batch_rollover_time_in_ms}.

---

##### `BatchSizeInKbs`<sup>Optional</sup> <a name="BatchSizeInKbs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchSizeInKbs"></a>

```csharp
public double BatchSizeInKbs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_size_in_kbs SchServiceConnector#batch_size_in_kbs}.

---

##### `BatchSizeInNum`<sup>Optional</sup> <a name="BatchSizeInNum" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchSizeInNum"></a>

```csharp
public double BatchSizeInNum { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_size_in_num SchServiceConnector#batch_size_in_num}.

---

##### `BatchTimeInSec`<sup>Optional</sup> <a name="BatchTimeInSec" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchTimeInSec"></a>

```csharp
public double BatchTimeInSec { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_time_in_sec SchServiceConnector#batch_time_in_sec}.

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#bucket SchServiceConnector#bucket}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}.

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.dimensions"></a>

```csharp
public object Dimensions { get; set; }
```

- *Type:* object

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#dimensions SchServiceConnector#dimensions}

---

##### `EnableFormattedMessaging`<sup>Optional</sup> <a name="EnableFormattedMessaging" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.enableFormattedMessaging"></a>

```csharp
public object EnableFormattedMessaging { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#enable_formatted_messaging SchServiceConnector#enable_formatted_messaging}.

---

##### `FunctionId`<sup>Optional</sup> <a name="FunctionId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.functionId"></a>

```csharp
public string FunctionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#function_id SchServiceConnector#function_id}.

---

##### `LogGroupId`<sup>Optional</sup> <a name="LogGroupId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.logGroupId"></a>

```csharp
public string LogGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_group_id SchServiceConnector#log_group_id}.

---

##### `LogSourceIdentifier`<sup>Optional</sup> <a name="LogSourceIdentifier" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.logSourceIdentifier"></a>

```csharp
public string LogSourceIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_source_identifier SchServiceConnector#log_source_identifier}.

---

##### `Metric`<sup>Optional</sup> <a name="Metric" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.metric"></a>

```csharp
public string Metric { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#metric SchServiceConnector#metric}.

---

##### `MetricNamespace`<sup>Optional</sup> <a name="MetricNamespace" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.metricNamespace"></a>

```csharp
public string MetricNamespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#metric_namespace SchServiceConnector#metric_namespace}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#namespace SchServiceConnector#namespace}.

---

##### `ObjectNamePrefix`<sup>Optional</sup> <a name="ObjectNamePrefix" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.objectNamePrefix"></a>

```csharp
public string ObjectNamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#object_name_prefix SchServiceConnector#object_name_prefix}.

---

##### `StreamId`<sup>Optional</sup> <a name="StreamId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.streamId"></a>

```csharp
public string StreamId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#stream_id SchServiceConnector#stream_id}.

---

##### `TopicId`<sup>Optional</sup> <a name="TopicId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.topicId"></a>

```csharp
public string TopicId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#topic_id SchServiceConnector#topic_id}.

---

### SchServiceConnectorTargetDimensions <a name="SchServiceConnectorTargetDimensions" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SchServiceConnectorTargetDimensions {
    SchServiceConnectorTargetDimensionsDimensionValue DimensionValue = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions.property.dimensionValue">DimensionValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue">SchServiceConnectorTargetDimensionsDimensionValue</a></code> | dimension_value block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#name SchServiceConnector#name}. |

---

##### `DimensionValue`<sup>Optional</sup> <a name="DimensionValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions.property.dimensionValue"></a>

```csharp
public SchServiceConnectorTargetDimensionsDimensionValue DimensionValue { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue">SchServiceConnectorTargetDimensionsDimensionValue</a>

dimension_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#dimension_value SchServiceConnector#dimension_value}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#name SchServiceConnector#name}.

---

### SchServiceConnectorTargetDimensionsDimensionValue <a name="SchServiceConnectorTargetDimensionsDimensionValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SchServiceConnectorTargetDimensionsDimensionValue {
    string Kind,
    string Path = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue.property.kind">Kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#path SchServiceConnector#path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#value SchServiceConnector#value}. |

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#path SchServiceConnector#path}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#value SchServiceConnector#value}.

---

### SchServiceConnectorTasks <a name="SchServiceConnectorTasks" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SchServiceConnectorTasks {
    string Kind,
    double BatchSizeInKbs = null,
    double BatchTimeInSec = null,
    string Condition = null,
    string FunctionId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.kind">Kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.batchSizeInKbs">BatchSizeInKbs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_size_in_kbs SchServiceConnector#batch_size_in_kbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.batchTimeInSec">BatchTimeInSec</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_time_in_sec SchServiceConnector#batch_time_in_sec}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.condition">Condition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#condition SchServiceConnector#condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.functionId">FunctionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#function_id SchServiceConnector#function_id}. |

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}.

---

##### `BatchSizeInKbs`<sup>Optional</sup> <a name="BatchSizeInKbs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.batchSizeInKbs"></a>

```csharp
public double BatchSizeInKbs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_size_in_kbs SchServiceConnector#batch_size_in_kbs}.

---

##### `BatchTimeInSec`<sup>Optional</sup> <a name="BatchTimeInSec" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.batchTimeInSec"></a>

```csharp
public double BatchTimeInSec { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_time_in_sec SchServiceConnector#batch_time_in_sec}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.condition"></a>

```csharp
public string Condition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#condition SchServiceConnector#condition}.

---

##### `FunctionId`<sup>Optional</sup> <a name="FunctionId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.functionId"></a>

```csharp
public string FunctionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#function_id SchServiceConnector#function_id}.

---

### SchServiceConnectorTimeouts <a name="SchServiceConnectorTimeouts" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SchServiceConnectorTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#create SchServiceConnector#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#delete SchServiceConnector#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#update SchServiceConnector#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#create SchServiceConnector#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#delete SchServiceConnector#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#update SchServiceConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SchServiceConnectorSourceCursorOutputReference <a name="SchServiceConnectorSourceCursorOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SchServiceConnectorSourceCursorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.resetKind">ResetKind</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKind` <a name="ResetKind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.resetKind"></a>

```csharp
private void ResetKind()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor">SchServiceConnectorSourceCursor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.internalValue"></a>

```csharp
public SchServiceConnectorSourceCursor InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor">SchServiceConnectorSourceCursor</a>

---


### SchServiceConnectorSourceLogSourcesList <a name="SchServiceConnectorSourceLogSourcesList" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SchServiceConnectorSourceLogSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.get"></a>

```csharp
private SchServiceConnectorSourceLogSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SchServiceConnectorSourceLogSourcesOutputReference <a name="SchServiceConnectorSourceLogSourcesOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SchServiceConnectorSourceLogSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.resetLogGroupId">ResetLogGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.resetLogId">ResetLogId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetLogGroupId` <a name="ResetLogGroupId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.resetLogGroupId"></a>

```csharp
private void ResetLogGroupId()
```

##### `ResetLogId` <a name="ResetLogId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.resetLogId"></a>

```csharp
private void ResetLogId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.logGroupIdInput">LogGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.logIdInput">LogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.logGroupId">LogGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.logId">LogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `LogGroupIdInput`<sup>Optional</sup> <a name="LogGroupIdInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.logGroupIdInput"></a>

```csharp
public string LogGroupIdInput { get; }
```

- *Type:* string

---

##### `LogIdInput`<sup>Optional</sup> <a name="LogIdInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.logIdInput"></a>

```csharp
public string LogIdInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.logGroupId"></a>

```csharp
public string LogGroupId { get; }
```

- *Type:* string

---

##### `LogId`<sup>Required</sup> <a name="LogId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.logId"></a>

```csharp
public string LogId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SchServiceConnectorSourceMonitoringSourcesList <a name="SchServiceConnectorSourceMonitoringSourcesList" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SchServiceConnectorSourceMonitoringSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.get"></a>

```csharp
private SchServiceConnectorSourceMonitoringSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList <a name="SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.get"></a>

```csharp
private SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference <a name="SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.internalValue"></a>

```csharp
public SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a>

---


### SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference <a name="SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.putMetrics">PutMetrics</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetrics` <a name="PutMetrics" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.putMetrics"></a>

```csharp
private void PutMetrics(SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.putMetrics.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.metrics">Metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.metricsInput">MetricsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Metrics`<sup>Required</sup> <a name="Metrics" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.metrics"></a>

```csharp
public SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference Metrics { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference</a>

---

##### `MetricsInput`<sup>Optional</sup> <a name="MetricsInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.metricsInput"></a>

```csharp
public SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics MetricsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a>

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference <a name="SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.putNamespaces">PutNamespaces</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNamespaces` <a name="PutNamespaces" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.putNamespaces"></a>

```csharp
private void PutNamespaces(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.putNamespaces.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.namespaces">Namespaces</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.namespacesInput">NamespacesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails">SchServiceConnectorSourceMonitoringSourcesNamespaceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Namespaces`<sup>Required</sup> <a name="Namespaces" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.namespaces"></a>

```csharp
public SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList Namespaces { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList</a>

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `NamespacesInput`<sup>Optional</sup> <a name="NamespacesInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.namespacesInput"></a>

```csharp
public object NamespacesInput { get; }
```

- *Type:* object

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.internalValue"></a>

```csharp
public SchServiceConnectorSourceMonitoringSourcesNamespaceDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails">SchServiceConnectorSourceMonitoringSourcesNamespaceDetails</a>

---


### SchServiceConnectorSourceMonitoringSourcesOutputReference <a name="SchServiceConnectorSourceMonitoringSourcesOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SchServiceConnectorSourceMonitoringSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.putNamespaceDetails">PutNamespaceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.resetNamespaceDetails">ResetNamespaceDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNamespaceDetails` <a name="PutNamespaceDetails" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.putNamespaceDetails"></a>

```csharp
private void PutNamespaceDetails(SchServiceConnectorSourceMonitoringSourcesNamespaceDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.putNamespaceDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails">SchServiceConnectorSourceMonitoringSourcesNamespaceDetails</a>

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetNamespaceDetails` <a name="ResetNamespaceDetails" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.resetNamespaceDetails"></a>

```csharp
private void ResetNamespaceDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.namespaceDetails">NamespaceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.namespaceDetailsInput">NamespaceDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails">SchServiceConnectorSourceMonitoringSourcesNamespaceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NamespaceDetails`<sup>Required</sup> <a name="NamespaceDetails" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.namespaceDetails"></a>

```csharp
public SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference NamespaceDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `NamespaceDetailsInput`<sup>Optional</sup> <a name="NamespaceDetailsInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.namespaceDetailsInput"></a>

```csharp
public SchServiceConnectorSourceMonitoringSourcesNamespaceDetails NamespaceDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails">SchServiceConnectorSourceMonitoringSourcesNamespaceDetails</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SchServiceConnectorSourceOutputReference <a name="SchServiceConnectorSourceOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SchServiceConnectorSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.putCursor">PutCursor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.putLogSources">PutLogSources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.putMonitoringSources">PutMonitoringSources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetConfigMap">ResetConfigMap</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetCursor">ResetCursor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetLogSources">ResetLogSources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetMonitoringSources">ResetMonitoringSources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetStreamId">ResetStreamId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCursor` <a name="PutCursor" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.putCursor"></a>

```csharp
private void PutCursor(SchServiceConnectorSourceCursor Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.putCursor.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor">SchServiceConnectorSourceCursor</a>

---

##### `PutLogSources` <a name="PutLogSources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.putLogSources"></a>

```csharp
private void PutLogSources(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.putLogSources.parameter.value"></a>

- *Type:* object

---

##### `PutMonitoringSources` <a name="PutMonitoringSources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.putMonitoringSources"></a>

```csharp
private void PutMonitoringSources(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.putMonitoringSources.parameter.value"></a>

- *Type:* object

---

##### `ResetConfigMap` <a name="ResetConfigMap" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetConfigMap"></a>

```csharp
private void ResetConfigMap()
```

##### `ResetCursor` <a name="ResetCursor" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetCursor"></a>

```csharp
private void ResetCursor()
```

##### `ResetLogSources` <a name="ResetLogSources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetLogSources"></a>

```csharp
private void ResetLogSources()
```

##### `ResetMonitoringSources` <a name="ResetMonitoringSources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetMonitoringSources"></a>

```csharp
private void ResetMonitoringSources()
```

##### `ResetPluginName` <a name="ResetPluginName" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetPluginName"></a>

```csharp
private void ResetPluginName()
```

##### `ResetStreamId` <a name="ResetStreamId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetStreamId"></a>

```csharp
private void ResetStreamId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.cursor">Cursor</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference">SchServiceConnectorSourceCursorOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.logSources">LogSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList">SchServiceConnectorSourceLogSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.monitoringSources">MonitoringSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList">SchServiceConnectorSourceMonitoringSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.configMapInput">ConfigMapInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.cursorInput">CursorInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor">SchServiceConnectorSourceCursor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.logSourcesInput">LogSourcesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.monitoringSourcesInput">MonitoringSourcesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.streamIdInput">StreamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.configMap">ConfigMap</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.pluginName">PluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.streamId">StreamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource">SchServiceConnectorSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cursor`<sup>Required</sup> <a name="Cursor" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.cursor"></a>

```csharp
public SchServiceConnectorSourceCursorOutputReference Cursor { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference">SchServiceConnectorSourceCursorOutputReference</a>

---

##### `LogSources`<sup>Required</sup> <a name="LogSources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.logSources"></a>

```csharp
public SchServiceConnectorSourceLogSourcesList LogSources { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList">SchServiceConnectorSourceLogSourcesList</a>

---

##### `MonitoringSources`<sup>Required</sup> <a name="MonitoringSources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.monitoringSources"></a>

```csharp
public SchServiceConnectorSourceMonitoringSourcesList MonitoringSources { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList">SchServiceConnectorSourceMonitoringSourcesList</a>

---

##### `ConfigMapInput`<sup>Optional</sup> <a name="ConfigMapInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.configMapInput"></a>

```csharp
public string ConfigMapInput { get; }
```

- *Type:* string

---

##### `CursorInput`<sup>Optional</sup> <a name="CursorInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.cursorInput"></a>

```csharp
public SchServiceConnectorSourceCursor CursorInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor">SchServiceConnectorSourceCursor</a>

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `LogSourcesInput`<sup>Optional</sup> <a name="LogSourcesInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.logSourcesInput"></a>

```csharp
public object LogSourcesInput { get; }
```

- *Type:* object

---

##### `MonitoringSourcesInput`<sup>Optional</sup> <a name="MonitoringSourcesInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.monitoringSourcesInput"></a>

```csharp
public object MonitoringSourcesInput { get; }
```

- *Type:* object

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.pluginNameInput"></a>

```csharp
public string PluginNameInput { get; }
```

- *Type:* string

---

##### `StreamIdInput`<sup>Optional</sup> <a name="StreamIdInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.streamIdInput"></a>

```csharp
public string StreamIdInput { get; }
```

- *Type:* string

---

##### `ConfigMap`<sup>Required</sup> <a name="ConfigMap" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.configMap"></a>

```csharp
public string ConfigMap { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.pluginName"></a>

```csharp
public string PluginName { get; }
```

- *Type:* string

---

##### `StreamId`<sup>Required</sup> <a name="StreamId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.streamId"></a>

```csharp
public string StreamId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.internalValue"></a>

```csharp
public SchServiceConnectorSource InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource">SchServiceConnectorSource</a>

---


### SchServiceConnectorTargetDimensionsDimensionValueOutputReference <a name="SchServiceConnectorTargetDimensionsDimensionValueOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SchServiceConnectorTargetDimensionsDimensionValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue">SchServiceConnectorTargetDimensionsDimensionValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.internalValue"></a>

```csharp
public SchServiceConnectorTargetDimensionsDimensionValue InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue">SchServiceConnectorTargetDimensionsDimensionValue</a>

---


### SchServiceConnectorTargetDimensionsList <a name="SchServiceConnectorTargetDimensionsList" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SchServiceConnectorTargetDimensionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.get"></a>

```csharp
private SchServiceConnectorTargetDimensionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SchServiceConnectorTargetDimensionsOutputReference <a name="SchServiceConnectorTargetDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SchServiceConnectorTargetDimensionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.putDimensionValue">PutDimensionValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.resetDimensionValue">ResetDimensionValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDimensionValue` <a name="PutDimensionValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.putDimensionValue"></a>

```csharp
private void PutDimensionValue(SchServiceConnectorTargetDimensionsDimensionValue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.putDimensionValue.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue">SchServiceConnectorTargetDimensionsDimensionValue</a>

---

##### `ResetDimensionValue` <a name="ResetDimensionValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.resetDimensionValue"></a>

```csharp
private void ResetDimensionValue()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.dimensionValue">DimensionValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference">SchServiceConnectorTargetDimensionsDimensionValueOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.dimensionValueInput">DimensionValueInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue">SchServiceConnectorTargetDimensionsDimensionValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DimensionValue`<sup>Required</sup> <a name="DimensionValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.dimensionValue"></a>

```csharp
public SchServiceConnectorTargetDimensionsDimensionValueOutputReference DimensionValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference">SchServiceConnectorTargetDimensionsDimensionValueOutputReference</a>

---

##### `DimensionValueInput`<sup>Optional</sup> <a name="DimensionValueInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.dimensionValueInput"></a>

```csharp
public SchServiceConnectorTargetDimensionsDimensionValue DimensionValueInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue">SchServiceConnectorTargetDimensionsDimensionValue</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SchServiceConnectorTargetOutputReference <a name="SchServiceConnectorTargetOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SchServiceConnectorTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.putDimensions">PutDimensions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchRolloverSizeInMbs">ResetBatchRolloverSizeInMbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchRolloverTimeInMs">ResetBatchRolloverTimeInMs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchSizeInKbs">ResetBatchSizeInKbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchSizeInNum">ResetBatchSizeInNum</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchTimeInSec">ResetBatchTimeInSec</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetDimensions">ResetDimensions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetEnableFormattedMessaging">ResetEnableFormattedMessaging</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetFunctionId">ResetFunctionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetLogGroupId">ResetLogGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetLogSourceIdentifier">ResetLogSourceIdentifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetMetric">ResetMetric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetMetricNamespace">ResetMetricNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetObjectNamePrefix">ResetObjectNamePrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetStreamId">ResetStreamId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetTopicId">ResetTopicId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDimensions` <a name="PutDimensions" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.putDimensions"></a>

```csharp
private void PutDimensions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.putDimensions.parameter.value"></a>

- *Type:* object

---

##### `ResetBatchRolloverSizeInMbs` <a name="ResetBatchRolloverSizeInMbs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchRolloverSizeInMbs"></a>

```csharp
private void ResetBatchRolloverSizeInMbs()
```

##### `ResetBatchRolloverTimeInMs` <a name="ResetBatchRolloverTimeInMs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchRolloverTimeInMs"></a>

```csharp
private void ResetBatchRolloverTimeInMs()
```

##### `ResetBatchSizeInKbs` <a name="ResetBatchSizeInKbs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchSizeInKbs"></a>

```csharp
private void ResetBatchSizeInKbs()
```

##### `ResetBatchSizeInNum` <a name="ResetBatchSizeInNum" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchSizeInNum"></a>

```csharp
private void ResetBatchSizeInNum()
```

##### `ResetBatchTimeInSec` <a name="ResetBatchTimeInSec" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchTimeInSec"></a>

```csharp
private void ResetBatchTimeInSec()
```

##### `ResetBucket` <a name="ResetBucket" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetDimensions` <a name="ResetDimensions" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetDimensions"></a>

```csharp
private void ResetDimensions()
```

##### `ResetEnableFormattedMessaging` <a name="ResetEnableFormattedMessaging" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetEnableFormattedMessaging"></a>

```csharp
private void ResetEnableFormattedMessaging()
```

##### `ResetFunctionId` <a name="ResetFunctionId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetFunctionId"></a>

```csharp
private void ResetFunctionId()
```

##### `ResetLogGroupId` <a name="ResetLogGroupId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetLogGroupId"></a>

```csharp
private void ResetLogGroupId()
```

##### `ResetLogSourceIdentifier` <a name="ResetLogSourceIdentifier" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetLogSourceIdentifier"></a>

```csharp
private void ResetLogSourceIdentifier()
```

##### `ResetMetric` <a name="ResetMetric" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetMetric"></a>

```csharp
private void ResetMetric()
```

##### `ResetMetricNamespace` <a name="ResetMetricNamespace" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetMetricNamespace"></a>

```csharp
private void ResetMetricNamespace()
```

##### `ResetNamespace` <a name="ResetNamespace" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetObjectNamePrefix` <a name="ResetObjectNamePrefix" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetObjectNamePrefix"></a>

```csharp
private void ResetObjectNamePrefix()
```

##### `ResetStreamId` <a name="ResetStreamId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetStreamId"></a>

```csharp
private void ResetStreamId()
```

##### `ResetTopicId` <a name="ResetTopicId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetTopicId"></a>

```csharp
private void ResetTopicId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList">SchServiceConnectorTargetDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchRolloverSizeInMbsInput">BatchRolloverSizeInMbsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchRolloverTimeInMsInput">BatchRolloverTimeInMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchSizeInKbsInput">BatchSizeInKbsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchSizeInNumInput">BatchSizeInNumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchTimeInSecInput">BatchTimeInSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.dimensionsInput">DimensionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.enableFormattedMessagingInput">EnableFormattedMessagingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.functionIdInput">FunctionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.logGroupIdInput">LogGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.logSourceIdentifierInput">LogSourceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.metricInput">MetricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.metricNamespaceInput">MetricNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.objectNamePrefixInput">ObjectNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.streamIdInput">StreamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.topicIdInput">TopicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchRolloverSizeInMbs">BatchRolloverSizeInMbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchRolloverTimeInMs">BatchRolloverTimeInMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchSizeInKbs">BatchSizeInKbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchSizeInNum">BatchSizeInNum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchTimeInSec">BatchTimeInSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.enableFormattedMessaging">EnableFormattedMessaging</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.functionId">FunctionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.logGroupId">LogGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.logSourceIdentifier">LogSourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.metric">Metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.metricNamespace">MetricNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.objectNamePrefix">ObjectNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.streamId">StreamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.topicId">TopicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget">SchServiceConnectorTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.dimensions"></a>

```csharp
public SchServiceConnectorTargetDimensionsList Dimensions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList">SchServiceConnectorTargetDimensionsList</a>

---

##### `BatchRolloverSizeInMbsInput`<sup>Optional</sup> <a name="BatchRolloverSizeInMbsInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchRolloverSizeInMbsInput"></a>

```csharp
public double BatchRolloverSizeInMbsInput { get; }
```

- *Type:* double

---

##### `BatchRolloverTimeInMsInput`<sup>Optional</sup> <a name="BatchRolloverTimeInMsInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchRolloverTimeInMsInput"></a>

```csharp
public double BatchRolloverTimeInMsInput { get; }
```

- *Type:* double

---

##### `BatchSizeInKbsInput`<sup>Optional</sup> <a name="BatchSizeInKbsInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchSizeInKbsInput"></a>

```csharp
public double BatchSizeInKbsInput { get; }
```

- *Type:* double

---

##### `BatchSizeInNumInput`<sup>Optional</sup> <a name="BatchSizeInNumInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchSizeInNumInput"></a>

```csharp
public double BatchSizeInNumInput { get; }
```

- *Type:* double

---

##### `BatchTimeInSecInput`<sup>Optional</sup> <a name="BatchTimeInSecInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchTimeInSecInput"></a>

```csharp
public double BatchTimeInSecInput { get; }
```

- *Type:* double

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.dimensionsInput"></a>

```csharp
public object DimensionsInput { get; }
```

- *Type:* object

---

##### `EnableFormattedMessagingInput`<sup>Optional</sup> <a name="EnableFormattedMessagingInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.enableFormattedMessagingInput"></a>

```csharp
public object EnableFormattedMessagingInput { get; }
```

- *Type:* object

---

##### `FunctionIdInput`<sup>Optional</sup> <a name="FunctionIdInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.functionIdInput"></a>

```csharp
public string FunctionIdInput { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `LogGroupIdInput`<sup>Optional</sup> <a name="LogGroupIdInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.logGroupIdInput"></a>

```csharp
public string LogGroupIdInput { get; }
```

- *Type:* string

---

##### `LogSourceIdentifierInput`<sup>Optional</sup> <a name="LogSourceIdentifierInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.logSourceIdentifierInput"></a>

```csharp
public string LogSourceIdentifierInput { get; }
```

- *Type:* string

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.metricInput"></a>

```csharp
public string MetricInput { get; }
```

- *Type:* string

---

##### `MetricNamespaceInput`<sup>Optional</sup> <a name="MetricNamespaceInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.metricNamespaceInput"></a>

```csharp
public string MetricNamespaceInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ObjectNamePrefixInput`<sup>Optional</sup> <a name="ObjectNamePrefixInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.objectNamePrefixInput"></a>

```csharp
public string ObjectNamePrefixInput { get; }
```

- *Type:* string

---

##### `StreamIdInput`<sup>Optional</sup> <a name="StreamIdInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.streamIdInput"></a>

```csharp
public string StreamIdInput { get; }
```

- *Type:* string

---

##### `TopicIdInput`<sup>Optional</sup> <a name="TopicIdInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.topicIdInput"></a>

```csharp
public string TopicIdInput { get; }
```

- *Type:* string

---

##### `BatchRolloverSizeInMbs`<sup>Required</sup> <a name="BatchRolloverSizeInMbs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchRolloverSizeInMbs"></a>

```csharp
public double BatchRolloverSizeInMbs { get; }
```

- *Type:* double

---

##### `BatchRolloverTimeInMs`<sup>Required</sup> <a name="BatchRolloverTimeInMs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchRolloverTimeInMs"></a>

```csharp
public double BatchRolloverTimeInMs { get; }
```

- *Type:* double

---

##### `BatchSizeInKbs`<sup>Required</sup> <a name="BatchSizeInKbs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchSizeInKbs"></a>

```csharp
public double BatchSizeInKbs { get; }
```

- *Type:* double

---

##### `BatchSizeInNum`<sup>Required</sup> <a name="BatchSizeInNum" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchSizeInNum"></a>

```csharp
public double BatchSizeInNum { get; }
```

- *Type:* double

---

##### `BatchTimeInSec`<sup>Required</sup> <a name="BatchTimeInSec" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchTimeInSec"></a>

```csharp
public double BatchTimeInSec { get; }
```

- *Type:* double

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `EnableFormattedMessaging`<sup>Required</sup> <a name="EnableFormattedMessaging" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.enableFormattedMessaging"></a>

```csharp
public object EnableFormattedMessaging { get; }
```

- *Type:* object

---

##### `FunctionId`<sup>Required</sup> <a name="FunctionId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.functionId"></a>

```csharp
public string FunctionId { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.logGroupId"></a>

```csharp
public string LogGroupId { get; }
```

- *Type:* string

---

##### `LogSourceIdentifier`<sup>Required</sup> <a name="LogSourceIdentifier" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.logSourceIdentifier"></a>

```csharp
public string LogSourceIdentifier { get; }
```

- *Type:* string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.metric"></a>

```csharp
public string Metric { get; }
```

- *Type:* string

---

##### `MetricNamespace`<sup>Required</sup> <a name="MetricNamespace" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.metricNamespace"></a>

```csharp
public string MetricNamespace { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `ObjectNamePrefix`<sup>Required</sup> <a name="ObjectNamePrefix" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.objectNamePrefix"></a>

```csharp
public string ObjectNamePrefix { get; }
```

- *Type:* string

---

##### `StreamId`<sup>Required</sup> <a name="StreamId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.streamId"></a>

```csharp
public string StreamId { get; }
```

- *Type:* string

---

##### `TopicId`<sup>Required</sup> <a name="TopicId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.topicId"></a>

```csharp
public string TopicId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.internalValue"></a>

```csharp
public SchServiceConnectorTarget InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget">SchServiceConnectorTarget</a>

---


### SchServiceConnectorTasksList <a name="SchServiceConnectorTasksList" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SchServiceConnectorTasksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.get"></a>

```csharp
private SchServiceConnectorTasksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SchServiceConnectorTasksOutputReference <a name="SchServiceConnectorTasksOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SchServiceConnectorTasksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resetBatchSizeInKbs">ResetBatchSizeInKbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resetBatchTimeInSec">ResetBatchTimeInSec</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resetFunctionId">ResetFunctionId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBatchSizeInKbs` <a name="ResetBatchSizeInKbs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resetBatchSizeInKbs"></a>

```csharp
private void ResetBatchSizeInKbs()
```

##### `ResetBatchTimeInSec` <a name="ResetBatchTimeInSec" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resetBatchTimeInSec"></a>

```csharp
private void ResetBatchTimeInSec()
```

##### `ResetCondition` <a name="ResetCondition" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetFunctionId` <a name="ResetFunctionId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resetFunctionId"></a>

```csharp
private void ResetFunctionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.batchSizeInKbsInput">BatchSizeInKbsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.batchTimeInSecInput">BatchTimeInSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.conditionInput">ConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.functionIdInput">FunctionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.batchSizeInKbs">BatchSizeInKbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.batchTimeInSec">BatchTimeInSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.functionId">FunctionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BatchSizeInKbsInput`<sup>Optional</sup> <a name="BatchSizeInKbsInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.batchSizeInKbsInput"></a>

```csharp
public double BatchSizeInKbsInput { get; }
```

- *Type:* double

---

##### `BatchTimeInSecInput`<sup>Optional</sup> <a name="BatchTimeInSecInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.batchTimeInSecInput"></a>

```csharp
public double BatchTimeInSecInput { get; }
```

- *Type:* double

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.conditionInput"></a>

```csharp
public string ConditionInput { get; }
```

- *Type:* string

---

##### `FunctionIdInput`<sup>Optional</sup> <a name="FunctionIdInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.functionIdInput"></a>

```csharp
public string FunctionIdInput { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `BatchSizeInKbs`<sup>Required</sup> <a name="BatchSizeInKbs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.batchSizeInKbs"></a>

```csharp
public double BatchSizeInKbs { get; }
```

- *Type:* double

---

##### `BatchTimeInSec`<sup>Required</sup> <a name="BatchTimeInSec" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.batchTimeInSec"></a>

```csharp
public double BatchTimeInSec { get; }
```

- *Type:* double

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `FunctionId`<sup>Required</sup> <a name="FunctionId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.functionId"></a>

```csharp
public string FunctionId { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SchServiceConnectorTimeoutsOutputReference <a name="SchServiceConnectorTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SchServiceConnectorTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



