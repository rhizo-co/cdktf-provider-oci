# `dataSafeSetSecurityAssessmentBaselineManagement` Submodule <a name="`dataSafeSetSecurityAssessmentBaselineManagement` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeSetSecurityAssessmentBaselineManagement <a name="DataSafeSetSecurityAssessmentBaselineManagement" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management oci_data_safe_set_security_assessment_baseline_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSetSecurityAssessmentBaselineManagement(Construct Scope, string Id, DataSafeSetSecurityAssessmentBaselineManagementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig">DataSafeSetSecurityAssessmentBaselineManagementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig">DataSafeSetSecurityAssessmentBaselineManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.putTimeouts"></a>

```csharp
private void PutTimeouts(DataSafeSetSecurityAssessmentBaselineManagementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts">DataSafeSetSecurityAssessmentBaselineManagementTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeSetSecurityAssessmentBaselineManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeSetSecurityAssessmentBaselineManagement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeSetSecurityAssessmentBaselineManagement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeSetSecurityAssessmentBaselineManagement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeSetSecurityAssessmentBaselineManagement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataSafeSetSecurityAssessmentBaselineManagement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSafeSetSecurityAssessmentBaselineManagement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSafeSetSecurityAssessmentBaselineManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeSetSecurityAssessmentBaselineManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.assessmentIds">AssessmentIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.securityAssessmentId">SecurityAssessmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference">DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.targetIdInput">TargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AssessmentIds`<sup>Required</sup> <a name="AssessmentIds" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.assessmentIds"></a>

```csharp
public string[] AssessmentIds { get; }
```

- *Type:* string[]

---

##### `SecurityAssessmentId`<sup>Required</sup> <a name="SecurityAssessmentId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.securityAssessmentId"></a>

```csharp
public string SecurityAssessmentId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.timeouts"></a>

```csharp
public DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference">DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.targetIdInput"></a>

```csharp
public string TargetIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeSetSecurityAssessmentBaselineManagementConfig <a name="DataSafeSetSecurityAssessmentBaselineManagementConfig" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSetSecurityAssessmentBaselineManagementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string TargetId,
    string Id = null,
    DataSafeSetSecurityAssessmentBaselineManagementTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#compartment_id DataSafeSetSecurityAssessmentBaselineManagement#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.targetId">TargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#target_id DataSafeSetSecurityAssessmentBaselineManagement#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#id DataSafeSetSecurityAssessmentBaselineManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts">DataSafeSetSecurityAssessmentBaselineManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#compartment_id DataSafeSetSecurityAssessmentBaselineManagement#compartment_id}.

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.targetId"></a>

```csharp
public string TargetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#target_id DataSafeSetSecurityAssessmentBaselineManagement#target_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#id DataSafeSetSecurityAssessmentBaselineManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.timeouts"></a>

```csharp
public DataSafeSetSecurityAssessmentBaselineManagementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts">DataSafeSetSecurityAssessmentBaselineManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#timeouts DataSafeSetSecurityAssessmentBaselineManagement#timeouts}

---

### DataSafeSetSecurityAssessmentBaselineManagementTimeouts <a name="DataSafeSetSecurityAssessmentBaselineManagementTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSetSecurityAssessmentBaselineManagementTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#create DataSafeSetSecurityAssessmentBaselineManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#delete DataSafeSetSecurityAssessmentBaselineManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#update DataSafeSetSecurityAssessmentBaselineManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#create DataSafeSetSecurityAssessmentBaselineManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#delete DataSafeSetSecurityAssessmentBaselineManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#update DataSafeSetSecurityAssessmentBaselineManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference <a name="DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



