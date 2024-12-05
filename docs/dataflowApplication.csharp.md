# `dataflowApplication` Submodule <a name="`dataflowApplication` Submodule" id="rhizo-co-terraform-provider-oci.dataflowApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataflowApplication <a name="DataflowApplication" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application oci_dataflow_application}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataflowApplication(Construct Scope, string Id, DataflowApplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig">DataflowApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig">DataflowApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.putApplicationLogConfig">PutApplicationLogConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.putDriverShapeConfig">PutDriverShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.putExecutorShapeConfig">PutExecutorShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetApplicationLogConfig">ResetApplicationLogConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetArchiveUri">ResetArchiveUri</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetArguments">ResetArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetClassName">ResetClassName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetDriverShapeConfig">ResetDriverShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetExecute">ResetExecute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetExecutorShapeConfig">ResetExecutorShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetFileUri">ResetFileUri</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetIdleTimeoutInMinutes">ResetIdleTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetLogsBucketUri">ResetLogsBucketUri</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetMaxDurationInMinutes">ResetMaxDurationInMinutes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetMetastoreId">ResetMetastoreId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetPoolId">ResetPoolId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetPrivateEndpointId">ResetPrivateEndpointId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetWarehouseBucketUri">ResetWarehouseBucketUri</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApplicationLogConfig` <a name="PutApplicationLogConfig" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.putApplicationLogConfig"></a>

