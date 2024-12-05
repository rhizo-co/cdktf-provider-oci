# `dataSafeSecurityAssessment` Submodule <a name="`dataSafeSecurityAssessment` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeSecurityAssessment <a name="DataSafeSecurityAssessment" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment oci_data_safe_security_assessment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSecurityAssessment(Construct Scope, string Id, DataSafeSecurityAssessmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig">DataSafeSecurityAssessmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig">DataSafeSecurityAssessmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetIsAssessmentScheduled">ResetIsAssessmentScheduled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.putTimeouts"></a>

```csharp
private void PutTimeouts(DataSafeSecurityAssessmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts">DataSafeSecurityAssessmentTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsAssessmentScheduled` <a name="ResetIsAssessmentScheduled" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetIsAssessmentScheduled"></a>

```csharp
private void ResetIsAssessmentScheduled()
```

##### `ResetSchedule` <a name="ResetSchedule" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetSchedule"></a>

```csharp
private void ResetSchedule()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeSecurityAssessment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeSecurityAssessment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeSecurityAssessment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeSecurityAssessment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeSecurityAssessment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataSafeSecurityAssessment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSafeSecurityAssessment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSafeSecurityAssessment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeSecurityAssessment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.ignoredAssessmentIds">IgnoredAssessmentIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.ignoredTargets">IgnoredTargets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.isBaseline">IsBaseline</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.isDeviatedFromBaseline">IsDeviatedFromBaseline</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.lastComparedBaselineId">LastComparedBaselineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.link">Link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.scheduleSecurityAssessmentId">ScheduleSecurityAssessmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.statistics">Statistics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList">DataSafeSecurityAssessmentStatisticsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.targetIds">TargetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.targetVersion">TargetVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.timeLastAssessed">TimeLastAssessed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference">DataSafeSecurityAssessmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.triggeredBy">TriggeredBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.isAssessmentScheduledInput">IsAssessmentScheduledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.scheduleInput">ScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.targetIdInput">TargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.isAssessmentScheduled">IsAssessmentScheduled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.schedule">Schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IgnoredAssessmentIds`<sup>Required</sup> <a name="IgnoredAssessmentIds" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.ignoredAssessmentIds"></a>

```csharp
public string[] IgnoredAssessmentIds { get; }
```

- *Type:* string[]

---

##### `IgnoredTargets`<sup>Required</sup> <a name="IgnoredTargets" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.ignoredTargets"></a>

```csharp
public string[] IgnoredTargets { get; }
```

- *Type:* string[]

---

##### `IsBaseline`<sup>Required</sup> <a name="IsBaseline" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.isBaseline"></a>

```csharp
public IResolvable IsBaseline { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsDeviatedFromBaseline`<sup>Required</sup> <a name="IsDeviatedFromBaseline" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.isDeviatedFromBaseline"></a>

```csharp
public IResolvable IsDeviatedFromBaseline { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LastComparedBaselineId`<sup>Required</sup> <a name="LastComparedBaselineId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.lastComparedBaselineId"></a>

```csharp
public string LastComparedBaselineId { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Link`<sup>Required</sup> <a name="Link" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.link"></a>

```csharp
public string Link { get; }
```

- *Type:* string

---

##### `ScheduleSecurityAssessmentId`<sup>Required</sup> <a name="ScheduleSecurityAssessmentId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.scheduleSecurityAssessmentId"></a>

```csharp
public string ScheduleSecurityAssessmentId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Statistics`<sup>Required</sup> <a name="Statistics" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.statistics"></a>

```csharp
public DataSafeSecurityAssessmentStatisticsList Statistics { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList">DataSafeSecurityAssessmentStatisticsList</a>

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TargetIds`<sup>Required</sup> <a name="TargetIds" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.targetIds"></a>

```csharp
public string[] TargetIds { get; }
```

- *Type:* string[]

---

##### `TargetVersion`<sup>Required</sup> <a name="TargetVersion" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.targetVersion"></a>

