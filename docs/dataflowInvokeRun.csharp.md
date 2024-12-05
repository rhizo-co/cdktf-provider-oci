# `dataflowInvokeRun` Submodule <a name="`dataflowInvokeRun` Submodule" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataflowInvokeRun <a name="DataflowInvokeRun" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run oci_dataflow_invoke_run}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataflowInvokeRun(Construct Scope, string Id, DataflowInvokeRunConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig">DataflowInvokeRunConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig">DataflowInvokeRunConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putApplicationLogConfig">PutApplicationLogConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putDriverShapeConfig">PutDriverShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putExecutorShapeConfig">PutExecutorShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetApplicationId">ResetApplicationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetApplicationLogConfig">ResetApplicationLogConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetArchiveUri">ResetArchiveUri</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetArguments">ResetArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetAsynchronous">ResetAsynchronous</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetDriverShape">ResetDriverShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetDriverShapeConfig">ResetDriverShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetExecute">ResetExecute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetExecutorShape">ResetExecutorShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetExecutorShapeConfig">ResetExecutorShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetIdleTimeoutInMinutes">ResetIdleTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetLogsBucketUri">ResetLogsBucketUri</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetMaxDurationInMinutes">ResetMaxDurationInMinutes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetMetastoreId">ResetMetastoreId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetNumExecutors">ResetNumExecutors</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetOpcParentRptUrl">ResetOpcParentRptUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetPoolId">ResetPoolId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetSparkVersion">ResetSparkVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetWarehouseBucketUri">ResetWarehouseBucketUri</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApplicationLogConfig` <a name="PutApplicationLogConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putApplicationLogConfig"></a>