```csharp
private void PutApplicationLogConfig(DataflowApplicationApplicationLogConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.putApplicationLogConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfig">DataflowApplicationApplicationLogConfig</a>

---

##### `PutDriverShapeConfig` <a name="PutDriverShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.putDriverShapeConfig"></a>

```csharp
private void PutDriverShapeConfig(DataflowApplicationDriverShapeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.putDriverShapeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfig">DataflowApplicationDriverShapeConfig</a>

---

##### `PutExecutorShapeConfig` <a name="PutExecutorShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.putExecutorShapeConfig"></a>

```csharp
private void PutExecutorShapeConfig(DataflowApplicationExecutorShapeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.putExecutorShapeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfig">DataflowApplicationExecutorShapeConfig</a>

---

##### `PutParameters` <a name="PutParameters" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.putParameters"></a>

```csharp
private void PutParameters(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.putParameters.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.putTimeouts"></a>

```csharp
private void PutTimeouts(DataflowApplicationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeouts">DataflowApplicationTimeouts</a>

---

##### `ResetApplicationLogConfig` <a name="ResetApplicationLogConfig" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetApplicationLogConfig"></a>

```csharp
private void ResetApplicationLogConfig()
```

##### `ResetArchiveUri` <a name="ResetArchiveUri" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetArchiveUri"></a>

```csharp
private void ResetArchiveUri()
```

##### `ResetArguments` <a name="ResetArguments" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetArguments"></a>

```csharp
private void ResetArguments()
```

##### `ResetClassName` <a name="ResetClassName" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetClassName"></a>

```csharp
private void ResetClassName()
```

##### `ResetConfiguration` <a name="ResetConfiguration" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetConfiguration"></a>

```csharp
private void ResetConfiguration()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDriverShapeConfig` <a name="ResetDriverShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetDriverShapeConfig"></a>

```csharp
private void ResetDriverShapeConfig()
```

##### `ResetExecute` <a name="ResetExecute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetExecute"></a>

```csharp
private void ResetExecute()
```

##### `ResetExecutorShapeConfig` <a name="ResetExecutorShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetExecutorShapeConfig"></a>

```csharp
private void ResetExecutorShapeConfig()
```

##### `ResetFileUri` <a name="ResetFileUri" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetFileUri"></a>

```csharp
private void ResetFileUri()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdleTimeoutInMinutes` <a name="ResetIdleTimeoutInMinutes" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetIdleTimeoutInMinutes"></a>

```csharp
private void ResetIdleTimeoutInMinutes()
```

##### `ResetLogsBucketUri` <a name="ResetLogsBucketUri" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetLogsBucketUri"></a>

```csharp
private void ResetLogsBucketUri()
```

##### `ResetMaxDurationInMinutes` <a name="ResetMaxDurationInMinutes" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetMaxDurationInMinutes"></a>

```csharp
private void ResetMaxDurationInMinutes()
```

##### `ResetMetastoreId` <a name="ResetMetastoreId" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetMetastoreId"></a>

```csharp
private void ResetMetastoreId()
```

##### `ResetParameters` <a name="ResetParameters" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetPoolId` <a name="ResetPoolId" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetPoolId"></a>

```csharp
private void ResetPoolId()
```

##### `ResetPrivateEndpointId` <a name="ResetPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetPrivateEndpointId"></a>

```csharp
private void ResetPrivateEndpointId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetWarehouseBucketUri` <a name="ResetWarehouseBucketUri" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.resetWarehouseBucketUri"></a>

```csharp
private void ResetWarehouseBucketUri()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataflowApplication resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataflowApplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataflowApplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataflowApplication.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataflowApplication.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataflowApplication resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataflowApplication to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataflowApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataflowApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.applicationLogConfig">ApplicationLogConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference">DataflowApplicationApplicationLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.driverShapeConfig">DriverShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference">DataflowApplicationDriverShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.executorShapeConfig">ExecutorShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference">DataflowApplicationExecutorShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.ownerPrincipalId">OwnerPrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.ownerUserName">OwnerUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.parameters">Parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList">DataflowApplicationParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference">DataflowApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.applicationLogConfigInput">ApplicationLogConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfig">DataflowApplicationApplicationLogConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.archiveUriInput">ArchiveUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.argumentsInput">ArgumentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.classNameInput">ClassNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.configurationInput">ConfigurationInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.driverShapeConfigInput">DriverShapeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfig">DataflowApplicationDriverShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.driverShapeInput">DriverShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.executeInput">ExecuteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.executorShapeConfigInput">ExecutorShapeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfig">DataflowApplicationExecutorShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.executorShapeInput">ExecutorShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.fileUriInput">FileUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.idleTimeoutInMinutesInput">IdleTimeoutInMinutesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.languageInput">LanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.logsBucketUriInput">LogsBucketUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.maxDurationInMinutesInput">MaxDurationInMinutesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.metastoreIdInput">MetastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.numExecutorsInput">NumExecutorsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.parametersInput">ParametersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.poolIdInput">PoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.privateEndpointIdInput">PrivateEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.sparkVersionInput">SparkVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.warehouseBucketUriInput">WarehouseBucketUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.archiveUri">ArchiveUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.arguments">Arguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.className">ClassName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.configuration">Configuration</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.driverShape">DriverShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.execute">Execute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.executorShape">ExecutorShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.fileUri">FileUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.idleTimeoutInMinutes">IdleTimeoutInMinutes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.language">Language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.logsBucketUri">LogsBucketUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.maxDurationInMinutes">MaxDurationInMinutes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.metastoreId">MetastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.numExecutors">NumExecutors</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.poolId">PoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.privateEndpointId">PrivateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.sparkVersion">SparkVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.warehouseBucketUri">WarehouseBucketUri</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ApplicationLogConfig`<sup>Required</sup> <a name="ApplicationLogConfig" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.applicationLogConfig"></a>

```csharp
public DataflowApplicationApplicationLogConfigOutputReference ApplicationLogConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference">DataflowApplicationApplicationLogConfigOutputReference</a>

---

##### `DriverShapeConfig`<sup>Required</sup> <a name="DriverShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.driverShapeConfig"></a>

```csharp
public DataflowApplicationDriverShapeConfigOutputReference DriverShapeConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference">DataflowApplicationDriverShapeConfigOutputReference</a>

---

##### `ExecutorShapeConfig`<sup>Required</sup> <a name="ExecutorShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.executorShapeConfig"></a>

```csharp
public DataflowApplicationExecutorShapeConfigOutputReference ExecutorShapeConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference">DataflowApplicationExecutorShapeConfigOutputReference</a>

---

##### `OwnerPrincipalId`<sup>Required</sup> <a name="OwnerPrincipalId" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.ownerPrincipalId"></a>

```csharp
public string OwnerPrincipalId { get; }
```

- *Type:* string

---

##### `OwnerUserName`<sup>Required</sup> <a name="OwnerUserName" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.ownerUserName"></a>

```csharp
public string OwnerUserName { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.parameters"></a>

```csharp
public DataflowApplicationParametersList Parameters { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList">DataflowApplicationParametersList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.timeouts"></a>

```csharp
public DataflowApplicationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference">DataflowApplicationTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `ApplicationLogConfigInput`<sup>Optional</sup> <a name="ApplicationLogConfigInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.applicationLogConfigInput"></a>

```csharp
public DataflowApplicationApplicationLogConfig ApplicationLogConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfig">DataflowApplicationApplicationLogConfig</a>

---

##### `ArchiveUriInput`<sup>Optional</sup> <a name="ArchiveUriInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.archiveUriInput"></a>

```csharp
public string ArchiveUriInput { get; }
```

- *Type:* string

---

##### `ArgumentsInput`<sup>Optional</sup> <a name="ArgumentsInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.argumentsInput"></a>

```csharp
public string[] ArgumentsInput { get; }
```

- *Type:* string[]

---

##### `ClassNameInput`<sup>Optional</sup> <a name="ClassNameInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.classNameInput"></a>

```csharp
public string ClassNameInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.configurationInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ConfigurationInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DriverShapeConfigInput`<sup>Optional</sup> <a name="DriverShapeConfigInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.driverShapeConfigInput"></a>

```csharp
public DataflowApplicationDriverShapeConfig DriverShapeConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfig">DataflowApplicationDriverShapeConfig</a>

---

##### `DriverShapeInput`<sup>Optional</sup> <a name="DriverShapeInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.driverShapeInput"></a>

```csharp
public string DriverShapeInput { get; }
```

- *Type:* string

---

##### `ExecuteInput`<sup>Optional</sup> <a name="ExecuteInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.executeInput"></a>

```csharp
public string ExecuteInput { get; }
```

- *Type:* string

---

##### `ExecutorShapeConfigInput`<sup>Optional</sup> <a name="ExecutorShapeConfigInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.executorShapeConfigInput"></a>

```csharp
public DataflowApplicationExecutorShapeConfig ExecutorShapeConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfig">DataflowApplicationExecutorShapeConfig</a>

---

##### `ExecutorShapeInput`<sup>Optional</sup> <a name="ExecutorShapeInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.executorShapeInput"></a>

```csharp
public string ExecutorShapeInput { get; }
```

- *Type:* string

---

##### `FileUriInput`<sup>Optional</sup> <a name="FileUriInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.fileUriInput"></a>

```csharp
public string FileUriInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IdleTimeoutInMinutesInput`<sup>Optional</sup> <a name="IdleTimeoutInMinutesInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.idleTimeoutInMinutesInput"></a>

```csharp
public string IdleTimeoutInMinutesInput { get; }
```

- *Type:* string

---

##### `LanguageInput`<sup>Optional</sup> <a name="LanguageInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.languageInput"></a>

```csharp
public string LanguageInput { get; }
```

- *Type:* string

---

##### `LogsBucketUriInput`<sup>Optional</sup> <a name="LogsBucketUriInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.logsBucketUriInput"></a>

```csharp
public string LogsBucketUriInput { get; }
```

- *Type:* string

---

##### `MaxDurationInMinutesInput`<sup>Optional</sup> <a name="MaxDurationInMinutesInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.maxDurationInMinutesInput"></a>

```csharp
public string MaxDurationInMinutesInput { get; }
```

- *Type:* string

---

##### `MetastoreIdInput`<sup>Optional</sup> <a name="MetastoreIdInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.metastoreIdInput"></a>

```csharp
public string MetastoreIdInput { get; }
```

- *Type:* string

---

##### `NumExecutorsInput`<sup>Optional</sup> <a name="NumExecutorsInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.numExecutorsInput"></a>

```csharp
public double NumExecutorsInput { get; }
```

- *Type:* double

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.parametersInput"></a>

```csharp
public object ParametersInput { get; }
```

- *Type:* object

---

##### `PoolIdInput`<sup>Optional</sup> <a name="PoolIdInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.poolIdInput"></a>

```csharp
public string PoolIdInput { get; }
```

- *Type:* string

---

##### `PrivateEndpointIdInput`<sup>Optional</sup> <a name="PrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.privateEndpointIdInput"></a>

```csharp
public string PrivateEndpointIdInput { get; }
```

- *Type:* string

---

##### `SparkVersionInput`<sup>Optional</sup> <a name="SparkVersionInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.sparkVersionInput"></a>

```csharp
public string SparkVersionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `WarehouseBucketUriInput`<sup>Optional</sup> <a name="WarehouseBucketUriInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.warehouseBucketUriInput"></a>

```csharp
public string WarehouseBucketUriInput { get; }
```

- *Type:* string

---

##### `ArchiveUri`<sup>Required</sup> <a name="ArchiveUri" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.archiveUri"></a>

```csharp
public string ArchiveUri { get; }
```

- *Type:* string

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.arguments"></a>

```csharp
public string[] Arguments { get; }
```

- *Type:* string[]

---

##### `ClassName`<sup>Required</sup> <a name="ClassName" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.className"></a>

```csharp
public string ClassName { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.configuration"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Configuration { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DriverShape`<sup>Required</sup> <a name="DriverShape" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.driverShape"></a>

```csharp
public string DriverShape { get; }
```

- *Type:* string

---

##### `Execute`<sup>Required</sup> <a name="Execute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.execute"></a>

```csharp
public string Execute { get; }
```

- *Type:* string

---

##### `ExecutorShape`<sup>Required</sup> <a name="ExecutorShape" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.executorShape"></a>

```csharp
public string ExecutorShape { get; }
```

- *Type:* string

---

##### `FileUri`<sup>Required</sup> <a name="FileUri" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.fileUri"></a>

```csharp
public string FileUri { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdleTimeoutInMinutes`<sup>Required</sup> <a name="IdleTimeoutInMinutes" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.idleTimeoutInMinutes"></a>

```csharp
public string IdleTimeoutInMinutes { get; }
```

- *Type:* string

---

##### `Language`<sup>Required</sup> <a name="Language" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.language"></a>

```csharp
public string Language { get; }
```

- *Type:* string

---

##### `LogsBucketUri`<sup>Required</sup> <a name="LogsBucketUri" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.logsBucketUri"></a>

```csharp
public string LogsBucketUri { get; }
```

- *Type:* string

---

##### `MaxDurationInMinutes`<sup>Required</sup> <a name="MaxDurationInMinutes" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.maxDurationInMinutes"></a>

```csharp
public string MaxDurationInMinutes { get; }
```

- *Type:* string

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.metastoreId"></a>

```csharp
public string MetastoreId { get; }
```

- *Type:* string

---

##### `NumExecutors`<sup>Required</sup> <a name="NumExecutors" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.numExecutors"></a>

```csharp
public double NumExecutors { get; }
```

- *Type:* double

---

##### `PoolId`<sup>Required</sup> <a name="PoolId" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.poolId"></a>

```csharp
public string PoolId { get; }
```

- *Type:* string

---

##### `PrivateEndpointId`<sup>Required</sup> <a name="PrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.privateEndpointId"></a>

```csharp
public string PrivateEndpointId { get; }
```

- *Type:* string

---

##### `SparkVersion`<sup>Required</sup> <a name="SparkVersion" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.sparkVersion"></a>

```csharp
public string SparkVersion { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `WarehouseBucketUri`<sup>Required</sup> <a name="WarehouseBucketUri" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.warehouseBucketUri"></a>

```csharp
public string WarehouseBucketUri { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataflowApplicationApplicationLogConfig <a name="DataflowApplicationApplicationLogConfig" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataflowApplicationApplicationLogConfig {
    string LogGroupId,
    string LogId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfig.property.logGroupId">LogGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#log_group_id DataflowApplication#log_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfig.property.logId">LogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#log_id DataflowApplication#log_id}. |

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfig.property.logGroupId"></a>

```csharp
public string LogGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#log_group_id DataflowApplication#log_group_id}.

---

##### `LogId`<sup>Required</sup> <a name="LogId" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfig.property.logId"></a>

```csharp
public string LogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#log_id DataflowApplication#log_id}.

---

### DataflowApplicationConfig <a name="DataflowApplicationConfig" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataflowApplicationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DisplayName,
    string DriverShape,
    string ExecutorShape,
    string Language,
    double NumExecutors,
    string SparkVersion,
    DataflowApplicationApplicationLogConfig ApplicationLogConfig = null,
    string ArchiveUri = null,
    string[] Arguments = null,
    string ClassName = null,
    System.Collections.Generic.IDictionary<string, string> Configuration = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    DataflowApplicationDriverShapeConfig DriverShapeConfig = null,
    string Execute = null,
    DataflowApplicationExecutorShapeConfig ExecutorShapeConfig = null,
    string FileUri = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    string IdleTimeoutInMinutes = null,
    string LogsBucketUri = null,
    string MaxDurationInMinutes = null,
    string MetastoreId = null,
    object Parameters = null,
    string PoolId = null,
    string PrivateEndpointId = null,
    DataflowApplicationTimeouts Timeouts = null,
    string Type = null,
    string WarehouseBucketUri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#compartment_id DataflowApplication#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#display_name DataflowApplication#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.driverShape">DriverShape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#driver_shape DataflowApplication#driver_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.executorShape">ExecutorShape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#executor_shape DataflowApplication#executor_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.language">Language</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#language DataflowApplication#language}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.numExecutors">NumExecutors</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#num_executors DataflowApplication#num_executors}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.sparkVersion">SparkVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#spark_version DataflowApplication#spark_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.applicationLogConfig">ApplicationLogConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfig">DataflowApplicationApplicationLogConfig</a></code> | application_log_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.archiveUri">ArchiveUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#archive_uri DataflowApplication#archive_uri}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.arguments">Arguments</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#arguments DataflowApplication#arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.className">ClassName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#class_name DataflowApplication#class_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.configuration">Configuration</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#configuration DataflowApplication#configuration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#defined_tags DataflowApplication#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#description DataflowApplication#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.driverShapeConfig">DriverShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfig">DataflowApplicationDriverShapeConfig</a></code> | driver_shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.execute">Execute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#execute DataflowApplication#execute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.executorShapeConfig">ExecutorShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfig">DataflowApplicationExecutorShapeConfig</a></code> | executor_shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.fileUri">FileUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#file_uri DataflowApplication#file_uri}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#freeform_tags DataflowApplication#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#id DataflowApplication#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.idleTimeoutInMinutes">IdleTimeoutInMinutes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#idle_timeout_in_minutes DataflowApplication#idle_timeout_in_minutes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.logsBucketUri">LogsBucketUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#logs_bucket_uri DataflowApplication#logs_bucket_uri}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.maxDurationInMinutes">MaxDurationInMinutes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#max_duration_in_minutes DataflowApplication#max_duration_in_minutes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.metastoreId">MetastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#metastore_id DataflowApplication#metastore_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.parameters">Parameters</a></code> | <code>object</code> | parameters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.poolId">PoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#pool_id DataflowApplication#pool_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.privateEndpointId">PrivateEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#private_endpoint_id DataflowApplication#private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeouts">DataflowApplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#type DataflowApplication#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.warehouseBucketUri">WarehouseBucketUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#warehouse_bucket_uri DataflowApplication#warehouse_bucket_uri}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#compartment_id DataflowApplication#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#display_name DataflowApplication#display_name}.

---

##### `DriverShape`<sup>Required</sup> <a name="DriverShape" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.driverShape"></a>

```csharp
public string DriverShape { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#driver_shape DataflowApplication#driver_shape}.

---

##### `ExecutorShape`<sup>Required</sup> <a name="ExecutorShape" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.executorShape"></a>

```csharp
public string ExecutorShape { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#executor_shape DataflowApplication#executor_shape}.

---

##### `Language`<sup>Required</sup> <a name="Language" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.language"></a>

```csharp
public string Language { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#language DataflowApplication#language}.

---

##### `NumExecutors`<sup>Required</sup> <a name="NumExecutors" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.numExecutors"></a>

```csharp
public double NumExecutors { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#num_executors DataflowApplication#num_executors}.

---

##### `SparkVersion`<sup>Required</sup> <a name="SparkVersion" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.sparkVersion"></a>

```csharp
public string SparkVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#spark_version DataflowApplication#spark_version}.

---

##### `ApplicationLogConfig`<sup>Optional</sup> <a name="ApplicationLogConfig" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.applicationLogConfig"></a>

```csharp
public DataflowApplicationApplicationLogConfig ApplicationLogConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfig">DataflowApplicationApplicationLogConfig</a>

application_log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#application_log_config DataflowApplication#application_log_config}

---

##### `ArchiveUri`<sup>Optional</sup> <a name="ArchiveUri" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.archiveUri"></a>

```csharp
public string ArchiveUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#archive_uri DataflowApplication#archive_uri}.

---

##### `Arguments`<sup>Optional</sup> <a name="Arguments" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.arguments"></a>

```csharp
public string[] Arguments { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#arguments DataflowApplication#arguments}.

---

##### `ClassName`<sup>Optional</sup> <a name="ClassName" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.className"></a>

```csharp
public string ClassName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#class_name DataflowApplication#class_name}.

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.configuration"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Configuration { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#configuration DataflowApplication#configuration}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#defined_tags DataflowApplication#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#description DataflowApplication#description}.

---

##### `DriverShapeConfig`<sup>Optional</sup> <a name="DriverShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.driverShapeConfig"></a>

```csharp
public DataflowApplicationDriverShapeConfig DriverShapeConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfig">DataflowApplicationDriverShapeConfig</a>

driver_shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#driver_shape_config DataflowApplication#driver_shape_config}

---

##### `Execute`<sup>Optional</sup> <a name="Execute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.execute"></a>

```csharp
public string Execute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#execute DataflowApplication#execute}.

---

##### `ExecutorShapeConfig`<sup>Optional</sup> <a name="ExecutorShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.executorShapeConfig"></a>

```csharp
public DataflowApplicationExecutorShapeConfig ExecutorShapeConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfig">DataflowApplicationExecutorShapeConfig</a>

executor_shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#executor_shape_config DataflowApplication#executor_shape_config}

---

##### `FileUri`<sup>Optional</sup> <a name="FileUri" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.fileUri"></a>

```csharp
public string FileUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#file_uri DataflowApplication#file_uri}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#freeform_tags DataflowApplication#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#id DataflowApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdleTimeoutInMinutes`<sup>Optional</sup> <a name="IdleTimeoutInMinutes" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.idleTimeoutInMinutes"></a>

```csharp
public string IdleTimeoutInMinutes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#idle_timeout_in_minutes DataflowApplication#idle_timeout_in_minutes}.

---

##### `LogsBucketUri`<sup>Optional</sup> <a name="LogsBucketUri" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.logsBucketUri"></a>

```csharp
public string LogsBucketUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#logs_bucket_uri DataflowApplication#logs_bucket_uri}.

---

##### `MaxDurationInMinutes`<sup>Optional</sup> <a name="MaxDurationInMinutes" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.maxDurationInMinutes"></a>

```csharp
public string MaxDurationInMinutes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#max_duration_in_minutes DataflowApplication#max_duration_in_minutes}.

---

##### `MetastoreId`<sup>Optional</sup> <a name="MetastoreId" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.metastoreId"></a>

```csharp
public string MetastoreId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#metastore_id DataflowApplication#metastore_id}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.parameters"></a>

```csharp
public object Parameters { get; set; }
```

- *Type:* object

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#parameters DataflowApplication#parameters}

---

##### `PoolId`<sup>Optional</sup> <a name="PoolId" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.poolId"></a>

```csharp
public string PoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#pool_id DataflowApplication#pool_id}.

---

##### `PrivateEndpointId`<sup>Optional</sup> <a name="PrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.privateEndpointId"></a>

```csharp
public string PrivateEndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#private_endpoint_id DataflowApplication#private_endpoint_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.timeouts"></a>

```csharp
public DataflowApplicationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeouts">DataflowApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#timeouts DataflowApplication#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#type DataflowApplication#type}.

---

##### `WarehouseBucketUri`<sup>Optional</sup> <a name="WarehouseBucketUri" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationConfig.property.warehouseBucketUri"></a>

```csharp
public string WarehouseBucketUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#warehouse_bucket_uri DataflowApplication#warehouse_bucket_uri}.

---

### DataflowApplicationDriverShapeConfig <a name="DataflowApplicationDriverShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataflowApplicationDriverShapeConfig {
    double MemoryInGbs = null,
    double Ocpus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfig.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#memory_in_gbs DataflowApplication#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfig.property.ocpus">Ocpus</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#ocpus DataflowApplication#ocpus}. |

---

##### `MemoryInGbs`<sup>Optional</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfig.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#memory_in_gbs DataflowApplication#memory_in_gbs}.

---

##### `Ocpus`<sup>Optional</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfig.property.ocpus"></a>

```csharp
public double Ocpus { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#ocpus DataflowApplication#ocpus}.

---

### DataflowApplicationExecutorShapeConfig <a name="DataflowApplicationExecutorShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataflowApplicationExecutorShapeConfig {
    double MemoryInGbs = null,
    double Ocpus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfig.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#memory_in_gbs DataflowApplication#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfig.property.ocpus">Ocpus</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#ocpus DataflowApplication#ocpus}. |

---

##### `MemoryInGbs`<sup>Optional</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfig.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#memory_in_gbs DataflowApplication#memory_in_gbs}.

---

##### `Ocpus`<sup>Optional</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfig.property.ocpus"></a>

```csharp
public double Ocpus { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#ocpus DataflowApplication#ocpus}.

---

### DataflowApplicationParameters <a name="DataflowApplicationParameters" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataflowApplicationParameters {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParameters.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#name DataflowApplication#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParameters.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#value DataflowApplication#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParameters.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#name DataflowApplication#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParameters.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#value DataflowApplication#value}.

---

### DataflowApplicationTimeouts <a name="DataflowApplicationTimeouts" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataflowApplicationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#create DataflowApplication#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#delete DataflowApplication#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#update DataflowApplication#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#create DataflowApplication#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#delete DataflowApplication#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_application#update DataflowApplication#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataflowApplicationApplicationLogConfigOutputReference <a name="DataflowApplicationApplicationLogConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataflowApplicationApplicationLogConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.property.logGroupIdInput">LogGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.property.logIdInput">LogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.property.logGroupId">LogGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.property.logId">LogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfig">DataflowApplicationApplicationLogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogGroupIdInput`<sup>Optional</sup> <a name="LogGroupIdInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.property.logGroupIdInput"></a>

```csharp
public string LogGroupIdInput { get; }
```

- *Type:* string

---

##### `LogIdInput`<sup>Optional</sup> <a name="LogIdInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.property.logIdInput"></a>

```csharp
public string LogIdInput { get; }
```

- *Type:* string

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.property.logGroupId"></a>

```csharp
public string LogGroupId { get; }
```

- *Type:* string

---

##### `LogId`<sup>Required</sup> <a name="LogId" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.property.logId"></a>

```csharp
public string LogId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfigOutputReference.property.internalValue"></a>

```csharp
public DataflowApplicationApplicationLogConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationApplicationLogConfig">DataflowApplicationApplicationLogConfig</a>

---


### DataflowApplicationDriverShapeConfigOutputReference <a name="DataflowApplicationDriverShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataflowApplicationDriverShapeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.resetMemoryInGbs">ResetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.resetOcpus">ResetOcpus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMemoryInGbs` <a name="ResetMemoryInGbs" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.resetMemoryInGbs"></a>

```csharp
private void ResetMemoryInGbs()
```

##### `ResetOcpus` <a name="ResetOcpus" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.resetOcpus"></a>

```csharp
private void ResetOcpus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.property.memoryInGbsInput">MemoryInGbsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.property.ocpusInput">OcpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfig">DataflowApplicationDriverShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MemoryInGbsInput`<sup>Optional</sup> <a name="MemoryInGbsInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.property.memoryInGbsInput"></a>

```csharp
public double MemoryInGbsInput { get; }
```

- *Type:* double

---

##### `OcpusInput`<sup>Optional</sup> <a name="OcpusInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.property.ocpusInput"></a>

```csharp
public double OcpusInput { get; }
```

- *Type:* double

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; }
```

- *Type:* double

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.property.ocpus"></a>

```csharp
public double Ocpus { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfigOutputReference.property.internalValue"></a>

```csharp
public DataflowApplicationDriverShapeConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationDriverShapeConfig">DataflowApplicationDriverShapeConfig</a>

---


### DataflowApplicationExecutorShapeConfigOutputReference <a name="DataflowApplicationExecutorShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataflowApplicationExecutorShapeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.resetMemoryInGbs">ResetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.resetOcpus">ResetOcpus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMemoryInGbs` <a name="ResetMemoryInGbs" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.resetMemoryInGbs"></a>

```csharp
private void ResetMemoryInGbs()
```

##### `ResetOcpus` <a name="ResetOcpus" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.resetOcpus"></a>

```csharp
private void ResetOcpus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.property.memoryInGbsInput">MemoryInGbsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.property.ocpusInput">OcpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfig">DataflowApplicationExecutorShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MemoryInGbsInput`<sup>Optional</sup> <a name="MemoryInGbsInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.property.memoryInGbsInput"></a>

```csharp
public double MemoryInGbsInput { get; }
```

- *Type:* double

---

##### `OcpusInput`<sup>Optional</sup> <a name="OcpusInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.property.ocpusInput"></a>

```csharp
public double OcpusInput { get; }
```

- *Type:* double

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; }
```

- *Type:* double

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.property.ocpus"></a>

```csharp
public double Ocpus { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfigOutputReference.property.internalValue"></a>

```csharp
public DataflowApplicationExecutorShapeConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationExecutorShapeConfig">DataflowApplicationExecutorShapeConfig</a>

---


### DataflowApplicationParametersList <a name="DataflowApplicationParametersList" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataflowApplicationParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.get"></a>

```csharp
private DataflowApplicationParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataflowApplicationParametersOutputReference <a name="DataflowApplicationParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataflowApplicationParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationParametersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataflowApplicationTimeoutsOutputReference <a name="DataflowApplicationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataflowApplicationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataflowApplication.DataflowApplicationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



