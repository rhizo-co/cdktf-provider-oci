# `coreDrgRouteDistributionStatement` Submodule <a name="`coreDrgRouteDistributionStatement` Submodule" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreDrgRouteDistributionStatement <a name="CoreDrgRouteDistributionStatement" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement oci_core_drg_route_distribution_statement}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreDrgRouteDistributionStatement(Construct Scope, string Id, CoreDrgRouteDistributionStatementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig">CoreDrgRouteDistributionStatementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig">CoreDrgRouteDistributionStatementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.putMatchCriteria">PutMatchCriteria</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMatchCriteria` <a name="PutMatchCriteria" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.putMatchCriteria"></a>

```csharp
private void PutMatchCriteria(CoreDrgRouteDistributionStatementMatchCriteria Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.putMatchCriteria.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria">CoreDrgRouteDistributionStatementMatchCriteria</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.putTimeouts"></a>

```csharp
private void PutTimeouts(CoreDrgRouteDistributionStatementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts">CoreDrgRouteDistributionStatementTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CoreDrgRouteDistributionStatement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreDrgRouteDistributionStatement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreDrgRouteDistributionStatement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreDrgRouteDistributionStatement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreDrgRouteDistributionStatement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CoreDrgRouteDistributionStatement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CoreDrgRouteDistributionStatement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CoreDrgRouteDistributionStatement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CoreDrgRouteDistributionStatement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.matchCriteria">MatchCriteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference">CoreDrgRouteDistributionStatementMatchCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference">CoreDrgRouteDistributionStatementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.drgRouteDistributionIdInput">DrgRouteDistributionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.matchCriteriaInput">MatchCriteriaInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria">CoreDrgRouteDistributionStatementMatchCriteria</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.drgRouteDistributionId">DrgRouteDistributionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.priority">Priority</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `MatchCriteria`<sup>Required</sup> <a name="MatchCriteria" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.matchCriteria"></a>

```csharp
public CoreDrgRouteDistributionStatementMatchCriteriaOutputReference MatchCriteria { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference">CoreDrgRouteDistributionStatementMatchCriteriaOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.timeouts"></a>

```csharp
public CoreDrgRouteDistributionStatementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference">CoreDrgRouteDistributionStatementTimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `DrgRouteDistributionIdInput`<sup>Optional</sup> <a name="DrgRouteDistributionIdInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.drgRouteDistributionIdInput"></a>

```csharp
public string DrgRouteDistributionIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MatchCriteriaInput`<sup>Optional</sup> <a name="MatchCriteriaInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.matchCriteriaInput"></a>

```csharp
public CoreDrgRouteDistributionStatementMatchCriteria MatchCriteriaInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria">CoreDrgRouteDistributionStatementMatchCriteria</a>

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `DrgRouteDistributionId`<sup>Required</sup> <a name="DrgRouteDistributionId" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.drgRouteDistributionId"></a>

```csharp
public string DrgRouteDistributionId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreDrgRouteDistributionStatementConfig <a name="CoreDrgRouteDistributionStatementConfig" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreDrgRouteDistributionStatementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Action,
    string DrgRouteDistributionId,
    CoreDrgRouteDistributionStatementMatchCriteria MatchCriteria,
    double Priority,
    string Id = null,
    CoreDrgRouteDistributionStatementTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#action CoreDrgRouteDistributionStatement#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.drgRouteDistributionId">DrgRouteDistributionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#drg_route_distribution_id CoreDrgRouteDistributionStatement#drg_route_distribution_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.matchCriteria">MatchCriteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria">CoreDrgRouteDistributionStatementMatchCriteria</a></code> | match_criteria block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#priority CoreDrgRouteDistributionStatement#priority}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#id CoreDrgRouteDistributionStatement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts">CoreDrgRouteDistributionStatementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#action CoreDrgRouteDistributionStatement#action}.

---

##### `DrgRouteDistributionId`<sup>Required</sup> <a name="DrgRouteDistributionId" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.drgRouteDistributionId"></a>

```csharp
public string DrgRouteDistributionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#drg_route_distribution_id CoreDrgRouteDistributionStatement#drg_route_distribution_id}.

---

##### `MatchCriteria`<sup>Required</sup> <a name="MatchCriteria" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.matchCriteria"></a>

```csharp
public CoreDrgRouteDistributionStatementMatchCriteria MatchCriteria { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria">CoreDrgRouteDistributionStatementMatchCriteria</a>

match_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#match_criteria CoreDrgRouteDistributionStatement#match_criteria}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#priority CoreDrgRouteDistributionStatement#priority}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#id CoreDrgRouteDistributionStatement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.timeouts"></a>

```csharp
public CoreDrgRouteDistributionStatementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts">CoreDrgRouteDistributionStatementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#timeouts CoreDrgRouteDistributionStatement#timeouts}

---

### CoreDrgRouteDistributionStatementMatchCriteria <a name="CoreDrgRouteDistributionStatementMatchCriteria" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreDrgRouteDistributionStatementMatchCriteria {
    string AttachmentType = null,
    string DrgAttachmentId = null,
    string MatchType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria.property.attachmentType">AttachmentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#attachment_type CoreDrgRouteDistributionStatement#attachment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria.property.drgAttachmentId">DrgAttachmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#drg_attachment_id CoreDrgRouteDistributionStatement#drg_attachment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria.property.matchType">MatchType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#match_type CoreDrgRouteDistributionStatement#match_type}. |

---

##### `AttachmentType`<sup>Optional</sup> <a name="AttachmentType" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria.property.attachmentType"></a>

```csharp
public string AttachmentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#attachment_type CoreDrgRouteDistributionStatement#attachment_type}.

---

##### `DrgAttachmentId`<sup>Optional</sup> <a name="DrgAttachmentId" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria.property.drgAttachmentId"></a>

```csharp
public string DrgAttachmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#drg_attachment_id CoreDrgRouteDistributionStatement#drg_attachment_id}.

---

##### `MatchType`<sup>Optional</sup> <a name="MatchType" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria.property.matchType"></a>

```csharp
public string MatchType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#match_type CoreDrgRouteDistributionStatement#match_type}.

---

### CoreDrgRouteDistributionStatementTimeouts <a name="CoreDrgRouteDistributionStatementTimeouts" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreDrgRouteDistributionStatementTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#create CoreDrgRouteDistributionStatement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#delete CoreDrgRouteDistributionStatement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#update CoreDrgRouteDistributionStatement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#create CoreDrgRouteDistributionStatement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#delete CoreDrgRouteDistributionStatement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#update CoreDrgRouteDistributionStatement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreDrgRouteDistributionStatementMatchCriteriaOutputReference <a name="CoreDrgRouteDistributionStatementMatchCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreDrgRouteDistributionStatementMatchCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.resetAttachmentType">ResetAttachmentType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.resetDrgAttachmentId">ResetDrgAttachmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.resetMatchType">ResetMatchType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttachmentType` <a name="ResetAttachmentType" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.resetAttachmentType"></a>

```csharp
private void ResetAttachmentType()
```

##### `ResetDrgAttachmentId` <a name="ResetDrgAttachmentId" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.resetDrgAttachmentId"></a>

```csharp
private void ResetDrgAttachmentId()
```

##### `ResetMatchType` <a name="ResetMatchType" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.resetMatchType"></a>

```csharp
private void ResetMatchType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.attachmentTypeInput">AttachmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.drgAttachmentIdInput">DrgAttachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.matchTypeInput">MatchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.attachmentType">AttachmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.drgAttachmentId">DrgAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.matchType">MatchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria">CoreDrgRouteDistributionStatementMatchCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttachmentTypeInput`<sup>Optional</sup> <a name="AttachmentTypeInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.attachmentTypeInput"></a>

```csharp
public string AttachmentTypeInput { get; }
```

- *Type:* string

---

##### `DrgAttachmentIdInput`<sup>Optional</sup> <a name="DrgAttachmentIdInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.drgAttachmentIdInput"></a>

```csharp
public string DrgAttachmentIdInput { get; }
```

- *Type:* string

---

##### `MatchTypeInput`<sup>Optional</sup> <a name="MatchTypeInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.matchTypeInput"></a>

```csharp
public string MatchTypeInput { get; }
```

- *Type:* string

---

##### `AttachmentType`<sup>Required</sup> <a name="AttachmentType" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.attachmentType"></a>

```csharp
public string AttachmentType { get; }
```

- *Type:* string

---

##### `DrgAttachmentId`<sup>Required</sup> <a name="DrgAttachmentId" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.drgAttachmentId"></a>

```csharp
public string DrgAttachmentId { get; }
```

- *Type:* string

---

##### `MatchType`<sup>Required</sup> <a name="MatchType" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.matchType"></a>

```csharp
public string MatchType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.internalValue"></a>

```csharp
public CoreDrgRouteDistributionStatementMatchCriteria InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria">CoreDrgRouteDistributionStatementMatchCriteria</a>

---


### CoreDrgRouteDistributionStatementTimeoutsOutputReference <a name="CoreDrgRouteDistributionStatementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreDrgRouteDistributionStatementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



