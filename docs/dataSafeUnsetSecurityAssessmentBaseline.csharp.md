# `dataSafeUnsetSecurityAssessmentBaseline` Submodule <a name="`dataSafeUnsetSecurityAssessmentBaseline` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeUnsetSecurityAssessmentBaseline <a name="DataSafeUnsetSecurityAssessmentBaseline" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline oci_data_safe_unset_security_assessment_baseline}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeUnsetSecurityAssessmentBaseline(Construct Scope, string Id, DataSafeUnsetSecurityAssessmentBaselineConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig">DataSafeUnsetSecurityAssessmentBaselineConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig">DataSafeUnsetSecurityAssessmentBaselineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.resetTargetIds">ResetTargetIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.putTimeouts"></a>

```csharp
private void PutTimeouts(DataSafeUnsetSecurityAssessmentBaselineTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts">DataSafeUnsetSecurityAssessmentBaselineTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTargetIds` <a name="ResetTargetIds" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.resetTargetIds"></a>

```csharp
private void ResetTargetIds()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeUnsetSecurityAssessmentBaseline resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeUnsetSecurityAssessmentBaseline.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeUnsetSecurityAssessmentBaseline.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeUnsetSecurityAssessmentBaseline.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeUnsetSecurityAssessmentBaseline.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataSafeUnsetSecurityAssessmentBaseline resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSafeUnsetSecurityAssessmentBaseline to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSafeUnsetSecurityAssessmentBaseline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeUnsetSecurityAssessmentBaseline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference">DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.securityAssessmentIdInput">SecurityAssessmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.targetIdsInput">TargetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.securityAssessmentId">SecurityAssessmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.targetIds">TargetIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.timeouts"></a>

```csharp
public DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference">DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SecurityAssessmentIdInput`<sup>Optional</sup> <a name="SecurityAssessmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.securityAssessmentIdInput"></a>

```csharp
public string SecurityAssessmentIdInput { get; }
```

- *Type:* string

---

##### `TargetIdsInput`<sup>Optional</sup> <a name="TargetIdsInput" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.targetIdsInput"></a>

```csharp
public string[] TargetIdsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SecurityAssessmentId`<sup>Required</sup> <a name="SecurityAssessmentId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.securityAssessmentId"></a>

```csharp
public string SecurityAssessmentId { get; }
```

- *Type:* string

---

##### `TargetIds`<sup>Required</sup> <a name="TargetIds" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.targetIds"></a>

```csharp
public string[] TargetIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeUnsetSecurityAssessmentBaselineConfig <a name="DataSafeUnsetSecurityAssessmentBaselineConfig" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeUnsetSecurityAssessmentBaselineConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string SecurityAssessmentId,
    string Id = null,
    string[] TargetIds = null,
    DataSafeUnsetSecurityAssessmentBaselineTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.securityAssessmentId">SecurityAssessmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#security_assessment_id DataSafeUnsetSecurityAssessmentBaseline#security_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#id DataSafeUnsetSecurityAssessmentBaseline#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.targetIds">TargetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#target_ids DataSafeUnsetSecurityAssessmentBaseline#target_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts">DataSafeUnsetSecurityAssessmentBaselineTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `SecurityAssessmentId`<sup>Required</sup> <a name="SecurityAssessmentId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.securityAssessmentId"></a>

```csharp
public string SecurityAssessmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#security_assessment_id DataSafeUnsetSecurityAssessmentBaseline#security_assessment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#id DataSafeUnsetSecurityAssessmentBaseline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TargetIds`<sup>Optional</sup> <a name="TargetIds" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.targetIds"></a>

```csharp
public string[] TargetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#target_ids DataSafeUnsetSecurityAssessmentBaseline#target_ids}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.timeouts"></a>

```csharp
public DataSafeUnsetSecurityAssessmentBaselineTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts">DataSafeUnsetSecurityAssessmentBaselineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#timeouts DataSafeUnsetSecurityAssessmentBaseline#timeouts}

---

### DataSafeUnsetSecurityAssessmentBaselineTimeouts <a name="DataSafeUnsetSecurityAssessmentBaselineTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeUnsetSecurityAssessmentBaselineTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#create DataSafeUnsetSecurityAssessmentBaseline#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#delete DataSafeUnsetSecurityAssessmentBaseline#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#update DataSafeUnsetSecurityAssessmentBaseline#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#create DataSafeUnsetSecurityAssessmentBaseline#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#delete DataSafeUnsetSecurityAssessmentBaseline#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#update DataSafeUnsetSecurityAssessmentBaseline#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference <a name="DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