```csharp
public string TargetVersion { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeLastAssessed`<sup>Required</sup> <a name="TimeLastAssessed" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.timeLastAssessed"></a>

```csharp
public string TimeLastAssessed { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.timeouts"></a>

```csharp
public DataSafeSecurityAssessmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference">DataSafeSecurityAssessmentTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `TriggeredBy`<sup>Required</sup> <a name="TriggeredBy" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.triggeredBy"></a>

```csharp
public string TriggeredBy { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsAssessmentScheduledInput`<sup>Optional</sup> <a name="IsAssessmentScheduledInput" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.isAssessmentScheduledInput"></a>

```csharp
public object IsAssessmentScheduledInput { get; }
```

- *Type:* object

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.scheduleInput"></a>

```csharp
public string ScheduleInput { get; }
```

- *Type:* string

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.targetIdInput"></a>

```csharp
public string TargetIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsAssessmentScheduled`<sup>Required</sup> <a name="IsAssessmentScheduled" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.isAssessmentScheduled"></a>

```csharp
public object IsAssessmentScheduled { get; }
```

- *Type:* object

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.schedule"></a>

```csharp
public string Schedule { get; }
```

- *Type:* string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeSecurityAssessmentConfig <a name="DataSafeSecurityAssessmentConfig" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSecurityAssessmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string TargetId,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    object IsAssessmentScheduled = null,
    string Schedule = null,
    DataSafeSecurityAssessmentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#compartment_id DataSafeSecurityAssessment#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.targetId">TargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#target_id DataSafeSecurityAssessment#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#defined_tags DataSafeSecurityAssessment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#description DataSafeSecurityAssessment#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#display_name DataSafeSecurityAssessment#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#freeform_tags DataSafeSecurityAssessment#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#id DataSafeSecurityAssessment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.isAssessmentScheduled">IsAssessmentScheduled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#is_assessment_scheduled DataSafeSecurityAssessment#is_assessment_scheduled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.schedule">Schedule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#schedule DataSafeSecurityAssessment#schedule}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts">DataSafeSecurityAssessmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#compartment_id DataSafeSecurityAssessment#compartment_id}.

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.targetId"></a>

```csharp
public string TargetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#target_id DataSafeSecurityAssessment#target_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#defined_tags DataSafeSecurityAssessment#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#description DataSafeSecurityAssessment#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#display_name DataSafeSecurityAssessment#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#freeform_tags DataSafeSecurityAssessment#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#id DataSafeSecurityAssessment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsAssessmentScheduled`<sup>Optional</sup> <a name="IsAssessmentScheduled" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.isAssessmentScheduled"></a>

```csharp
public object IsAssessmentScheduled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#is_assessment_scheduled DataSafeSecurityAssessment#is_assessment_scheduled}.

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.schedule"></a>

```csharp
public string Schedule { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#schedule DataSafeSecurityAssessment#schedule}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.timeouts"></a>

```csharp
public DataSafeSecurityAssessmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts">DataSafeSecurityAssessmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#timeouts DataSafeSecurityAssessment#timeouts}

---

### DataSafeSecurityAssessmentStatistics <a name="DataSafeSecurityAssessmentStatistics" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatistics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatistics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSecurityAssessmentStatistics {

};
```


### DataSafeSecurityAssessmentStatisticsAdvisory <a name="DataSafeSecurityAssessmentStatisticsAdvisory" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisory"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisory.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSecurityAssessmentStatisticsAdvisory {

};
```


### DataSafeSecurityAssessmentStatisticsDeferred <a name="DataSafeSecurityAssessmentStatisticsDeferred" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferred"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferred.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSecurityAssessmentStatisticsDeferred {

};
```


### DataSafeSecurityAssessmentStatisticsEvaluate <a name="DataSafeSecurityAssessmentStatisticsEvaluate" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSecurityAssessmentStatisticsEvaluate {

};
```


### DataSafeSecurityAssessmentStatisticsHighRisk <a name="DataSafeSecurityAssessmentStatisticsHighRisk" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRisk"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSecurityAssessmentStatisticsHighRisk {

};
```


