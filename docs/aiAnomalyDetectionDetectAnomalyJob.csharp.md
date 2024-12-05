# `aiAnomalyDetectionDetectAnomalyJob` Submodule <a name="`aiAnomalyDetectionDetectAnomalyJob` Submodule" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiAnomalyDetectionDetectAnomalyJob <a name="AiAnomalyDetectionDetectAnomalyJob" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job oci_ai_anomaly_detection_detect_anomaly_job}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiAnomalyDetectionDetectAnomalyJob(Construct Scope, string Id, AiAnomalyDetectionDetectAnomalyJobConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig">AiAnomalyDetectionDetectAnomalyJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig">AiAnomalyDetectionDetectAnomalyJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putInputDetails">PutInputDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putOutputDetails">PutOutputDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetSensitivity">ResetSensitivity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInputDetails` <a name="PutInputDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putInputDetails"></a>

```csharp
private void PutInputDetails(AiAnomalyDetectionDetectAnomalyJobInputDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putInputDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails">AiAnomalyDetectionDetectAnomalyJobInputDetails</a>

---

##### `PutOutputDetails` <a name="PutOutputDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putOutputDetails"></a>

```csharp
private void PutOutputDetails(AiAnomalyDetectionDetectAnomalyJobOutputDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putOutputDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails">AiAnomalyDetectionDetectAnomalyJobOutputDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putTimeouts"></a>

```csharp
private void PutTimeouts(AiAnomalyDetectionDetectAnomalyJobTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts">AiAnomalyDetectionDetectAnomalyJobTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSensitivity` <a name="ResetSensitivity" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetSensitivity"></a>

```csharp
private void ResetSensitivity()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AiAnomalyDetectionDetectAnomalyJob resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

AiAnomalyDetectionDetectAnomalyJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

AiAnomalyDetectionDetectAnomalyJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

AiAnomalyDetectionDetectAnomalyJob.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

AiAnomalyDetectionDetectAnomalyJob.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AiAnomalyDetectionDetectAnomalyJob resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AiAnomalyDetectionDetectAnomalyJob to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AiAnomalyDetectionDetectAnomalyJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AiAnomalyDetectionDetectAnomalyJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.inputDetails">InputDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference">AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.lifecycleStateDetails">LifecycleStateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.outputDetails">OutputDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference">AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeAccepted">TimeAccepted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeFinished">TimeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference">AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeStarted">TimeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.inputDetailsInput">InputDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails">AiAnomalyDetectionDetectAnomalyJobInputDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.modelIdInput">ModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.outputDetailsInput">OutputDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails">AiAnomalyDetectionDetectAnomalyJobOutputDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.sensitivityInput">SensitivityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.modelId">ModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.sensitivity">Sensitivity</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `InputDetails`<sup>Required</sup> <a name="InputDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.inputDetails"></a>

```csharp
public AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference InputDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference">AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference</a>

---

##### `LifecycleStateDetails`<sup>Required</sup> <a name="LifecycleStateDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.lifecycleStateDetails"></a>

```csharp
public string LifecycleStateDetails { get; }
```

- *Type:* string

---

##### `OutputDetails`<sup>Required</sup> <a name="OutputDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.outputDetails"></a>

```csharp
public AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference OutputDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference">AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference</a>

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeAccepted`<sup>Required</sup> <a name="TimeAccepted" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeAccepted"></a>

```csharp
public string TimeAccepted { get; }
```

- *Type:* string

---

##### `TimeFinished`<sup>Required</sup> <a name="TimeFinished" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeFinished"></a>

```csharp
public string TimeFinished { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeouts"></a>

```csharp
public AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference">AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference</a>

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeStarted"></a>

```csharp
public string TimeStarted { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InputDetailsInput`<sup>Optional</sup> <a name="InputDetailsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.inputDetailsInput"></a>

```csharp
public AiAnomalyDetectionDetectAnomalyJobInputDetails InputDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails">AiAnomalyDetectionDetectAnomalyJobInputDetails</a>

---

##### `ModelIdInput`<sup>Optional</sup> <a name="ModelIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.modelIdInput"></a>

```csharp
public string ModelIdInput { get; }
```

- *Type:* string

---

##### `OutputDetailsInput`<sup>Optional</sup> <a name="OutputDetailsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.outputDetailsInput"></a>

```csharp
public AiAnomalyDetectionDetectAnomalyJobOutputDetails OutputDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails">AiAnomalyDetectionDetectAnomalyJobOutputDetails</a>

---

##### `SensitivityInput`<sup>Optional</sup> <a name="SensitivityInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.sensitivityInput"></a>

```csharp
public double SensitivityInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.modelId"></a>

```csharp
public string ModelId { get; }
```

- *Type:* string

---

##### `Sensitivity`<sup>Required</sup> <a name="Sensitivity" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.sensitivity"></a>

```csharp
public double Sensitivity { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AiAnomalyDetectionDetectAnomalyJobConfig <a name="AiAnomalyDetectionDetectAnomalyJobConfig" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiAnomalyDetectionDetectAnomalyJobConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    AiAnomalyDetectionDetectAnomalyJobInputDetails InputDetails,
    string ModelId,
    AiAnomalyDetectionDetectAnomalyJobOutputDetails OutputDetails,
    string Description = null,
    string DisplayName = null,
    string Id = null,
    double Sensitivity = null,
    AiAnomalyDetectionDetectAnomalyJobTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#compartment_id AiAnomalyDetectionDetectAnomalyJob#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.inputDetails">InputDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails">AiAnomalyDetectionDetectAnomalyJobInputDetails</a></code> | input_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.modelId">ModelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#model_id AiAnomalyDetectionDetectAnomalyJob#model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.outputDetails">OutputDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails">AiAnomalyDetectionDetectAnomalyJobOutputDetails</a></code> | output_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#description AiAnomalyDetectionDetectAnomalyJob#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#display_name AiAnomalyDetectionDetectAnomalyJob#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#id AiAnomalyDetectionDetectAnomalyJob#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.sensitivity">Sensitivity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#sensitivity AiAnomalyDetectionDetectAnomalyJob#sensitivity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts">AiAnomalyDetectionDetectAnomalyJobTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#compartment_id AiAnomalyDetectionDetectAnomalyJob#compartment_id}.

---

##### `InputDetails`<sup>Required</sup> <a name="InputDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.inputDetails"></a>

```csharp
public AiAnomalyDetectionDetectAnomalyJobInputDetails InputDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails">AiAnomalyDetectionDetectAnomalyJobInputDetails</a>

input_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#input_details AiAnomalyDetectionDetectAnomalyJob#input_details}

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.modelId"></a>

```csharp
public string ModelId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#model_id AiAnomalyDetectionDetectAnomalyJob#model_id}.

---

##### `OutputDetails`<sup>Required</sup> <a name="OutputDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.outputDetails"></a>

```csharp
public AiAnomalyDetectionDetectAnomalyJobOutputDetails OutputDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails">AiAnomalyDetectionDetectAnomalyJobOutputDetails</a>

output_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#output_details AiAnomalyDetectionDetectAnomalyJob#output_details}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#description AiAnomalyDetectionDetectAnomalyJob#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#display_name AiAnomalyDetectionDetectAnomalyJob#display_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#id AiAnomalyDetectionDetectAnomalyJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Sensitivity`<sup>Optional</sup> <a name="Sensitivity" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.sensitivity"></a>

```csharp
public double Sensitivity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#sensitivity AiAnomalyDetectionDetectAnomalyJob#sensitivity}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.timeouts"></a>

```csharp
public AiAnomalyDetectionDetectAnomalyJobTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts">AiAnomalyDetectionDetectAnomalyJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#timeouts AiAnomalyDetectionDetectAnomalyJob#timeouts}

---

### AiAnomalyDetectionDetectAnomalyJobInputDetails <a name="AiAnomalyDetectionDetectAnomalyJobInputDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiAnomalyDetectionDetectAnomalyJobInputDetails {
    string InputType,
    string Content = null,
    string ContentType = null,
    object Data = null,
    object ObjectLocations = null,
    string[] SignalNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.inputType">InputType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#input_type AiAnomalyDetectionDetectAnomalyJob#input_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#content AiAnomalyDetectionDetectAnomalyJob#content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.contentType">ContentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#content_type AiAnomalyDetectionDetectAnomalyJob#content_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.data">Data</a></code> | <code>object</code> | data block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.objectLocations">ObjectLocations</a></code> | <code>object</code> | object_locations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.signalNames">SignalNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#signal_names AiAnomalyDetectionDetectAnomalyJob#signal_names}. |

---

##### `InputType`<sup>Required</sup> <a name="InputType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.inputType"></a>

```csharp
public string InputType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#input_type AiAnomalyDetectionDetectAnomalyJob#input_type}.

---

##### `Content`<sup>Optional</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#content AiAnomalyDetectionDetectAnomalyJob#content}.

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#content_type AiAnomalyDetectionDetectAnomalyJob#content_type}.

---

##### `Data`<sup>Optional</sup> <a name="Data" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.data"></a>

```csharp
public object Data { get; set; }
```

- *Type:* object

data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#data AiAnomalyDetectionDetectAnomalyJob#data}

---

##### `ObjectLocations`<sup>Optional</sup> <a name="ObjectLocations" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.objectLocations"></a>

```csharp
public object ObjectLocations { get; set; }
```

- *Type:* object

object_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#object_locations AiAnomalyDetectionDetectAnomalyJob#object_locations}

---

##### `SignalNames`<sup>Optional</sup> <a name="SignalNames" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.signalNames"></a>

```csharp
public string[] SignalNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#signal_names AiAnomalyDetectionDetectAnomalyJob#signal_names}.

---

### AiAnomalyDetectionDetectAnomalyJobInputDetailsData <a name="AiAnomalyDetectionDetectAnomalyJobInputDetailsData" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiAnomalyDetectionDetectAnomalyJobInputDetailsData {
    string Timestamp = null,
    double[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData.property.timestamp">Timestamp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#timestamp AiAnomalyDetectionDetectAnomalyJob#timestamp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData.property.values">Values</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#values AiAnomalyDetectionDetectAnomalyJob#values}. |

---

##### `Timestamp`<sup>Optional</sup> <a name="Timestamp" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData.property.timestamp"></a>

```csharp
public string Timestamp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#timestamp AiAnomalyDetectionDetectAnomalyJob#timestamp}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData.property.values"></a>

```csharp
public double[] Values { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#values AiAnomalyDetectionDetectAnomalyJob#values}.

---

### AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations <a name="AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations {
    string Bucket = null,
    string Namespace = null,
    string Object = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#bucket AiAnomalyDetectionDetectAnomalyJob#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#namespace AiAnomalyDetectionDetectAnomalyJob#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations.property.object">Object</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#object AiAnomalyDetectionDetectAnomalyJob#object}. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#bucket AiAnomalyDetectionDetectAnomalyJob#bucket}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#namespace AiAnomalyDetectionDetectAnomalyJob#namespace}.

---

##### `Object`<sup>Optional</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations.property.object"></a>

```csharp
public string Object { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#object AiAnomalyDetectionDetectAnomalyJob#object}.

---

### AiAnomalyDetectionDetectAnomalyJobOutputDetails <a name="AiAnomalyDetectionDetectAnomalyJobOutputDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiAnomalyDetectionDetectAnomalyJobOutputDetails {
    string Bucket,
    string Namespace,
    string OutputType,
    string Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#bucket AiAnomalyDetectionDetectAnomalyJob#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#namespace AiAnomalyDetectionDetectAnomalyJob#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails.property.outputType">OutputType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#output_type AiAnomalyDetectionDetectAnomalyJob#output_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#prefix AiAnomalyDetectionDetectAnomalyJob#prefix}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#bucket AiAnomalyDetectionDetectAnomalyJob#bucket}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#namespace AiAnomalyDetectionDetectAnomalyJob#namespace}.

---

##### `OutputType`<sup>Required</sup> <a name="OutputType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails.property.outputType"></a>

```csharp
public string OutputType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#output_type AiAnomalyDetectionDetectAnomalyJob#output_type}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#prefix AiAnomalyDetectionDetectAnomalyJob#prefix}.

---

### AiAnomalyDetectionDetectAnomalyJobTimeouts <a name="AiAnomalyDetectionDetectAnomalyJobTimeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiAnomalyDetectionDetectAnomalyJobTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#create AiAnomalyDetectionDetectAnomalyJob#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#delete AiAnomalyDetectionDetectAnomalyJob#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#update AiAnomalyDetectionDetectAnomalyJob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#create AiAnomalyDetectionDetectAnomalyJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#delete AiAnomalyDetectionDetectAnomalyJob#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#update AiAnomalyDetectionDetectAnomalyJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList <a name="AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.get"></a>

```csharp
private AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference <a name="AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.resetTimestamp">ResetTimestamp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimestamp` <a name="ResetTimestamp" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.resetTimestamp"></a>

```csharp
private void ResetTimestamp()
```

##### `ResetValues` <a name="ResetValues" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.timestampInput">TimestampInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.valuesInput">ValuesInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.timestamp">Timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.values">Values</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimestampInput`<sup>Optional</sup> <a name="TimestampInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.timestampInput"></a>

```csharp
public string TimestampInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.valuesInput"></a>

```csharp
public double[] ValuesInput { get; }
```

- *Type:* double[]

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.timestamp"></a>

```csharp
public string Timestamp { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.values"></a>

```csharp
public double[] Values { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList <a name="AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.get"></a>

```csharp
private AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference <a name="AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resetObject">ResetObject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetNamespace` <a name="ResetNamespace" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetObject` <a name="ResetObject" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resetObject"></a>

```csharp
private void ResetObject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.objectInput">ObjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.objectInput"></a>

```csharp
public string ObjectInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference <a name="AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.putData">PutData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.putObjectLocations">PutObjectLocations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetObjectLocations">ResetObjectLocations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetSignalNames">ResetSignalNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutData` <a name="PutData" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.putData"></a>

```csharp
private void PutData(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.putData.parameter.value"></a>

- *Type:* object

---

##### `PutObjectLocations` <a name="PutObjectLocations" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.putObjectLocations"></a>

```csharp
private void PutObjectLocations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.putObjectLocations.parameter.value"></a>

- *Type:* object

---

##### `ResetContent` <a name="ResetContent" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetContent"></a>

```csharp
private void ResetContent()
```

##### `ResetContentType` <a name="ResetContentType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetContentType"></a>

```csharp
private void ResetContentType()
```

##### `ResetData` <a name="ResetData" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetData"></a>

```csharp
private void ResetData()
```

##### `ResetObjectLocations` <a name="ResetObjectLocations" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetObjectLocations"></a>

```csharp
private void ResetObjectLocations()
```

##### `ResetSignalNames` <a name="ResetSignalNames" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetSignalNames"></a>

```csharp
private void ResetSignalNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.data">Data</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList">AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.objectLocations">ObjectLocations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList">AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.dataInput">DataInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.inputTypeInput">InputTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.objectLocationsInput">ObjectLocationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.signalNamesInput">SignalNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.inputType">InputType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.signalNames">SignalNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails">AiAnomalyDetectionDetectAnomalyJobInputDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.data"></a>

```csharp
public AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList Data { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList">AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList</a>

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `ObjectLocations`<sup>Required</sup> <a name="ObjectLocations" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.objectLocations"></a>

```csharp
public AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList ObjectLocations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList">AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList</a>

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.dataInput"></a>

```csharp
public object DataInput { get; }
```

- *Type:* object

---

##### `InputTypeInput`<sup>Optional</sup> <a name="InputTypeInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.inputTypeInput"></a>

```csharp
public string InputTypeInput { get; }
```

- *Type:* string

---

##### `ObjectLocationsInput`<sup>Optional</sup> <a name="ObjectLocationsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.objectLocationsInput"></a>

```csharp
public object ObjectLocationsInput { get; }
```

- *Type:* object

---

##### `SignalNamesInput`<sup>Optional</sup> <a name="SignalNamesInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.signalNamesInput"></a>

```csharp
public string[] SignalNamesInput { get; }
```

- *Type:* string[]

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `InputType`<sup>Required</sup> <a name="InputType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.inputType"></a>

```csharp
public string InputType { get; }
```

- *Type:* string

---

##### `SignalNames`<sup>Required</sup> <a name="SignalNames" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.signalNames"></a>

```csharp
public string[] SignalNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.internalValue"></a>

```csharp
public AiAnomalyDetectionDetectAnomalyJobInputDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails">AiAnomalyDetectionDetectAnomalyJobInputDetails</a>

---


### AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference <a name="AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrefix` <a name="ResetPrefix" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.outputTypeInput">OutputTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.outputType">OutputType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails">AiAnomalyDetectionDetectAnomalyJobOutputDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OutputTypeInput`<sup>Optional</sup> <a name="OutputTypeInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.outputTypeInput"></a>

```csharp
public string OutputTypeInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `OutputType`<sup>Required</sup> <a name="OutputType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.outputType"></a>

```csharp
public string OutputType { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.internalValue"></a>

```csharp
public AiAnomalyDetectionDetectAnomalyJobOutputDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails">AiAnomalyDetectionDetectAnomalyJobOutputDetails</a>

---


### AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference <a name="AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



