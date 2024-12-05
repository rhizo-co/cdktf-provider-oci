# `meteringComputationQuery` Submodule <a name="`meteringComputationQuery` Submodule" id="rhizo-co-terraform-provider-oci.meteringComputationQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MeteringComputationQuery <a name="MeteringComputationQuery" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query oci_metering_computation_query}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MeteringComputationQuery(Construct Scope, string Id, MeteringComputationQueryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig">MeteringComputationQueryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig">MeteringComputationQueryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.putQueryDefinition">PutQueryDefinition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutQueryDefinition` <a name="PutQueryDefinition" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.putQueryDefinition"></a>

```csharp
private void PutQueryDefinition(MeteringComputationQueryQueryDefinition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.putQueryDefinition.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition">MeteringComputationQueryQueryDefinition</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.putTimeouts"></a>

```csharp
private void PutTimeouts(MeteringComputationQueryTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts">MeteringComputationQueryTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MeteringComputationQuery resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MeteringComputationQuery.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MeteringComputationQuery.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MeteringComputationQuery.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MeteringComputationQuery.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MeteringComputationQuery resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MeteringComputationQuery to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MeteringComputationQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MeteringComputationQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.queryDefinition">QueryDefinition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference">MeteringComputationQueryQueryDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference">MeteringComputationQueryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.queryDefinitionInput">QueryDefinitionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition">MeteringComputationQueryQueryDefinition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `QueryDefinition`<sup>Required</sup> <a name="QueryDefinition" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.queryDefinition"></a>

```csharp
public MeteringComputationQueryQueryDefinitionOutputReference QueryDefinition { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference">MeteringComputationQueryQueryDefinitionOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.timeouts"></a>

```csharp
public MeteringComputationQueryTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference">MeteringComputationQueryTimeoutsOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `QueryDefinitionInput`<sup>Optional</sup> <a name="QueryDefinitionInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.queryDefinitionInput"></a>

```csharp
public MeteringComputationQueryQueryDefinition QueryDefinitionInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition">MeteringComputationQueryQueryDefinition</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MeteringComputationQueryConfig <a name="MeteringComputationQueryConfig" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MeteringComputationQueryConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    MeteringComputationQueryQueryDefinition QueryDefinition,
    string Id = null,
    MeteringComputationQueryTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#compartment_id MeteringComputationQuery#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.queryDefinition">QueryDefinition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition">MeteringComputationQueryQueryDefinition</a></code> | query_definition block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#id MeteringComputationQuery#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts">MeteringComputationQueryTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#compartment_id MeteringComputationQuery#compartment_id}.

---

##### `QueryDefinition`<sup>Required</sup> <a name="QueryDefinition" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.queryDefinition"></a>

```csharp
public MeteringComputationQueryQueryDefinition QueryDefinition { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition">MeteringComputationQueryQueryDefinition</a>

query_definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#query_definition MeteringComputationQuery#query_definition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#id MeteringComputationQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.timeouts"></a>

```csharp
public MeteringComputationQueryTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts">MeteringComputationQueryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#timeouts MeteringComputationQuery#timeouts}

---

### MeteringComputationQueryQueryDefinition <a name="MeteringComputationQueryQueryDefinition" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MeteringComputationQueryQueryDefinition {
    MeteringComputationQueryQueryDefinitionCostAnalysisUi CostAnalysisUi,
    string DisplayName,
    MeteringComputationQueryQueryDefinitionReportQuery ReportQuery,
    double Version
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition.property.costAnalysisUi">CostAnalysisUi</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi">MeteringComputationQueryQueryDefinitionCostAnalysisUi</a></code> | cost_analysis_ui block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#display_name MeteringComputationQuery#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition.property.reportQuery">ReportQuery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery">MeteringComputationQueryQueryDefinitionReportQuery</a></code> | report_query block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition.property.version">Version</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#version MeteringComputationQuery#version}. |

---

##### `CostAnalysisUi`<sup>Required</sup> <a name="CostAnalysisUi" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition.property.costAnalysisUi"></a>

```csharp
public MeteringComputationQueryQueryDefinitionCostAnalysisUi CostAnalysisUi { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi">MeteringComputationQueryQueryDefinitionCostAnalysisUi</a>

cost_analysis_ui block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#cost_analysis_ui MeteringComputationQuery#cost_analysis_ui}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#display_name MeteringComputationQuery#display_name}.

---

##### `ReportQuery`<sup>Required</sup> <a name="ReportQuery" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition.property.reportQuery"></a>

```csharp
public MeteringComputationQueryQueryDefinitionReportQuery ReportQuery { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery">MeteringComputationQueryQueryDefinitionReportQuery</a>

report_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#report_query MeteringComputationQuery#report_query}

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition.property.version"></a>

```csharp
public double Version { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#version MeteringComputationQuery#version}.

---

### MeteringComputationQueryQueryDefinitionCostAnalysisUi <a name="MeteringComputationQueryQueryDefinitionCostAnalysisUi" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MeteringComputationQueryQueryDefinitionCostAnalysisUi {
    string Graph = null,
    object IsCumulativeGraph = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi.property.graph">Graph</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#graph MeteringComputationQuery#graph}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi.property.isCumulativeGraph">IsCumulativeGraph</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#is_cumulative_graph MeteringComputationQuery#is_cumulative_graph}. |

---

##### `Graph`<sup>Optional</sup> <a name="Graph" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi.property.graph"></a>

```csharp
public string Graph { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#graph MeteringComputationQuery#graph}.

---

##### `IsCumulativeGraph`<sup>Optional</sup> <a name="IsCumulativeGraph" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi.property.isCumulativeGraph"></a>

```csharp
public object IsCumulativeGraph { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#is_cumulative_graph MeteringComputationQuery#is_cumulative_graph}.

---

### MeteringComputationQueryQueryDefinitionReportQuery <a name="MeteringComputationQueryQueryDefinitionReportQuery" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MeteringComputationQueryQueryDefinitionReportQuery {
    string Granularity,
    string TenantId,
    double CompartmentDepth = null,
    string DateRangeName = null,
    string Filter = null,
    MeteringComputationQueryQueryDefinitionReportQueryForecast Forecast = null,
    string[] GroupBy = null,
    object GroupByTag = null,
    object IsAggregateByTime = null,
    string QueryType = null,
    string TimeUsageEnded = null,
    string TimeUsageStarted = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.granularity">Granularity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#granularity MeteringComputationQuery#granularity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#tenant_id MeteringComputationQuery#tenant_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.compartmentDepth">CompartmentDepth</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#compartment_depth MeteringComputationQuery#compartment_depth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.dateRangeName">DateRangeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#date_range_name MeteringComputationQuery#date_range_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.filter">Filter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#filter MeteringComputationQuery#filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.forecast">Forecast</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast">MeteringComputationQueryQueryDefinitionReportQueryForecast</a></code> | forecast block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.groupBy">GroupBy</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#group_by MeteringComputationQuery#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.groupByTag">GroupByTag</a></code> | <code>object</code> | group_by_tag block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.isAggregateByTime">IsAggregateByTime</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#is_aggregate_by_time MeteringComputationQuery#is_aggregate_by_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.queryType">QueryType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#query_type MeteringComputationQuery#query_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.timeUsageEnded">TimeUsageEnded</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#time_usage_ended MeteringComputationQuery#time_usage_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.timeUsageStarted">TimeUsageStarted</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#time_usage_started MeteringComputationQuery#time_usage_started}. |

---

##### `Granularity`<sup>Required</sup> <a name="Granularity" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.granularity"></a>

```csharp
public string Granularity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#granularity MeteringComputationQuery#granularity}.

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#tenant_id MeteringComputationQuery#tenant_id}.

---

##### `CompartmentDepth`<sup>Optional</sup> <a name="CompartmentDepth" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.compartmentDepth"></a>

```csharp
public double CompartmentDepth { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#compartment_depth MeteringComputationQuery#compartment_depth}.

---

##### `DateRangeName`<sup>Optional</sup> <a name="DateRangeName" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.dateRangeName"></a>

```csharp
public string DateRangeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#date_range_name MeteringComputationQuery#date_range_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#filter MeteringComputationQuery#filter}.

---

##### `Forecast`<sup>Optional</sup> <a name="Forecast" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.forecast"></a>

```csharp
public MeteringComputationQueryQueryDefinitionReportQueryForecast Forecast { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast">MeteringComputationQueryQueryDefinitionReportQueryForecast</a>

forecast block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#forecast MeteringComputationQuery#forecast}

---

##### `GroupBy`<sup>Optional</sup> <a name="GroupBy" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.groupBy"></a>

```csharp
public string[] GroupBy { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#group_by MeteringComputationQuery#group_by}.

---

##### `GroupByTag`<sup>Optional</sup> <a name="GroupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.groupByTag"></a>

```csharp
public object GroupByTag { get; set; }
```

- *Type:* object

group_by_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#group_by_tag MeteringComputationQuery#group_by_tag}

---

##### `IsAggregateByTime`<sup>Optional</sup> <a name="IsAggregateByTime" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.isAggregateByTime"></a>

```csharp
public object IsAggregateByTime { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#is_aggregate_by_time MeteringComputationQuery#is_aggregate_by_time}.

---

##### `QueryType`<sup>Optional</sup> <a name="QueryType" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.queryType"></a>

```csharp
public string QueryType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#query_type MeteringComputationQuery#query_type}.

---

##### `TimeUsageEnded`<sup>Optional</sup> <a name="TimeUsageEnded" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.timeUsageEnded"></a>

```csharp
public string TimeUsageEnded { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#time_usage_ended MeteringComputationQuery#time_usage_ended}.

---

##### `TimeUsageStarted`<sup>Optional</sup> <a name="TimeUsageStarted" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.timeUsageStarted"></a>

```csharp
public string TimeUsageStarted { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#time_usage_started MeteringComputationQuery#time_usage_started}.

---

### MeteringComputationQueryQueryDefinitionReportQueryForecast <a name="MeteringComputationQueryQueryDefinitionReportQueryForecast" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MeteringComputationQueryQueryDefinitionReportQueryForecast {
    string TimeForecastEnded,
    string ForecastType = null,
    string TimeForecastStarted = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast.property.timeForecastEnded">TimeForecastEnded</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#time_forecast_ended MeteringComputationQuery#time_forecast_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast.property.forecastType">ForecastType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#forecast_type MeteringComputationQuery#forecast_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast.property.timeForecastStarted">TimeForecastStarted</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#time_forecast_started MeteringComputationQuery#time_forecast_started}. |

---

##### `TimeForecastEnded`<sup>Required</sup> <a name="TimeForecastEnded" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast.property.timeForecastEnded"></a>

```csharp
public string TimeForecastEnded { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#time_forecast_ended MeteringComputationQuery#time_forecast_ended}.

---

##### `ForecastType`<sup>Optional</sup> <a name="ForecastType" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast.property.forecastType"></a>

```csharp
public string ForecastType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#forecast_type MeteringComputationQuery#forecast_type}.

---

##### `TimeForecastStarted`<sup>Optional</sup> <a name="TimeForecastStarted" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast.property.timeForecastStarted"></a>

```csharp
public string TimeForecastStarted { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#time_forecast_started MeteringComputationQuery#time_forecast_started}.

---

### MeteringComputationQueryQueryDefinitionReportQueryGroupByTag <a name="MeteringComputationQueryQueryDefinitionReportQueryGroupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MeteringComputationQueryQueryDefinitionReportQueryGroupByTag {
    string Key = null,
    string Namespace = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#key MeteringComputationQuery#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#namespace MeteringComputationQuery#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#value MeteringComputationQuery#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#key MeteringComputationQuery#key}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#namespace MeteringComputationQuery#namespace}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#value MeteringComputationQuery#value}.

---

### MeteringComputationQueryTimeouts <a name="MeteringComputationQueryTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MeteringComputationQueryTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#create MeteringComputationQuery#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#delete MeteringComputationQuery#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#update MeteringComputationQuery#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#create MeteringComputationQuery#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#delete MeteringComputationQuery#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#update MeteringComputationQuery#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference <a name="MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.resetGraph">ResetGraph</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.resetIsCumulativeGraph">ResetIsCumulativeGraph</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGraph` <a name="ResetGraph" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.resetGraph"></a>

```csharp
private void ResetGraph()
```

##### `ResetIsCumulativeGraph` <a name="ResetIsCumulativeGraph" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.resetIsCumulativeGraph"></a>

```csharp
private void ResetIsCumulativeGraph()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.graphInput">GraphInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.isCumulativeGraphInput">IsCumulativeGraphInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.graph">Graph</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.isCumulativeGraph">IsCumulativeGraph</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi">MeteringComputationQueryQueryDefinitionCostAnalysisUi</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GraphInput`<sup>Optional</sup> <a name="GraphInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.graphInput"></a>

```csharp
public string GraphInput { get; }
```

- *Type:* string

---

##### `IsCumulativeGraphInput`<sup>Optional</sup> <a name="IsCumulativeGraphInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.isCumulativeGraphInput"></a>

```csharp
public object IsCumulativeGraphInput { get; }
```

- *Type:* object

---

##### `Graph`<sup>Required</sup> <a name="Graph" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.graph"></a>

```csharp
public string Graph { get; }
```

- *Type:* string

---

##### `IsCumulativeGraph`<sup>Required</sup> <a name="IsCumulativeGraph" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.isCumulativeGraph"></a>

```csharp
public object IsCumulativeGraph { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.internalValue"></a>

```csharp
public MeteringComputationQueryQueryDefinitionCostAnalysisUi InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi">MeteringComputationQueryQueryDefinitionCostAnalysisUi</a>

---


### MeteringComputationQueryQueryDefinitionOutputReference <a name="MeteringComputationQueryQueryDefinitionOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MeteringComputationQueryQueryDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.putCostAnalysisUi">PutCostAnalysisUi</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.putReportQuery">PutReportQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCostAnalysisUi` <a name="PutCostAnalysisUi" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.putCostAnalysisUi"></a>

```csharp
private void PutCostAnalysisUi(MeteringComputationQueryQueryDefinitionCostAnalysisUi Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.putCostAnalysisUi.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi">MeteringComputationQueryQueryDefinitionCostAnalysisUi</a>

---

##### `PutReportQuery` <a name="PutReportQuery" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.putReportQuery"></a>

```csharp
private void PutReportQuery(MeteringComputationQueryQueryDefinitionReportQuery Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.putReportQuery.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery">MeteringComputationQueryQueryDefinitionReportQuery</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.costAnalysisUi">CostAnalysisUi</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference">MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.reportQuery">ReportQuery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference">MeteringComputationQueryQueryDefinitionReportQueryOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.costAnalysisUiInput">CostAnalysisUiInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi">MeteringComputationQueryQueryDefinitionCostAnalysisUi</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.reportQueryInput">ReportQueryInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery">MeteringComputationQueryQueryDefinitionReportQuery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.versionInput">VersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition">MeteringComputationQueryQueryDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CostAnalysisUi`<sup>Required</sup> <a name="CostAnalysisUi" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.costAnalysisUi"></a>

```csharp
public MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference CostAnalysisUi { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference">MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference</a>

---

##### `ReportQuery`<sup>Required</sup> <a name="ReportQuery" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.reportQuery"></a>

```csharp
public MeteringComputationQueryQueryDefinitionReportQueryOutputReference ReportQuery { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference">MeteringComputationQueryQueryDefinitionReportQueryOutputReference</a>

---

##### `CostAnalysisUiInput`<sup>Optional</sup> <a name="CostAnalysisUiInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.costAnalysisUiInput"></a>

```csharp
public MeteringComputationQueryQueryDefinitionCostAnalysisUi CostAnalysisUiInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi">MeteringComputationQueryQueryDefinitionCostAnalysisUi</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ReportQueryInput`<sup>Optional</sup> <a name="ReportQueryInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.reportQueryInput"></a>

```csharp
public MeteringComputationQueryQueryDefinitionReportQuery ReportQueryInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery">MeteringComputationQueryQueryDefinitionReportQuery</a>

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.versionInput"></a>

```csharp
public double VersionInput { get; }
```

- *Type:* double

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.internalValue"></a>

```csharp
public MeteringComputationQueryQueryDefinition InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition">MeteringComputationQueryQueryDefinition</a>

---


### MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference <a name="MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.resetForecastType">ResetForecastType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.resetTimeForecastStarted">ResetTimeForecastStarted</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetForecastType` <a name="ResetForecastType" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.resetForecastType"></a>

```csharp
private void ResetForecastType()
```

##### `ResetTimeForecastStarted` <a name="ResetTimeForecastStarted" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.resetTimeForecastStarted"></a>

```csharp
private void ResetTimeForecastStarted()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.forecastTypeInput">ForecastTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.timeForecastEndedInput">TimeForecastEndedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.timeForecastStartedInput">TimeForecastStartedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.forecastType">ForecastType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.timeForecastEnded">TimeForecastEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.timeForecastStarted">TimeForecastStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast">MeteringComputationQueryQueryDefinitionReportQueryForecast</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ForecastTypeInput`<sup>Optional</sup> <a name="ForecastTypeInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.forecastTypeInput"></a>

```csharp
public string ForecastTypeInput { get; }
```

- *Type:* string

---

##### `TimeForecastEndedInput`<sup>Optional</sup> <a name="TimeForecastEndedInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.timeForecastEndedInput"></a>

```csharp
public string TimeForecastEndedInput { get; }
```

- *Type:* string

---

##### `TimeForecastStartedInput`<sup>Optional</sup> <a name="TimeForecastStartedInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.timeForecastStartedInput"></a>

```csharp
public string TimeForecastStartedInput { get; }
```

- *Type:* string

---

##### `ForecastType`<sup>Required</sup> <a name="ForecastType" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.forecastType"></a>

```csharp
public string ForecastType { get; }
```

- *Type:* string

---

##### `TimeForecastEnded`<sup>Required</sup> <a name="TimeForecastEnded" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.timeForecastEnded"></a>

```csharp
public string TimeForecastEnded { get; }
```

- *Type:* string

---

##### `TimeForecastStarted`<sup>Required</sup> <a name="TimeForecastStarted" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.timeForecastStarted"></a>

```csharp
public string TimeForecastStarted { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.internalValue"></a>

```csharp
public MeteringComputationQueryQueryDefinitionReportQueryForecast InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast">MeteringComputationQueryQueryDefinitionReportQueryForecast</a>

---


### MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList <a name="MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.get"></a>

```csharp
private MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference <a name="MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetNamespace` <a name="ResetNamespace" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MeteringComputationQueryQueryDefinitionReportQueryOutputReference <a name="MeteringComputationQueryQueryDefinitionReportQueryOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MeteringComputationQueryQueryDefinitionReportQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.putForecast">PutForecast</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.putGroupByTag">PutGroupByTag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetCompartmentDepth">ResetCompartmentDepth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetDateRangeName">ResetDateRangeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetForecast">ResetForecast</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetGroupBy">ResetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetGroupByTag">ResetGroupByTag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetIsAggregateByTime">ResetIsAggregateByTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetQueryType">ResetQueryType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetTimeUsageEnded">ResetTimeUsageEnded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetTimeUsageStarted">ResetTimeUsageStarted</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutForecast` <a name="PutForecast" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.putForecast"></a>

```csharp
private void PutForecast(MeteringComputationQueryQueryDefinitionReportQueryForecast Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.putForecast.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast">MeteringComputationQueryQueryDefinitionReportQueryForecast</a>

---

##### `PutGroupByTag` <a name="PutGroupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.putGroupByTag"></a>

```csharp
private void PutGroupByTag(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.putGroupByTag.parameter.value"></a>

- *Type:* object

---

##### `ResetCompartmentDepth` <a name="ResetCompartmentDepth" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetCompartmentDepth"></a>

```csharp
private void ResetCompartmentDepth()
```

##### `ResetDateRangeName` <a name="ResetDateRangeName" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetDateRangeName"></a>

```csharp
private void ResetDateRangeName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetForecast` <a name="ResetForecast" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetForecast"></a>

```csharp
private void ResetForecast()
```

##### `ResetGroupBy` <a name="ResetGroupBy" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetGroupBy"></a>

```csharp
private void ResetGroupBy()
```

##### `ResetGroupByTag` <a name="ResetGroupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetGroupByTag"></a>

```csharp
private void ResetGroupByTag()
```

##### `ResetIsAggregateByTime` <a name="ResetIsAggregateByTime" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetIsAggregateByTime"></a>

```csharp
private void ResetIsAggregateByTime()
```

##### `ResetQueryType` <a name="ResetQueryType" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetQueryType"></a>

```csharp
private void ResetQueryType()
```

##### `ResetTimeUsageEnded` <a name="ResetTimeUsageEnded" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetTimeUsageEnded"></a>

```csharp
private void ResetTimeUsageEnded()
```

##### `ResetTimeUsageStarted` <a name="ResetTimeUsageStarted" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetTimeUsageStarted"></a>

```csharp
private void ResetTimeUsageStarted()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.forecast">Forecast</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference">MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.groupByTag">GroupByTag</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList">MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.compartmentDepthInput">CompartmentDepthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.dateRangeNameInput">DateRangeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.forecastInput">ForecastInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast">MeteringComputationQueryQueryDefinitionReportQueryForecast</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.granularityInput">GranularityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.groupByInput">GroupByInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.groupByTagInput">GroupByTagInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.isAggregateByTimeInput">IsAggregateByTimeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.queryTypeInput">QueryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.timeUsageEndedInput">TimeUsageEndedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.timeUsageStartedInput">TimeUsageStartedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.compartmentDepth">CompartmentDepth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.dateRangeName">DateRangeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.granularity">Granularity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.groupBy">GroupBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.isAggregateByTime">IsAggregateByTime</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.queryType">QueryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.timeUsageEnded">TimeUsageEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.timeUsageStarted">TimeUsageStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery">MeteringComputationQueryQueryDefinitionReportQuery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Forecast`<sup>Required</sup> <a name="Forecast" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.forecast"></a>

```csharp
public MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference Forecast { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference">MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference</a>

---

##### `GroupByTag`<sup>Required</sup> <a name="GroupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.groupByTag"></a>

```csharp
public MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList GroupByTag { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList">MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList</a>

---

##### `CompartmentDepthInput`<sup>Optional</sup> <a name="CompartmentDepthInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.compartmentDepthInput"></a>

```csharp
public double CompartmentDepthInput { get; }
```

- *Type:* double

---

##### `DateRangeNameInput`<sup>Optional</sup> <a name="DateRangeNameInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.dateRangeNameInput"></a>

```csharp
public string DateRangeNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `ForecastInput`<sup>Optional</sup> <a name="ForecastInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.forecastInput"></a>

```csharp
public MeteringComputationQueryQueryDefinitionReportQueryForecast ForecastInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast">MeteringComputationQueryQueryDefinitionReportQueryForecast</a>

---

##### `GranularityInput`<sup>Optional</sup> <a name="GranularityInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.granularityInput"></a>

```csharp
public string GranularityInput { get; }
```

- *Type:* string

---

##### `GroupByInput`<sup>Optional</sup> <a name="GroupByInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.groupByInput"></a>

```csharp
public string[] GroupByInput { get; }
```

- *Type:* string[]

---

##### `GroupByTagInput`<sup>Optional</sup> <a name="GroupByTagInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.groupByTagInput"></a>

```csharp
public object GroupByTagInput { get; }
```

- *Type:* object

---

##### `IsAggregateByTimeInput`<sup>Optional</sup> <a name="IsAggregateByTimeInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.isAggregateByTimeInput"></a>

```csharp
public object IsAggregateByTimeInput { get; }
```

- *Type:* object

---

##### `QueryTypeInput`<sup>Optional</sup> <a name="QueryTypeInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.queryTypeInput"></a>

```csharp
public string QueryTypeInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `TimeUsageEndedInput`<sup>Optional</sup> <a name="TimeUsageEndedInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.timeUsageEndedInput"></a>

```csharp
public string TimeUsageEndedInput { get; }
```

- *Type:* string

---

##### `TimeUsageStartedInput`<sup>Optional</sup> <a name="TimeUsageStartedInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.timeUsageStartedInput"></a>

```csharp
public string TimeUsageStartedInput { get; }
```

- *Type:* string

---

##### `CompartmentDepth`<sup>Required</sup> <a name="CompartmentDepth" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.compartmentDepth"></a>

```csharp
public double CompartmentDepth { get; }
```

- *Type:* double

---

##### `DateRangeName`<sup>Required</sup> <a name="DateRangeName" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.dateRangeName"></a>

```csharp
public string DateRangeName { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Granularity`<sup>Required</sup> <a name="Granularity" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.granularity"></a>

```csharp
public string Granularity { get; }
```

- *Type:* string

---

##### `GroupBy`<sup>Required</sup> <a name="GroupBy" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.groupBy"></a>

```csharp
public string[] GroupBy { get; }
```

- *Type:* string[]

---

##### `IsAggregateByTime`<sup>Required</sup> <a name="IsAggregateByTime" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.isAggregateByTime"></a>

```csharp
public object IsAggregateByTime { get; }
```

- *Type:* object

---

##### `QueryType`<sup>Required</sup> <a name="QueryType" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.queryType"></a>

```csharp
public string QueryType { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `TimeUsageEnded`<sup>Required</sup> <a name="TimeUsageEnded" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.timeUsageEnded"></a>

```csharp
public string TimeUsageEnded { get; }
```

- *Type:* string

---

##### `TimeUsageStarted`<sup>Required</sup> <a name="TimeUsageStarted" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.timeUsageStarted"></a>

```csharp
public string TimeUsageStarted { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.internalValue"></a>

```csharp
public MeteringComputationQueryQueryDefinitionReportQuery InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery">MeteringComputationQueryQueryDefinitionReportQuery</a>

---


### MeteringComputationQueryTimeoutsOutputReference <a name="MeteringComputationQueryTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MeteringComputationQueryTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