### DataSafeSecurityAssessmentStatisticsLowRisk <a name="DataSafeSecurityAssessmentStatisticsLowRisk" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRisk"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSecurityAssessmentStatisticsLowRisk {

};
```


### DataSafeSecurityAssessmentStatisticsMediumRisk <a name="DataSafeSecurityAssessmentStatisticsMediumRisk" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRisk"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSecurityAssessmentStatisticsMediumRisk {

};
```


### DataSafeSecurityAssessmentStatisticsPass <a name="DataSafeSecurityAssessmentStatisticsPass" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPass"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPass.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSecurityAssessmentStatisticsPass {

};
```


### DataSafeSecurityAssessmentTimeouts <a name="DataSafeSecurityAssessmentTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSecurityAssessmentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#create DataSafeSecurityAssessment#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#delete DataSafeSecurityAssessment#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#update DataSafeSecurityAssessment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#create DataSafeSecurityAssessment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#delete DataSafeSecurityAssessment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#update DataSafeSecurityAssessment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeSecurityAssessmentStatisticsAdvisoryList <a name="DataSafeSecurityAssessmentStatisticsAdvisoryList" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSecurityAssessmentStatisticsAdvisoryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.get"></a>

```csharp
private DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference <a name="DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.auditingFindingsCount">AuditingFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.authorizationControlFindingsCount">AuthorizationControlFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.dataEncryptionFindingsCount">DataEncryptionFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.dbConfigurationFindingsCount">DbConfigurationFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.fineGrainedAccessControlFindingsCount">FineGrainedAccessControlFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.privilegesAndRolesFindingsCount">PrivilegesAndRolesFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.targetsCount">TargetsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.userAccountsFindingsCount">UserAccountsFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisory">DataSafeSecurityAssessmentStatisticsAdvisory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuditingFindingsCount`<sup>Required</sup> <a name="AuditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.auditingFindingsCount"></a>

```csharp
public double AuditingFindingsCount { get; }
```

- *Type:* double

---

##### `AuthorizationControlFindingsCount`<sup>Required</sup> <a name="AuthorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.authorizationControlFindingsCount"></a>

```csharp
public double AuthorizationControlFindingsCount { get; }
```

- *Type:* double

---

##### `DataEncryptionFindingsCount`<sup>Required</sup> <a name="DataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.dataEncryptionFindingsCount"></a>

```csharp
public double DataEncryptionFindingsCount { get; }
```

- *Type:* double

---

##### `DbConfigurationFindingsCount`<sup>Required</sup> <a name="DbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.dbConfigurationFindingsCount"></a>

```csharp
public double DbConfigurationFindingsCount { get; }
```

- *Type:* double

---

##### `FineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="FineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```csharp
public double FineGrainedAccessControlFindingsCount { get; }
```

- *Type:* double

---

##### `PrivilegesAndRolesFindingsCount`<sup>Required</sup> <a name="PrivilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.privilegesAndRolesFindingsCount"></a>

```csharp
public double PrivilegesAndRolesFindingsCount { get; }
```

- *Type:* double

---

##### `TargetsCount`<sup>Required</sup> <a name="TargetsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.targetsCount"></a>

```csharp
public double TargetsCount { get; }
```

- *Type:* double

---

##### `UserAccountsFindingsCount`<sup>Required</sup> <a name="UserAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.userAccountsFindingsCount"></a>

```csharp
public double UserAccountsFindingsCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.internalValue"></a>

