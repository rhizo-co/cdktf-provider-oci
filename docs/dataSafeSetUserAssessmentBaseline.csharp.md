# `dataSafeSetUserAssessmentBaseline` Submodule <a name="`dataSafeSetUserAssessmentBaseline` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeSetUserAssessmentBaseline <a name="DataSafeSetUserAssessmentBaseline" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline oci_data_safe_set_user_assessment_baseline}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSetUserAssessmentBaseline(Construct Scope, string Id, DataSafeSetUserAssessmentBaselineConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig">DataSafeSetUserAssessmentBaselineConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig">DataSafeSetUserAssessmentBaselineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.resetAssessmentIds">ResetAssessmentIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.putTimeouts"></a>

```csharp
private void PutTimeouts(DataSafeSetUserAssessmentBaselineTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeouts">DataSafeSetUserAssessmentBaselineTimeouts</a>

---

##### `ResetAssessmentIds` <a name="ResetAssessmentIds" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.resetAssessmentIds"></a>

```csharp
private void ResetAssessmentIds()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeSetUserAssessmentBaseline resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeSetUserAssessmentBaseline.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeSetUserAssessmentBaseline.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeSetUserAssessmentBaseline.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeSetUserAssessmentBaseline.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataSafeSetUserAssessmentBaseline resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSafeSetUserAssessmentBaseline to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSafeSetUserAssessmentBaseline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeSetUserAssessmentBaseline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference">DataSafeSetUserAssessmentBaselineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.assessmentIdsInput">AssessmentIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.userAssessmentIdInput">UserAssessmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.assessmentIds">AssessmentIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.userAssessmentId">UserAssessmentId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.timeouts"></a>

```csharp
public DataSafeSetUserAssessmentBaselineTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference">DataSafeSetUserAssessmentBaselineTimeoutsOutputReference</a>

---

##### `AssessmentIdsInput`<sup>Optional</sup> <a name="AssessmentIdsInput" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.assessmentIdsInput"></a>

```csharp
public string[] AssessmentIdsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UserAssessmentIdInput`<sup>Optional</sup> <a name="UserAssessmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.userAssessmentIdInput"></a>

```csharp
public string UserAssessmentIdInput { get; }
```

- *Type:* string

---

##### `AssessmentIds`<sup>Required</sup> <a name="AssessmentIds" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.assessmentIds"></a>

```csharp
public string[] AssessmentIds { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `UserAssessmentId`<sup>Required</sup> <a name="UserAssessmentId" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.userAssessmentId"></a>

```csharp
public string UserAssessmentId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaseline.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeSetUserAssessmentBaselineConfig <a name="DataSafeSetUserAssessmentBaselineConfig" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSetUserAssessmentBaselineConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string UserAssessmentId,
    string[] AssessmentIds = null,
    string Id = null,
    DataSafeSetUserAssessmentBaselineTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.userAssessmentId">UserAssessmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline#user_assessment_id DataSafeSetUserAssessmentBaseline#user_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.assessmentIds">AssessmentIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline#assessment_ids DataSafeSetUserAssessmentBaseline#assessment_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline#id DataSafeSetUserAssessmentBaseline#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeouts">DataSafeSetUserAssessmentBaselineTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `UserAssessmentId`<sup>Required</sup> <a name="UserAssessmentId" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.userAssessmentId"></a>

```csharp
public string UserAssessmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline#user_assessment_id DataSafeSetUserAssessmentBaseline#user_assessment_id}.

---

##### `AssessmentIds`<sup>Optional</sup> <a name="AssessmentIds" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.assessmentIds"></a>

```csharp
public string[] AssessmentIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline#assessment_ids DataSafeSetUserAssessmentBaseline#assessment_ids}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline#id DataSafeSetUserAssessmentBaseline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineConfig.property.timeouts"></a>

```csharp
public DataSafeSetUserAssessmentBaselineTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeouts">DataSafeSetUserAssessmentBaselineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline#timeouts DataSafeSetUserAssessmentBaseline#timeouts}

---

### DataSafeSetUserAssessmentBaselineTimeouts <a name="DataSafeSetUserAssessmentBaselineTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSetUserAssessmentBaselineTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline#create DataSafeSetUserAssessmentBaseline#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline#delete DataSafeSetUserAssessmentBaseline#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline#update DataSafeSetUserAssessmentBaseline#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline#create DataSafeSetUserAssessmentBaseline#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline#delete DataSafeSetUserAssessmentBaseline#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_user_assessment_baseline#update DataSafeSetUserAssessmentBaseline#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeSetUserAssessmentBaselineTimeoutsOutputReference <a name="DataSafeSetUserAssessmentBaselineTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSetUserAssessmentBaselineTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeSetUserAssessmentBaseline.DataSafeSetUserAssessmentBaselineTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



