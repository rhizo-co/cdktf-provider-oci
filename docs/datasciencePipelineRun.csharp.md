# `datasciencePipelineRun` Submodule <a name="`datasciencePipelineRun` Submodule" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasciencePipelineRun <a name="DatasciencePipelineRun" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run oci_datascience_pipeline_run}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatasciencePipelineRun(Construct Scope, string Id, DatasciencePipelineRunConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig">DatasciencePipelineRunConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig">DatasciencePipelineRunConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putConfigurationOverrideDetails">PutConfigurationOverrideDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putLogConfigurationOverrideDetails">PutLogConfigurationOverrideDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putStepOverrideDetails">PutStepOverrideDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetConfigurationOverrideDetails">ResetConfigurationOverrideDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetDeleteRelatedJobRuns">ResetDeleteRelatedJobRuns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetLogConfigurationOverrideDetails">ResetLogConfigurationOverrideDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetOpcParentRptUrl">ResetOpcParentRptUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetStepOverrideDetails">ResetStepOverrideDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetSystemTags">ResetSystemTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfigurationOverrideDetails` <a name="PutConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putConfigurationOverrideDetails"></a>

```csharp
private void PutConfigurationOverrideDetails(DatasciencePipelineRunConfigurationOverrideDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putConfigurationOverrideDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails">DatasciencePipelineRunConfigurationOverrideDetails</a>

---

##### `PutLogConfigurationOverrideDetails` <a name="PutLogConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putLogConfigurationOverrideDetails"></a>

```csharp
private void PutLogConfigurationOverrideDetails(DatasciencePipelineRunLogConfigurationOverrideDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putLogConfigurationOverrideDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails">DatasciencePipelineRunLogConfigurationOverrideDetails</a>

---

##### `PutStepOverrideDetails` <a name="PutStepOverrideDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putStepOverrideDetails"></a>

```csharp
private void PutStepOverrideDetails(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putStepOverrideDetails.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putTimeouts"></a>

```csharp
private void PutTimeouts(DatasciencePipelineRunTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts">DatasciencePipelineRunTimeouts</a>

---

##### `ResetConfigurationOverrideDetails` <a name="ResetConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetConfigurationOverrideDetails"></a>

```csharp
private void ResetConfigurationOverrideDetails()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDeleteRelatedJobRuns` <a name="ResetDeleteRelatedJobRuns" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetDeleteRelatedJobRuns"></a>

```csharp
private void ResetDeleteRelatedJobRuns()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogConfigurationOverrideDetails` <a name="ResetLogConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetLogConfigurationOverrideDetails"></a>

```csharp
private void ResetLogConfigurationOverrideDetails()
```

##### `ResetOpcParentRptUrl` <a name="ResetOpcParentRptUrl" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetOpcParentRptUrl"></a>

```csharp
private void ResetOpcParentRptUrl()
```

##### `ResetStepOverrideDetails` <a name="ResetStepOverrideDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetStepOverrideDetails"></a>

```csharp
private void ResetStepOverrideDetails()
```

##### `ResetSystemTags` <a name="ResetSystemTags" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetSystemTags"></a>

```csharp
private void ResetSystemTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatasciencePipelineRun resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatasciencePipelineRun.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatasciencePipelineRun.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatasciencePipelineRun.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatasciencePipelineRun.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatasciencePipelineRun resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatasciencePipelineRun to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatasciencePipelineRun that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatasciencePipelineRun to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.configurationDetails">ConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList">DatasciencePipelineRunConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.configurationOverrideDetails">ConfigurationOverrideDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference">DatasciencePipelineRunConfigurationOverrideDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.logConfigurationOverrideDetails">LogConfigurationOverrideDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference">DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.logDetails">LogDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList">DatasciencePipelineRunLogDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.stepOverrideDetails">StepOverrideDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList">DatasciencePipelineRunStepOverrideDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.stepRuns">StepRuns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList">DatasciencePipelineRunStepRunsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.timeAccepted">TimeAccepted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.timeFinished">TimeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference">DatasciencePipelineRunTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.timeStarted">TimeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.configurationOverrideDetailsInput">ConfigurationOverrideDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails">DatasciencePipelineRunConfigurationOverrideDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.deleteRelatedJobRunsInput">DeleteRelatedJobRunsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.logConfigurationOverrideDetailsInput">LogConfigurationOverrideDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails">DatasciencePipelineRunLogConfigurationOverrideDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.opcParentRptUrlInput">OpcParentRptUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.pipelineIdInput">PipelineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.stepOverrideDetailsInput">StepOverrideDetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.systemTagsInput">SystemTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.deleteRelatedJobRuns">DeleteRelatedJobRuns</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.opcParentRptUrl">OpcParentRptUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.pipelineId">PipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.systemTags">SystemTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ConfigurationDetails`<sup>Required</sup> <a name="ConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.configurationDetails"></a>

```csharp
public DatasciencePipelineRunConfigurationDetailsList ConfigurationDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList">DatasciencePipelineRunConfigurationDetailsList</a>

---

##### `ConfigurationOverrideDetails`<sup>Required</sup> <a name="ConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.configurationOverrideDetails"></a>

```csharp
public DatasciencePipelineRunConfigurationOverrideDetailsOutputReference ConfigurationOverrideDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference">DatasciencePipelineRunConfigurationOverrideDetailsOutputReference</a>

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `LogConfigurationOverrideDetails`<sup>Required</sup> <a name="LogConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.logConfigurationOverrideDetails"></a>

```csharp
public DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference LogConfigurationOverrideDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference">DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference</a>

---

##### `LogDetails`<sup>Required</sup> <a name="LogDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.logDetails"></a>

```csharp
public DatasciencePipelineRunLogDetailsList LogDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList">DatasciencePipelineRunLogDetailsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StepOverrideDetails`<sup>Required</sup> <a name="StepOverrideDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.stepOverrideDetails"></a>

```csharp
public DatasciencePipelineRunStepOverrideDetailsList StepOverrideDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList">DatasciencePipelineRunStepOverrideDetailsList</a>

---

##### `StepRuns`<sup>Required</sup> <a name="StepRuns" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.stepRuns"></a>

```csharp
public DatasciencePipelineRunStepRunsList StepRuns { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList">DatasciencePipelineRunStepRunsList</a>

---

##### `TimeAccepted`<sup>Required</sup> <a name="TimeAccepted" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.timeAccepted"></a>

```csharp
public string TimeAccepted { get; }
```

- *Type:* string

---

##### `TimeFinished`<sup>Required</sup> <a name="TimeFinished" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.timeFinished"></a>

```csharp
public string TimeFinished { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.timeouts"></a>

```csharp
public DatasciencePipelineRunTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference">DatasciencePipelineRunTimeoutsOutputReference</a>

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.timeStarted"></a>

```csharp
public string TimeStarted { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `ConfigurationOverrideDetailsInput`<sup>Optional</sup> <a name="ConfigurationOverrideDetailsInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.configurationOverrideDetailsInput"></a>

```csharp
public DatasciencePipelineRunConfigurationOverrideDetails ConfigurationOverrideDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails">DatasciencePipelineRunConfigurationOverrideDetails</a>

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeleteRelatedJobRunsInput`<sup>Optional</sup> <a name="DeleteRelatedJobRunsInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.deleteRelatedJobRunsInput"></a>

```csharp
public object DeleteRelatedJobRunsInput { get; }
```

- *Type:* object

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogConfigurationOverrideDetailsInput`<sup>Optional</sup> <a name="LogConfigurationOverrideDetailsInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.logConfigurationOverrideDetailsInput"></a>

```csharp
public DatasciencePipelineRunLogConfigurationOverrideDetails LogConfigurationOverrideDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails">DatasciencePipelineRunLogConfigurationOverrideDetails</a>

---

##### `OpcParentRptUrlInput`<sup>Optional</sup> <a name="OpcParentRptUrlInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.opcParentRptUrlInput"></a>

```csharp
public string OpcParentRptUrlInput { get; }
```

- *Type:* string

---

##### `PipelineIdInput`<sup>Optional</sup> <a name="PipelineIdInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.pipelineIdInput"></a>

```csharp
public string PipelineIdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `StepOverrideDetailsInput`<sup>Optional</sup> <a name="StepOverrideDetailsInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.stepOverrideDetailsInput"></a>

```csharp
public object StepOverrideDetailsInput { get; }
```

- *Type:* object

---

##### `SystemTagsInput`<sup>Optional</sup> <a name="SystemTagsInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.systemTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SystemTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeleteRelatedJobRuns`<sup>Required</sup> <a name="DeleteRelatedJobRuns" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.deleteRelatedJobRuns"></a>

```csharp
public object DeleteRelatedJobRuns { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OpcParentRptUrl`<sup>Required</sup> <a name="OpcParentRptUrl" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.opcParentRptUrl"></a>

```csharp
public string OpcParentRptUrl { get; }
```

- *Type:* string

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.pipelineId"></a>

```csharp
public string PipelineId { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.systemTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SystemTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatasciencePipelineRunConfig <a name="DatasciencePipelineRunConfig" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatasciencePipelineRunConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string PipelineId,
    string ProjectId,
    DatasciencePipelineRunConfigurationOverrideDetails ConfigurationOverrideDetails = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    object DeleteRelatedJobRuns = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    DatasciencePipelineRunLogConfigurationOverrideDetails LogConfigurationOverrideDetails = null,
    string OpcParentRptUrl = null,
    object StepOverrideDetails = null,
    System.Collections.Generic.IDictionary<string, string> SystemTags = null,
    DatasciencePipelineRunTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#compartment_id DatasciencePipelineRun#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.pipelineId">PipelineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#pipeline_id DatasciencePipelineRun#pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#project_id DatasciencePipelineRun#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.configurationOverrideDetails">ConfigurationOverrideDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails">DatasciencePipelineRunConfigurationOverrideDetails</a></code> | configuration_override_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#defined_tags DatasciencePipelineRun#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.deleteRelatedJobRuns">DeleteRelatedJobRuns</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#delete_related_job_runs DatasciencePipelineRun#delete_related_job_runs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#display_name DatasciencePipelineRun#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#freeform_tags DatasciencePipelineRun#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#id DatasciencePipelineRun#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.logConfigurationOverrideDetails">LogConfigurationOverrideDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails">DatasciencePipelineRunLogConfigurationOverrideDetails</a></code> | log_configuration_override_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.opcParentRptUrl">OpcParentRptUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#opc_parent_rpt_url DatasciencePipelineRun#opc_parent_rpt_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.stepOverrideDetails">StepOverrideDetails</a></code> | <code>object</code> | step_override_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.systemTags">SystemTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#system_tags DatasciencePipelineRun#system_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts">DatasciencePipelineRunTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#compartment_id DatasciencePipelineRun#compartment_id}.

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.pipelineId"></a>

```csharp
public string PipelineId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#pipeline_id DatasciencePipelineRun#pipeline_id}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#project_id DatasciencePipelineRun#project_id}.

---

##### `ConfigurationOverrideDetails`<sup>Optional</sup> <a name="ConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.configurationOverrideDetails"></a>

```csharp
public DatasciencePipelineRunConfigurationOverrideDetails ConfigurationOverrideDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails">DatasciencePipelineRunConfigurationOverrideDetails</a>

configuration_override_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#configuration_override_details DatasciencePipelineRun#configuration_override_details}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#defined_tags DatasciencePipelineRun#defined_tags}.

---

##### `DeleteRelatedJobRuns`<sup>Optional</sup> <a name="DeleteRelatedJobRuns" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.deleteRelatedJobRuns"></a>

```csharp
public object DeleteRelatedJobRuns { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#delete_related_job_runs DatasciencePipelineRun#delete_related_job_runs}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#display_name DatasciencePipelineRun#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#freeform_tags DatasciencePipelineRun#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#id DatasciencePipelineRun#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogConfigurationOverrideDetails`<sup>Optional</sup> <a name="LogConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.logConfigurationOverrideDetails"></a>

```csharp
public DatasciencePipelineRunLogConfigurationOverrideDetails LogConfigurationOverrideDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails">DatasciencePipelineRunLogConfigurationOverrideDetails</a>

log_configuration_override_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#log_configuration_override_details DatasciencePipelineRun#log_configuration_override_details}

---

##### `OpcParentRptUrl`<sup>Optional</sup> <a name="OpcParentRptUrl" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.opcParentRptUrl"></a>

```csharp
public string OpcParentRptUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#opc_parent_rpt_url DatasciencePipelineRun#opc_parent_rpt_url}.

---

##### `StepOverrideDetails`<sup>Optional</sup> <a name="StepOverrideDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.stepOverrideDetails"></a>

```csharp
public object StepOverrideDetails { get; set; }
```

- *Type:* object

step_override_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#step_override_details DatasciencePipelineRun#step_override_details}

---

##### `SystemTags`<sup>Optional</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.systemTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SystemTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#system_tags DatasciencePipelineRun#system_tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.timeouts"></a>

```csharp
public DatasciencePipelineRunTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts">DatasciencePipelineRunTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#timeouts DatasciencePipelineRun#timeouts}

---

### DatasciencePipelineRunConfigurationDetails <a name="DatasciencePipelineRunConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatasciencePipelineRunConfigurationDetails {

};
```


### DatasciencePipelineRunConfigurationOverrideDetails <a name="DatasciencePipelineRunConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatasciencePipelineRunConfigurationOverrideDetails {
    string Type,
    string CommandLineArguments = null,
    System.Collections.Generic.IDictionary<string, string> EnvironmentVariables = null,
    string MaximumRuntimeInMinutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#type DatasciencePipelineRun#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails.property.commandLineArguments">CommandLineArguments</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#command_line_arguments DatasciencePipelineRun#command_line_arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#environment_variables DatasciencePipelineRun#environment_variables}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails.property.maximumRuntimeInMinutes">MaximumRuntimeInMinutes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#maximum_runtime_in_minutes DatasciencePipelineRun#maximum_runtime_in_minutes}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#type DatasciencePipelineRun#type}.

---

##### `CommandLineArguments`<sup>Optional</sup> <a name="CommandLineArguments" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails.property.commandLineArguments"></a>

```csharp
public string CommandLineArguments { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#command_line_arguments DatasciencePipelineRun#command_line_arguments}.

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#environment_variables DatasciencePipelineRun#environment_variables}.

---

##### `MaximumRuntimeInMinutes`<sup>Optional</sup> <a name="MaximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails.property.maximumRuntimeInMinutes"></a>

```csharp
public string MaximumRuntimeInMinutes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#maximum_runtime_in_minutes DatasciencePipelineRun#maximum_runtime_in_minutes}.

---

### DatasciencePipelineRunLogConfigurationOverrideDetails <a name="DatasciencePipelineRunLogConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatasciencePipelineRunLogConfigurationOverrideDetails {
    object EnableAutoLogCreation = null,
    object EnableLogging = null,
    string LogGroupId = null,
    string LogId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails.property.enableAutoLogCreation">EnableAutoLogCreation</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#enable_auto_log_creation DatasciencePipelineRun#enable_auto_log_creation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails.property.enableLogging">EnableLogging</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#enable_logging DatasciencePipelineRun#enable_logging}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails.property.logGroupId">LogGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#log_group_id DatasciencePipelineRun#log_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails.property.logId">LogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#log_id DatasciencePipelineRun#log_id}. |

---

##### `EnableAutoLogCreation`<sup>Optional</sup> <a name="EnableAutoLogCreation" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails.property.enableAutoLogCreation"></a>

```csharp
public object EnableAutoLogCreation { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#enable_auto_log_creation DatasciencePipelineRun#enable_auto_log_creation}.

---

##### `EnableLogging`<sup>Optional</sup> <a name="EnableLogging" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails.property.enableLogging"></a>

```csharp
public object EnableLogging { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#enable_logging DatasciencePipelineRun#enable_logging}.

---

##### `LogGroupId`<sup>Optional</sup> <a name="LogGroupId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails.property.logGroupId"></a>

```csharp
public string LogGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#log_group_id DatasciencePipelineRun#log_group_id}.

---

##### `LogId`<sup>Optional</sup> <a name="LogId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails.property.logId"></a>

```csharp
public string LogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#log_id DatasciencePipelineRun#log_id}.

---

### DatasciencePipelineRunLogDetails <a name="DatasciencePipelineRunLogDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatasciencePipelineRunLogDetails {

};
```


### DatasciencePipelineRunStepOverrideDetails <a name="DatasciencePipelineRunStepOverrideDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatasciencePipelineRunStepOverrideDetails {
    DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails StepConfigurationDetails,
    string StepName,
    DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails StepContainerConfigurationDetails = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails.property.stepConfigurationDetails">StepConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails</a></code> | step_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails.property.stepName">StepName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#step_name DatasciencePipelineRun#step_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails.property.stepContainerConfigurationDetails">StepContainerConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails</a></code> | step_container_configuration_details block. |

---

##### `StepConfigurationDetails`<sup>Required</sup> <a name="StepConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails.property.stepConfigurationDetails"></a>

```csharp
public DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails StepConfigurationDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails</a>

step_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#step_configuration_details DatasciencePipelineRun#step_configuration_details}

---

##### `StepName`<sup>Required</sup> <a name="StepName" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails.property.stepName"></a>

```csharp
public string StepName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#step_name DatasciencePipelineRun#step_name}.

---

##### `StepContainerConfigurationDetails`<sup>Optional</sup> <a name="StepContainerConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails.property.stepContainerConfigurationDetails"></a>

```csharp
public DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails StepContainerConfigurationDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails</a>

step_container_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#step_container_configuration_details DatasciencePipelineRun#step_container_configuration_details}

---

### DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails <a name="DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails {
    string CommandLineArguments = null,
    System.Collections.Generic.IDictionary<string, string> EnvironmentVariables = null,
    string MaximumRuntimeInMinutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails.property.commandLineArguments">CommandLineArguments</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#command_line_arguments DatasciencePipelineRun#command_line_arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#environment_variables DatasciencePipelineRun#environment_variables}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails.property.maximumRuntimeInMinutes">MaximumRuntimeInMinutes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#maximum_runtime_in_minutes DatasciencePipelineRun#maximum_runtime_in_minutes}. |

---

##### `CommandLineArguments`<sup>Optional</sup> <a name="CommandLineArguments" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails.property.commandLineArguments"></a>

```csharp
public string CommandLineArguments { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#command_line_arguments DatasciencePipelineRun#command_line_arguments}.

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#environment_variables DatasciencePipelineRun#environment_variables}.

---

##### `MaximumRuntimeInMinutes`<sup>Optional</sup> <a name="MaximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails.property.maximumRuntimeInMinutes"></a>

```csharp
public string MaximumRuntimeInMinutes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#maximum_runtime_in_minutes DatasciencePipelineRun#maximum_runtime_in_minutes}.

---

### DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails <a name="DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails {
    string ContainerType,
    string Image,
    string[] Cmd = null,
    string[] Entrypoint = null,
    string ImageDigest = null,
    string ImageSignatureId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.property.containerType">ContainerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#container_type DatasciencePipelineRun#container_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.property.image">Image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#image DatasciencePipelineRun#image}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.property.cmd">Cmd</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#cmd DatasciencePipelineRun#cmd}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.property.entrypoint">Entrypoint</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#entrypoint DatasciencePipelineRun#entrypoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.property.imageDigest">ImageDigest</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#image_digest DatasciencePipelineRun#image_digest}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.property.imageSignatureId">ImageSignatureId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#image_signature_id DatasciencePipelineRun#image_signature_id}. |

---

##### `ContainerType`<sup>Required</sup> <a name="ContainerType" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.property.containerType"></a>

```csharp
public string ContainerType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#container_type DatasciencePipelineRun#container_type}.

---

##### `Image`<sup>Required</sup> <a name="Image" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#image DatasciencePipelineRun#image}.

---

##### `Cmd`<sup>Optional</sup> <a name="Cmd" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.property.cmd"></a>

```csharp
public string[] Cmd { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#cmd DatasciencePipelineRun#cmd}.

---

##### `Entrypoint`<sup>Optional</sup> <a name="Entrypoint" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.property.entrypoint"></a>

```csharp
public string[] Entrypoint { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#entrypoint DatasciencePipelineRun#entrypoint}.

---

##### `ImageDigest`<sup>Optional</sup> <a name="ImageDigest" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.property.imageDigest"></a>

```csharp
public string ImageDigest { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#image_digest DatasciencePipelineRun#image_digest}.

---

##### `ImageSignatureId`<sup>Optional</sup> <a name="ImageSignatureId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.property.imageSignatureId"></a>

```csharp
public string ImageSignatureId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#image_signature_id DatasciencePipelineRun#image_signature_id}.

---

### DatasciencePipelineRunStepRuns <a name="DatasciencePipelineRunStepRuns" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRuns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRuns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatasciencePipelineRunStepRuns {

};
```


### DatasciencePipelineRunTimeouts <a name="DatasciencePipelineRunTimeouts" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatasciencePipelineRunTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#create DatasciencePipelineRun#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#delete DatasciencePipelineRun#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#update DatasciencePipelineRun#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#create DatasciencePipelineRun#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#delete DatasciencePipelineRun#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#update DatasciencePipelineRun#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatasciencePipelineRunConfigurationDetailsList <a name="DatasciencePipelineRunConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatasciencePipelineRunConfigurationDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.get"></a>

```csharp
private DatasciencePipelineRunConfigurationDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatasciencePipelineRunConfigurationDetailsOutputReference <a name="DatasciencePipelineRunConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatasciencePipelineRunConfigurationDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.commandLineArguments">CommandLineArguments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes">MaximumRuntimeInMinutes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetails">DatasciencePipelineRunConfigurationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommandLineArguments`<sup>Required</sup> <a name="CommandLineArguments" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.commandLineArguments"></a>

```csharp
public string CommandLineArguments { get; }
```

- *Type:* string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.environmentVariables"></a>

```csharp
public StringMap EnvironmentVariables { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `MaximumRuntimeInMinutes`<sup>Required</sup> <a name="MaximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes"></a>

```csharp
public string MaximumRuntimeInMinutes { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.internalValue"></a>

```csharp
public DatasciencePipelineRunConfigurationDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetails">DatasciencePipelineRunConfigurationDetails</a>

---


### DatasciencePipelineRunConfigurationOverrideDetailsOutputReference <a name="DatasciencePipelineRunConfigurationOverrideDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatasciencePipelineRunConfigurationOverrideDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.resetCommandLineArguments">ResetCommandLineArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.resetMaximumRuntimeInMinutes">ResetMaximumRuntimeInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommandLineArguments` <a name="ResetCommandLineArguments" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.resetCommandLineArguments"></a>

```csharp
private void ResetCommandLineArguments()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.resetEnvironmentVariables"></a>

```csharp
private void ResetEnvironmentVariables()
```

##### `ResetMaximumRuntimeInMinutes` <a name="ResetMaximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.resetMaximumRuntimeInMinutes"></a>

```csharp
private void ResetMaximumRuntimeInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.commandLineArgumentsInput">CommandLineArgumentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.maximumRuntimeInMinutesInput">MaximumRuntimeInMinutesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.commandLineArguments">CommandLineArguments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.maximumRuntimeInMinutes">MaximumRuntimeInMinutes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails">DatasciencePipelineRunConfigurationOverrideDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommandLineArgumentsInput`<sup>Optional</sup> <a name="CommandLineArgumentsInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.commandLineArgumentsInput"></a>

```csharp
public string CommandLineArgumentsInput { get; }
```

- *Type:* string

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.environmentVariablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaximumRuntimeInMinutesInput`<sup>Optional</sup> <a name="MaximumRuntimeInMinutesInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.maximumRuntimeInMinutesInput"></a>

```csharp
public string MaximumRuntimeInMinutesInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `CommandLineArguments`<sup>Required</sup> <a name="CommandLineArguments" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.commandLineArguments"></a>

```csharp
public string CommandLineArguments { get; }
```

- *Type:* string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaximumRuntimeInMinutes`<sup>Required</sup> <a name="MaximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.maximumRuntimeInMinutes"></a>

```csharp
public string MaximumRuntimeInMinutes { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.internalValue"></a>

```csharp
public DatasciencePipelineRunConfigurationOverrideDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails">DatasciencePipelineRunConfigurationOverrideDetails</a>

---


### DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference <a name="DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.resetEnableAutoLogCreation">ResetEnableAutoLogCreation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.resetEnableLogging">ResetEnableLogging</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.resetLogGroupId">ResetLogGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.resetLogId">ResetLogId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableAutoLogCreation` <a name="ResetEnableAutoLogCreation" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.resetEnableAutoLogCreation"></a>

```csharp
private void ResetEnableAutoLogCreation()
```

##### `ResetEnableLogging` <a name="ResetEnableLogging" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.resetEnableLogging"></a>

```csharp
private void ResetEnableLogging()
```

##### `ResetLogGroupId` <a name="ResetLogGroupId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.resetLogGroupId"></a>

```csharp
private void ResetLogGroupId()
```

##### `ResetLogId` <a name="ResetLogId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.resetLogId"></a>

```csharp
private void ResetLogId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.enableAutoLogCreationInput">EnableAutoLogCreationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.enableLoggingInput">EnableLoggingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.logGroupIdInput">LogGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.logIdInput">LogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.enableAutoLogCreation">EnableAutoLogCreation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.enableLogging">EnableLogging</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.logGroupId">LogGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.logId">LogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails">DatasciencePipelineRunLogConfigurationOverrideDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableAutoLogCreationInput`<sup>Optional</sup> <a name="EnableAutoLogCreationInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.enableAutoLogCreationInput"></a>

```csharp
public object EnableAutoLogCreationInput { get; }
```

- *Type:* object

---

##### `EnableLoggingInput`<sup>Optional</sup> <a name="EnableLoggingInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.enableLoggingInput"></a>

```csharp
public object EnableLoggingInput { get; }
```

- *Type:* object

---

##### `LogGroupIdInput`<sup>Optional</sup> <a name="LogGroupIdInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.logGroupIdInput"></a>

```csharp
public string LogGroupIdInput { get; }
```

- *Type:* string

---

##### `LogIdInput`<sup>Optional</sup> <a name="LogIdInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.logIdInput"></a>

```csharp
public string LogIdInput { get; }
```

- *Type:* string

---

##### `EnableAutoLogCreation`<sup>Required</sup> <a name="EnableAutoLogCreation" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.enableAutoLogCreation"></a>

```csharp
public object EnableAutoLogCreation { get; }
```

- *Type:* object

---

##### `EnableLogging`<sup>Required</sup> <a name="EnableLogging" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.enableLogging"></a>

```csharp
public object EnableLogging { get; }
```

- *Type:* object

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.logGroupId"></a>

```csharp
public string LogGroupId { get; }
```

- *Type:* string

---

##### `LogId`<sup>Required</sup> <a name="LogId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.logId"></a>

```csharp
public string LogId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.internalValue"></a>

```csharp
public DatasciencePipelineRunLogConfigurationOverrideDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails">DatasciencePipelineRunLogConfigurationOverrideDetails</a>

---


### DatasciencePipelineRunLogDetailsList <a name="DatasciencePipelineRunLogDetailsList" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatasciencePipelineRunLogDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.get"></a>

```csharp
private DatasciencePipelineRunLogDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatasciencePipelineRunLogDetailsOutputReference <a name="DatasciencePipelineRunLogDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatasciencePipelineRunLogDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.property.logGroupId">LogGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.property.logId">LogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetails">DatasciencePipelineRunLogDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.property.logGroupId"></a>

```csharp
public string LogGroupId { get; }
```

- *Type:* string

---

##### `LogId`<sup>Required</sup> <a name="LogId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.property.logId"></a>

```csharp
public string LogId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.property.internalValue"></a>

```csharp
public DatasciencePipelineRunLogDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetails">DatasciencePipelineRunLogDetails</a>

---


### DatasciencePipelineRunStepOverrideDetailsList <a name="DatasciencePipelineRunStepOverrideDetailsList" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatasciencePipelineRunStepOverrideDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.get"></a>

```csharp
private DatasciencePipelineRunStepOverrideDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatasciencePipelineRunStepOverrideDetailsOutputReference <a name="DatasciencePipelineRunStepOverrideDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatasciencePipelineRunStepOverrideDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.putStepConfigurationDetails">PutStepConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.putStepContainerConfigurationDetails">PutStepContainerConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.resetStepContainerConfigurationDetails">ResetStepContainerConfigurationDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStepConfigurationDetails` <a name="PutStepConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.putStepConfigurationDetails"></a>

```csharp
private void PutStepConfigurationDetails(DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.putStepConfigurationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails</a>

---

##### `PutStepContainerConfigurationDetails` <a name="PutStepContainerConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.putStepContainerConfigurationDetails"></a>

```csharp
private void PutStepContainerConfigurationDetails(DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.putStepContainerConfigurationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails</a>

---

##### `ResetStepContainerConfigurationDetails` <a name="ResetStepContainerConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.resetStepContainerConfigurationDetails"></a>

```csharp
private void ResetStepContainerConfigurationDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.stepConfigurationDetails">StepConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference">DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.stepContainerConfigurationDetails">StepContainerConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference">DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.stepConfigurationDetailsInput">StepConfigurationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.stepContainerConfigurationDetailsInput">StepContainerConfigurationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.stepNameInput">StepNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.stepName">StepName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StepConfigurationDetails`<sup>Required</sup> <a name="StepConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.stepConfigurationDetails"></a>

```csharp
public DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference StepConfigurationDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference">DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference</a>

---

##### `StepContainerConfigurationDetails`<sup>Required</sup> <a name="StepContainerConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.stepContainerConfigurationDetails"></a>

```csharp
public DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference StepContainerConfigurationDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference">DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference</a>

---

##### `StepConfigurationDetailsInput`<sup>Optional</sup> <a name="StepConfigurationDetailsInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.stepConfigurationDetailsInput"></a>

```csharp
public DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails StepConfigurationDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails</a>

---

##### `StepContainerConfigurationDetailsInput`<sup>Optional</sup> <a name="StepContainerConfigurationDetailsInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.stepContainerConfigurationDetailsInput"></a>

```csharp
public DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails StepContainerConfigurationDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails</a>

---

##### `StepNameInput`<sup>Optional</sup> <a name="StepNameInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.stepNameInput"></a>

```csharp
public string StepNameInput { get; }
```

- *Type:* string

---

##### `StepName`<sup>Required</sup> <a name="StepName" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.stepName"></a>

```csharp
public string StepName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference <a name="DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.resetCommandLineArguments">ResetCommandLineArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.resetMaximumRuntimeInMinutes">ResetMaximumRuntimeInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommandLineArguments` <a name="ResetCommandLineArguments" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.resetCommandLineArguments"></a>

```csharp
private void ResetCommandLineArguments()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.resetEnvironmentVariables"></a>

```csharp
private void ResetEnvironmentVariables()
```

##### `ResetMaximumRuntimeInMinutes` <a name="ResetMaximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.resetMaximumRuntimeInMinutes"></a>

```csharp
private void ResetMaximumRuntimeInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.commandLineArgumentsInput">CommandLineArgumentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.maximumRuntimeInMinutesInput">MaximumRuntimeInMinutesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.commandLineArguments">CommandLineArguments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes">MaximumRuntimeInMinutes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommandLineArgumentsInput`<sup>Optional</sup> <a name="CommandLineArgumentsInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.commandLineArgumentsInput"></a>

```csharp
public string CommandLineArgumentsInput { get; }
```

- *Type:* string

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.environmentVariablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaximumRuntimeInMinutesInput`<sup>Optional</sup> <a name="MaximumRuntimeInMinutesInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.maximumRuntimeInMinutesInput"></a>

```csharp
public string MaximumRuntimeInMinutesInput { get; }
```

- *Type:* string

---

##### `CommandLineArguments`<sup>Required</sup> <a name="CommandLineArguments" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.commandLineArguments"></a>

```csharp
public string CommandLineArguments { get; }
```

- *Type:* string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaximumRuntimeInMinutes`<sup>Required</sup> <a name="MaximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes"></a>

```csharp
public string MaximumRuntimeInMinutes { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.internalValue"></a>

```csharp
public DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails</a>

---


### DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference <a name="DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resetCmd">ResetCmd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resetEntrypoint">ResetEntrypoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resetImageDigest">ResetImageDigest</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resetImageSignatureId">ResetImageSignatureId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCmd` <a name="ResetCmd" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resetCmd"></a>

```csharp
private void ResetCmd()
```

##### `ResetEntrypoint` <a name="ResetEntrypoint" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resetEntrypoint"></a>

```csharp
private void ResetEntrypoint()
```

##### `ResetImageDigest` <a name="ResetImageDigest" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resetImageDigest"></a>

```csharp
private void ResetImageDigest()
```

##### `ResetImageSignatureId` <a name="ResetImageSignatureId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resetImageSignatureId"></a>

```csharp
private void ResetImageSignatureId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.cmdInput">CmdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.containerTypeInput">ContainerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.entrypointInput">EntrypointInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageDigestInput">ImageDigestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageSignatureIdInput">ImageSignatureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.cmd">Cmd</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.containerType">ContainerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.entrypoint">Entrypoint</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageDigest">ImageDigest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageSignatureId">ImageSignatureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CmdInput`<sup>Optional</sup> <a name="CmdInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.cmdInput"></a>

```csharp
public string[] CmdInput { get; }
```

- *Type:* string[]

---

##### `ContainerTypeInput`<sup>Optional</sup> <a name="ContainerTypeInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.containerTypeInput"></a>

```csharp
public string ContainerTypeInput { get; }
```

- *Type:* string

---

##### `EntrypointInput`<sup>Optional</sup> <a name="EntrypointInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.entrypointInput"></a>

```csharp
public string[] EntrypointInput { get; }
```

- *Type:* string[]

---

##### `ImageDigestInput`<sup>Optional</sup> <a name="ImageDigestInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageDigestInput"></a>

```csharp
public string ImageDigestInput { get; }
```

- *Type:* string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `ImageSignatureIdInput`<sup>Optional</sup> <a name="ImageSignatureIdInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageSignatureIdInput"></a>

```csharp
public string ImageSignatureIdInput { get; }
```

- *Type:* string

---

##### `Cmd`<sup>Required</sup> <a name="Cmd" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.cmd"></a>

```csharp
public string[] Cmd { get; }
```

- *Type:* string[]

---

##### `ContainerType`<sup>Required</sup> <a name="ContainerType" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.containerType"></a>

```csharp
public string ContainerType { get; }
```

- *Type:* string

---

##### `Entrypoint`<sup>Required</sup> <a name="Entrypoint" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.entrypoint"></a>

```csharp
public string[] Entrypoint { get; }
```

- *Type:* string[]

---

##### `Image`<sup>Required</sup> <a name="Image" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `ImageDigest`<sup>Required</sup> <a name="ImageDigest" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageDigest"></a>

```csharp
public string ImageDigest { get; }
```

- *Type:* string

---

##### `ImageSignatureId`<sup>Required</sup> <a name="ImageSignatureId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageSignatureId"></a>

```csharp
public string ImageSignatureId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.internalValue"></a>

```csharp
public DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails</a>

---


### DatasciencePipelineRunStepRunsList <a name="DatasciencePipelineRunStepRunsList" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatasciencePipelineRunStepRunsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.get"></a>

```csharp
private DatasciencePipelineRunStepRunsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatasciencePipelineRunStepRunsOutputReference <a name="DatasciencePipelineRunStepRunsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatasciencePipelineRunStepRunsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.jobRunId">JobRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.stepName">StepName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.stepType">StepType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.timeFinished">TimeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.timeStarted">TimeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRuns">DatasciencePipelineRunStepRuns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JobRunId`<sup>Required</sup> <a name="JobRunId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.jobRunId"></a>

```csharp
public string JobRunId { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StepName`<sup>Required</sup> <a name="StepName" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.stepName"></a>

```csharp
public string StepName { get; }
```

- *Type:* string

---

##### `StepType`<sup>Required</sup> <a name="StepType" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.stepType"></a>

```csharp
public string StepType { get; }
```

- *Type:* string

---

##### `TimeFinished`<sup>Required</sup> <a name="TimeFinished" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.timeFinished"></a>

```csharp
public string TimeFinished { get; }
```

- *Type:* string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.timeStarted"></a>

```csharp
public string TimeStarted { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.internalValue"></a>

```csharp
public DatasciencePipelineRunStepRuns InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRuns">DatasciencePipelineRunStepRuns</a>

---


### DatasciencePipelineRunTimeoutsOutputReference <a name="DatasciencePipelineRunTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatasciencePipelineRunTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