```csharp
public DataSafeSecurityAssessmentStatisticsAdvisory InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisory">DataSafeSecurityAssessmentStatisticsAdvisory</a>

---


### DataSafeSecurityAssessmentStatisticsDeferredList <a name="DataSafeSecurityAssessmentStatisticsDeferredList" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSecurityAssessmentStatisticsDeferredList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.get"></a>

```csharp
private DataSafeSecurityAssessmentStatisticsDeferredOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSafeSecurityAssessmentStatisticsDeferredOutputReference <a name="DataSafeSecurityAssessmentStatisticsDeferredOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSecurityAssessmentStatisticsDeferredOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.auditingFindingsCount">AuditingFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.authorizationControlFindingsCount">AuthorizationControlFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.dataEncryptionFindingsCount">DataEncryptionFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.dbConfigurationFindingsCount">DbConfigurationFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.fineGrainedAccessControlFindingsCount">FineGrainedAccessControlFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.privilegesAndRolesFindingsCount">PrivilegesAndRolesFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.targetsCount">TargetsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.userAccountsFindingsCount">UserAccountsFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferred">DataSafeSecurityAssessmentStatisticsDeferred</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuditingFindingsCount`<sup>Required</sup> <a name="AuditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.auditingFindingsCount"></a>

```csharp
public double AuditingFindingsCount { get; }
```

- *Type:* double

---

##### `AuthorizationControlFindingsCount`<sup>Required</sup> <a name="AuthorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.authorizationControlFindingsCount"></a>

```csharp
public double AuthorizationControlFindingsCount { get; }
```

- *Type:* double

---

##### `DataEncryptionFindingsCount`<sup>Required</sup> <a name="DataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.dataEncryptionFindingsCount"></a>

```csharp
public double DataEncryptionFindingsCount { get; }
```

- *Type:* double

---

##### `DbConfigurationFindingsCount`<sup>Required</sup> <a name="DbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.dbConfigurationFindingsCount"></a>

```csharp
public double DbConfigurationFindingsCount { get; }
```

- *Type:* double

---

##### `FineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="FineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```csharp
public double FineGrainedAccessControlFindingsCount { get; }
```

- *Type:* double

---

##### `PrivilegesAndRolesFindingsCount`<sup>Required</sup> <a name="PrivilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.privilegesAndRolesFindingsCount"></a>

```csharp
public double PrivilegesAndRolesFindingsCount { get; }
```

- *Type:* double

---

##### `TargetsCount`<sup>Required</sup> <a name="TargetsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.targetsCount"></a>

```csharp
public double TargetsCount { get; }
```

- *Type:* double

---

##### `UserAccountsFindingsCount`<sup>Required</sup> <a name="UserAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.userAccountsFindingsCount"></a>

```csharp
public double UserAccountsFindingsCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.internalValue"></a>

```csharp
public DataSafeSecurityAssessmentStatisticsDeferred InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferred">DataSafeSecurityAssessmentStatisticsDeferred</a>

---


### DataSafeSecurityAssessmentStatisticsEvaluateList <a name="DataSafeSecurityAssessmentStatisticsEvaluateList" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSecurityAssessmentStatisticsEvaluateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.get"></a>

```csharp
private DataSafeSecurityAssessmentStatisticsEvaluateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSafeSecurityAssessmentStatisticsEvaluateOutputReference <a name="DataSafeSecurityAssessmentStatisticsEvaluateOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSecurityAssessmentStatisticsEvaluateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.auditingFindingsCount">AuditingFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.authorizationControlFindingsCount">AuthorizationControlFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.dataEncryptionFindingsCount">DataEncryptionFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.dbConfigurationFindingsCount">DbConfigurationFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.fineGrainedAccessControlFindingsCount">FineGrainedAccessControlFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.privilegesAndRolesFindingsCount">PrivilegesAndRolesFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.targetsCount">TargetsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.userAccountsFindingsCount">UserAccountsFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluate">DataSafeSecurityAssessmentStatisticsEvaluate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuditingFindingsCount`<sup>Required</sup> <a name="AuditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.auditingFindingsCount"></a>

```csharp
public double AuditingFindingsCount { get; }
```

- *Type:* double

---

##### `AuthorizationControlFindingsCount`<sup>Required</sup> <a name="AuthorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.authorizationControlFindingsCount"></a>

```csharp
public double AuthorizationControlFindingsCount { get; }
```

- *Type:* double

---

##### `DataEncryptionFindingsCount`<sup>Required</sup> <a name="DataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.dataEncryptionFindingsCount"></a>

```csharp
public double DataEncryptionFindingsCount { get; }
```

- *Type:* double

---

##### `DbConfigurationFindingsCount`<sup>Required</sup> <a name="DbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.dbConfigurationFindingsCount"></a>

```csharp
public double DbConfigurationFindingsCount { get; }
```

- *Type:* double

---

##### `FineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="FineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```csharp
public double FineGrainedAccessControlFindingsCount { get; }
```

- *Type:* double

---

##### `PrivilegesAndRolesFindingsCount`<sup>Required</sup> <a name="PrivilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.privilegesAndRolesFindingsCount"></a>

```csharp
public double PrivilegesAndRolesFindingsCount { get; }
```

- *Type:* double

---

##### `TargetsCount`<sup>Required</sup> <a name="TargetsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.targetsCount"></a>

```csharp
public double TargetsCount { get; }
```

- *Type:* double

---

##### `UserAccountsFindingsCount`<sup>Required</sup> <a name="UserAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.userAccountsFindingsCount"></a>

```csharp
public double UserAccountsFindingsCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.internalValue"></a>