```csharp
private void PutApplicationLogConfig(DataflowInvokeRunApplicationLogConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putApplicationLogConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig">DataflowInvokeRunApplicationLogConfig</a>

---

##### `PutDriverShapeConfig` <a name="PutDriverShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putDriverShapeConfig"></a>

```csharp
private void PutDriverShapeConfig(DataflowInvokeRunDriverShapeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putDriverShapeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig">DataflowInvokeRunDriverShapeConfig</a>

---

##### `PutExecutorShapeConfig` <a name="PutExecutorShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putExecutorShapeConfig"></a>

```csharp
private void PutExecutorShapeConfig(DataflowInvokeRunExecutorShapeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putExecutorShapeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig">DataflowInvokeRunExecutorShapeConfig</a>

---

##### `PutParameters` <a name="PutParameters" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putParameters"></a>

```csharp
private void PutParameters(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putParameters.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putTimeouts"></a>

```csharp
private void PutTimeouts(DataflowInvokeRunTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts">DataflowInvokeRunTimeouts</a>

---

##### `ResetApplicationId` <a name="ResetApplicationId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetApplicationId"></a>

```csharp
private void ResetApplicationId()
```

##### `ResetApplicationLogConfig` <a name="ResetApplicationLogConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetApplicationLogConfig"></a>

```csharp
private void ResetApplicationLogConfig()
```

##### `ResetArchiveUri` <a name="ResetArchiveUri" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetArchiveUri"></a>

```csharp
private void ResetArchiveUri()
```

##### `ResetArguments` <a name="ResetArguments" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetArguments"></a>

```csharp
private void ResetArguments()
```

##### `ResetAsynchronous` <a name="ResetAsynchronous" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetAsynchronous"></a>

```csharp
private void ResetAsynchronous()
```

##### `ResetConfiguration` <a name="ResetConfiguration" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetConfiguration"></a>

```csharp
private void ResetConfiguration()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetDriverShape` <a name="ResetDriverShape" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetDriverShape"></a>

```csharp
private void ResetDriverShape()
```

##### `ResetDriverShapeConfig` <a name="ResetDriverShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetDriverShapeConfig"></a>

```csharp
private void ResetDriverShapeConfig()
```

##### `ResetExecute` <a name="ResetExecute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetExecute"></a>

```csharp
private void ResetExecute()
```

##### `ResetExecutorShape` <a name="ResetExecutorShape" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetExecutorShape"></a>

```csharp
private void ResetExecutorShape()
```

##### `ResetExecutorShapeConfig` <a name="ResetExecutorShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetExecutorShapeConfig"></a>

```csharp
private void ResetExecutorShapeConfig()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdleTimeoutInMinutes` <a name="ResetIdleTimeoutInMinutes" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetIdleTimeoutInMinutes"></a>

```csharp
private void ResetIdleTimeoutInMinutes()
```

##### `ResetLogsBucketUri` <a name="ResetLogsBucketUri" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetLogsBucketUri"></a>

```csharp
private void ResetLogsBucketUri()
```

##### `ResetMaxDurationInMinutes` <a name="ResetMaxDurationInMinutes" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetMaxDurationInMinutes"></a>

```csharp
private void ResetMaxDurationInMinutes()
```

##### `ResetMetastoreId` <a name="ResetMetastoreId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetMetastoreId"></a>

```csharp
private void ResetMetastoreId()
```

##### `ResetNumExecutors` <a name="ResetNumExecutors" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetNumExecutors"></a>

```csharp
private void ResetNumExecutors()
```

##### `ResetOpcParentRptUrl` <a name="ResetOpcParentRptUrl" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetOpcParentRptUrl"></a>

```csharp
private void ResetOpcParentRptUrl()
```

##### `ResetParameters` <a name="ResetParameters" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetPoolId` <a name="ResetPoolId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetPoolId"></a>

```csharp
private void ResetPoolId()
```

##### `ResetSparkVersion` <a name="ResetSparkVersion" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetSparkVersion"></a>

```csharp
private void ResetSparkVersion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetWarehouseBucketUri` <a name="ResetWarehouseBucketUri" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.resetWarehouseBucketUri"></a>

```csharp
private void ResetWarehouseBucketUri()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataflowInvokeRun resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataflowInvokeRun.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataflowInvokeRun.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataflowInvokeRun.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataflowInvokeRun.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataflowInvokeRun resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataflowInvokeRun to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataflowInvokeRun that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataflowInvokeRun to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.applicationLogConfig">ApplicationLogConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference">DataflowInvokeRunApplicationLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.className">ClassName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.dataReadInBytes">DataReadInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.dataWrittenInBytes">DataWrittenInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.driverShapeConfig">DriverShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference">DataflowInvokeRunDriverShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.executorShapeConfig">ExecutorShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference">DataflowInvokeRunExecutorShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.fileUri">FileUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.language">Language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.opcRequestId">OpcRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.ownerPrincipalId">OwnerPrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.ownerUserName">OwnerUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.parameters">Parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList">DataflowInvokeRunParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.privateEndpointDnsZones">PrivateEndpointDnsZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.privateEndpointId">PrivateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.privateEndpointMaxHostCount">PrivateEndpointMaxHostCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.privateEndpointNsgIds">PrivateEndpointNsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.privateEndpointSubnetId">PrivateEndpointSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.runDurationInMilliseconds">RunDurationInMilliseconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference">DataflowInvokeRunTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.totalOcpu">TotalOcpu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.applicationLogConfigInput">ApplicationLogConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig">DataflowInvokeRunApplicationLogConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.archiveUriInput">ArchiveUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.argumentsInput">ArgumentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.asynchronousInput">AsynchronousInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.configurationInput">ConfigurationInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.driverShapeConfigInput">DriverShapeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig">DataflowInvokeRunDriverShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.driverShapeInput">DriverShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.executeInput">ExecuteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.executorShapeConfigInput">ExecutorShapeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig">DataflowInvokeRunExecutorShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.executorShapeInput">ExecutorShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.idleTimeoutInMinutesInput">IdleTimeoutInMinutesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.logsBucketUriInput">LogsBucketUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.maxDurationInMinutesInput">MaxDurationInMinutesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.metastoreIdInput">MetastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.numExecutorsInput">NumExecutorsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.opcParentRptUrlInput">OpcParentRptUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.parametersInput">ParametersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.poolIdInput">PoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.sparkVersionInput">SparkVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.warehouseBucketUriInput">WarehouseBucketUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.archiveUri">ArchiveUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.arguments">Arguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.asynchronous">Asynchronous</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.configuration">Configuration</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.driverShape">DriverShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.execute">Execute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.executorShape">ExecutorShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.idleTimeoutInMinutes">IdleTimeoutInMinutes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.logsBucketUri">LogsBucketUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.maxDurationInMinutes">MaxDurationInMinutes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.metastoreId">MetastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.numExecutors">NumExecutors</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.opcParentRptUrl">OpcParentRptUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.poolId">PoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.sparkVersion">SparkVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.warehouseBucketUri">WarehouseBucketUri</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ApplicationLogConfig`<sup>Required</sup> <a name="ApplicationLogConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.applicationLogConfig"></a>

```csharp
public DataflowInvokeRunApplicationLogConfigOutputReference ApplicationLogConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference">DataflowInvokeRunApplicationLogConfigOutputReference</a>

---

##### `ClassName`<sup>Required</sup> <a name="ClassName" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.className"></a>

```csharp
public string ClassName { get; }
```

- *Type:* string

---

##### `DataReadInBytes`<sup>Required</sup> <a name="DataReadInBytes" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.dataReadInBytes"></a>

```csharp
public string DataReadInBytes { get; }
```

- *Type:* string

---

##### `DataWrittenInBytes`<sup>Required</sup> <a name="DataWrittenInBytes" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.dataWrittenInBytes"></a>

```csharp
public string DataWrittenInBytes { get; }
```

- *Type:* string

---

##### `DriverShapeConfig`<sup>Required</sup> <a name="DriverShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.driverShapeConfig"></a>

```csharp
public DataflowInvokeRunDriverShapeConfigOutputReference DriverShapeConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference">DataflowInvokeRunDriverShapeConfigOutputReference</a>

---

##### `ExecutorShapeConfig`<sup>Required</sup> <a name="ExecutorShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.executorShapeConfig"></a>

```csharp
public DataflowInvokeRunExecutorShapeConfigOutputReference ExecutorShapeConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference">DataflowInvokeRunExecutorShapeConfigOutputReference</a>

---

##### `FileUri`<sup>Required</sup> <a name="FileUri" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.fileUri"></a>

```csharp
public string FileUri { get; }
```

- *Type:* string

---

##### `Language`<sup>Required</sup> <a name="Language" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.language"></a>

```csharp
public string Language { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `OpcRequestId`<sup>Required</sup> <a name="OpcRequestId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.opcRequestId"></a>

```csharp
public string OpcRequestId { get; }
```

- *Type:* string

---

##### `OwnerPrincipalId`<sup>Required</sup> <a name="OwnerPrincipalId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.ownerPrincipalId"></a>

```csharp
public string OwnerPrincipalId { get; }
```

- *Type:* string

---

##### `OwnerUserName`<sup>Required</sup> <a name="OwnerUserName" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.ownerUserName"></a>

```csharp
public string OwnerUserName { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.parameters"></a>

```csharp
public DataflowInvokeRunParametersList Parameters { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList">DataflowInvokeRunParametersList</a>

---

##### `PrivateEndpointDnsZones`<sup>Required</sup> <a name="PrivateEndpointDnsZones" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.privateEndpointDnsZones"></a>

```csharp
public string[] PrivateEndpointDnsZones { get; }
```

- *Type:* string[]

---

##### `PrivateEndpointId`<sup>Required</sup> <a name="PrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.privateEndpointId"></a>

```csharp
public string PrivateEndpointId { get; }
```

- *Type:* string

---

##### `PrivateEndpointMaxHostCount`<sup>Required</sup> <a name="PrivateEndpointMaxHostCount" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.privateEndpointMaxHostCount"></a>

```csharp
public double PrivateEndpointMaxHostCount { get; }
```

- *Type:* double

---

##### `PrivateEndpointNsgIds`<sup>Required</sup> <a name="PrivateEndpointNsgIds" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.privateEndpointNsgIds"></a>

```csharp
public string[] PrivateEndpointNsgIds { get; }
```

- *Type:* string[]

---

##### `PrivateEndpointSubnetId`<sup>Required</sup> <a name="PrivateEndpointSubnetId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.privateEndpointSubnetId"></a>

```csharp
public string PrivateEndpointSubnetId { get; }
```

- *Type:* string

---

##### `RunDurationInMilliseconds`<sup>Required</sup> <a name="RunDurationInMilliseconds" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.runDurationInMilliseconds"></a>

```csharp
public string RunDurationInMilliseconds { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.timeouts"></a>

```csharp
public DataflowInvokeRunTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference">DataflowInvokeRunTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `TotalOcpu`<sup>Required</sup> <a name="TotalOcpu" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.totalOcpu"></a>

```csharp
public double TotalOcpu { get; }
```

- *Type:* double

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `ApplicationLogConfigInput`<sup>Optional</sup> <a name="ApplicationLogConfigInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.applicationLogConfigInput"></a>

```csharp
public DataflowInvokeRunApplicationLogConfig ApplicationLogConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig">DataflowInvokeRunApplicationLogConfig</a>

---

##### `ArchiveUriInput`<sup>Optional</sup> <a name="ArchiveUriInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.archiveUriInput"></a>

```csharp
public string ArchiveUriInput { get; }
```

- *Type:* string

---

##### `ArgumentsInput`<sup>Optional</sup> <a name="ArgumentsInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.argumentsInput"></a>

```csharp
public string[] ArgumentsInput { get; }
```

- *Type:* string[]

---

##### `AsynchronousInput`<sup>Optional</sup> <a name="AsynchronousInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.asynchronousInput"></a>

```csharp
public object AsynchronousInput { get; }
```

- *Type:* object

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.configurationInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ConfigurationInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DriverShapeConfigInput`<sup>Optional</sup> <a name="DriverShapeConfigInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.driverShapeConfigInput"></a>

```csharp
public DataflowInvokeRunDriverShapeConfig DriverShapeConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig">DataflowInvokeRunDriverShapeConfig</a>

---

##### `DriverShapeInput`<sup>Optional</sup> <a name="DriverShapeInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.driverShapeInput"></a>

```csharp
public string DriverShapeInput { get; }
```

- *Type:* string

---

##### `ExecuteInput`<sup>Optional</sup> <a name="ExecuteInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.executeInput"></a>

```csharp
public string ExecuteInput { get; }
```

- *Type:* string

---

##### `ExecutorShapeConfigInput`<sup>Optional</sup> <a name="ExecutorShapeConfigInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.executorShapeConfigInput"></a>

```csharp
public DataflowInvokeRunExecutorShapeConfig ExecutorShapeConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig">DataflowInvokeRunExecutorShapeConfig</a>

---

##### `ExecutorShapeInput`<sup>Optional</sup> <a name="ExecutorShapeInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.executorShapeInput"></a>

```csharp
public string ExecutorShapeInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IdleTimeoutInMinutesInput`<sup>Optional</sup> <a name="IdleTimeoutInMinutesInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.idleTimeoutInMinutesInput"></a>

```csharp
public string IdleTimeoutInMinutesInput { get; }
```

- *Type:* string

---

##### `LogsBucketUriInput`<sup>Optional</sup> <a name="LogsBucketUriInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.logsBucketUriInput"></a>

```csharp
public string LogsBucketUriInput { get; }
```

- *Type:* string

---

##### `MaxDurationInMinutesInput`<sup>Optional</sup> <a name="MaxDurationInMinutesInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.maxDurationInMinutesInput"></a>

```csharp
public string MaxDurationInMinutesInput { get; }
```

- *Type:* string

---

##### `MetastoreIdInput`<sup>Optional</sup> <a name="MetastoreIdInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.metastoreIdInput"></a>

```csharp
public string MetastoreIdInput { get; }
```

- *Type:* string

---

##### `NumExecutorsInput`<sup>Optional</sup> <a name="NumExecutorsInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.numExecutorsInput"></a>

```csharp
public double NumExecutorsInput { get; }
```

- *Type:* double

---

##### `OpcParentRptUrlInput`<sup>Optional</sup> <a name="OpcParentRptUrlInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.opcParentRptUrlInput"></a>

```csharp
public string OpcParentRptUrlInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.parametersInput"></a>

```csharp
public object ParametersInput { get; }
```

- *Type:* object

---

##### `PoolIdInput`<sup>Optional</sup> <a name="PoolIdInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.poolIdInput"></a>

```csharp
public string PoolIdInput { get; }
```

- *Type:* string

---

##### `SparkVersionInput`<sup>Optional</sup> <a name="SparkVersionInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.sparkVersionInput"></a>

```csharp
public string SparkVersionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `WarehouseBucketUriInput`<sup>Optional</sup> <a name="WarehouseBucketUriInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.warehouseBucketUriInput"></a>

```csharp
public string WarehouseBucketUriInput { get; }
```

- *Type:* string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `ArchiveUri`<sup>Required</sup> <a name="ArchiveUri" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.archiveUri"></a>

```csharp
public string ArchiveUri { get; }
```

- *Type:* string

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.arguments"></a>

```csharp
public string[] Arguments { get; }
```

- *Type:* string[]

---

##### `Asynchronous`<sup>Required</sup> <a name="Asynchronous" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.asynchronous"></a>

```csharp
public object Asynchronous { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.configuration"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Configuration { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DriverShape`<sup>Required</sup> <a name="DriverShape" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.driverShape"></a>

```csharp
public string DriverShape { get; }
```

- *Type:* string

---

##### `Execute`<sup>Required</sup> <a name="Execute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.execute"></a>

```csharp
public string Execute { get; }
```

- *Type:* string

---

##### `ExecutorShape`<sup>Required</sup> <a name="ExecutorShape" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.executorShape"></a>

```csharp
public string ExecutorShape { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdleTimeoutInMinutes`<sup>Required</sup> <a name="IdleTimeoutInMinutes" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.idleTimeoutInMinutes"></a>

```csharp
public string IdleTimeoutInMinutes { get; }
```

- *Type:* string

---

##### `LogsBucketUri`<sup>Required</sup> <a name="LogsBucketUri" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.logsBucketUri"></a>

```csharp
public string LogsBucketUri { get; }
```

- *Type:* string

---

##### `MaxDurationInMinutes`<sup>Required</sup> <a name="MaxDurationInMinutes" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.maxDurationInMinutes"></a>

```csharp
public string MaxDurationInMinutes { get; }
```

- *Type:* string

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.metastoreId"></a>

```csharp
public string MetastoreId { get; }
```

- *Type:* string

---

##### `NumExecutors`<sup>Required</sup> <a name="NumExecutors" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.numExecutors"></a>

```csharp
public double NumExecutors { get; }
```

- *Type:* double

---

##### `OpcParentRptUrl`<sup>Required</sup> <a name="OpcParentRptUrl" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.opcParentRptUrl"></a>

```csharp
public string OpcParentRptUrl { get; }
```

- *Type:* string

---

##### `PoolId`<sup>Required</sup> <a name="PoolId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.poolId"></a>

```csharp
public string PoolId { get; }
```

- *Type:* string

---

##### `SparkVersion`<sup>Required</sup> <a name="SparkVersion" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.sparkVersion"></a>

```csharp
public string SparkVersion { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `WarehouseBucketUri`<sup>Required</sup> <a name="WarehouseBucketUri" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.warehouseBucketUri"></a>

```csharp
public string WarehouseBucketUri { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRun.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataflowInvokeRunApplicationLogConfig <a name="DataflowInvokeRunApplicationLogConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataflowInvokeRunApplicationLogConfig {
    string LogGroupId,
    string LogId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig.property.logGroupId">LogGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#log_group_id DataflowInvokeRun#log_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig.property.logId">LogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#log_id DataflowInvokeRun#log_id}. |

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig.property.logGroupId"></a>

```csharp
public string LogGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#log_group_id DataflowInvokeRun#log_group_id}.

---

##### `LogId`<sup>Required</sup> <a name="LogId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig.property.logId"></a>

```csharp
public string LogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#log_id DataflowInvokeRun#log_id}.

---

### DataflowInvokeRunConfig <a name="DataflowInvokeRunConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataflowInvokeRunConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string ApplicationId = null,
    DataflowInvokeRunApplicationLogConfig ApplicationLogConfig = null,
    string ArchiveUri = null,
    string[] Arguments = null,
    object Asynchronous = null,
    System.Collections.Generic.IDictionary<string, string> Configuration = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DisplayName = null,
    string DriverShape = null,
    DataflowInvokeRunDriverShapeConfig DriverShapeConfig = null,
    string Execute = null,
    string ExecutorShape = null,
    DataflowInvokeRunExecutorShapeConfig ExecutorShapeConfig = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    string IdleTimeoutInMinutes = null,
    string LogsBucketUri = null,
    string MaxDurationInMinutes = null,
    string MetastoreId = null,
    double NumExecutors = null,
    string OpcParentRptUrl = null,
    object Parameters = null,
    string PoolId = null,
    string SparkVersion = null,
    DataflowInvokeRunTimeouts Timeouts = null,
    string Type = null,
    string WarehouseBucketUri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#compartment_id DataflowInvokeRun#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.applicationId">ApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#application_id DataflowInvokeRun#application_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.applicationLogConfig">ApplicationLogConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig">DataflowInvokeRunApplicationLogConfig</a></code> | application_log_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.archiveUri">ArchiveUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#archive_uri DataflowInvokeRun#archive_uri}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.arguments">Arguments</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#arguments DataflowInvokeRun#arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.asynchronous">Asynchronous</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#asynchronous DataflowInvokeRun#asynchronous}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.configuration">Configuration</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#configuration DataflowInvokeRun#configuration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#defined_tags DataflowInvokeRun#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#display_name DataflowInvokeRun#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.driverShape">DriverShape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#driver_shape DataflowInvokeRun#driver_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.driverShapeConfig">DriverShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig">DataflowInvokeRunDriverShapeConfig</a></code> | driver_shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.execute">Execute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#execute DataflowInvokeRun#execute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.executorShape">ExecutorShape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#executor_shape DataflowInvokeRun#executor_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.executorShapeConfig">ExecutorShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig">DataflowInvokeRunExecutorShapeConfig</a></code> | executor_shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#freeform_tags DataflowInvokeRun#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#id DataflowInvokeRun#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.idleTimeoutInMinutes">IdleTimeoutInMinutes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#idle_timeout_in_minutes DataflowInvokeRun#idle_timeout_in_minutes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.logsBucketUri">LogsBucketUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#logs_bucket_uri DataflowInvokeRun#logs_bucket_uri}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.maxDurationInMinutes">MaxDurationInMinutes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#max_duration_in_minutes DataflowInvokeRun#max_duration_in_minutes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.metastoreId">MetastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#metastore_id DataflowInvokeRun#metastore_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.numExecutors">NumExecutors</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#num_executors DataflowInvokeRun#num_executors}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.opcParentRptUrl">OpcParentRptUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#opc_parent_rpt_url DataflowInvokeRun#opc_parent_rpt_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.parameters">Parameters</a></code> | <code>object</code> | parameters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.poolId">PoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#pool_id DataflowInvokeRun#pool_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.sparkVersion">SparkVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#spark_version DataflowInvokeRun#spark_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts">DataflowInvokeRunTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#type DataflowInvokeRun#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.warehouseBucketUri">WarehouseBucketUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#warehouse_bucket_uri DataflowInvokeRun#warehouse_bucket_uri}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#compartment_id DataflowInvokeRun#compartment_id}.

---

##### `ApplicationId`<sup>Optional</sup> <a name="ApplicationId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#application_id DataflowInvokeRun#application_id}.

---

##### `ApplicationLogConfig`<sup>Optional</sup> <a name="ApplicationLogConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.applicationLogConfig"></a>

```csharp
public DataflowInvokeRunApplicationLogConfig ApplicationLogConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig">DataflowInvokeRunApplicationLogConfig</a>

application_log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#application_log_config DataflowInvokeRun#application_log_config}

---

##### `ArchiveUri`<sup>Optional</sup> <a name="ArchiveUri" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.archiveUri"></a>

```csharp
public string ArchiveUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#archive_uri DataflowInvokeRun#archive_uri}.

---

##### `Arguments`<sup>Optional</sup> <a name="Arguments" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.arguments"></a>

```csharp
public string[] Arguments { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#arguments DataflowInvokeRun#arguments}.

---

##### `Asynchronous`<sup>Optional</sup> <a name="Asynchronous" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.asynchronous"></a>

```csharp
public object Asynchronous { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#asynchronous DataflowInvokeRun#asynchronous}.

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.configuration"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Configuration { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#configuration DataflowInvokeRun#configuration}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#defined_tags DataflowInvokeRun#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#display_name DataflowInvokeRun#display_name}.

---

##### `DriverShape`<sup>Optional</sup> <a name="DriverShape" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.driverShape"></a>

```csharp
public string DriverShape { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#driver_shape DataflowInvokeRun#driver_shape}.

---

##### `DriverShapeConfig`<sup>Optional</sup> <a name="DriverShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.driverShapeConfig"></a>

```csharp
public DataflowInvokeRunDriverShapeConfig DriverShapeConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig">DataflowInvokeRunDriverShapeConfig</a>

driver_shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#driver_shape_config DataflowInvokeRun#driver_shape_config}

---

##### `Execute`<sup>Optional</sup> <a name="Execute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.execute"></a>

```csharp
public string Execute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#execute DataflowInvokeRun#execute}.

---

##### `ExecutorShape`<sup>Optional</sup> <a name="ExecutorShape" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.executorShape"></a>

```csharp
public string ExecutorShape { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#executor_shape DataflowInvokeRun#executor_shape}.

---

##### `ExecutorShapeConfig`<sup>Optional</sup> <a name="ExecutorShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.executorShapeConfig"></a>

```csharp
public DataflowInvokeRunExecutorShapeConfig ExecutorShapeConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig">DataflowInvokeRunExecutorShapeConfig</a>

executor_shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#executor_shape_config DataflowInvokeRun#executor_shape_config}

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#freeform_tags DataflowInvokeRun#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#id DataflowInvokeRun#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdleTimeoutInMinutes`<sup>Optional</sup> <a name="IdleTimeoutInMinutes" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.idleTimeoutInMinutes"></a>

```csharp
public string IdleTimeoutInMinutes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#idle_timeout_in_minutes DataflowInvokeRun#idle_timeout_in_minutes}.

---

##### `LogsBucketUri`<sup>Optional</sup> <a name="LogsBucketUri" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.logsBucketUri"></a>

```csharp
public string LogsBucketUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#logs_bucket_uri DataflowInvokeRun#logs_bucket_uri}.

---

##### `MaxDurationInMinutes`<sup>Optional</sup> <a name="MaxDurationInMinutes" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.maxDurationInMinutes"></a>

```csharp
public string MaxDurationInMinutes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#max_duration_in_minutes DataflowInvokeRun#max_duration_in_minutes}.

---

##### `MetastoreId`<sup>Optional</sup> <a name="MetastoreId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.metastoreId"></a>

```csharp
public string MetastoreId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#metastore_id DataflowInvokeRun#metastore_id}.

---

##### `NumExecutors`<sup>Optional</sup> <a name="NumExecutors" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.numExecutors"></a>

```csharp
public double NumExecutors { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#num_executors DataflowInvokeRun#num_executors}.

---

##### `OpcParentRptUrl`<sup>Optional</sup> <a name="OpcParentRptUrl" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.opcParentRptUrl"></a>

```csharp
public string OpcParentRptUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#opc_parent_rpt_url DataflowInvokeRun#opc_parent_rpt_url}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.parameters"></a>

```csharp
public object Parameters { get; set; }
```

- *Type:* object

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#parameters DataflowInvokeRun#parameters}

---

##### `PoolId`<sup>Optional</sup> <a name="PoolId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.poolId"></a>

```csharp
public string PoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#pool_id DataflowInvokeRun#pool_id}.

---

##### `SparkVersion`<sup>Optional</sup> <a name="SparkVersion" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.sparkVersion"></a>

```csharp
public string SparkVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#spark_version DataflowInvokeRun#spark_version}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.timeouts"></a>

```csharp
public DataflowInvokeRunTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts">DataflowInvokeRunTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#timeouts DataflowInvokeRun#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#type DataflowInvokeRun#type}.

---

##### `WarehouseBucketUri`<sup>Optional</sup> <a name="WarehouseBucketUri" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunConfig.property.warehouseBucketUri"></a>

```csharp
public string WarehouseBucketUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#warehouse_bucket_uri DataflowInvokeRun#warehouse_bucket_uri}.

---

### DataflowInvokeRunDriverShapeConfig <a name="DataflowInvokeRunDriverShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataflowInvokeRunDriverShapeConfig {
    double MemoryInGbs = null,
    double Ocpus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#memory_in_gbs DataflowInvokeRun#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig.property.ocpus">Ocpus</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#ocpus DataflowInvokeRun#ocpus}. |

---

##### `MemoryInGbs`<sup>Optional</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#memory_in_gbs DataflowInvokeRun#memory_in_gbs}.

---

##### `Ocpus`<sup>Optional</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig.property.ocpus"></a>

```csharp
public double Ocpus { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#ocpus DataflowInvokeRun#ocpus}.

---

### DataflowInvokeRunExecutorShapeConfig <a name="DataflowInvokeRunExecutorShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataflowInvokeRunExecutorShapeConfig {
    double MemoryInGbs = null,
    double Ocpus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#memory_in_gbs DataflowInvokeRun#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig.property.ocpus">Ocpus</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#ocpus DataflowInvokeRun#ocpus}. |

---

##### `MemoryInGbs`<sup>Optional</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#memory_in_gbs DataflowInvokeRun#memory_in_gbs}.

---

##### `Ocpus`<sup>Optional</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig.property.ocpus"></a>

```csharp
public double Ocpus { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#ocpus DataflowInvokeRun#ocpus}.

---

### DataflowInvokeRunParameters <a name="DataflowInvokeRunParameters" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataflowInvokeRunParameters {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#name DataflowInvokeRun#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#value DataflowInvokeRun#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#name DataflowInvokeRun#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParameters.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#value DataflowInvokeRun#value}.

---

### DataflowInvokeRunTimeouts <a name="DataflowInvokeRunTimeouts" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataflowInvokeRunTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#create DataflowInvokeRun#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#delete DataflowInvokeRun#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#update DataflowInvokeRun#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#create DataflowInvokeRun#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#delete DataflowInvokeRun#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_invoke_run#update DataflowInvokeRun#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataflowInvokeRunApplicationLogConfigOutputReference <a name="DataflowInvokeRunApplicationLogConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataflowInvokeRunApplicationLogConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.logGroupIdInput">LogGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.logIdInput">LogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.logGroupId">LogGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.logId">LogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig">DataflowInvokeRunApplicationLogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogGroupIdInput`<sup>Optional</sup> <a name="LogGroupIdInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.logGroupIdInput"></a>

```csharp
public string LogGroupIdInput { get; }
```

- *Type:* string

---

##### `LogIdInput`<sup>Optional</sup> <a name="LogIdInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.logIdInput"></a>

```csharp
public string LogIdInput { get; }
```

- *Type:* string

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.logGroupId"></a>

```csharp
public string LogGroupId { get; }
```

- *Type:* string

---

##### `LogId`<sup>Required</sup> <a name="LogId" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.logId"></a>

```csharp
public string LogId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfigOutputReference.property.internalValue"></a>

```csharp
public DataflowInvokeRunApplicationLogConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunApplicationLogConfig">DataflowInvokeRunApplicationLogConfig</a>

---


### DataflowInvokeRunDriverShapeConfigOutputReference <a name="DataflowInvokeRunDriverShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataflowInvokeRunDriverShapeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.resetMemoryInGbs">ResetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.resetOcpus">ResetOcpus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMemoryInGbs` <a name="ResetMemoryInGbs" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.resetMemoryInGbs"></a>

```csharp
private void ResetMemoryInGbs()
```

##### `ResetOcpus` <a name="ResetOcpus" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.resetOcpus"></a>

```csharp
private void ResetOcpus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.memoryInGbsInput">MemoryInGbsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.ocpusInput">OcpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig">DataflowInvokeRunDriverShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MemoryInGbsInput`<sup>Optional</sup> <a name="MemoryInGbsInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.memoryInGbsInput"></a>

```csharp
public double MemoryInGbsInput { get; }
```

- *Type:* double

---

##### `OcpusInput`<sup>Optional</sup> <a name="OcpusInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.ocpusInput"></a>

```csharp
public double OcpusInput { get; }
```

- *Type:* double

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; }
```

- *Type:* double

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.ocpus"></a>

```csharp
public double Ocpus { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfigOutputReference.property.internalValue"></a>

```csharp
public DataflowInvokeRunDriverShapeConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunDriverShapeConfig">DataflowInvokeRunDriverShapeConfig</a>

---


### DataflowInvokeRunExecutorShapeConfigOutputReference <a name="DataflowInvokeRunExecutorShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataflowInvokeRunExecutorShapeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.resetMemoryInGbs">ResetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.resetOcpus">ResetOcpus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMemoryInGbs` <a name="ResetMemoryInGbs" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.resetMemoryInGbs"></a>

```csharp
private void ResetMemoryInGbs()
```

##### `ResetOcpus` <a name="ResetOcpus" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.resetOcpus"></a>

```csharp
private void ResetOcpus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.memoryInGbsInput">MemoryInGbsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.ocpusInput">OcpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig">DataflowInvokeRunExecutorShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MemoryInGbsInput`<sup>Optional</sup> <a name="MemoryInGbsInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.memoryInGbsInput"></a>

```csharp
public double MemoryInGbsInput { get; }
```

- *Type:* double

---

##### `OcpusInput`<sup>Optional</sup> <a name="OcpusInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.ocpusInput"></a>

```csharp
public double OcpusInput { get; }
```

- *Type:* double

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; }
```

- *Type:* double

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.ocpus"></a>

```csharp
public double Ocpus { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfigOutputReference.property.internalValue"></a>

```csharp
public DataflowInvokeRunExecutorShapeConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunExecutorShapeConfig">DataflowInvokeRunExecutorShapeConfig</a>

---


### DataflowInvokeRunParametersList <a name="DataflowInvokeRunParametersList" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataflowInvokeRunParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.get"></a>

```csharp
private DataflowInvokeRunParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataflowInvokeRunParametersOutputReference <a name="DataflowInvokeRunParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataflowInvokeRunParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunParametersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataflowInvokeRunTimeoutsOutputReference <a name="DataflowInvokeRunTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataflowInvokeRunTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataflowInvokeRun.DataflowInvokeRunTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



