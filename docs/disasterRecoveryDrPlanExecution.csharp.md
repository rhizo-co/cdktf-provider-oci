# `disasterRecoveryDrPlanExecution` Submodule <a name="`disasterRecoveryDrPlanExecution` Submodule" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DisasterRecoveryDrPlanExecution <a name="DisasterRecoveryDrPlanExecution" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution oci_disaster_recovery_dr_plan_execution}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrPlanExecution(Construct Scope, string Id, DisasterRecoveryDrPlanExecutionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig">DisasterRecoveryDrPlanExecutionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig">DisasterRecoveryDrPlanExecutionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.putExecutionOptions">PutExecutionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExecutionOptions` <a name="PutExecutionOptions" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.putExecutionOptions"></a>

```csharp
private void PutExecutionOptions(DisasterRecoveryDrPlanExecutionExecutionOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.putExecutionOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions">DisasterRecoveryDrPlanExecutionExecutionOptions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.putTimeouts"></a>

```csharp
private void PutTimeouts(DisasterRecoveryDrPlanExecutionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts">DisasterRecoveryDrPlanExecutionTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DisasterRecoveryDrPlanExecution resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DisasterRecoveryDrPlanExecution.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DisasterRecoveryDrPlanExecution.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DisasterRecoveryDrPlanExecution.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DisasterRecoveryDrPlanExecution.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DisasterRecoveryDrPlanExecution resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DisasterRecoveryDrPlanExecution to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DisasterRecoveryDrPlanExecution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DisasterRecoveryDrPlanExecution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.drProtectionGroupId">DrProtectionGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.executionDurationInSec">ExecutionDurationInSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.executionOptions">ExecutionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference">DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.groupExecutions">GroupExecutions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList">DisasterRecoveryDrPlanExecutionGroupExecutionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.lifeCycleDetails">LifeCycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.logLocation">LogLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList">DisasterRecoveryDrPlanExecutionLogLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.peerDrProtectionGroupId">PeerDrProtectionGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.peerRegion">PeerRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.planExecutionType">PlanExecutionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.timeEnded">TimeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference">DisasterRecoveryDrPlanExecutionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.timeStarted">TimeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.executionOptionsInput">ExecutionOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions">DisasterRecoveryDrPlanExecutionExecutionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.planIdInput">PlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.planId">PlanId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DrProtectionGroupId`<sup>Required</sup> <a name="DrProtectionGroupId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.drProtectionGroupId"></a>

```csharp
public string DrProtectionGroupId { get; }
```

- *Type:* string

---

##### `ExecutionDurationInSec`<sup>Required</sup> <a name="ExecutionDurationInSec" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.executionDurationInSec"></a>

```csharp
public double ExecutionDurationInSec { get; }
```

- *Type:* double

---

##### `ExecutionOptions`<sup>Required</sup> <a name="ExecutionOptions" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.executionOptions"></a>

```csharp
public DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference ExecutionOptions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference">DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference</a>

---

##### `GroupExecutions`<sup>Required</sup> <a name="GroupExecutions" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.groupExecutions"></a>

```csharp
public DisasterRecoveryDrPlanExecutionGroupExecutionsList GroupExecutions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList">DisasterRecoveryDrPlanExecutionGroupExecutionsList</a>

---

##### `LifeCycleDetails`<sup>Required</sup> <a name="LifeCycleDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.lifeCycleDetails"></a>

```csharp
public string LifeCycleDetails { get; }
```

- *Type:* string

---

##### `LogLocation`<sup>Required</sup> <a name="LogLocation" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.logLocation"></a>

```csharp
public DisasterRecoveryDrPlanExecutionLogLocationList LogLocation { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList">DisasterRecoveryDrPlanExecutionLogLocationList</a>

---

##### `PeerDrProtectionGroupId`<sup>Required</sup> <a name="PeerDrProtectionGroupId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.peerDrProtectionGroupId"></a>

```csharp
public string PeerDrProtectionGroupId { get; }
```

- *Type:* string

---

##### `PeerRegion`<sup>Required</sup> <a name="PeerRegion" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.peerRegion"></a>

```csharp
public string PeerRegion { get; }
```

- *Type:* string

---

##### `PlanExecutionType`<sup>Required</sup> <a name="PlanExecutionType" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.planExecutionType"></a>

```csharp
public string PlanExecutionType { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.timeEnded"></a>

```csharp
public string TimeEnded { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.timeouts"></a>

```csharp
public DisasterRecoveryDrPlanExecutionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference">DisasterRecoveryDrPlanExecutionTimeoutsOutputReference</a>

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.timeStarted"></a>

```csharp
public string TimeStarted { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ExecutionOptionsInput`<sup>Optional</sup> <a name="ExecutionOptionsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.executionOptionsInput"></a>

```csharp
public DisasterRecoveryDrPlanExecutionExecutionOptions ExecutionOptionsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions">DisasterRecoveryDrPlanExecutionExecutionOptions</a>

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PlanIdInput`<sup>Optional</sup> <a name="PlanIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.planIdInput"></a>

```csharp
public string PlanIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PlanId`<sup>Required</sup> <a name="PlanId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.planId"></a>

```csharp
public string PlanId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DisasterRecoveryDrPlanExecutionConfig <a name="DisasterRecoveryDrPlanExecutionConfig" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrPlanExecutionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    DisasterRecoveryDrPlanExecutionExecutionOptions ExecutionOptions,
    string PlanId,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    DisasterRecoveryDrPlanExecutionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.executionOptions">ExecutionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions">DisasterRecoveryDrPlanExecutionExecutionOptions</a></code> | execution_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.planId">PlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#plan_id DisasterRecoveryDrPlanExecution#plan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#defined_tags DisasterRecoveryDrPlanExecution#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#display_name DisasterRecoveryDrPlanExecution#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#freeform_tags DisasterRecoveryDrPlanExecution#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#id DisasterRecoveryDrPlanExecution#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts">DisasterRecoveryDrPlanExecutionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ExecutionOptions`<sup>Required</sup> <a name="ExecutionOptions" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.executionOptions"></a>

```csharp
public DisasterRecoveryDrPlanExecutionExecutionOptions ExecutionOptions { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions">DisasterRecoveryDrPlanExecutionExecutionOptions</a>

execution_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#execution_options DisasterRecoveryDrPlanExecution#execution_options}

---

##### `PlanId`<sup>Required</sup> <a name="PlanId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.planId"></a>

```csharp
public string PlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#plan_id DisasterRecoveryDrPlanExecution#plan_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#defined_tags DisasterRecoveryDrPlanExecution#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#display_name DisasterRecoveryDrPlanExecution#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#freeform_tags DisasterRecoveryDrPlanExecution#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#id DisasterRecoveryDrPlanExecution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.timeouts"></a>

```csharp
public DisasterRecoveryDrPlanExecutionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts">DisasterRecoveryDrPlanExecutionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#timeouts DisasterRecoveryDrPlanExecution#timeouts}

---

### DisasterRecoveryDrPlanExecutionExecutionOptions <a name="DisasterRecoveryDrPlanExecutionExecutionOptions" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrPlanExecutionExecutionOptions {
    string PlanExecutionType,
    object ArePrechecksEnabled = null,
    object AreWarningsIgnored = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions.property.planExecutionType">PlanExecutionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#plan_execution_type DisasterRecoveryDrPlanExecution#plan_execution_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions.property.arePrechecksEnabled">ArePrechecksEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#are_prechecks_enabled DisasterRecoveryDrPlanExecution#are_prechecks_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions.property.areWarningsIgnored">AreWarningsIgnored</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#are_warnings_ignored DisasterRecoveryDrPlanExecution#are_warnings_ignored}. |

---

##### `PlanExecutionType`<sup>Required</sup> <a name="PlanExecutionType" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions.property.planExecutionType"></a>

```csharp
public string PlanExecutionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#plan_execution_type DisasterRecoveryDrPlanExecution#plan_execution_type}.

---

##### `ArePrechecksEnabled`<sup>Optional</sup> <a name="ArePrechecksEnabled" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions.property.arePrechecksEnabled"></a>

```csharp
public object ArePrechecksEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#are_prechecks_enabled DisasterRecoveryDrPlanExecution#are_prechecks_enabled}.

---

##### `AreWarningsIgnored`<sup>Optional</sup> <a name="AreWarningsIgnored" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions.property.areWarningsIgnored"></a>

```csharp
public object AreWarningsIgnored { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#are_warnings_ignored DisasterRecoveryDrPlanExecution#are_warnings_ignored}.

---

### DisasterRecoveryDrPlanExecutionGroupExecutions <a name="DisasterRecoveryDrPlanExecutionGroupExecutions" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrPlanExecutionGroupExecutions {

};
```


### DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions <a name="DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions {

};
```


### DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation <a name="DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation {

};
```


### DisasterRecoveryDrPlanExecutionLogLocation <a name="DisasterRecoveryDrPlanExecutionLogLocation" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrPlanExecutionLogLocation {

};
```


### DisasterRecoveryDrPlanExecutionTimeouts <a name="DisasterRecoveryDrPlanExecutionTimeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrPlanExecutionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#create DisasterRecoveryDrPlanExecution#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#delete DisasterRecoveryDrPlanExecution#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#update DisasterRecoveryDrPlanExecution#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#create DisasterRecoveryDrPlanExecution#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#delete DisasterRecoveryDrPlanExecution#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#update DisasterRecoveryDrPlanExecution#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference <a name="DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.resetArePrechecksEnabled">ResetArePrechecksEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.resetAreWarningsIgnored">ResetAreWarningsIgnored</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArePrechecksEnabled` <a name="ResetArePrechecksEnabled" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.resetArePrechecksEnabled"></a>

```csharp
private void ResetArePrechecksEnabled()
```

##### `ResetAreWarningsIgnored` <a name="ResetAreWarningsIgnored" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.resetAreWarningsIgnored"></a>

```csharp
private void ResetAreWarningsIgnored()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.arePrechecksEnabledInput">ArePrechecksEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.areWarningsIgnoredInput">AreWarningsIgnoredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.planExecutionTypeInput">PlanExecutionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.arePrechecksEnabled">ArePrechecksEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.areWarningsIgnored">AreWarningsIgnored</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.planExecutionType">PlanExecutionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions">DisasterRecoveryDrPlanExecutionExecutionOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArePrechecksEnabledInput`<sup>Optional</sup> <a name="ArePrechecksEnabledInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.arePrechecksEnabledInput"></a>

```csharp
public object ArePrechecksEnabledInput { get; }
```

- *Type:* object

---

##### `AreWarningsIgnoredInput`<sup>Optional</sup> <a name="AreWarningsIgnoredInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.areWarningsIgnoredInput"></a>

```csharp
public object AreWarningsIgnoredInput { get; }
```

- *Type:* object

---

##### `PlanExecutionTypeInput`<sup>Optional</sup> <a name="PlanExecutionTypeInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.planExecutionTypeInput"></a>

```csharp
public string PlanExecutionTypeInput { get; }
```

- *Type:* string

---

##### `ArePrechecksEnabled`<sup>Required</sup> <a name="ArePrechecksEnabled" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.arePrechecksEnabled"></a>

```csharp
public object ArePrechecksEnabled { get; }
```

- *Type:* object

---

##### `AreWarningsIgnored`<sup>Required</sup> <a name="AreWarningsIgnored" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.areWarningsIgnored"></a>

```csharp
public object AreWarningsIgnored { get; }
```

- *Type:* object

---

##### `PlanExecutionType`<sup>Required</sup> <a name="PlanExecutionType" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.planExecutionType"></a>

```csharp
public string PlanExecutionType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.internalValue"></a>

```csharp
public DisasterRecoveryDrPlanExecutionExecutionOptions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions">DisasterRecoveryDrPlanExecutionExecutionOptions</a>

---


### DisasterRecoveryDrPlanExecutionGroupExecutionsList <a name="DisasterRecoveryDrPlanExecutionGroupExecutionsList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrPlanExecutionGroupExecutionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.get"></a>

```csharp
private DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference <a name="DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.executionDurationInSec">ExecutionDurationInSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.statusDetails">StatusDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.stepExecutions">StepExecutions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList">DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.timeEnded">TimeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.timeStarted">TimeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutions">DisasterRecoveryDrPlanExecutionGroupExecutions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExecutionDurationInSec`<sup>Required</sup> <a name="ExecutionDurationInSec" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.executionDurationInSec"></a>

```csharp
public double ExecutionDurationInSec { get; }
```

- *Type:* double

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusDetails`<sup>Required</sup> <a name="StatusDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.statusDetails"></a>

```csharp
public string StatusDetails { get; }
```

- *Type:* string

---

##### `StepExecutions`<sup>Required</sup> <a name="StepExecutions" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.stepExecutions"></a>

```csharp
public DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList StepExecutions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList">DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList</a>

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.timeEnded"></a>

```csharp
public string TimeEnded { get; }
```

- *Type:* string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.timeStarted"></a>

```csharp
public string TimeStarted { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.internalValue"></a>

```csharp
public DisasterRecoveryDrPlanExecutionGroupExecutions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutions">DisasterRecoveryDrPlanExecutionGroupExecutions</a>

---


### DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList <a name="DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.get"></a>

```csharp
private DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList <a name="DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.get"></a>

```csharp
private DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference <a name="DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation">DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.internalValue"></a>

```csharp
public DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation">DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation</a>

---


### DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference <a name="DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.executionDurationInSec">ExecutionDurationInSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.logLocation">LogLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList">DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.statusDetails">StatusDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.stepId">StepId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.timeEnded">TimeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.timeStarted">TimeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions">DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExecutionDurationInSec`<sup>Required</sup> <a name="ExecutionDurationInSec" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.executionDurationInSec"></a>

```csharp
public double ExecutionDurationInSec { get; }
```

- *Type:* double

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `LogLocation`<sup>Required</sup> <a name="LogLocation" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.logLocation"></a>

```csharp
public DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList LogLocation { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList">DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusDetails`<sup>Required</sup> <a name="StatusDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.statusDetails"></a>

```csharp
public string StatusDetails { get; }
```

- *Type:* string

---

##### `StepId`<sup>Required</sup> <a name="StepId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.stepId"></a>

```csharp
public string StepId { get; }
```

- *Type:* string

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.timeEnded"></a>

```csharp
public string TimeEnded { get; }
```

- *Type:* string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.timeStarted"></a>

```csharp
public string TimeStarted { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.internalValue"></a>

```csharp
public DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions">DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions</a>

---


### DisasterRecoveryDrPlanExecutionLogLocationList <a name="DisasterRecoveryDrPlanExecutionLogLocationList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrPlanExecutionLogLocationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.get"></a>

```csharp
private DisasterRecoveryDrPlanExecutionLogLocationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DisasterRecoveryDrPlanExecutionLogLocationOutputReference <a name="DisasterRecoveryDrPlanExecutionLogLocationOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrPlanExecutionLogLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocation">DisasterRecoveryDrPlanExecutionLogLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.internalValue"></a>

```csharp
public DisasterRecoveryDrPlanExecutionLogLocation InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocation">DisasterRecoveryDrPlanExecutionLogLocation</a>

---


### DisasterRecoveryDrPlanExecutionTimeoutsOutputReference <a name="DisasterRecoveryDrPlanExecutionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DisasterRecoveryDrPlanExecutionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