```csharp
public DataSafeSecurityAssessmentStatisticsEvaluate InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluate">DataSafeSecurityAssessmentStatisticsEvaluate</a>

---


### DataSafeSecurityAssessmentStatisticsHighRiskList <a name="DataSafeSecurityAssessmentStatisticsHighRiskList" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSecurityAssessmentStatisticsHighRiskList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.get"></a>

```csharp
private DataSafeSecurityAssessmentStatisticsHighRiskOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSafeSecurityAssessmentStatisticsHighRiskOutputReference <a name="DataSafeSecurityAssessmentStatisticsHighRiskOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSecurityAssessmentStatisticsHighRiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.auditingFindingsCount">AuditingFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.authorizationControlFindingsCount">AuthorizationControlFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.dataEncryptionFindingsCount">DataEncryptionFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.dbConfigurationFindingsCount">DbConfigurationFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.fineGrainedAccessControlFindingsCount">FineGrainedAccessControlFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.privilegesAndRolesFindingsCount">PrivilegesAndRolesFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.targetsCount">TargetsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.userAccountsFindingsCount">UserAccountsFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRisk">DataSafeSecurityAssessmentStatisticsHighRisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuditingFindingsCount`<sup>Required</sup> <a name="AuditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.auditingFindingsCount"></a>

```csharp
public double AuditingFindingsCount { get; }
```

- *Type:* double

---

##### `AuthorizationControlFindingsCount`<sup>Required</sup> <a name="AuthorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.authorizationControlFindingsCount"></a>

```csharp
public double AuthorizationControlFindingsCount { get; }
```

- *Type:* double

---

##### `DataEncryptionFindingsCount`<sup>Required</sup> <a name="DataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.dataEncryptionFindingsCount"></a>

```csharp
public double DataEncryptionFindingsCount { get; }
```

- *Type:* double

---

##### `DbConfigurationFindingsCount`<sup>Required</sup> <a name="DbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.dbConfigurationFindingsCount"></a>

```csharp
public double DbConfigurationFindingsCount { get; }
```

- *Type:* double

---

##### `FineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="FineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```csharp
public double FineGrainedAccessControlFindingsCount { get; }
```

- *Type:* double

---

##### `PrivilegesAndRolesFindingsCount`<sup>Required</sup> <a name="PrivilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.privilegesAndRolesFindingsCount"></a>

```csharp
public double PrivilegesAndRolesFindingsCount { get; }
```

- *Type:* double

---

##### `TargetsCount`<sup>Required</sup> <a name="TargetsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.targetsCount"></a>

```csharp
public double TargetsCount { get; }
```

- *Type:* double

---

##### `UserAccountsFindingsCount`<sup>Required</sup> <a name="UserAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.userAccountsFindingsCount"></a>

```csharp
public double UserAccountsFindingsCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.internalValue"></a>

