# `logAnalyticsLogAnalyticsUnprocessedDataBucketManagement` Submodule <a name="`logAnalyticsLogAnalyticsUnprocessedDataBucketManagement` Submodule" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement <a name="LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_unprocessed_data_bucket_management oci_log_analytics_log_analytics_unprocessed_data_bucket_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement(Construct Scope, string Id, LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementConfig">LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementConfig">LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.putTimeouts"></a>

```csharp
private void PutTimeouts(LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeouts">LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_unprocessed_data_bucket_management#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference">LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.timeouts"></a>

```csharp
public LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference">LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementConfig <a name="LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementConfig" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Bucket,
    string Namespace,
    string Id = null,
    object IsEnabled = null,
    LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_unprocessed_data_bucket_management#bucket LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementConfig.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_unprocessed_data_bucket_management#namespace LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_unprocessed_data_bucket_management#id LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementConfig.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_unprocessed_data_bucket_management#is_enabled LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeouts">LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_unprocessed_data_bucket_management#bucket LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement#bucket}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_unprocessed_data_bucket_management#namespace LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement#namespace}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_unprocessed_data_bucket_management#id LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementConfig.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_unprocessed_data_bucket_management#is_enabled LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement#is_enabled}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementConfig.property.timeouts"></a>

```csharp
public LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeouts">LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_unprocessed_data_bucket_management#timeouts LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement#timeouts}

---

### LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeouts <a name="LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_unprocessed_data_bucket_management#create LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_unprocessed_data_bucket_management#delete LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_unprocessed_data_bucket_management#update LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_unprocessed_data_bucket_management#create LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_unprocessed_data_bucket_management#delete LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_unprocessed_data_bucket_management#update LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference <a name="LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsUnprocessedDataBucketManagement.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