```csharp
public DataSafeSecurityAssessmentStatisticsHighRisk InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRisk">DataSafeSecurityAssessmentStatisticsHighRisk</a>

---


### DataSafeSecurityAssessmentStatisticsList <a name="DataSafeSecurityAssessmentStatisticsList" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSecurityAssessmentStatisticsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.get"></a>

```csharp
private DataSafeSecurityAssessmentStatisticsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSafeSecurityAssessmentStatisticsLowRiskList <a name="DataSafeSecurityAssessmentStatisticsLowRiskList" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSecurityAssessmentStatisticsLowRiskList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.get"></a>

```csharp
private DataSafeSecurityAssessmentStatisticsLowRiskOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSafeSecurityAssessmentStatisticsLowRiskOutputReference <a name="DataSafeSecurityAssessmentStatisticsLowRiskOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSecurityAssessmentStatisticsLowRiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.auditingFindingsCount">AuditingFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.authorizationControlFindingsCount">AuthorizationControlFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.dataEncryptionFindingsCount">DataEncryptionFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.dbConfigurationFindingsCount">DbConfigurationFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.fineGrainedAccessControlFindingsCount">FineGrainedAccessControlFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.privilegesAndRolesFindingsCount">PrivilegesAndRolesFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.targetsCount">TargetsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.userAccountsFindingsCount">UserAccountsFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRisk">DataSafeSecurityAssessmentStatisticsLowRisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuditingFindingsCount`<sup>Required</sup> <a name="AuditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.auditingFindingsCount"></a>

```csharp
public double AuditingFindingsCount { get; }
```

- *Type:* double

---

##### `AuthorizationControlFindingsCount`<sup>Required</sup> <a name="AuthorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.authorizationControlFindingsCount"></a>

```csharp
public double AuthorizationControlFindingsCount { get; }
```

- *Type:* double

---

##### `DataEncryptionFindingsCount`<sup>Required</sup> <a name="DataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.dataEncryptionFindingsCount"></a>

```csharp
public double DataEncryptionFindingsCount { get; }
```

- *Type:* double

---

##### `DbConfigurationFindingsCount`<sup>Required</sup> <a name="DbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.dbConfigurationFindingsCount"></a>

```csharp
public double DbConfigurationFindingsCount { get; }
```

- *Type:* double

---

##### `FineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="FineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```csharp
public double FineGrainedAccessControlFindingsCount { get; }
```

- *Type:* double

---

##### `PrivilegesAndRolesFindingsCount`<sup>Required</sup> <a name="PrivilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.privilegesAndRolesFindingsCount"></a>

```csharp
public double PrivilegesAndRolesFindingsCount { get; }
```

- *Type:* double

---

##### `TargetsCount`<sup>Required</sup> <a name="TargetsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.targetsCount"></a>

```csharp
public double TargetsCount { get; }
```

- *Type:* double

---

##### `UserAccountsFindingsCount`<sup>Required</sup> <a name="UserAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.userAccountsFindingsCount"></a>

```csharp
public double UserAccountsFindingsCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.internalValue"></a>

```csharp
public DataSafeSecurityAssessmentStatisticsLowRisk InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRisk">DataSafeSecurityAssessmentStatisticsLowRisk</a>

---


### DataSafeSecurityAssessmentStatisticsMediumRiskList <a name="DataSafeSecurityAssessmentStatisticsMediumRiskList" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSecurityAssessmentStatisticsMediumRiskList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.get"></a>

```csharp
private DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference <a name="DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.auditingFindingsCount">AuditingFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.authorizationControlFindingsCount">AuthorizationControlFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.dataEncryptionFindingsCount">DataEncryptionFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.dbConfigurationFindingsCount">DbConfigurationFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.fineGrainedAccessControlFindingsCount">FineGrainedAccessControlFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.privilegesAndRolesFindingsCount">PrivilegesAndRolesFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.targetsCount">TargetsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.userAccountsFindingsCount">UserAccountsFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRisk">DataSafeSecurityAssessmentStatisticsMediumRisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuditingFindingsCount`<sup>Required</sup> <a name="AuditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.auditingFindingsCount"></a>

```csharp
public double AuditingFindingsCount { get; }
```

- *Type:* double

---

##### `AuthorizationControlFindingsCount`<sup>Required</sup> <a name="AuthorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.authorizationControlFindingsCount"></a>

```csharp
public double AuthorizationControlFindingsCount { get; }
```

- *Type:* double

---

##### `DataEncryptionFindingsCount`<sup>Required</sup> <a name="DataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.dataEncryptionFindingsCount"></a>

```csharp
public double DataEncryptionFindingsCount { get; }
```

- *Type:* double

---

##### `DbConfigurationFindingsCount`<sup>Required</sup> <a name="DbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.dbConfigurationFindingsCount"></a>

```csharp
public double DbConfigurationFindingsCount { get; }
```

- *Type:* double

---

##### `FineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="FineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```csharp
public double FineGrainedAccessControlFindingsCount { get; }
```

- *Type:* double

---

##### `PrivilegesAndRolesFindingsCount`<sup>Required</sup> <a name="PrivilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.privilegesAndRolesFindingsCount"></a>

```csharp
public double PrivilegesAndRolesFindingsCount { get; }
```

- *Type:* double

---

##### `TargetsCount`<sup>Required</sup> <a name="TargetsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.targetsCount"></a>

```csharp
public double TargetsCount { get; }
```

- *Type:* double

---

##### `UserAccountsFindingsCount`<sup>Required</sup> <a name="UserAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.userAccountsFindingsCount"></a>

```csharp
public double UserAccountsFindingsCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.internalValue"></a>

```csharp
public DataSafeSecurityAssessmentStatisticsMediumRisk InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRisk">DataSafeSecurityAssessmentStatisticsMediumRisk</a>

---


### DataSafeSecurityAssessmentStatisticsOutputReference <a name="DataSafeSecurityAssessmentStatisticsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSecurityAssessmentStatisticsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.advisory">Advisory</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList">DataSafeSecurityAssessmentStatisticsAdvisoryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.deferred">Deferred</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList">DataSafeSecurityAssessmentStatisticsDeferredList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.evaluate">Evaluate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList">DataSafeSecurityAssessmentStatisticsEvaluateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.highRisk">HighRisk</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList">DataSafeSecurityAssessmentStatisticsHighRiskList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.lowRisk">LowRisk</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList">DataSafeSecurityAssessmentStatisticsLowRiskList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.mediumRisk">MediumRisk</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList">DataSafeSecurityAssessmentStatisticsMediumRiskList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.pass">Pass</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList">DataSafeSecurityAssessmentStatisticsPassList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.targetsCount">TargetsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatistics">DataSafeSecurityAssessmentStatistics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Advisory`<sup>Required</sup> <a name="Advisory" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.advisory"></a>

```csharp
public DataSafeSecurityAssessmentStatisticsAdvisoryList Advisory { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList">DataSafeSecurityAssessmentStatisticsAdvisoryList</a>

---

##### `Deferred`<sup>Required</sup> <a name="Deferred" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.deferred"></a>

```csharp
public DataSafeSecurityAssessmentStatisticsDeferredList Deferred { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList">DataSafeSecurityAssessmentStatisticsDeferredList</a>

---

##### `Evaluate`<sup>Required</sup> <a name="Evaluate" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.evaluate"></a>

```csharp
public DataSafeSecurityAssessmentStatisticsEvaluateList Evaluate { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList">DataSafeSecurityAssessmentStatisticsEvaluateList</a>

---

##### `HighRisk`<sup>Required</sup> <a name="HighRisk" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.highRisk"></a>

```csharp
public DataSafeSecurityAssessmentStatisticsHighRiskList HighRisk { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList">DataSafeSecurityAssessmentStatisticsHighRiskList</a>

---

##### `LowRisk`<sup>Required</sup> <a name="LowRisk" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.lowRisk"></a>

```csharp
public DataSafeSecurityAssessmentStatisticsLowRiskList LowRisk { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList">DataSafeSecurityAssessmentStatisticsLowRiskList</a>

---

##### `MediumRisk`<sup>Required</sup> <a name="MediumRisk" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.mediumRisk"></a>

```csharp
public DataSafeSecurityAssessmentStatisticsMediumRiskList MediumRisk { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList">DataSafeSecurityAssessmentStatisticsMediumRiskList</a>

---

##### `Pass`<sup>Required</sup> <a name="Pass" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.pass"></a>

```csharp
public DataSafeSecurityAssessmentStatisticsPassList Pass { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList">DataSafeSecurityAssessmentStatisticsPassList</a>

---

##### `TargetsCount`<sup>Required</sup> <a name="TargetsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.targetsCount"></a>

```csharp
public double TargetsCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.internalValue"></a>

```csharp
public DataSafeSecurityAssessmentStatistics InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatistics">DataSafeSecurityAssessmentStatistics</a>

---


### DataSafeSecurityAssessmentStatisticsPassList <a name="DataSafeSecurityAssessmentStatisticsPassList" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSecurityAssessmentStatisticsPassList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.get"></a>

```csharp
private DataSafeSecurityAssessmentStatisticsPassOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSafeSecurityAssessmentStatisticsPassOutputReference <a name="DataSafeSecurityAssessmentStatisticsPassOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSecurityAssessmentStatisticsPassOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.auditingFindingsCount">AuditingFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.authorizationControlFindingsCount">AuthorizationControlFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.dataEncryptionFindingsCount">DataEncryptionFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.dbConfigurationFindingsCount">DbConfigurationFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.fineGrainedAccessControlFindingsCount">FineGrainedAccessControlFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.privilegesAndRolesFindingsCount">PrivilegesAndRolesFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.targetsCount">TargetsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.userAccountsFindingsCount">UserAccountsFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPass">DataSafeSecurityAssessmentStatisticsPass</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuditingFindingsCount`<sup>Required</sup> <a name="AuditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.auditingFindingsCount"></a>

```csharp
public double AuditingFindingsCount { get; }
```

- *Type:* double

---

##### `AuthorizationControlFindingsCount`<sup>Required</sup> <a name="AuthorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.authorizationControlFindingsCount"></a>

```csharp
public double AuthorizationControlFindingsCount { get; }
```

- *Type:* double

---

##### `DataEncryptionFindingsCount`<sup>Required</sup> <a name="DataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.dataEncryptionFindingsCount"></a>

```csharp
public double DataEncryptionFindingsCount { get; }
```

- *Type:* double

---

##### `DbConfigurationFindingsCount`<sup>Required</sup> <a name="DbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.dbConfigurationFindingsCount"></a>

```csharp
public double DbConfigurationFindingsCount { get; }
```

- *Type:* double

---

##### `FineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="FineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```csharp
public double FineGrainedAccessControlFindingsCount { get; }
```

- *Type:* double

---

##### `PrivilegesAndRolesFindingsCount`<sup>Required</sup> <a name="PrivilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.privilegesAndRolesFindingsCount"></a>

```csharp
public double PrivilegesAndRolesFindingsCount { get; }
```

- *Type:* double

---

##### `TargetsCount`<sup>Required</sup> <a name="TargetsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.targetsCount"></a>

```csharp
public double TargetsCount { get; }
```

- *Type:* double

---

##### `UserAccountsFindingsCount`<sup>Required</sup> <a name="UserAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.userAccountsFindingsCount"></a>

```csharp
public double UserAccountsFindingsCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.internalValue"></a>

```csharp
public DataSafeSecurityAssessmentStatisticsPass InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPass">DataSafeSecurityAssessmentStatisticsPass</a>

---


### DataSafeSecurityAssessmentTimeoutsOutputReference <a name="DataSafeSecurityAssessmentTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSecurityAssessmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



